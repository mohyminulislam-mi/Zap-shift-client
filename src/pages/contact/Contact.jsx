import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaPhoneSquare,
  FaTwitter,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="min-h-[70vh]  py-16 px-4">
      <h2 className="text-4xl font-extrabold text-center mb-10">Contact Us</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left: Contact Info + Social */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <h3 className="text-2xl font-semibold">Get in Touch</h3>

          <p className="text-gray-600">
            Have questions about something or services? Feel free to reach out
            anytime.
          </p>

          {/* Contact Info */}
          <div className="space-y-3 text-gray-700">
            <p className="flex items-center gap-3">
              <IoMail className="text-secondary" />
              contact@dhiftfy.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneSquare className="text-secondary" />
              +880 1234-567890
            </p>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-primary rounded-full hover:bg-secondary hover:text-white transition"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="p-3 bg-primary rounded-full hover:bg-secondary hover:text-white transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="p-3 bg-primary rounded-full hover:bg-secondary hover:text-white transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form className="space-y-5">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none  border-gray-300"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none  border-gray-300"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none resize-none border-gray-300"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-black hover:bg-secondary hover:text-white py-3 rounded-lg font-semibold transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
