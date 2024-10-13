import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { ImSpinner2 } from "react-icons/im";
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { CONTACT } from '../constants';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('service_muflli9', 'template_3fl52jq', form.current, {
        publicKey: 'lGSk41MhHedQf06f9', // Replace with your EmailJS public API key
      })
      .then(
        () => {
          toast.success('Email sent successfully!', {
            position: 'top-center',
            duration: 4000,
          });
          e.target.reset(); // Reset the form fields
        },
        (error) => {
          toast.error('Failed to send email. Please try again.', {
            position: 'top-center',
            duration: 4000,
          });
          console.log('FAILED...', error.text);
        },
      ).finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="py-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl text-white"
      >
        Get in Touch
      </motion.h2>

      <div className="mt-10 max-w-5xl mx-auto items-center flex flex-col lg:flex-row gap-8 px-4">
        {/* Contact Information */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left flex-1"
        >
          <div className="text-white">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <FaMapMarkerAlt className="text-3xl mr-4" />
              <span>{CONTACT.address}</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <FaPhoneAlt className="text-3xl mr-4" />
              <span>{CONTACT.phoneNo}</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <FaEnvelope className="text-3xl mr-4" />
              <a href={`mailto:${CONTACT.email}`} className="hover:underline">
                {CONTACT.email}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="p-8 rounded-lg shadow-lg bg-neutral-900 flex-1 w-full lg:w-96" // Added width for small devices
        >
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-white">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-white">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-white">
                Message
              </label>
              <textarea
                name="message"
                required
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 flex justify-center items-center mx-auto text-white bg-purple-600 hover:bg-purple-500 rounded-lg"
            >
              {loading ? <ImSpinner2 className="animate-spin text-2xl" /> : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
