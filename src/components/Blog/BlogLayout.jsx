import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { blogPosts } from './BlogData'; // Import your blog data
import "./Blog.css"
// Get unique categories for the sidebar
const categories = [...new Set(blogPosts.map(post => post.category))];

const BlogLayout = () => {
  return (
    <div className="container mb-5" style={{marginTop: '40px'}}>
      <div className="row">
        {/* Sidebar */}
        <aside className="col-md-3 sidebar mt-3">
          <h5>Categories</h5>
          <ul className="list-group">
            {categories.map(category => {
              // Create a slug from the category name
              const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
              return (
                <li className="list-group-item" key={categorySlug}>
                  <NavLink to={`/blog/${categorySlug}`}>{category}</NavLink>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Content Area - This is where the magic happens! */}
        <div className="col-md-9 mt-3">
          {/* The Outlet is a placeholder that renders the correct component based on the URL */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;