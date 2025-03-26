"use client"

import { useState, useEffect } from 'react';
import { CldImage, CldImageProps } from 'next-cloudinary';

interface CloudinaryImageProps extends Omit<CldImageProps, 'onLoad' | 'onError'> {
  fallbackText?: string;
}

const CloudinaryImage = ({ 
  fallbackText = 'Gambar tidak tersedia', 
  className = '',
  ...props 
}: CloudinaryImageProps) => {
  // Use state but initialize with null to prevent hydration mismatch
  const [imageLoaded, setImageLoaded] = useState<boolean | null>(null);
  const [imageError, setImageError] = useState<boolean | null>(null);
  
  // Use useEffect to set initial states on client-side only
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, []);

  // Don't render anything meaningful during SSR to prevent hydration mismatch
  if (imageLoaded === null || imageError === null) {
    return (
      <div className={`bg-[#DDA15E] ${props.width && props.height ? '' : 'h-full w-full'}`} 
           style={props.width && props.height ? {width: props.width, height: props.height} : {}}>
      </div>
    );
  }

  if (imageError) {
    return (
      <div className={`bg-[#DDA15E] flex flex-col items-center justify-center ${props.width && props.height ? '' : 'h-full w-full'}`} 
           style={props.width && props.height ? {width: props.width, height: props.height} : {}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#FEFAE0]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        <p className="text-[#FEFAE0] text-sm mt-2">{fallbackText}</p>
      </div>
    );
  }

  return (
    <div className="relative" style={props.width && props.height ? {width: props.width, height: props.height} : {height: '100%', width: '100%'}}>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#DDA15E] to-[#e0b77a] animate-pulse"></div>
      )}
      <CldImage
        {...props}
        className={`${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
    </div>
  );
};

export default CloudinaryImage;