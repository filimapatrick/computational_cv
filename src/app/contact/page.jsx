'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

// Initialize EmailJS
emailjs.init("YJYpPXcCBll2FaIBW");

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const result = await emailjs.sendForm(
        'service_t2mukln',
        'template_a4sxp4o',
        formRef.current,
        'YJYpPXcCBll2FaIBW'
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        formRef.current.reset();
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="mx-auto space-y-12"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <FaEnvelope className="text-3xl text-gray-700" />
        <h1 className="text-3xl font-bold text-gray-800">Contact Me</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div 
          variants={fadeInUp}
          className="space-y-8"
        >
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <FaEnvelope className="text-2xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <a href="mailto:filimapatrick@gmail.com" className="text-blue-600 hover:text-blue-700">
                    filimapatrick@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <FaPhone className="text-2xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                  <a href="tel:+2348104125890" className="text-blue-600 hover:text-blue-700">
                    +234 810 412 5890
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <FaMapMarkerAlt className="text-2xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Location</h3>
                  <p className="text-gray-600">Port Harcourt, Nigeria</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <FaLinkedin className="text-2xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">LinkedIn</h3>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={fadeInUp}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-sm p-8 space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
            
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                placeholder="Message subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors resize-none"
                placeholder="Your message"
              ></textarea>
            </div>

            {submitStatus.message && (
              <div className={`p-4 rounded-xl ${
                submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 
                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'} transition-colors`}
            >
              <FaPaperPlane className={`${isSubmitting ? 'animate-ping' : ''}`} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
} 