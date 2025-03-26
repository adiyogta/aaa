"use client"

import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

const Footer = () => {
  return (
    <footer className="bg-[#283618] py-12 px-6 text-[#FEFAE0]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Link href="/">
                <CldImage
                  src="lg_kicau_burung_rpwxal"
                  alt="Kicau Burung Logo"
                  width={120}
                  height={40}
                  className="mb-2 p-2 bg-white rounded-full"
                />
              </Link>
              <p className="text-sm text-[#FEFAE0] opacity-80 mb-4">
                📢 Kicau Burung – Sumber terpercaya untuk pecinta burung kicau.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-[#FEFAE0] opacity-80 hover:opacity-100">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Rest of social icons remain unchanged */}
            </div>
          </div>
          
          {/* Rest of the footer content remains unchanged */}
        </div>
        
        <div className="pt-8 mt-8 border-t border-[#606C38] text-sm text-[#FEFAE0] opacity-80">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Kicau Burung. Hak Cipta Dilindungi.</p>
            <div className="mt-4 md:mt-0">
              <Link href="/syarat-ketentuan" className="hover:text-[#DDA15E] mr-4">Syarat Penggunaan</Link>
              <Link href="/kebijakan-privasi" className="hover:text-[#DDA15E] mr-4">Kebijakan Privasi</Link>
              <Link href="/kebijakan-cookie" className="hover:text-[#DDA15E]">Kebijakan Cookie</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;