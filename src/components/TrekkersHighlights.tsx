"use client"

import Image from 'next/image';

const TrekkersHighlights = () => {
  return (
    <section className="py-12 px-6 bg-[#FEFAE0]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-[#283618]">Rekomendasi Produk untuk Pecinta Burung 🛒</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#DDA15E] overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-[#FEFAE0]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#283618] text-sm mb-4">
                Dapatkan perlengkapan terbaik untuk merawat burung kesayangan Anda.
              </p>
              <ul className="space-y-2 text-sm text-[#283618]">
                <li className="flex items-center">
                  <span className="text-[#606C38] mr-2">🔹</span>
                  <span>Sangkar Burung Berkualitas – </span>
                  <a href="#" className="text-[#DDA15E] ml-1 hover:underline">Lihat Produk</a>
                </li>
                <li className="flex items-center">
                  <span className="text-[#606C38] mr-2">🔹</span>
                  <span>Pakan Burung Berkualitas Tinggi – </span>
                  <a href="#" className="text-[#DDA15E] ml-1 hover:underline">Lihat Produk</a>
                </li>
                <li className="flex items-center">
                  <span className="text-[#606C38] mr-2">🔹</span>
                  <span>Vitamin & Suplemen Burung – </span>
                  <a href="#" className="text-[#DDA15E] ml-1 hover:underline">Lihat Produk</a>
                </li>
                <li className="flex items-center">
                  <span className="text-[#606C38] mr-2">🔹</span>
                  <span>Aksesoris & Mainan Burung – </span>
                  <a href="#" className="text-[#DDA15E] ml-1 hover:underline">Lihat Produk</a>
                </li>
                <li className="flex items-center">
                  <span className="text-[#606C38] mr-2">🔹</span>
                  <span>Spray Anti Kutu & Perawatan Bulu – </span>
                  <a href="#" className="text-[#DDA15E] ml-1 hover:underline">Lihat Produk</a>
                </li>
                <li className="flex items-center">
                  <span className="text-[#606C38] mr-2">🔹</span>
                  <span>Alat Pemasteran Suara Burung – </span>
                  <a href="#" className="text-[#DDA15E] ml-1 hover:underline">Lihat Produk</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-[#DDA15E] rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center text-[#FEFAE0]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
            <div className="absolute bottom-4 right-4 bg-[#FEFAE0] rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#283618]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <button className="border border-[#DDA15E] text-[#283618] rounded-full px-6 py-2 text-sm hover:bg-[#DDA15E] hover:text-[#FEFAE0]">
            Jelajahi Semua Produk →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrekkersHighlights;