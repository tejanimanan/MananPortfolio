import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Nayan Studio Website",
      description: "A modern and responsive informational website developed using React.js for Nayan Studio, showcasing photography services, portfolio galleries, and contact details. The site focuses on clean design, performance optimization, and smooth user experience, making it easy for clients to explore services and reach out.",
      technologies: ["React", "JavaScript", "CSS3"],
      image: "nayan.png",
      link: "https://nayanstudio8073-5zn3.vercel.app/"
    }
    ,
    {
      title: "AGRI CULTURE",
      description: "A responsive, modern Agri‑Culture platform built with React and Tailwind CSS. Features include dedicated Farmer and Merchant authentication flows, role‑based dashboards, and smooth UI components. Optimized for performance and mobile-first design, it connects farmers and merchants seamlessly.",
      technologies: ["React", "Tailwind CSS"],
      image: "agripro.png",
      link: "https://agriculturetemple.vercel.app/"
    },
    {
      title: "ToolM5 Website",
      description: "A ToolM5, website created using React and Bootstrap 5. Highlights include rounded‑corner cards,a responsive layout, and a well‑structured presentation of work, skills, and contact info  designed to engage and impress visitors.",
      technologies: ["React", "Bootstrap5 CSS"],
      image: "toolm5.png",
      link: "https://tool-m5.vercel.app/"
    },
     {
      title: "Trade Board",
      description: "TradeBoard is a modern, full-featured trading management system built with React, Tailwind CSS, and Ant Design components. The application provides a complete administrative interface for managing trading operations, user accounts, and portfolio tracking.This TradeBoard application demonstrates a professional-grade trading management system suitable for brokerage firms, trading platforms, or portfolio management companies, combining modern web technologies with financial industry requirements.",
      technologies: ["React", "Tailwind CSS","Antd design"],
      image: "market.png",
      link: "https://market-frontend-5tms.vercel.app/"
    },
    {
      title: "Fashion Fizz",
      description: "This project is a modern, fully responsive e-commerce fashion store built using React and Tailwind CSS. It features a clean, user-friendly interface with product listings, including shirts, boots, and bags, each with quick view and add-to-cart functionality. The cart detail section displays itemized pricing, discounts, and delivery charges, ensuring transparency. The design adapts seamlessly to all screen sizes, from mobile to desktop, providing an optimal shopping experience. With categorized product sections like Women, Men, and Accessories, the store offers easy navigation and a visually appealing layout.",
      technologies: ["React", "Tailwind CSS","json-server"],
      image: "fashionfizz.png",
      link: "https://fashionfizz-new.vercel.app/"
    }


  ];

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600">Here are some of my recent works</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-justify">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <a
                    href={project.link}
                    target='_blank'
                    className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 