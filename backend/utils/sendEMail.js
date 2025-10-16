import nodemailer from "nodemailer";


export const sendEmail = async ({ to, subject, text, html }) => {
  try {
    // Create transporter (using Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail email
        pass: process.env.EMAIL_PASS, // Gmail App Password (not normal password)
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      html,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (err) {
    console.error("Error sending email:", err);
    throw err;
  }
};


// import sgMail from "@sendgrid/mail";

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// export const sendEmail = async ({ to, subject, html }) => {
//   try {
//     const msg = {
//       to,
//       from: process.env.FROM_EMAIL, // Verified sender email
//       subject,
//       html,
//     };
//     await sgMail.send(msg);
//     console.log(`Email sent to ${to}`);
//   } catch (error) {
//     console.error("Email sending error:", error);
//     throw new Error("Email could not be sent");
//   }
// };
