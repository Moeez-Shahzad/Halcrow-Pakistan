import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Building,
  Users
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const offices = [
    {
      name: "Islamabad Headquarters",
      address: "3rd Floor, Nawa-e-Waqt House, G-7/1 Mauve Area, Islamabad",
      phone: "+92 (51) 220 3451 - 55",
      email: "hpkmail@halcrowpk.com",
      fax: "+92 (51) 220 3462",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM",
      type: "headquarters",
    },
    {
      name: "Karachi Branch",
      address:
        "Business Enclave, 12th Commercial Street, DHA Phase II Extension, Karachi",
      phone: "+92 (21) 3531 7770",
      email: "hpkmail@halcrowpk.com",
      Fax: "+92 (21) 3531 0771",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM",
      type: "branch",
    },
  ];

  const contactReasons = [
    {
      icon: Building,
      title: 'Project Inquiry',
      description: 'Discuss your engineering project requirements'
    },
    {
      icon: Users,
      title: 'Joint Venture',
      description: 'Explore collaboration opportunities'
    },
    {
      icon: MessageCircle,
      title: 'General Information',
      description: 'Get information about our services'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our team of engineering experts. We're here to
              help with your project needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Reasons */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Choose the best way to connect with our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactReasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <reason.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    >
                      <option value="">Select Subject</option>
                      <option value="project-inquiry">Project Inquiry</option>
                      <option value="partnership">Joint Venture</option>
                      <option value="careers">Careers</option>
                      <option value="general">General Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Get in Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  We're here to help with your engineering and consultancy
                  needs. Reach out to us through any of the following channels.
                </p>
              </div>

              {/* Office Locations */}
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div
                    key={office.name}
                    className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      {office.name}
                    </h4>

                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {office.address}
                        </span>
                      </div>

                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {office.phone}
                        </span>
                      </div>

                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {office.email}
                        </span>
                      </div>

                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {office.hours}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="bg-blue-600 dark:bg-blue-900 p-6 rounded-xl text-white">
                <h4 className="text-lg font-semibold mb-4">Quick Contact</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>+92 (51) 220 3451 - 55</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>hpkmail@halcrowpk.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Find Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Visit our offices across Pakistan
            </p>
          </div>

          <div className="bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.45188830854!2d73.06351087556632!3d33.697254073292676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfea25c52acf%3A0x56ad8cd3edf74ad2!2sHalcrow%20Pakistan!5e0!3m2!1sen!2s!4v1757074816941!5m2!1sen!2s"
              width="100%"
              height="100%"
              // allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;