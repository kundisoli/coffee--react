// BlogPost.jsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import './BlogPost.css';

const BlogPost = ({ title, image, content, author }) => {
  return (
    <Card className="blog-post">
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Written by: {author}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
