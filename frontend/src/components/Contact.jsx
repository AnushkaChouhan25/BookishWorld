import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 dark:bg-slate-900 dark:text-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:bg-slate-900 dark:text-white">Contact Us</h2>
      <p className="text-gray-600 mb-6 dark:bg-slate-900 dark:text-white">We'd love to hear from you!</p>

      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 ">Name</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input 
            type="email" 
            className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea 
            className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
            rows="4"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
    </>
  );
};

export default Contact;
