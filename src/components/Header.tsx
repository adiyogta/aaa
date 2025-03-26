"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';

const Header = () => {
  const [imageError, setImageError] = useState(false);
  const [cloudinaryAvailable, setCloudinaryAvailable] = useState(true);

  useEffect(() => {
    // Check if Cloudinary is configured
    setCloudinaryAvailable(!!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#FEFAE0] py-4 px-4 sm:px-6 border-b border-[#DDA15E]">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <div className="flex items-center">
              {imageError || !cloudinaryAvailable ? (
                <div className="w-10 h-10 mr-2 bg-[#DDA15E] rounded-full flex items-center justify-center">
                  <span className="text-[#FEFAE0] text-xs font-bold">KB</span>
                </div>
              ) : (
                <CldImage
                  src="lg_kicau_burung_rpwxal"
                  alt="Kicau Burung Logo"
                  width={40}
                  height={40}
                  className="mr-2"
                  priority={true}
                  onError={() => setImageError(true)}
                />
              )}
              <span className="text-xl font-bold text-[#283618]">Kicau Burung</span>
            </div>
          </Link>
        </div>
        
        {/* Rest of your header component */}
      </div>
      
      {/* Mobile menu */}
    </header>
  );
};

export default Header;