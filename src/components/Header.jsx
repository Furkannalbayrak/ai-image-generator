import React, { useState } from 'react';
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false); // Mobil menü açıksa kapat
  }

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  }

  return (
    <div className='relative flex w-full md:w-9/12 justify-between items-center mx-auto py-6 px-6 rounded-lg'>
      {/* Logo */}
      <div onClick={() => handleNavigation("/")}
        className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-3xl font-extrabold cursor-pointer z-50 tracking-tight'>
        ArtifyAI
      </div>

      {/* Masaüstü Menü */}
      <div className='hidden md:flex items-center space-x-8'>
        <ul className='flex space-x-6 text-lg cursor-pointer'>
          <li>
            <Link to="/" className='text-white hover:text-blue-300 transition-colors font-mono'>Anasayfa</Link>
          </li>
          <li className='text-white hover:text-blue-300 transition-colors font-mono' onClick={scrollToGallery}>
            Galeri
          </li>
        </ul>
        <div className='text-white hover:text-blue-300 transition-colors cursor-pointer'>
          <FaGithub className='text-2xl' />
        </div>
      </div>

      {/* Hamburger İkonu (Mobil) */}
      <div className='md:hidden z-50'>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-white hover:text-blue-300 transition-colors focus:outline-none'>
          {isMenuOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
        </button>
      </div>

      {/* Mobil Menü İçeriği */}
      {isMenuOpen && (
        <div className='absolute top-20 left-0 w-full bg-gray-900/95 backdrop-blur-md flex flex-col items-center py-8 space-y-6 md:hidden z-40 rounded-lg shadow-2xl border border-gray-800'>
          <ul className='flex flex-col items-center space-y-6 text-lg w-full cursor-pointer'>
            <li className='w-full text-center'>
              <Link to="/" onClick={() => setIsMenuOpen(false)} className='block text-white hover:text-blue-300 transition-colors font-mono text-xl'>
                Anasayfa
              </Link>
            </li>
            <li className='w-full text-center text-white hover:text-blue-300 transition-colors font-mono text-xl' onClick={scrollToGallery}>
              Galeri
            </li>
          </ul>
          <div className='text-white hover:text-blue-300 transition-colors cursor-pointer pt-4 border-t border-gray-700 w-1/2 flex justify-center'>
            <FaGithub className='text-3xl' />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;