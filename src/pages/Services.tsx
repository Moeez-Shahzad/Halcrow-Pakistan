import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Leaf,
  Car,
  Navigation,
  Droplets,
  MapPin,
  Users,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: Building2,
      title: "Buildings",
      description: "Comprehensive structural development solutions",
      details: [
        "High rise buildings",
        "Educational buildings (universities, schools, hostels)",
        "Commercial and residential complexes",
        "Hospitals",
        "Process plants (steel, oil & gas)",
        "Heavy machine foundations",
        "Warehouses",
        "Car parks",
        "Sewage treatment plants",
        "Electrical sub-stations",
        "Ground retention systems",
      ],
      projects: [
        "High-Rise Building Projects",
        "Educational Building Projects (Universities, Schools, Hostels)",
        "Commercial & Residential Complex Projects",
        "Hospital Infrastructure Projects",
        "Industrial Process Plant Projects (Steel, Oil & Gas)",
        "Heavy Machine Foundation Projects",
        "Warehouse Construction Projects",
        "Car Park Facility Projects",
        "Sewage Treatment Plant Projects",
        "Electrical Sub-Station Projects",
        "Ground Retention System Projects",
      ],
    },
    {
      icon: Leaf,
      title: "Environment & Sustainability",
      description:
        "Sustainable engineering practices for environmental protection",
      details: [
        "IEEs, EIAs, SEAs",
        "Environmental audits",
        "Environmental risk assessments",
        "Modelling studies",
        "Air dispersion modelling (AERMOD, ISC3, SCREEN 3)",
        "Accidental release modelling (SLAB, AFTOX, DEGADIS)",
        "Other types of modelling (Noise, Thermal Plume)",
        "Emission and effluent monitoring",
        "Noise abatement studies",
        "Baseline environmental studies",
        "Environmental due diligence studies",
        "Phase I and II site assessment studies",
        "Environmental monitoring",
        "HSE monitoring",
        "Site assessment and audits",
        "Pollution control process evaluations",
        "Contaminant assessment and remediation",
        "Site remediation modelling and technology waste disposal plans",
        "Geographical information System (GIS)",
      ],
      projects: [
        "Environmental Impact Assessment (EIA) Projects",
        "Initial Environmental Examination (IEE) Projects",
        "Strategic Environmental Assessment (SEA) Projects",
        "Environmental Audit Projects",
        "Risk Assessment Projects",
        "Air Dispersion Modelling Studies",
        "Accidental Release Modelling Studies",
        "GIS Mapping & Analysis Projects",
        "Pollution Control & Process Evaluation Projects",
        "Baseline Environmental Study Projects",
        "Environmental Due Diligence Projects",
        "Site Remediation & Waste Disposal Projects",
      ],
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Roads, bridges, ports, and transportation infrastructure",
      details: [
        "Bridge assessment, testing and evaluation",
        "Post-tensioned box girder bridge design",
        "Design of integral bridges",
        "Design of steel composite bridges",
        "Design of cut and cover road tunnels/underpasses",
        "Design of RCC tunnels",
        "Design of culverts",
        "Design of retaining walls",
        "CAT III checking of bridges and highway structures",
        "Preparation of shop drawings",
        "Strategic and master planning",
        "Studies, feasibility reports and economic evaluations",
        "Hydraulic modelling and scour protection",
        "Hazard analysis, risk management and information engineering",
        "Technical, operation and maintenance support to agencies",
        "Training and technology transfer",
      ],
      projects: [
        "Bridge Assessment, Testing & Evaluation Projects",
        "Post-Tensioned Box Girder Bridge Design Projects",
        "Integral Bridge Design Projects",
        "Steel Composite Bridge Design Projects",
        "Cut & Cover Road Tunnel / Underpass Design Projects",
        "RCC Tunnel Design Projects",
        "Culvert Design Projects",
        "Retaining Wall Design Projects",
        "CAT III Bridge & Highway Structure Checking Projects",
        "Shop Drawing Preparation Projects",
        "Transportation Strategic & Master Planning Projects",
        "Feasibility Study & Economic Evaluation Projects",
        "Hydraulic Modelling & Scour Protection Projects",
        "Hazard Analysis & Risk Management Projects",
        "Technical, Operational & Maintenance Support Projects",
        "Training & Technology Transfer Programs",
      ],
    },
    {
      icon: Navigation,
      title: "Highways",
      description:
        "Design, planning, and evaluation of highways, roads, and related infrastructure",
      details: [
        "Highway and road design",
        "Mountainous / hilly terrain roads",
        "Roundabouts & interchanges (at grade, grade separated)",
        "Grading plans",
        "Geometric design",
        "Pavement design",
        "Evaluation and rehabilitation of pavements and structures",
        "Street lighting",
        "Road signage and pavement markings",
        "Overheads and underpasses",
        "Bridge and culvert design",
        "Retaining structures",
        "Traffic Impact Assessments (TIA)",
        "Traffic surveys",
        "Hydrology and drainage",
      ],
      projects: [
        "Highway & Road Design Projects",
        "Mountainous / Hilly Terrain Road Projects",
        "Roundabout & Interchange Projects (At Grade / Grade Separated)",
        "Highway Grading Plan Projects",
        "Geometric Road Design Projects",
        "Pavement Design Projects",
        "Pavement Evaluation & Rehabilitation Projects",
        "Street Lighting Installation Projects",
        "Road Signage & Pavement Marking Projects",
        "Overhead & Underpass Projects",
        "Bridge & Culvert Design Projects",
        "Retaining Structure Projects",
        "Traffic Impact Assessment (TIA) Projects",
        "Traffic Survey Projects",
        "Highway Hydrology & Drainage Projects",
      ],
    },
    {
      icon: Droplets,
      title: "Water & Sanitation",
      description:
        "Water resource planning, irrigation, drainage, and flood control systems",
      details: [
        "Water resource planning",
        "Irrigation, drainage and flood control",
        "Hydraulic structures",
        "Surface & groundwater hydrology",
        "River engineering works",
      ],
      projects: [
        "Water Treatment Plants",
        "Distribution Networks",
        "Sewerage Systems",
        "Irrigation Schemes",
        "Flood Protection",
      ],
    },
    {
      icon: MapPin,
      title: "Urban Development & Planning",
      description: "Smart city planning and urban development projects",
      details: [
        "Traffic impact study",
        "Road Network",
        "Roads and parking designs",
        "Verification of topographic data",
        "Geotechnical investigations",
        "Levelling and grading and finish grading",
        "Potable water",
        "Foul water",
        "Irrigation network",
        "Storm drainage",
        "Firefighting network",
        "Electrical power (EHV, HV & MV Power)",
        "Street lighting",
        "Telecommunication system",
        "Bridges, culverts and drainage structures",
        "External Electrification System",
        "Road Electrification/Street Lighting",
        "Telecom Distribution System",
        "Ancillary Works",
        "Highway and road design",
        "Roundabouts & interchanges (at grade, grade separated)",
      ],
      projects: [
        "Urban Infrastructure Development",
        "Road and Parking Facilities",
        "Drainage and Irrigation Networks",
        "Water Supply and Sewerage Systems",
        "Electrical and Telecommunication Systems",
        "Bridges and Interchanges",
      ],
    },
    {
      icon: Users,
      title: "Specialized Consulting",
      description: "GIS, Oil & Gas, and Geotechnical consulting services",
      details: [
        "Geographic Information Systems (GIS)",
        "Geotechnical Engineering",
        "Oil & Gas Infrastructure",
        "Mining Engineering",
        "Surveying & Mapping",
        "Risk Assessment",
      ],
      projects: [
        "Pipeline Projects",
        "Mining Operations",
        "Geotechnical Surveys",
        "GIS Mapping",
        "Risk Assessments",
      ],
    },
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive engineering solutions across multiple disciplines
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200 dark:border-gray-700">
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-6 py-3 m-1 rounded-t-lg transition-colors ${
                  activeTab === index
                    ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <service.icon className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Service Details */}
            <div>
              <div className="flex items-center mb-6">
                {React.createElement(services[activeTab].icon, {
                  className: "w-12 h-12 text-blue-600 dark:text-blue-400 mr-4"
                })}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {services[activeTab].title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {services[activeTab].description}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Service Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services[activeTab].details.map((detail, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Types */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Project Types
              </h3>
              <div className="space-y-4">
                {services[activeTab].projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-center">
                      <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                      <span className="text-gray-800 dark:text-gray-200 font-medium">
                        {project}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              {/* <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Need {services[activeTab].title}?
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Get in touch with our experts to discuss your project requirements.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                  Contact Our Team
                </button>
              </div> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Delivering excellence through expertise and innovation
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
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Proven Track Record
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Over 500 successful projects completed across Pakistan with international standards
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Expert Team
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Highly qualified engineers and consultants with decades of combined experience
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Sustainable Solutions
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Committed to environmentally responsible and sustainable engineering practices
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;