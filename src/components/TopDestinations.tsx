"use client"

import Link from 'next/link';
import { useState } from 'react';
import CloudinaryImage from './CloudinaryImage';

const birdCategories = [
  { 
    id: 1, 
    name: 'Burung Murai Batu', 
    description: 'Suara khas Murai Batu untuk pemasteran dan terapi.', 
    image: 'kicau-burung/murai-batu',
    count: 24
  },
  { 
    id: 2, 
    name: 'Burung Kacer', 
    description: 'Kumpulan suara burung Kacer terbaik untuk melatih kicauan.', 
    image: 'kicau-burung/kacer',
    count: 18
  },
  { 
    id: 3, 
    name: 'Burung Cucak Ijo', 
    description: 'Download suara Cucak Ijo gacor untuk meningkatkan performa burung Anda.', 
    image: 'kicau-burung/cucak-ijo',
    count: 15
  },
  { 
    id: 4, 
    name: 'Burung Kenari', 
    description: 'Koleksi suara Kenari juara untuk referensi lomba dan pemasteran.', 
    image: 'kicau-burung/kenari',
    count: 20
  },
  { 
    id: 5, 
    name: 'Burung Jalak Suren', 
    description: 'Suara Jalak Suren gacor dengan kualitas audio premium.', 
    image: 'kicau-burung/jalak-suren',
    count: 12
  },
  { 
    id: 6, 
    name: 'Burung Lovebird', 
    description: 'Suara Lovebird ngekek panjang untuk pancingan dan terapi.', 
    image: 'kicau-burung/lovebird',
    count: 16
  },
];

const BirdCategoryCard = ({ name, description, image, count }: { name: string; description: string; image: string; count: number }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-[#FEFAE0] border border-[#DDA15E]/30 flex flex-col group">
      <div className="h-48 md:h-56 relative overflow-hidden">
        <CloudinaryImage
          src={image}
          alt={name}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          crop="fill"
        />
        <div className="absolute top-3 right-3 bg-[#283618] text-[#FEFAE0] rounded-full px-2 py-1 text-xs font-medium">
          {count} suara
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-[#283618] mb-1">{name}</h3>
          <p className="text-[#606C38] text-sm">{description}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xs text-[#606C38] flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
            Kualitas HD
          </span>
          <button className="text-xs text-[#DDA15E] hover:text-[#283618] transition-colors duration-200 flex items-center">
            Dengarkan
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const TopDestinations = () => {
  const [filter, setFilter] = useState('Populer');
  const [showAll, setShowAll] = useState(false);
  
  const displayedCategories = showAll ? birdCategories : birdCategories.slice(0, 3);
  
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#283618] mb-2">Kategori Populer</h2>
            <p className="text-[#606C38] text-sm md:text-base max-w-xl">
              Temukan koleksi suara burung berkualitas tinggi untuk berbagai kebutuhan pemasteran dan terapi
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="relative inline-block w-40">
              <select 
                className="appearance-none w-full bg-[#FEFAE0] border border-[#DDA15E] rounded-full py-2 pl-4 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#DDA15E] text-[#283618]"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option>Populer</option>
                <option>Terbaru</option>
                <option>Burung Kecil</option>
                <option>Burung Besar</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#606C38]">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <BirdCategoryCard
              key={category.id}
              name={category.name}
              description={category.description}
              image={category.image}
              count={category.count}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="border-2 border-[#DDA15E] text-[#283618] rounded-full px-8 py-3 text-sm font-medium hover:bg-[#DDA15E] hover:text-[#FEFAE0] transition-colors duration-300 flex items-center mx-auto"
          >
            {showAll ? (
              <>
                Tampilkan Lebih Sedikit
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
              </>
            ) : (
              <>
                Jelajahi Semua Suara Burung
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;