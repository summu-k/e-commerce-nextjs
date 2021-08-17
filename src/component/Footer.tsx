import React, { FC, useState } from 'react';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { showCompareModal } from '../../redux/addToCompareSlice';
import LinkComponent from '../component/actionableButtons/LinkComponent';
import type { RootState } from '../../redux/store';

type ComponentProps = React.PropsWithChildren<{}>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Footer: FC<ComponentProps> = ({ children }) => {
  const dispatch = useDispatch();
  const [showCompare, setShowCompare] = useState<boolean>(false);
  const compare = useAppSelector((state) => state && state.compare);
  const setCompareModal = () => {
    dispatch(showCompareModal({ show: true }));
  };

  React.useEffect(() => {
    if (compare && compare.products.length > 1) {
      setShowCompare(true);
    }
  }, [compare]);

  return (
    <>
      <div className={`${showCompare ? 'block' : 'hidden'} fixed z-10 compare-btn-parent`}>
        <div className="relative">
          <button
            type="button"
            // className="btn btn-light md:ml-10 xl:ml-10 shadow-sm w-full md:w-1/3 xl:w-1/4 flex-col"
            className="bg-blue-600 absolute text-sm rounded text-white inset-2 w-32 h-11"
            data-toggle="collapse"
            data-target="#compare"
            onClick={setCompareModal}
          >
            <span className="compare-btn">
              <span>COMPARE</span>
            </span>
            <div className="compare-btn-wrapper">
              <span className="compare-btn-child">{compare && compare.products.length}</span>
            </div>
          </button>
        </div>
      </div>
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
                      linkhref="https://www.proximity.tech/"
                      classname="inline-block no-underline hover:text-black hover:underline py-1"
                      linkname="Proximity Tech"
                      datatest="back-to-products"
                      aria-label="back-to-products"
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
};

export default Footer;
