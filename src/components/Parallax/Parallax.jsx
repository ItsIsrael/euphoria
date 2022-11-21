import { ParallaxBanner } from 'react-scroll-parallax';
const ParralaxComponent = () => {
  return (
    <ParallaxBanner
      layers={[
        { image: '../../images/parallax/banner-background.jpg', speed: -20 },
        { image: '../../images/parallax/banner-foreground.png', speed: -10 },
      ]}
      className="aspect-[2/1]"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-8xl text-white font-thin">Hello kl!</h1>
      </div>
    </ParallaxBanner>
  );
};

export default ParralaxComponent;