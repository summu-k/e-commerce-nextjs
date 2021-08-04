import React, { FC } from 'react';
import Link from 'next/link';

interface LinkProps {
  linkHref: string;
  anchorClassName: string;
  linkName: string;
  dataTest: string;
  ariaLabel: string;
  target: string;
}
type ComponentProps = React.PropsWithChildren<{}>;

const LinkComponent: FC<LinkProps & ComponentProps> = (props, { children }) => {
  const { linkHref, anchorClassName, linkName, dataTest, ariaLabel } = props;
  return (
    <Link href={linkHref}>
      <a {...props} data-test-py={dataTest} className={anchorClassName} aria-label={ariaLabel}>
        {linkName}
        {children}
      </a>
    </Link>
  );
};

export default LinkComponent;
