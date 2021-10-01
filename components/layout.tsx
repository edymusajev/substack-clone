import React from 'react';
import Footer from './footer';
import Navbar from './navbar';

const Layout = ({
  children,
  home,
  bigPost,
}: {
  children: React.ReactNode;
  pageTitle?: string;
  home?: boolean;
  bigPost?: React.ReactNode;
}) => {
  return (
    <div>
      {/* navbar */}
      <div className="w-full h-20 flex justify-center border-b">
        <div className="container">
          <Navbar />
        </div>
      </div>
      {/* big post */}
      <div className="flex justify-center">{home && bigPost}</div>

      {/* main */}
      <div className="flex justify-center">
        <div className="container">{children}</div>
      </div>
      {/* footer */}
      <div className="flex justify-center h-64 bg-gray-100">
        <div className="containe flex flex-col items-center justify-center">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
