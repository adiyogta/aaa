"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';

interface HeaderProps {
  placeholderImage?: string;
}

const Header = ({ placeholderImage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FEFAE0] py-4 px-4 sm:px-6 border-b border-[#DDA15E]">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <div className="flex items-center">
              {imageError ? (
                <div className="img-skeleton w-10 h-10 mr-2"></div>
              ) : (
                <CldImage
                  src="lg_kicau_burung_rpwxal"
                  alt="Kicau Burung Logo"
                  width={40}
                  height={40}
                  className="mr-2"
                  priority={true}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
              )}
              <span className="text-xl font-bold text-[#283618]">Kicau Burung</span>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="md:hidden text-[#283618]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search" 
                className="pl-8 pr-4 py-1 rounded-full border border-[#DDA15E] focus:outline-none focus:ring-2 focus:ring-[#606C38] bg-[#FEFAE0] text-[#283618]"
              />
              <svg 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#606C38]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
            <button className="bg-[#283618] text-[#FEFAE0] px-4 py-1 rounded-full hover:bg-[#606C38]">
              Artikel
            </button>
          </div>
          
          <button className="md:hidden text-[#283618]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#FEFAE0] border-b border-[#DDA15E] shadow-lg">
          <nav className="flex flex-col p-4">
            <Link href="/suara-burung" className="py-2 text-[#283618] hover:text-[#606C38]">Suara Burung</Link>
            <Link href="/artikel" className="py-2 text-[#283618] hover:text-[#606C38]">Artikel</Link>
            <Link href="/panduan-perawatan" className="py-2 text-[#283618] hover:text-[#606C38]">Panduan Perawatan</Link>
            <Link href="/komunitas" className="py-2 text-[#283618] hover:text-[#606C38]">Komunitas</Link>
            <Link href="/toko" className="py-2 text-[#283618] hover:text-[#606C38]">Toko</Link>
            <div className="relative mt-4">
              <input 
                type="text" 
                placeholder="Cari suara burung..." 
                className="w-full pl-8 pr-4 py-2 rounded-full border border-[#DDA15E] focus:outline-none focus:ring-2 focus:ring-[#606C38] bg-[#FEFAE0] text-[#283618]"
              />
              <svg 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#606C38]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;