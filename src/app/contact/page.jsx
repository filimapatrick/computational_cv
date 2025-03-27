'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'filimapatrick@gmail.com',
      link: 'mailto:filimapatrick@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+234 810 412 5890',
      link: 'tel:+2348104125890'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Port Harcourt, Nigeria',
      link: '#'
    }
  ];

  return (
    <div className="mx-auto">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {contactInfo.map((info, index) => (
          <a
            key={index}
            href={info.link}
            className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <info.icon className="text-3xl text-blue-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{info.title}</h2>
              <p className="text-gray-600">{info.value}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
} 