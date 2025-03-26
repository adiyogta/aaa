"use client"

import { CldImage } from 'next-cloudinary';

interface CloudinaryImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
  crop?: 'fill' | 'scale' | 'fit' | 'pad' | 'thumb';
}

const CloudinaryImage = ({
  src,
  alt,
  width,
  height,
  sizes,
  className,
  priority = false,
  crop = 'fill'
}: CloudinaryImageProps) => {
  return (
    <CldImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      priority={priority}
      crop={crop}
      loading={priority ? 'eager' : 'lazy'}
    />
  );
};

export default CloudinaryImage;