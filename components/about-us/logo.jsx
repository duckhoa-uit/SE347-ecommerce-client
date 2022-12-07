//TODO: xem lại cho chắc là tui move đúng folder + import đúng nha
import AdobeLogo from 'public/icons/AdobeLogo';
import AmazonLogo from 'public/icons/AmazonLogo';
import DigitalOceanLogo from 'public/icons/DigitalOceanLogo';
import FacebookLogo from 'public/icons/FacebookLogo';
import TeslaLogo from 'public/icons/TeslaLogo';
import React from 'react';

Logo.propTypes = {};

export default function Logo() {
  return (
    <div className="about-us__logo">
      <section className="bg-gray-100">
        <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 logo">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <FacebookLogo className="h-12 text-gray-500 fill-current " />
            </div>
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <DigitalOceanLogo className="h-10 text-gray-500 fill-current" />
            </div>
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <AmazonLogo className="h-8 mt-2 text-gray-500 fill-current" />
            </div>
            <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
              <TeslaLogo className="h-5 mt-1 text-gray-500 fill-current" />
            </div>
            <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
              <AdobeLogo className="h-8 text-gray-500 fill-current" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
