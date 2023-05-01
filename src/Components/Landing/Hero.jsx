import HeroImg from "../../Assests/hero.png";

function Hero() {
  return (
    <div className="w-full h-[400px] mb-[4rem]">
      <img
        src={HeroImg}
        alt="Hero view"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default Hero;
