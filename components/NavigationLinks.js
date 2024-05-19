import React from 'react';
import Link from 'next/link';

const NavigationLinks = () => {
  return (
    <div className='bg-black text-cyan text-uppercase text-sans text-2xl text-decoration-none px-8 py-2'>
      <Link href="/">
        Metaforiq Home
      </Link>
      <span> :: </span>
      <Link href="/force-rain">
        Force Rain
      </Link>
      <span> :: </span>
      <Link href="/pinball">
        Pinball
      </Link>
      <span> :: </span>
      <Link href="/libowski">
        Libowski
      </Link>
    </div>
  );
};

export default NavigationLinks;