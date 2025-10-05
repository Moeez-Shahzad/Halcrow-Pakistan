import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Leaf, 
  Car, 
  Droplets, 
  MapPin, 
  Users,
  ArrowRight,
  Award,
  Globe,
  Target
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

const Home: React.FC = () => {
  const services = [
    {
      icon: Building2,
      title: 'Buildings',
      description: 'Comprehensive structural design and infrastructure development solutions.'
    },
    {
      icon: Leaf,
      title: 'Environment & Sustainability',
      description: 'Sustainable engineering practices for environmental protection.'
    },
    {
      icon: Car,
      title: 'Transportation',
      description: 'Roads, bridges, ports, and transportation infrastructure.'
    },
    // {
    //   icon: Droplets,
    //   title: 'Water & Sanitation',
    //   description: 'Water treatment, distribution, and sanitation systems.'
    // },
    // {
    //   icon: MapPin,
    //   title: 'Urban Development',
    //   description: 'Smart city planning and urban development projects.'
    // },
    // {
    //   icon: Users,
    //   title: 'Specialized Consulting',
    //   description: 'GIS, Oil & Gas, and Geotechnical consulting services.'
    // }
  ];

const clients = [
  "World Bank",
  "Asian Development Bank",
  "JICA",
  "USAID",
  "Government of Pakistan",
  "Provincial Governments",
  "MARI Energies",
  "Pakistan Petroleum Limited",
  "Pakistan Oil Fields Limited",
  "Orient Petroleum",
  "DASU Hydropower Consultants",
  "Oil and Gas Development Company Limited",
  "CDM Smith",
  "Mott McDonald's",
  "Polish Oil and Gas Company",
  "Emaar",
  "IBA Karachi",
];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
            "Home.png"
              // 'url("https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          }}
        ></div>

        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Engineering Excellence Since 1993
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Halcrow Pakistan (est. 1993 by Halcrow Group UK) is a leading
            independent engineering consultancy with 30+ years of experience in
            multidisciplinary projects in Pakistan and abroad.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center group"
            >
              Explore Services
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
            <Link
              to="/projects"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              View Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                <AnimatedCounter end={30} suffix="+" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Years of Excellence
              </p>
            </motion.div>

            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-amber-500 dark:text-teal-400 mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Projects Completed
              </p>
            </motion.div>

            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Cities Across Pakistan
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive engineering solutions across multiple disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <service.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center group"
            >
              View All Services
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Clients */}
      <section className="py-16 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Working with international development agencies and government
              bodies
            </p>
          </div>

          {/* Scrolling Clients */}
          <motion.div
            className="flex space-x-16 text-lg font-medium text-gray-800 dark:text-gray-200"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 30, // speed: higher = slower
              ease: "linear",
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <span
                key={index}
                className="whitespace-nowrap bg-gray-50 dark:bg-gray-800 px-6 py-3 rounded-lg shadow"
              >
                {client}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-600 dark:bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Halcrow Pakistan
            </h2>
            <p className="text-xl text-blue-100">
              Three decades of engineering excellence and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Award className="w-16 h-16 mx-auto mb-4 text-amber-300" />
              <h3 className="text-xl font-semibold mb-2">Proven Excellence</h3>
              <p className="text-blue-100">
                Over 30 years of delivering high-quality engineering solutions
                across Pakistan
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Globe className="w-16 h-16 mx-auto mb-4 text-amber-300" />
              <h3 className="text-xl font-semibold mb-2">Global Standards</h3>
              <p className="text-blue-100">
                International expertise with deep understanding of local
                requirements
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Target className="w-16 h-16 mx-auto mb-4 text-amber-300" />
              <h3 className="text-xl font-semibold mb-2">
                Sustainable Solutions
              </h3>
              <p className="text-blue-100">
                Committed to environmentally responsible and sustainable
                engineering practices
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;