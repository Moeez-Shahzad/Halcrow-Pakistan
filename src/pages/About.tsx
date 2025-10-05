import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  MapPin, 
  Calendar,
  Award,
  Globe2,
  Linkedin
} from 'lucide-react';

const About: React.FC = () => {
  const timeline = [
    {
      year: "1993",
      title: "Foundation",
      description:
        "Halcrow Pakistan (HPK) was established by Halcrow Group UK as one of Pakistan's first major engineering consulting firms.",
    },
    {
      year: "2000",
      title: "Expansion",
      description:
        "Delivered multidisciplinary projects across energy, transport, education, and water sectors while building a reputation for innovation and technical excellence.",
    },
    {
      year: "2010",
      title: "National Presence",
      description:
        "Expanded to offices in Islamabad, Karachi, Lahore, Peshawar, Sukkur, and Swat, employing over 200 professionals and delivering projects for global clients and local authorities.",
    },
    {
      year: "2011",
      title: "Transition",
      description:
        "Following the acquisition of Halcrow Group by CH2M HILL, HPK continued operations as an independent company, retaining its local identity and international expertise.",
    },
    {
      year: "Today",
      title: "A Trusted Partner",
      description:
        "With 30+ years of experience, HPK stands as a leading independent engineering consultancy, committed to sustainable solutions, innovation, and improving quality of life for communities across Pakistan and beyond.",
    },
  ];
  

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
const ceoMessage = {
  title: "Message from Our CEO",
  name: "Usman Mumtaz",
  position: "Chief Executive Officer",
  image:
    "https://media.licdn.com/dms/image/v2/C5603AQGSK6hU73qYaQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517704797948?e=2147483647&v=beta&t=IfU1nqLNURNKwFV6TB3_PMkVzgFyMVIQ5q4IcKt_Fzw",
  message: `For over 30 years, HPK has grown steadily in both local and international markets, guided by a strong ethical approach to our work. 
  Our purpose is simple yet profound: “to sustain and improve the quality of people's lives.”

  We value new ideas, encourage contributions from our employees, and believe that respect and teamwork form the foundation of every great company. 
  With integrity, leadership, and collaboration, we aim to remain a trusted partner to our clients while shaping a better tomorrow.`,
};

  

  const offices = [
    { city: 'Islamabad', type: 'Headquarters', coordinates: [33.6844, 73.0479] },
    { city: 'Karachi', type: 'Branch Office', coordinates: [24.8607, 67.0011] },
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Halcrow Pakistan
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              “Established in 1993, Halcrow Pakistan (HPK) is one of the leading
              engineering consulting firms in Pakistan, delivering
              multidisciplinary projects for over 25 years with innovation,
              sustainability, and excellence.”
            </p>
          </motion.div>
        </div>
      </section>
      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Target className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To deliver innovative, sustainable, and cost-effective
                engineering solutions that contribute to Pakistan's
                infrastructure development and improve quality of life for
                communities.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Eye className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To be Pakistan's leading engineering consultancy, recognized for
                excellence, innovation, and sustainable practices in
                infrastructure development.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Heart className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Values
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We are guided by principles of excellence, integrity,
                collaboration, and innovation, ensuring that every project
                delivers lasting value to our clients and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Core Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              The principles that drive our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <value.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Timeline */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Three decades of growth and innovation
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Timeline */}
      {/* // ... your existing timeline section here */}
      {/* CEO Message */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={ceoMessage.image}
              alt={ceoMessage.name}
              className="w-48 h-48 rounded-full object-cover border-4 border-blue-600 shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {ceoMessage.title}
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
                {ceoMessage.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-4">
                {ceoMessage.position}
              </p>
              <p className="text-gray-700 dark:text-gray-400 whitespace-pre-line leading-relaxed">
                {ceoMessage.message}
              </p>
            </div>
          </div>
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
      {/* Global Presence */}
      <section className="py-16 bg-white dark:bg-gray-900">
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
      </section>
    </div>
  );
};

export default About;