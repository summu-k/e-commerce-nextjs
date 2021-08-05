import React, { FC } from 'react';
import Link from 'next/link';

interface LinkProps {
  linkhref: string;
  classname: string;
  linkname: string;
  datatest: string;
  target: string;
}

const LinkComponent: FC<LinkProps> = (props) => {
  const { linkhref, classname, linkname, datatest, children } = props;
  return (
    <Link href={linkhref}>
      <a data-test-py={datatest} className={classname}>
        {linkname}
        {children}
      </a>
    </Link>
  );
};

export default LinkComponent;
