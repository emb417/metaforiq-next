import React from 'react';
import Link from 'next/link';
import { GiHeavyRain, GiPinballFlipper, GiBlackball, GiBrain } from "react-icons/gi";

const NavigationLinks = () => {
  return (
    <div className="flex flex-wrap justify-start position-absolute top-0 left-0 z-100">
      {Object.entries({
        '/': {
          icon: <GiBrain className="mr-1" size={20} />,
          href: '/',
          text: 'Metaforiq Home',
        },
        '/force-rain': {
          icon: <GiHeavyRain className="mr-1" size={20} />,
          href: '/force-rain',
          text: 'Force Rain',
        },
        '/pinball': {
          icon: <GiPinballFlipper className="mr-1" size={20} />,
          href: '/pinball',
          text: 'Pinball',
        },
        '/libowski': {
          icon: <GiBlackball className="mr-1" size={20} />,
          href: '/libowski',
          text: 'Libowski',
        }
      }).map(([href, text], index) => {
        const item = typeof text === 'string' ? { href, text } : text;
        return (
          <div className="w-full sm:w-auto" key={index}>
            <Link
              href={item.href}
              className="text-aqua text-uppercase text-sans text-2xl text-decoration-none flex items-center justify-start ml-2 mr-2"
            >
              {item.icon}
              {item.text}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavigationLinks;