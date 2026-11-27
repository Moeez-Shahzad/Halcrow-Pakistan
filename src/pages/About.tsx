import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Heart,
  Users,
  MapPin,
  Globe2,
  Linkedin
} from 'lucide-react';
import AboutBusiness from './AboutBusiness';

const About: React.FC = () => {
  const leadership = [
    {
      name: "Usman Mumtaz",
      position: "Chief Executive Officer",
      image:
        "https://media.licdn.com/dms/image/v2/C5603AQGSK6hU73qYaQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517704797948?e=2147483647&v=beta&t=IfU1nqLNURNKwFV6TB3_PMkVzgFyMVIQ5q4IcKt_Fzw",
      linkedin: "https://www.linkedin.com/in/umumtaz66/?originalSubdomain=pk",
    },


    // {
    //   name: "ABC",
    //   position: "ABC",
    //   image:
    //     "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    //   linkedin: "#",
    // },
    // {
    //   name: "ABC",
    //   position: "Director of Operations",
    //   image:
    //     "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    //   linkedin: "#",
    // },
    // {
    //   name: "ABC",
    //   position: "Head of Sustainability",
    //   image:
    //     "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    //   linkedin: "#",
    // },
  ];

  const offices = [
    { city: 'Islamabad', type: 'Headquarters', coordinates: [33.6844, 73.0479] },
    // { city: 'Karachi', type: 'Branch Office', coordinates: [24.8607, 67.0011] },
    // { city: 'Lahore', type: 'Regional Office', coordinates: [31.5204, 74.3587] },
    // { city: 'Peshawar', type: 'Field Office', coordinates: [34.0151, 71.5249] },
    // { city: 'Sukkur', type: 'Project Office', coordinates: [27.7058, 68.8574] },
    // { city: 'Swat', type: 'Field Office', coordinates: [35.2227, 72.4258] }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality engineering solutions'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Maintaining ethical standards and transparency in all our operations'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with clients and communities for sustainable development'
    },
    {
      icon: Globe2,
      title: 'Innovation',
      description: 'Embracing new technologies and methodologies for better outcomes'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-10 sm:py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              About Us
            </h1>
          </motion.div>
        </div>
      </section>
      <section aria-labelledby="company-profile" className="bg-blue-50/60 py-16 dark:bg-gray-800 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:px-8">
          <div>
            <div aria-hidden="true" className="mb-5 h-1 w-12 rounded-full bg-blue-600 dark:bg-blue-400" />
            <h2 id="company-profile" className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Who We Are
            </h2>
            <div className="max-w-prose space-y-5 text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
              <p>
                Established in 1993 by Halcrow Group of UK, Halcrow Pakistan (HPK) is one of the major
                engineering consulting firms in Pakistan. With over 30 years of experience in delivering
                large multi-disciplinary projects to small-scale specialist assignments in Pakistan as well
                as overseas, HPK has established itself as a leading engineering company that has its own
                identity in Pakistan. With the acquisition of Halcrow Group by CH2M HILL, HPK operates as an
                independent company that was formerly part of Halcrow Group.
              </p>
              <p>
                HPK's ability to integrate local teams with international experts from other parts of Halcrow
                Group continuously brings international best practices to its clients. The diversity of the
                services we offer means HPK has a solution for its clients no matter what their challenges are.
              </p>
            </div>
          </div>

          <figure className="w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-blue-900/10 dark:bg-gray-900 dark:ring-white/10">
            <img
              src={`${import.meta.env.BASE_URL}Port.jpg`}
              alt="Container cranes at the Pakistan Deep Water Container Port"
              width={666}
              height={446}
              className="aspect-[3/2] w-full object-cover"
            />
            <figcaption className="px-5 py-4 text-sm leading-snug text-gray-700 dark:text-gray-300 sm:px-6">
              <span className="block font-semibold text-gray-900 dark:text-white">
                Pakistan Deep Water Container Port
              </span>
              <span className="mt-1 block">Karachi, Sindh</span>
            </figcaption>
          </figure>
        </div>
      </section>
      {/* Leadership Team */}
      {/* <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Experienced professionals leading our organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-3">
                    {leader.position}
                  </p>
                  <a
                    href={leader.linkedin}
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Linkedin size={20} className="mr-2" />
                    Connect
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      <AboutBusiness />
      {/* Global Presence */}
      {/* <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Presence Across Pakistan
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Strategic locations to serve clients nationwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {office.city}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {office.type}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;