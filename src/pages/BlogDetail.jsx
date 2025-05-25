import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import blogPosts from '../pages/blogData'; // Adjust the import path as necessary

const blogPostsMap = blogPosts.reduce((acc, post) => {
  acc[post.id] = post;
  return acc;
}, {});

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPostsMap[id];

  useEffect(() => {
    if (!post) {
      const timer = setTimeout(() => {
        navigate('/blog');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [post, navigate]);

  // Function to handle sharing the post
  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/blog/${id}`;
    const shareData = {
      title: post.title,
      text: post.content,
      url: shareUrl,
    };

    try {
      // Check if Web Share API is supported
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy the URL to clipboard
        await navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard! You can now share it manually.');
      }
    } catch (error) {
      console.error('Error sharing the post:', error);
      // Fallback in case of error
      await navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard! You can now share it manually.');
    }
  };

  if (!post) return <div className="p-10 text-center text-2xl">Post not found. Redirecting to blog page...</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <img src={post.img} alt={post.title} className="w-full h-64 object-cover rounded-md mb-6" />
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 text-lg mb-4">{post.content}</p>
      <h2 className="text-2xl font-semibold mb-4">{post.detailedExplanation.heading}</h2>
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-md mb-6">
        {post.detailedExplanation.sections.map((section, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-medium text-gray-800 mb-2">{section.subheading}</h3>
            <p className="text-gray-600 text-base">{section.content}</p>
          </div>
        ))}
      </div>
      <div className="flex space-x-4">
        <Link to="/blog" className="text-blue-500 hover:underline block mt-4">
          ← Back to Blog
        </Link>
        <button
          onClick={handleShare}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Share This Post
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;