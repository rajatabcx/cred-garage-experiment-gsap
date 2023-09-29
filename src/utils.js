export const preloadImages = (frameCount, imageURLFunc) => {
  const imagesArr = [];
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = imageURLFunc(i);
    img.style.objectFit = 'contain';
    imagesArr.push(img);
  }
  return imagesArr;
};
