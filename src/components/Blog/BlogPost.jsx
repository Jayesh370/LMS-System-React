import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './BlogData'; // Import your blog data

const BlogPost = () => {
  // Get the 'postSlug' from the URL, e.g., "career-tips"
  const { postSlug } = useParams();

  // Find the correct blog post from our data array
  const post = blogPosts.find(p => p.slug === postSlug);

  // If the post isn't found, show a message
  if (!post) {
    return (
      <div className="content p-4 bg-light rounded shadow-sm">
        <h3>Post Not Found</h3>
        <p>Sorry, we couldn't find that blog post. Please select one from the sidebar.</p>
      </div>
    );
  }

  // If the post is found, display its content
  return (
    <div>
      <nav className="breadcrumb">
        <Link className="breadcrumb-item" to="/">Home</Link>
        <Link className="breadcrumb-item" to="/blog">Blog</Link>
        <span className="breadcrumb-item active">{post.title}</span>
      </nav>
      <div className="content p-4 bg-light rounded shadow-sm">
        {post.content}
      </div>
    </div>
  );
};

export default BlogPost;