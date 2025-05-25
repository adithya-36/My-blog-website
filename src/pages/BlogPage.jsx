import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "Morning Brews & Ideas",
    content: "Exploring how a warm cup of coffee fuels creativity and morning reflections.",
    img: "/assets/coffee_cup.jpg"
  },
  {
    id: 2,
    title: "Writing in Solitude",
    content: "A journey into how moments of silence shape the most profound thoughts.",
    img: "/assets/girl.jpg"
  },
  {
    id: 3,
    title: "Beauty in Small Things",
    content: "Noticing life’s quiet moments – like a flower blooming in an empty vase.",
    img: "/assets/flower.jpg"
  },
  {
    id: 4,
    title: "Notes to Self",
    content: "Loving yourself is the first step to writing something worth reading.",
    img: "/assets/love_you.jpg"
  },
  {
    id: 5,
    title: "Strength in Vulnerability",
    content: "Embracing our weaknesses can lead to the most profound strengths.",
    img: "/assets/strong.jpg"
  },
  {
    id: 6,
    title: "Your Skin Deserves the Best",
    content: "Discover skincare tips, product reviews, and DIY routines that bring out your natural beauty.",
    img: "/assets/skin_care.jpg"
  }
];

const BlogPage = () => {
  return (
    <div className='bg-gray-100 p-8'>
      <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>Recent Posts</h1>

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {blogPosts.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`}>
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all flex flex-col items-center">
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm">{post.content.slice(0, 80)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
