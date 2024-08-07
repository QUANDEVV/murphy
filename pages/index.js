import { useEffect, useState, useRef } from 'react';
import { useTheme } from 'next-themes';
import SwiperSlider from '../components/Swipper';

const Home = () => {
  const { theme } = useTheme();
  const [hideButtons, setHideButtons] = useState(false);
  const scrollRef = useRef(null);
  const parentRef = useRef(null);

  const handleScroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;
    if (current?.scrollWidth >= parent?.offsetWidth) return setHideButtons(false);
    return setHideButtons(true);
  };

  useEffect(() => {
    isScrollable();
    window.addEventListener('resize', isScrollable);
    return () => {
      window.removeEventListener('resize', isScrollable);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <SwiperSlider />

      {/* Introduction Section */}
      <section id="id_intro_container" className="text-center p-8 bg-gray-100">
        <div className="mx-auto">
     
          <h4 className="text-green-500 text-4xl font-bold mb-4">Introduction</h4>
          <p className="text-lg mb-4">
            M/S Murphy Merchants Auctioneers was established on October 25, 2004, with a clear strategic direction focused on client satisfaction. Our proprietor, Mr. Evans M. Maabi, has extensive experience in the auctioneering field and leads our team with a commitment to excellence and integrity.
          </p>
          <a href="about_us.html" className="bg-green-500 text-white py-2 px-4 rounded">Learn More</a>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="text-center p-8 bg-white">
        <h2 className="text-2xl text-green-500 mb-4">Visit Our Office</h2>
        <p className="text-lg mb-4">
          Welcome to our offices at the ASHA Trust Building, Meru Road, Mombasa. We invite you to visit us for personalized consultations and to learn more about our services.
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5547.906412661405!2d39.66957649619072!3d-4.062332265884409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18401321d4cc88db%3A0xe060f735310ae4df!2sMeru%20Rd%2C%20Mombasa!5e0!3m2!1sen!2ske!4v1719244729790!5m2!1sen!2ske"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      {/* Service Time Section */}
      <section className="text-center p-8 bg-gray-100">
        <h2 className="text-2xl text-green-500 mb-4">Our Business Hours</h2>
        <div className="flex justify-center gap-8">
          <div className="bg-white p-4 rounded shadow-lg">
            <i className="far fa-clock fa-3x text-green-500 mb-2"></i>
            <h3 className="text-xl font-bold">8:30 AM - 5:00 PM</h3>
            <h4>Monday to Friday</h4>
          </div>
          <div className="bg-white p-4 rounded shadow-lg">
            <i className="far fa-clock fa-3x text-green-500 mb-2"></i>
            <h3 className="text-xl font-bold">Optional</h3>
            <h4>Saturday</h4>
          </div>
        </div>
      </section>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        id="myBtn"
        title="Go to top"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 focus:outline-none transition"
      >
        <i className="fa fa-arrow-circle-up" style={{ fontSize: '24px' }}></i>
      </button>
    </div>
  );
}

export default Home;
