import { subzlogo } from "../assets";
import { navigation } from "../constants";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "../design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-1 lg:bg-n-1/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-1" : "bg-n-1/90 backdrop-blur-sm"
      }`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w=[12rem] xl:mr-8" href="#hero">
          <img src={subzlogo} width={190} height={40} alt="BrainWave"></img>
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-1 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="group flex space-x-4 relative z-2 flex-col items-center justify-cent m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative font-code text-2xl uppercase text-n-5 transition-all duration-200 ease-in-out hover:text-gradient-to-t-5 hover:bg-gradient-to-r-1 rounded-full ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-4 py-2 md:py-2 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "bg-gradient-to-r-1 text-n-6/80 z-10" // active state background color change
                    : "lg:text-n-5/80"
                } lg:leading-5 lg:hover:text-color-6 xl:px-12
             w-auto inline-flex justify-center items-center
             // Hover scale and prevent layout shifts
             transform transition-transform duration-200 hover:scale-110 origin-center`}>
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-5/80 transition-colors hover:text-n-2 lg:block">
          New Account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign In
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
