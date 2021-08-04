import React, { FC } from 'react';
import Header from '../../component/Header';
// import Footer from '../../component/Footer';

type ComponentProps = React.PropsWithChildren<{}>;
const Layout: FC<ComponentProps> = ({ children }) => (
  <>
    <Header />
    {children}
    {/* <Footer /> */}
  </>
);

export default Layout;
