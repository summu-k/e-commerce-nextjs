import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { showCompareModal } from '../../redux/addToCompareSlice';
import { addNotification } from '../../redux/notificationSlice';
import type { RootState, AppDispatch } from '../../redux/store';
import ComparisionTable from '../component/ComparisionTable';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default function SlideOver() {
  const [open, setOpen] = useState(false);
  //   const [compareList, setCompareList] = useState<Object[]>();
  const dispatch = useDispatch();
  const compare = useAppSelector((state) => state && state.compare);

  React.useEffect(() => {
    setOpen(compare.show);
  }, [compare]);

  const toggleModal = () => {
    setTimeout(() => {
      dispatch(addNotification({ message: '', type: '' }));
    }, 10000);
    dispatch(showCompareModal({ show: false }));
  };

  //   React.useEffect(() => {
  //     if (compare.products.length > 0) {
  //       const productListData = compare.products.map((data: ProductDataProps) => (
  //         <CompareProductList key={data.id} product={data} />
  //       ));
  //       setCompareList(productListData);
  //     }
  //   }, [compare]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" auto-reopen="true" className="fixed inset-0 overflow-hidden" onClose={toggleModal}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex drawer-compare">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md compare-slider-content">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => toggleModal()}
                    >
                      <span className="sr-only">Close panel</span>
                      <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="text-lg font-medium text-gray-900">
                      {compare.products.length === 0 ? 'Nothing to compare' : 'Comparision'}
                    </Dialog.Title>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    <div className="absolute inset-0 px-4 sm:px-6">
                      <ComparisionTable products={compare.products} />
                      {/* <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true">
                        {compare.products.length === 0 ? (
                          'Please select Products'
                        ) : (
                          <div
                            className="container mx-auto flex items-center flex-wrap pt-16 pb-12 productListWrapper"
                            data-test-py="productListing"
                          >
                            {compareList}
                          </div>
                        )}
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
