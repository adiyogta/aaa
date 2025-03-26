"use client"

import Link from 'next/link';
import { useState } from 'react';
import { CldImage } from 'next-cloudinary';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  // Either use imageLoaded in your component or remove it
  // const [imageLoaded, setImageLoaded] = useState(false);

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
                  // Update this to not use setImageLoaded
                  onError={() => setImageError(true)}
                />
              )}
              <span className="text-xl font-bold text-[#283618]">Kicau Burung</span>
            </div>
          </Link>
        </div>
        
        {/* Rest of your component */}
      </div>
    </header>
  );
};

export default Header;