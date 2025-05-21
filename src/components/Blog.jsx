import React from 'react';

const Blog = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>Recent Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[80vh] overflow-y-auto px-4">
        {/* Blog Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
          <img
            src="../assets/coffee_cup.jpg"
            alt="Coffee Blog"
            className="w-full h-48 object-cover hover:object-scale-down rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Morning Brews & Ideas</h2>
          <p className="text-gray-600 text-sm">
            Exploring how a warm cup of coffee fuels creativity and morning reflections.
          </p>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
          <img
            src="../assets/girl.jpg"
            alt="Girl Writing"
            className="w-full h-48 object-cover hover:object-scale-down rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Writing in Solitude</h2>
          <p className="text-gray-600 text-sm">
            A journey into how moments of silence shape the most profound thoughts.
          </p>
        </div>

        {/* Blog Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
          <img
            src="../assets/flower.jpg"
            alt="Flower"
            className="w-full h-48 object-cover hover:object-scale-down rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Beauty in Small Things</h2>
          <p className="text-gray-600 text-sm">
            Noticing life’s quiet moments – like a flower blooming in an empty vase.
          </p>
        </div>

        {/* Blog Card 4 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
          <img
            src="../assets/love_you.jpg"
            alt="Love You"
            className="w-full h-48 object-cover hover:object-scale-down rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Notes to Self</h2>
          <p className="text-gray-600 text-sm">
            Loving yourself is the first step to writing something worth reading.
          </p>
        </div>

        {/* Blog Card 5 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
          <img
            src="../assets/strong.jpg"
            alt="Strong"
            className="w-full h-48 object-cover hover:object-scale-down rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Strength in Vulnerability</h2>
          <p className="text-gray-600 text-sm">
            Embracing our weaknesses can lead to the most profound strengths.
          </p>
        </div>

        {/* Blog Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
          <img
            src="../assets/skin_care.jpg"
            alt="Flower"
            className="w-full h-48 object-cover hover:object-scale-down rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Your Skin Deserves the Best</h2>
          <p className="text-gray-600 text-sm">
            Discover skincare tips, product reviews, and DIY routines that bring out your natural beauty. Healthy skin starts with the right care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
