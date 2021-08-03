import React, { FC } from 'react';
import Link from 'next/link';

type ComponentProps = React.PropsWithChildren<{}>;

const Footer: FC<ComponentProps> = ({ children }) => (
  <>
    <footer className="container mx-auto bg-white py-8 mt-8 border-t border-gray-400">
      <div className="container flex px-3 py-8 ">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full lg:w-1/2 ">
            <div className="px-3 md:px-0">
              <p className="font-bold text-gray-900">About</p>
              <p className="py-4">
                No matter how much demand your product generates, it needs the right infrastructure to scale. Whether
                you&apos;re struggling with unmet SLOs, growing infra costs or toil — we can help.
              </p>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
            <div className="px-3 md:px-0">
              <p className="font-bold text-gray-900">Social</p>
              <ul className="list-reset items-center pt-3">
                <li>
                  <Link href="https://www.proximity.tech/">
                    <a
                      className="inline-block no-underline hover:text-black hover:underline py-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Proximity Tech
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {children}
  </>
);

export default Footer;
