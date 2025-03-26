"use client"

// Remove the Image import if it's not being used
import { useState } from 'react';
import CloudinaryImage from './CloudinaryImage';

const HeroSection = () => {
  return (
    <section className="py-8 md:py-16 bg-[#FEFAE0]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="mb-8 md:mb-0 md:pr-8 md:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#283618]">
              Temukan Keindahan Kicauan Burung <span className="text-[#606C38]">di Seluruh Dunia</span>
            </h1>
            <p className="text-[#283618] mb-6 text-sm md:text-base">
              Dapatkan koleksi suara burung terbaik dari berbagai belahan dunia. Nikmati suara merdu burung untuk relaksasi, terapi, dan pemasteran burung kicau Anda. Jelajahi artikel eksklusif tentang dunia burung, mulai dari panduan perawatan hingga tips meningkatkan kualitas kicauan burung kesayangan Anda.
            </p>
            <button className="bg-[#283618] text-[#FEFAE0] px-6 py-3 rounded-full hover:bg-[#606C38] w-full md:w-auto">
              Dengarkan & Unduh Suara Burung Favorit Anda
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-2 md:w-1/2">
            <div className="aspect-[3/4] bg-[#DDA15E] rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-[#FEFAE0]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-2">
              <div className="bg-[#DDA15E] rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-[#FEFAE0]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              </div>
              <div className="bg-[#DDA15E] rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-[#FEFAE0]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;