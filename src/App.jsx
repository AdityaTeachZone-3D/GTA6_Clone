import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import gsap from "gsap";

const App = () => {
  const [showContent, setshowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      yoyo: true,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setshowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;
    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "expo.easeInOut",
    });

    gsap.to(".sky", {
      rotate: 0,
      duration: 2,
      delay: "-2",
      ease: "expo.easeInOut",
    });
    gsap.to(".bg", {
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.4,
      x: "-50%",
      bottom: "-30%",
      transformOrigin: "50% 50%",
      rotate: 0,
      duration: 2,
      delay: "-.9",
      ease: "expo.easeInOut",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 1,
      delay: "-.3",
      ease: "expo.easeInOut",
    });


    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
        duration: 0.5,
        ease: "power4.easeInOut",
      });
      gsap.to(".sky", {
        x: xMove,
        duration: 0.5,
        ease: "power4.easeInOut",
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute w-full left-0 top-0 z-10 px-10 py-10 ">
              <div className="logo flex gap-6">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-15 h-1 bg-white"></div>
                  <div className="line w-8 h-1 bg-white"></div>
                  <div className="line w-5 h-1 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[10px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>
            <div className="imagesdiv relative w-full h-screen overflow-hidden">
              <img
                className="sky absolute scale-[1.7] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="bg absolute scale-[1] rotate-[-3deg] top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text absolute flex flex-col gap-2 text-white top-20 left-1/2 -translate-x-1/2 scale-[2] rotate-[-10deg]">
                <h1 className="text-[10rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[10rem] leading-none ml-20">auto</h1>
                <h1 className="text-[10rem] leading-none -ml-40">theft</h1>
              </div>
              <img
                className="character absolute h-[600px] -bottom-[100%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmnavbar absolute text-white bottom-0 left-0 w-full px-10 py-10 bg-gradient-to-t from-black to-transparent">
              {/* <div className="flex  gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div> */}
              <img
                className="fixed h-[55px] -mt-7 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen flex px-10 items-center justify-center bg-black overflow-hidden">
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="image absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[30%]">
                <h1 className="text-6xl">Still Running,</h1>
                <h1 className="text-6xl">Not Hunting</h1>
                <p className="text-xl mt-10 font-[Helvetica_Now_Display]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Itaque molestias natus eligendi nostrum fugiat dolores culpa,
                  harum quia praesentium consectetur quos, libero
                  exercitationem!
                </p>
                <p className="text-xl mt-3 font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  dicta et necessitatibus placeat sequi quae mollitia tempore
                  dolorem nemo debitis? Obcaecati, ratione voluptate, et
                  laudantium earum animi pariatur enim fugit laboriosam
                  asperiores quo, non ab.
                </p>
                <p className="text-xl mt-10 font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="mt-3 bg-yellow-500 px-5 py-5 text-black rounded-tr-xl rounded-bl-4xl rounded-br-xl cursor-pointer active:scale-[1.1]">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
