import React from 'react';
import Navbar from './Navbar';
const About = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto px-6 py-16 my-20">
      <p className="text-lg leading-7 mb-4">
        Welcome to <span className="font-semibold">Book Store</span> — your one-stop destination for discovering, reading, and collecting your favorite books! Founded in 2025, our mission has been simple: to connect readers with stories that inspire, entertain, and enlighten.
      </p>
      <p className="text-lg leading-7 mb-4">
        Whether you're into bestselling thrillers, timeless classics, or niche non-fiction, we have something for every kind of reader. We work closely with publishers, independent authors, and distributors to ensure a diverse and regularly updated collection.
      </p>
      <p className="text-lg leading-7 mb-4">
        Beyond selling books, we’re building a community of passionate readers. Our curated recommendations, author spotlights, and seasonal reading lists help you explore new genres and find your next great read.
      </p>
      <p className="text-lg leading-7 mb-8">
        Thank you for choosing Book Store. We're proud to be part of your reading journey!
      </p>
      <div className="text-center">
        <p className="text-sm text-gray-500">📍 Based in India | 📚 Powered by passion for books</p>
      </div>
    </div>
    </>
  );
};

export default About;
