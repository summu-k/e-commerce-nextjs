import React from 'react';
import LinkComponent from '../component/actionableButtons/LinkComponent';

export default function HeroSection() {
  return (
    <>
      <section
        className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80)`,
        }}
      >
        <div className="container mx-auto md:h-96 lg:h-96">
          <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
            <p className="text-black text-2xl my-4">Stripy Zig Zag Jigsaw Pillow and Duvet Set</p>
            <LinkComponent
              linkhref="/shop"
              classname="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black mb-4"
              linkname="Explore Products"
              datatest="Explore Products"
              aria-label="Explore Products"
              target="_self"
            />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container mx-auto flex items-center flex-wrap">
          <nav id="store" className="w-full z-30 top-0 px-6 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 pt-6">
              <LinkComponent
                linkhref="/"
                classname="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                linkname="Store"
                datatest="Store"
                aria-label="Explore Store"
                target="_self"
              />
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}
