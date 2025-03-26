"use client"

import { useState, useEffect } from 'react';

const birdSounds = [
  { id: 1, name: 'Murai Batu Gacor Juara Nasional', duration: '3:45', file: '/sounds/murai-batu.mp3', keywords: ['kicau burung juara nasional', 'download suara kicau burung gacor'] },
  { id: 2, name: 'Kacer Terpopuler di Indonesia', duration: '2:30', file: '/sounds/kacer.mp3', keywords: ['burung kicau terpopuler di indonesia', 'kicau burung terbaik'] },
  { id: 3, name: 'Cucak Ijo Masteran Hutan Asli', duration: '4:15', file: '/sounds/cucak-ijo.mp3', keywords: ['suara kicau burung untuk masteran', 'kicau burung hutan asli'] },
  { id: 4, name: 'Jalak Suren Untuk Pancingan', duration: '3:20', file: '/sounds/jalak-suren.mp3', keywords: ['kicau burung buat pancingan', 'kicau burung mp3 download gratis'] },
  { id: 5, name: 'Kenari Gacor Untuk Lomba', duration: '2:55', file: '/sounds/kenari.mp3', keywords: ['burung kicau untuk lomba', 'suara kicau burung terjernih'] },
];

const Newsletter = () => {
  const [currentSound, setCurrentSound] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio();
    setAudioElement(audio);

    // Cleanup on unmount
    return () => {
      if (audio) {
        audio.pause();
        audio.src = '';
      }
    };
  }, []);

  const togglePlay = (id: number) => {
    if (!audioElement) return;

    if (currentSound === id) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      if (isPlaying) {
        audioElement.pause();
      }
      const sound = birdSounds.find(s => s.id === id);
      if (sound) {
        audioElement.src = sound.file;
        audioElement.play();
        setCurrentSound(id);
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="py-16 px-6 bg-[#283618]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FEFAE0]">
          Download Suara Kicau Burung Gacor MP3 Gratis
        </h2>
        
        <p className="text-[#FEFAE0] mb-6 opacity-90">
          Koleksi suara burung kicau untuk masteran, lomba, dan terapi relaksasi. 
          Dengarkan suara kicau burung untuk menenangkan pikiran atau gunakan sebagai pancingan agar burung Anda cepat gacor.
        </p>
        
        <div className="bg-[#FEFAE0] rounded-lg p-4 mb-6">
          <div className="space-y-3">
            {birdSounds.map((sound) => (
              <div key={sound.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#DDA15E]/20">
                <div className="flex items-center">
                  <button 
                    onClick={() => togglePlay(sound.id)}
                    className="w-10 h-10 rounded-full bg-[#DDA15E] flex items-center justify-center mr-3 text-[#FEFAE0]"
                    aria-label={isPlaying && currentSound === sound.id ? `Pause ${sound.name}` : `Play ${sound.name}`}
                  >
                    {isPlaying && currentSound === sound.id ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                      </svg>
                    )}
                  </button>
                  <div className="text-left">
                    <h3 className="font-medium text-[#283618]">{sound.name}</h3>
                    <p className="text-xs text-[#606C38]">
                      Durasi: {sound.duration} | 
                      <span className="ml-1 italic">
                        {sound.keywords.join(', ')}
                      </span>
                    </p>
                  </div>
                </div>
                <a 
                  href={sound.file} 
                  download 
                  className="text-[#606C38] hover:text-[#283618]"
                  aria-label={`Download ${sound.name}`}
                  title={`Download suara ${sound.name} MP3 gratis`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center">
          <a href="/suara-burung" className="bg-[#DDA15E] text-[#FEFAE0] px-6 py-3 rounded-full hover:bg-[#606C38] flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
            </svg>
            Suara Burung Kicau 1 Jam Nonstop
          </a>
        </div>
        
        <div className="mt-6 text-xs text-[#FEFAE0] opacity-70">
          <p>
            Kicau burung untuk terapi relaksasi | Suara kicau burung pikat ampuh | 
            Burung kicau paling mahal | Burung kicau untuk pemula | 
            Rahasia perawatan burung kicau biar gacor
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;