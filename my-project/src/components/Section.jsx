import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`}>
      {children}

      {/* Left Golf-Themed Line */}
      <div className="hidden absolute top-0 left-5 w-1 h-full bg-gradient-to-b from-color-6 to-color-2 md:block lg:left-7.5 xl:left-10">
        <div className="absolute top-0 left-[-0.5rem] w-4 h-4 bg-green-700 rounded-full"></div>
      </div>

      {/* Right Golf-Themed Line */}
      <div className="hidden absolute top-0 right-5 w-1 h-full bg-gradient-to-b from-color-6 to-color-2 md:block lg:right-7.5 xl:right-10">
        <div className="absolute top-0 right-[-0.5rem] w-4 h-4 bg-green-700 rounded-full"></div>
      </div>

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
