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

              <div className="flex items-center" id="store-nav-content">
                <LinkComponent
                  linkhref="/"
                  classname="pl-3 inline-block no-underline hover:text-black"
                  linkname=""
                  datatest="Index Filter"
                  aria-label="Index Filter"
                  target="_self"
                >
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                  </svg>
                </LinkComponent>

                <LinkComponent
                  linkhref="/"
                  classname="pl-3 inline-block no-underline hover:text-black"
                  linkname=""
                  datatest="Index Search"
                  aria-label="Index Search"
                  target="_self"
                >
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                  </svg>
                </LinkComponent>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}
