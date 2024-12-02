import {
  curve,
  subzlogo,
  heroBackground,
  robot,
  herogolf,
  background,
  clubswalking,
} from "../assets";
import Section from "./section";
import Button from "./Button";

const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] bg-gradient-to-r-1 "
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero">
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center text-n-2 mb-[2rem] md:mb-4 lg:mb:[2rem]">
          <h1 className="h1 mb-6 text-center relative overflow-hidden">
            <span className="inline-block font-bold relative">Swing into</span>{" "}
            <span
              className="inline-block relative text-transparent bg-clip-text bg-gradient-to-r from-color-6 to-color-2 animate-wave"
              style={{
                animation: "wave 2s infinite ease-in-out",
              }}>
              Flexibility
            </span>
            <br />
            <span className="inline-block relative text-transparent bg-clip-text bg-gradient-to-r from-color-6 to-color-2 font-bold text-5xl">
              SUBZZ
              <img
                src={curve}
                alt="Golf Swing Curve"
                className="absolute top-full left-0 w-full xl:-mt-2"
              />
            </span>
          </h1>

          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-5 lg:mb-8 leading-relaxed">
            Say goodbye to{" "}
            <span className="font-bold text-gradient-to-r from-color-6 to-color-2">
              upfront costs
            </span>{" "}
            and hello to{" "}
            <span className="text-gradient-to-r from-color-6 to-color-2">
              smarter spending
            </span>
            . With <span className="font-bold text-color-2">Subzz</span>, you
            can enjoy your favorite products while
            <span className="font-bold"> spreading the cost</span> over time.
            Shop now and pay at your pace—it’s flexibility made for you.
          </p>
        </div>
        <Button
          className="hidden lg:flex max-w-80 m-auto transition-all transform duration-300 hover:scale-110 hover:bg-gradient-to-r from-color-6 to-color-2 hover:text-white px-6 py-3 text-lg lg:text-xl xl:text-2xl"
          href="#login">
          Get Started
        </Button>
      </div>
      <div className="relative max-w-[23rem] mx-auto md:max-w-7xl xl:mb-24">
        <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
          <div className="relative bg-n-1 rounded-[1rem]">
            <div className="h-[1.4rem] bg-n-2 rounded-t-[0.9rem]" />

            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
              <img
                src={clubswalking}
                className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[24%]"
                width={1024}
                height={590}
                alt="AI"
              />
            </div>
          </div>
        </div>
        <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[137%] lg:-top-[74%]">
          <img
            src={herogolf}
            className="w-full"
            width={1440}
            height={1800}
            alt="hero"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
