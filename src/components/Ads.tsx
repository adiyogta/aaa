"use client"

import { useEffect, useRef } from 'react';

interface AdsProps {
  className?: string;
  format?: 'sidebar' | 'banner';
}

const Ads = ({ className = '', format = 'sidebar' }: AdsProps) => {
  const adsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create script elements
    const scriptConfig = document.createElement('script');
    scriptConfig.type = 'text/javascript';
    scriptConfig.innerHTML = `
      atOptions = {
        'key' : '907e32070d8e09ab33c1ffcdc5edb6ef',
        'format' : 'iframe',
        'height' : ${format === 'sidebar' ? 600 : 250},
        'width' : ${format === 'sidebar' ? 160 : 300},
        'params' : {}
      };
    `;

    const scriptInvoke = document.createElement('script');
    scriptInvoke.type = 'text/javascript';
    scriptInvoke.src = '//www.highperformanceformat.com/907e32070d8e09ab33c1ffcdc5edb6ef/invoke.js';
    scriptInvoke.async = true;

    // Append scripts to the container
    if (adsRef.current) {
      adsRef.current.appendChild(scriptConfig);
      adsRef.current.appendChild(scriptInvoke);
    }

    // Cleanup function
    return () => {
      if (adsRef.current) {
        if (adsRef.current.contains(scriptConfig)) {
          adsRef.current.removeChild(scriptConfig);
        }
        if (adsRef.current.contains(scriptInvoke)) {
          adsRef.current.removeChild(scriptInvoke);
        }
      }
    };
  }, [format]);

  return (
    <div 
      ref={adsRef} 
      className={`ads-container ${className} ${format === 'sidebar' ? 'w-[160px] h-[600px]' : 'w-[300px] h-[250px]'}`}
      aria-label="Advertisement"
    />
  );
};

export default Ads;