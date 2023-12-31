import { preloadImages } from './utils';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const frameCount = 162;

const currentFrame = (index) =>
  `https://web-images.credcdn.in/v2/_next/assets/images/garage/desktop/track_${
    index < 10 ? `0${index}` : index
  }.png`;

const phone = {
  frame: 0,
};

function First() {
  const [images, setImages] = useState([]);
  const canvasRef = useRef(null);

  const render = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    ctx.drawImage(
      images[phone.frame],
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
      gsap.to(phone, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'steps(' + frameCount + ')',
        scrollTrigger: {
          scrub: 0.5,
          start: 'top top',
          end: '+=180%',
          trigger: '.canvas',
          pin: true,
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
      className='canvas'
      ref={canvasRef}
    >
      Your browser does not support the canvas element.
    </canvas>
  );
}

export default First;
