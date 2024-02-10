import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const cacheImages =async (images:string[]) => {
  const promises = await images.map((src) =>{
    return new Promise(function(resolve, reject){
      const img = new Image();

      img.src = src;
      img.onload = () => resolve();
      img.onerror = reject;
    })
  })

  await Promise.all(promises);
}