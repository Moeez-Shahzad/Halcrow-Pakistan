import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Filter, 
  MapPin, 
  Calendar, 
  User, 
  ExternalLink,
  Building2,
  Car,
  Droplets,
  Leaf,
  Users
} from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    "All",
    "Construction Management",
    "Water Management",
    "Education",
    "Livelihoods",
    "Agriculture",
    "Environmental Services",
  ];

  const projects = [
    {
      id: 1,
      title:
        "Project Management and Resident Supervision Services for Construction of Serena Hotel Sost",
      category: "Construction Management",
      location: "Gilgit Baltistan, Sost",
      duration: "2022-Ongoing",
      client:
        "Serena Hotels, Tourism Promotion Services (TPS), Agha Khan Group",
      image: "/Serena.jpg",
      description:
        "Provided project management and resident supervision services, ensuring high-quality construction standards and on-time completion of the hotel project.",
      status: "Ongoing",
    },
    {
      id: 27,
      title:
        "Architecture & Engineering for Sindh Basic Education Program (SBEP)",
      category: "Construction Management",
      location: "Karachi, Sindh",
      duration: "2012-2025",
      client: "USAID",
      image: "SBEP.jpg",
      description:
        "Delivered architectural and engineering design services for modern, sustainable schools under the Sindh Basic Education Program (SBEP).",
      status: "Completed",
    },
    {
      id: 19,
      title:
        "Project Management and Resident Supervision Services for Construction of Serena Hotel Hunza",
      category: "Construction Management",
      location: "Gilgit Baltistan, Hunza",
      duration: "2022-Ongoing",
      client:
        "Serena Hotels, Tourism Promotion Services (TPS), Agha Khan Group",
      image: "Serena-Hunza.jpg",
      description:
        "Provided project management and resident supervision services, ensuring high-quality construction standards and on-time completion of the hotel project.",
      status: "Ongoing",
    },
    {
      id: 18,
      title:
        "Provision of Occupational Health and Safety (OHS) Services to Strengthen In-House OHS Capacities and Capabilities of Dasu Hydropower Consultants",
      category: "Environmental Services",
      location: " Khyber Pakhtunkhwa province, Pakistan",
      duration: "2019-Ongoing",
      client: "Dasu Hydropower Consultants",
      image: "DASU.jpg",
      description:
        "Providing specialized Occupational Health and Safety (OHS) services to enhance the internal safety management systems and build the in-house OHS capacity of Dasu Hydropower Consultants.",
      status: "Ongoing",
    },
    {
      id: 20,
      title: "Karachi Water Front Development Project on Zone E",
      category: "Construction Management",
      location: "Karachi, Sindh",
      duration: "2005-2006",
      client: "EMAAR Pakistan",
      image: "EMAAR.jpg",
      description:
        "Provided project management and engineering services for the master planning and development of Zone E, focusing on sustainable coastal infrastructure, urban design, and environmental enhancement along Karach's waterfront.",
      status: "Completed",
    },
    {
      id: 21,
      title: "Pakistan Deep Water Container Port",
      category: "Construction Management",
      location: "Karachi, Sindh",
      duration: "2008-2019",
      client: "South Asia Pakistan Terminals (SAPT)",
      image: "Port.jpg",
      description:
        "A modern port facility designed to handle large cargo vessels and boost Pakistan's trade capacity.",
      status: "Completed",
    },
    {
      id: 10,
      title: "Karachi Water & Sewerage Board Project",
      category: "Water Management",
      location: "Karachi, Sindh",
      duration: "2020-2023",
      client: "Karachi Water & Sewerage Board",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmVCYx--VpZQgKgzARerZ3svefFHirUtcn9w&s",
      description:
        "Project Support Program in Karachi for water and sewerage infrastructure improvement and management.",
      status: "Completed",
    },
    {
      id: 2,
      title: "Punjab Water Sector Development Project",
      category: "Water Management",
      location: "Punjab, Pakistan",
      duration: "2019-2022",
      client: "Government of Punjab",
      image:
        "https://propakistani.pk/proproperty/wp-content/uploads/2023/05/Punjab-Government-and-World-Bank-Launch-Rural-Water-Supply-and-Sanitation-Project-in-16-Districts.jpg",
      description:
        "Integrated water sector reform and infrastructure development project to improve irrigation and drainage systems.",
      status: "Completed",
    },
    {
      id: 3,
      title: "AJK-Northern Education Project",
      category: "Education",
      location: "Azad Jammu & Kashmir, Pakistan",
      duration: "2018-2020",
      client: "Education Department AJK",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvfjTjs-5lgJnYaUfPiY0z4yv4LT3bMe2Lk74EM70iBg5Fwaao8LbpEiZvwmrmdJByr6Y&usqp=CAU",
      description:
        "Improvement of education access and infrastructure in northern regions of AJK.",
      status: "Completed",
    },
    {
      id: 4,
      title: "Balochistan Community Irrigation & Agricultural Project",
      category: "Agriculture",
      location: "Balochistan, Pakistan",
      duration: "2019-2022",
      client: "Government of Balochistan",
      image: "https://www.inp.net.pk/images/20250711114710_ogImage_39.jpg",
      description:
        "Community-driven irrigation systems and sustainable agricultural practices in rural Balochistan.",
      status: "Completed",
    },
    {
      id: 5,
      title: "Sindh Rural Development Project",
      category: "Livelihoods",
      location: "Sindh, Pakistan",
      duration: "2017-2020",
      client: "Sindh Government",
      image: "https://www.inp.net.pk/storage/uploads/blobid1732800741068.png",
      description:
        "Infrastructure and social development initiatives in rural Sindh aimed at poverty alleviation and capacity building.",
      status: "Completed",
    },
    // {
    //   id: 6,
    //   title: "Smallholder Agriculture Improvement Project Bangladesh",
    //   category: "International",
    //   location: "Bangladesh",
    //   duration: "2018-2021",
    //   client: "Bangladesh Agricultural Department",
    //   image:
    //     "https://www.aljazeera.com/wp-content/uploads/2022/10/2022-10-19T230154Z_1985790676_RC2XWV9R10Y4_RTRMADP_3_CLIMATE-CHANGE-BANGLADESH-FARMS.jpg?resize=1170%2C780&quality=80",
    //   description:
    //     "Improving productivity, access to markets, and sustainability for small-scale farmers in Bangladesh.",
    //   status: "Completed",
    // },
    {
      id: 7,
      title:
        "USAID's Architecture & Engineering Services for Women's Hostel Project at FC College Lahore",
      category: "Education",
      location: "Pakistan (National)",
      duration: "2012-20214",
      client: "USAID Pakistan",
      image: "/USAID.jpg",
      description:
        "Provision of architecture and engineering design services for the USAID-funded Women’s Hostel Project at Forman Christian College (FCCU), Lahore — encompassing planning, structural design, MEP systems, and sustainable solutions to create a safe, functional, and student-friendly residential facility.",
      status: "Completed",
    },
    {
      id: 8,
      title: "Neelum & Jhelum Valleys Community Development Project",
      category: "Environmental Services",
      location: "AJK (Cross-border involvement)",
      duration: "2017-2020",
      client: "Community Development Board",
      image: "https://i.dawn.com/primary/2024/04/661db529345c2.jpg",
      description:
        "Rural development and livelihood enhancement program in Neelum and Jhelum valleys.",
      status: "Completed",
    },
    // {
    //   id: 6,
    //   title: "Smallholder Agriculture Improvement Project Bangladesh",
    //   category: "International",
    //   location: "Bangladesh",
    //   duration: "2018-2021",
    //   client: "Bangladesh Agricultural Department",
    //   image:
    //     "https://www.aljazeera.com/wp-content/uploads/2022/10/2022-10-19T230154Z_1985790676_RC2XWV9R10Y4_RTRMADP_3_CLIMATE-CHANGE-BANGLADESH-FARMS.jpg?resize=1170%2C780&quality=80",
    //   description:
    //     "Improving productivity, access to markets, and sustainability for small-scale farmers in Bangladesh.",
    //   status: "Completed",
    // },
    {
      id: 6,
      title:
        "Aman Centre for Entrepreneurship Development (ACED) Building at Institute of Business Administration (IBA), Karachi",
      category: "Construction Management",
      location: "Karachi, Sindh",
      duration: "2010-2012",
      client: "IBA Karachi",
      image: "/Aman-IBA.jpg", // 👈 use the imported variable
      description:
        "Construction management and supervision of the Aman Centre for Entrepreneurship Development (ACED) Building at the Institute of Business Administration (IBA), Karachi — a state-of-the-art facility designed to promote innovation, research, and entrepreneurship development among students and professionals.",
      status: "Completed",
    },
    {
      id: 9,
      title:
        "Aman Tower Building at Institute of Business Administration (IBA), Karachi",
      category: "Construction Management",
      location: "Karachi, Sindh",
      duration: "2011-2014",
      client: "IBA Karachi",
      image: "/Aman-Towerjpg.jpg", // 👈 use the imported variable
      description:
        "Design review, construction supervision, and project management of the Aman Tower Building at the Institute of Business Administration (IBA), Karachi — a modern academic facility equipped with advanced classrooms, research centers, and administrative offices to support higher education excellence.",
      status: "Completed",
    },
  ];
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Highways':
      case 'Transportation':
        return Car;
      case 'Water Management':
        return Droplets;
      case 'Urban Planning':
        return MapPin;
      case 'Buildings':
        return Building2;
      case 'Environment':
        return Leaf;
      default:
        return Users;
    }
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Showcasing our engineering excellence across Pakistan's infrastructure development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              
              return (
                <motion.div
                  key={project.id}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  layout
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                        <CategoryIcon className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <User className="w-4 h-4 mr-2" />
                        {project.client}
                      </div>
                    </div>
                    
                    {/* <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center group">
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button> */}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects found for the selected category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Stats */}
      {/* <section className="py-16 bg-blue-600 dark:bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Project Impact
            </h2>
            <p className="text-xl text-blue-100">
              Delivering measurable results across Pakistan
            </p>
          </div>
          
          {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Projects Completed</p>
            </motion.div> */}
            
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">50M+</div>
              <p className="text-blue-100">People Served</p>
            </motion.div> */}
            
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">$5B+</div>
              <p className="text-blue-100">Project Value</p>
            </motion.div> */}
            x
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-blue-100">Client Satisfaction</p>
            </motion.div> }
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Projects;