import React from 'react';
import LinkComponent from '../component/actionableButtons/LinkComponent';

function BackToProductButton() {
  return (
    <LinkComponent
      linkHref="/shop"
      anchorClassName="border border-palette-primary text-palette-primary text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-lighter rounded-sm"
      linkName="Back To All Products"
      dataTest="back-to-products"
      ariaLabel="back-to-products"
      target="_self"
    />
  );
}

export default BackToProductButton;
