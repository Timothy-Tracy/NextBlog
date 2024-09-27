'use client';
import { RoughNotation } from 'react-rough-notation';
import { allPages, Page } from "contentlayer/generated";
import { SpotlightButton } from './spotlight-button/SpotlightButton';
import { Hero } from './Hero';

export function AboutMe() {
    "use client";

    const aboutMe = allPages
      .find(p => p.slug == 'about-me')?.body.raw;

    return (
      <div className="pt-6">
        
        <Hero></Hero>
        <p className="pt-5 text-lg text-gray-600 dark:text-gray-300">
          {aboutMe}
        </p>
        <p className="pt-10 text-lg leading-7 text-slate-600 dark:text-slate-300">
          This is my place for{' '}
          <RoughNotation
            animate={true}
            type="box"
            show={true}
            color="#DE1D8D"
            animationDelay={1000}
            animationDuration={2500}
          >
            thoughts, reflections & everything&nbsp;
          </RoughNotation>
          in between. Have a good read!{' '}
        </p>
        <SpotlightButton>
          button
        </SpotlightButton>
      </div>
    );
  }