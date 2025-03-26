"use client"

import Image from 'next/image';
import Link from 'next/link';

const LatestStories = () => {
  return (
    <section className="py-8 md:py-12 bg-[#FEFAE0]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#283618]">Artikel Terbaru</h2>
        </div>
        
        <div className="space-y-6">
          <div className="bg-[#DDA15E] aspect-[16/9] rounded-lg mb-4 relative">
            <div className="absolute inset-0 flex items-center justify-center text-[#FEFAE0]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
          </div>
          
          <div>
            <div className="mb-1">
              <span className="text-xs text-[#606C38]">Panduan Perawatan</span>
            </div>
            <h3 className="text-lg font-medium mb-2 text-[#283618]">
              Cara Merawat Murai Batu Agar Rajin Berkicau
            </h3>
            <p className="text-[#283618] text-sm mb-2">
              Pelajari cara merawat Murai Batu agar selalu dalam kondisi prima dan rajin berkicau setiap hari.
            </p>
            <div className="flex items-center text-xs text-[#606C38]">
              <span>📅 25 Maret 2025</span>
              <span className="mx-2">•</span>
              <span>⏳ 5 Menit Baca</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-20 h-20 bg-[#DDA15E] rounded-lg relative">
                <div className="absolute inset-0 flex items-center justify-center text-[#FEFAE0]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="mb-1">
                  <span className="text-xs text-[#606C38]">Tips Pemasteran</span>
                </div>
                <h3 className="text-sm font-medium text-[#283618]">
                  Teknik Pemasteran Burung Kacer Agar Cepat Gacor
                </h3>
                <div className="flex items-center text-xs text-[#606C38] mt-1">
                  <span>📅 22 Maret 2025</span>
                  <span className="mx-2">•</span>
                  <span>⏳ 4 Menit Baca</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-20 h-20 bg-[#DDA15E] rounded-lg relative">
                <div className="absolute inset-0 flex items-center justify-center text-[#FEFAE0]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="mb-1">
                  <span className="text-xs text-[#606C38]">Rekomendasi Pakan</span>
                </div>
                <h3 className="text-sm font-medium text-[#283618]">
                  Makanan Terbaik untuk Burung Lovebird Agar Warna Bulu Lebih Cerah
                </h3>
                <div className="flex items-center text-xs text-[#606C38] mt-1">
                  <span>📅 18 Maret 2025</span>
                  <span className="mx-2">•</span>
                  <span>⏳ 3 Menit Baca</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <button className="border border-[#DDA15E] text-[#283618] rounded-full px-6 py-2 text-sm hover:bg-[#DDA15E] hover:text-[#FEFAE0]">
              Baca Artikel Lainnya →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestStories;