import { curve } from "../assets";
import Section from "./section";

const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] bg-gradient-to-r-1"
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero">
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center text-n-2 mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="h1 mb-6 text-center relative overflow-hidden">
            <span
              className="inline-block font-bold relative"
              style={{
                fontFamily: "'Pacifico', cursive", // Swingy font
                fontSize: "2.5rem",
                transform: "rotate(-5deg)", // Adds a slight swing effect
              }}>
              Swing
            </span>{" "}
            <span
              className="inline-block relative text-transparent bg-clip-text bg-gradient-to-r from-color-6 to-color-2 animate-wave"
              style={{
                animation: "wave 2s infinite ease-in-out",
              }}>
              into Flexibility with
            </span>
            <br />
            <span className="inline-block relative text-transparent bg-clip-text bg-gradient-to-r from-color-6 to-color-2 font-bold text-4xl">
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
            <span className="font-bold">spreading the cost</span> over time.
            Shop now and pay at your pace—it’s flexibility made for you.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
