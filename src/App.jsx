import First from './First';
import Second from './Second';

// Resources
// https://www.apple.com/v/iphone-15-pro/a/images/overview/chip/chip_performance_hw__6ytcie74ao22_large.png
// https://www.apple.com/v/iphone-15-pro/a/images/overview/action-button/hw__cqhc5pponrhy_medium.png

function App() {
  return (
    <>
      <section className='section'>
        <video
          className='video'
          autoPlay
          muted
          playsInline={true}
          preload='metadata'
          poster='https://web-images.credcdn.in/v2/_next/assets/images/garage/desktop/desktop-hero-fold-poster.png?tr=q-95'
        >
          <source
            src='https://web-images.credcdn.in/v2/_next/assets/videos/garage/desktop-hero-video.mp4'
            type='video/mp4'
          />
        </video>
      </section>
      <First />
      <Second />
    </>
  );
}

export default App;
