import { useEffect, useState, useRef } from 'react';
import { useTheme } from 'next-themes';
import SwiperSlider from '../components/Swipper';
import Image from 'next/image';

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
<section  className="border-b py-12 mx-16 mt-4">
  {/* <div className="container mx-auto px-4 text-center">
    <h4 className="text-green-600 text-4xl font-extrabold mb-6">Introduction</h4>
    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
      M/S Murphy Merchants Auctioneers was established on October 25, 2004, with a clear strategic direction focused on client satisfaction. Our proprietor, Mr. Evans M. Maabi, has extensive experience in the auctioneering field and leads our team with a commitment to excellence and integrity.
    </p>
    <a
      href="about_us.html"
      className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-green-700 hover:shadow-xl"
    >
      Learn More
    </a>
  </div> */}
  <div className='flex sm:overflow-x-auto'>
    <div className='flex-1 '>
    <h2 className="text-green-600 text-2xl  font-bold mb-6">Introduction</h2>
    <div> <p className="text-lg text-gray-700 mb-8 leading-relaxed sm:w-[250px]">
    Founded in 2004, Murphy Merchants Auctioneers is a distinguished firm dedicated to providing exceptional auctioneering services. Under the leadership of Mr. Evans M. Maabi, who brings over two decades of experience to the table, we focus on delivering unparalleled client satisfaction. 
    </p></div>
    </div>



    <div className='flex-1'>
    <h2 className="text-green-600 text-2xl  font-bold mb-6">About Us</h2>
    <div> <p className="text-lg text-gray-700 mb-8 leading-relaxed sm:w-[250px]">
   

With over 20 years of experience, Murphy Merchants Auctioneers offers comprehensive auctioneering services, emphasizing expertise, client satisfaction, integrity, and a commitment to excellence under the leadership of Mr. Evans M. Maabi."
    </p></div>
    </div>

  </div>
</section>


      {/* Visit Us Section */}
      <section className="bg-white py-12">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-semibold text-green-600 mb-6">Visit Our Office</h2>
    <p className="text-lg text-gray-700 mb-8">
      We warmly invite you to visit us at our office located in the ASHA Trust Building on Meru Road, <br /> Mombasa. 
      Experience personalized consultations and learn more about the exceptional services we offer.
    </p>
    <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg">
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3979.80061384945!2d39.665313674975565!3d-4.061029395912703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMDMnMzkuNyJTIDM5wrA0MCcwNC40IkU!5e0!3m2!1sen!2ske!4v1723049691995!5m2!1sen!2ske" 
        height="100%"
        width="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  </div>
</section>


<section className="py-12">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-green-700 mb-8">Our Business Hours</h2>
    <div className="flex flex-wrap justify-center gap-8">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
        <div className="flex items-center justify-center mb-4">
          <i className="fas fa-clock fa-4x text-green-700"></i>
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">8:30 AM - 5:00 PM</h3>
        <h4 className="text-gray-700">Monday to Friday</h4>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
        <div className="flex items-center justify-center mb-4">
          <i className="fas fa-clock fa-4x text-green-700"></i>
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Optional</h3>
        <h4 className="text-gray-700">Saturday</h4>
      </div>
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
