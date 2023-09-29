import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { preloadImages } from './utils';

gsap.registerPlugin(ScrollTrigger);

const frameCount = 274;

const currentFrame = (index) =>
  `https://web-images.credcdn.in/v2/_next/assets/images/garage/desktop/bigFeatures_${
    index < 10 ? `0${index}` : index
  }.jpg`;

const car = {
  frame: 0,
};

function Second() {
  const [images, setImages] = useState([]);
  const canvasRef = useRef(null);

  const render = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const ptrn = ctx.createPattern(images[car.frame], 'no-repeat');
    ctx.fillStyle = ptrn;
    ctx.drawImage(
      images[car.frame],
      0,
      0,
      window.innerWidth,
      window.innerHeight
    );
  };

  useEffect(() => {
    setImages(preloadImages(frameCount, currentFrame));
  }, []);

  useEffect(() => {
    if (images.length) {
      images[0].onload = function () {
        render();
      };
      gsap.to(car, {
        frame: frameCount - 1,
        snap: 'frame',
        scrollTrigger: {
          trigger: '.canvas2',
          scrub: 0.5,
          pin: true,
          start: 'top top',
          end: '+=250%',
        },
        onUpdate: render,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  return (
    <canvas
      height={window.innerHeight}
      width={window.innerWidth}
      className='canvas2'
      ref={canvasRef}
    >
      Your browser does not support the canvas element.
    </canvas>
  );
}

export default Second;
