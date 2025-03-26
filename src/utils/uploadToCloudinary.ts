import cloudinary from './cloudinary';

export async function uploadToCloudinary(file: File, folder = 'kicau-burung') {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      try {
        const base64data = reader.result as string;
        const result = await cloudinary.uploader.upload(base64data, {
          folder,
        });
        resolve(result.public_id);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
}