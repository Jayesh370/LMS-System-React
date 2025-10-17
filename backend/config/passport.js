import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import bcrypt from "bcrypt";
import { db } from "../config/db.js";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const [rows] = await db.query("SELECT id, name, email, is_verified FROM users WHERE id = ?", [id]);
    if (rows.length === 0) return done(null, false);
    return done(null, rows[0]);
  } catch (err) {
    return done(err);
  }
});

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
      scope: ["user:email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const primaryEmail = Array.isArray(profile.emails) && profile.emails.length > 0
          ? profile.emails.find(e => e.primary)?.value || profile.emails[0].value
          : null;

        if (!primaryEmail) {
          return done(null, false, { message: "GitHub account has no accessible email" });
        }

        const name = profile.displayName || profile.username || "GitHub User";

        // See if user exists
        const [existing] = await db.query("SELECT * FROM users WHERE email = ?", [primaryEmail]);
        let user;
        if (existing.length > 0) {
          user = existing[0];
          if (user.is_verified === 0) {
            await db.query("UPDATE users SET is_verified = 1 WHERE id = ?", [user.id]);
            user.is_verified = 1;
          }
        } else {
          // Create user with random password
          const randomPass = (Math.random() + 1).toString(36).slice(-10);
          const hashed = await bcrypt.hash(randomPass, 10);
          const [result] = await db.query(
            "INSERT INTO users (name, email, password, is_verified) VALUES (?, ?, ?, 1)",
            [name, primaryEmail, hashed]
          );
          const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [result.insertId]);
          user = rows[0];
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

export default passport;
