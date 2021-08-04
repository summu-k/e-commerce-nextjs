import React, { FC } from 'react';
import LinkComponent from '../component/actionableButtons/LinkComponent';

type ComponentProps = React.PropsWithChildren<{}>;

const Footer: FC<ComponentProps> = ({ children }) => (
  <>
    <footer className="container mx-auto bg-white py-8 mt-8 border-t border-gray-400">
      <div className="container flex px-3 py-8 ">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full lg:w-1/2 ">
            <div className="px-3 md:px-0">
              <p className="font-bold text-gray-900" data-test-py="footerBottom">
                About
              </p>
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
                  <LinkComponent
                    linkHref="https://www.proximity.tech/"
                    anchorClassName="inline-block no-underline hover:text-black hover:underline py-1"
                    linkName="Proximity Tech"
                    dataTest="back-to-products"
                    ariaLabel="back-to-products"
                    target="_blank"
                  />
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
