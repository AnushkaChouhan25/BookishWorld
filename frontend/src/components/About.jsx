import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <> 
    <Navbar/>
    <div className="min-h-screen bg-white dark:bg-slate-900 dark:text-white flex flex-col items-center py-16 px-6 md:px-16 lg:px-32 mt-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold text-blue-500">BookishWorld</span>, your ultimate destination for books 
          from every genre. We believe in the power of reading to educate, inspire, and transform lives.
        </p>
      </div>

      {/* Who We Are */}
      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white border-b-2 pb-2 mb-4">
          Who We Are
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Founded in 2024, BookishWorld started as a small online bookstore with a vision to bring 
          books closer to readers. Over time, we have built a vast community of book lovers who trust 
          us for quality books, excellent service, and a passion for literature.  
        </p>
      </div>

      {/* What We Offer */}
      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white border-b-2 pb-2 mb-4">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-600">Vast Book Collection</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              We have a diverse range of books, including fiction, non-fiction, educational, and self-help categories.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-600">Exclusive Discounts</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Enjoy great discounts and offers throughout the year, making reading affordable for everyone.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-600">Fast Shipping</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              We provide quick and reliable delivery services to ensure you get your favorite books on time.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-600">Community Events</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Join our book clubs, author meetups, and online discussions to connect with fellow readers.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white border-b-2 pb-2 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          We are passionate about books and dedicated to delivering the best reading experience.
          Our commitment to quality, customer satisfaction, and an ever-expanding collection make us the perfect choice for book lovers.
        </p>
      </div>

      {/* Our Mission & Vision */}
      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white border-b-2 pb-2 mb-4">
          Our Mission & Vision
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our mission is to promote reading culture by making books accessible to everyone, regardless of age or background. 
          We envision a future where knowledge and stories connect people across the world.
        </p>
      </div>

      {/* Contact Us */}
      <div className="w-full max-w-4xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white border-b-2 pb-2 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Have questions or looking for a specific book? <br />
          <a href="/contact" className="text-blue-500 font-semibold hover:underline">
            Contact us
          </a> and we'll be happy to assist you!
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
