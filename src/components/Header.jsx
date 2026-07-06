import React from 'react';
import { FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className='flex w-9/12 justify-between mx-auto py-6 px-6 rounded-lg'>
      <div onClick={() => navigate("/")}
        className='text-2xl font-bold text-white'>
        ArtifyAI
      </div>

      <div className='flex space-x-8'>
        <ul className='flex space-x-6 text-lg'>
          <li>
            <Link to="/" className='text-white hover:text-blue-300 transition-colors font-mono' >Anasayfa</Link>
          </li>

          <li className='text-white hover:text-blue-300 transition-colors font-mono' onClick={scrollToGallery}>
            Galeri
          </li>
        </ul>
      </div>

      <div className='text-white hover:text-blue-300 transition-colors'>
        <FaGithub className='text-2xl' />
      </div>
    </div>
  );
};

export default Header;