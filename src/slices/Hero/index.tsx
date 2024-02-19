"use client";
import { useEffect, useRef } from "react";
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { gsap } from "gsap";
import { components } from "..";
import Bounded from "@/components/Bounded";
import Shapes from "./Shapes"

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const components = useRef(null)

    useEffect(()=>{
      let ctx = gsap.context(()=> {
       const tl = gsap.timeline()

       tl.fromTo(
        ".name-animation",
        {
        x: -100, opacity:0, rotate: -10
        },
      {
        x:0,
        opacity: 1,
        rotate: 0,
        ease: "elastic.out(1,0.3)",
        duration: 1,
        transformOrigin: "left top",
        delay:0.5,
        stagger: {
          each: 0.1,
          from: "random",
        }
      }
       );

       tl.fromTo(
        ".job-title", {
          y:20,
          opacity:0,
          scale:1.2,
        }, {
          opacity:1,
          y:0,
          duration:1,
          scale:1,
          ease: "elastic.out(1,0.3)",
        }
       )


      }, components);
      return () => ctx.revert();
    }, []);

  
  const renderLetters = (name: KeyTextField, key: string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span key={index} className={`name-animation name-animation-${key} inline-block opacity-0`}>
        {letter}
      </span>
    ));
  };

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={components}
    >
      <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
        <Shapes />
        <div className="col-start-1 md:row-start-1">
          <h1
            className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter"
            aria-label={
              slice.primary.first_name + "  + slice.primary.last_name"
            }
          >
            <span className="block text-slate-300">
              {renderLetters(slice.primary.first_name, "first")}
            </span>
            <span className="-mt-[.2em] block text-slate-500">
            {renderLetters(slice.primary.last_name, "last")}
            </span>
            <span className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 
            bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent 
            opacity-0 md:text-4xl">
              {slice.primary.tag_line}
            </span>
          </h1>
        </div>
      </div>
    </Bounded>
  );
};


export default Hero;