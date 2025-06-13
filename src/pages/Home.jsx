import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const slides = [
    {
      title: "React Developer",
      description: "Passionate about creating beautiful and functional web applications",
      image: "reactlogo.png"

    },
    {
      title: "Fresher",
      description: "Completed one year of training at TOPS Technologies, Ahmedabad",
      image: "tops.png"
    },
    {
      title: "Open to Work",
      description: "Seeking opportunities to grow and contribute to innovative projects",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section style={{backgroundImage:"url('https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}} className="relative h-screen flex items-center justify-center bg-gradient-to-r from-indigo-800 to-purple-300">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="reletive z-10 top-50 left-40   text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Manan Tejani
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            React Developer
          </motion.p>
          <motion.div  initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
            <Link
            to={'/projects'}
              
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition-colors duration-300"
            >
              View My Work
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Slider Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What I Do</h2>
          <Slider {...sliderSettings} className="mx-auto max-w-4xl">
            {slides.map((slide, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full  object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{slide.title}</h3>
                    <p className="text-gray-600">{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section> */}

      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home; 