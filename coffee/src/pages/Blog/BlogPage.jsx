import React from 'react';
import './BlogPage.css';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Brewing the Perfect Cup',
      image: 'https://via.placeholder.com/600x400', // Replace with your image URL
      date: 'October 8, 2024',
      excerpt: 'Discover the secrets behind brewing the perfect cup of coffee at home. From beans to brew methods, learn it all...',
    },
    {
      id: 2,
      title: 'Sustainable Coffee Farming',
      image: 'https://via.placeholder.com/600x400',
      date: 'September 20, 2024',
      excerpt: 'Learn about how sustainable farming practices are changing the coffee industry for the better...',
    },
    {
      id: 3,
      title: 'Exploring Exotic Coffee Blends',
      image: 'https://via.placeholder.com/600x400',
      date: 'August 15, 2024',
      excerpt: 'Take a journey with us as we explore unique coffee blends from around the world...',
    },
  ];

  return (
    <div className="blog-page">
      <h1 className="blog-title">Our Blog</h1>
      <div className="blog-list">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-date">{post.date}</p>
              <p className="blog-excerpt">{post.excerpt}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
