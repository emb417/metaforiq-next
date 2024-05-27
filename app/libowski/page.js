import Link from 'next/link';
import React, { Button } from 'react';
import { GiPayMoney, GiTakeMyMoney } from "react-icons/gi";

const LibowskiPage = () => {
  // Array containing navigation items
  const navItems = [
    {
        id: 1,
        icon: <GiPayMoney />,
        href: '/libowski/on-order',
        text: 'Recent On Order Items',
      },
      {
        id: 2,
        icon: <GiTakeMyMoney />,
        href: '/libowski/best-sellers',
        text: 'Recent Best Seller Items',
      },
  ];

    return (
      <div className="flex items-center text-2xl text-white m-4">
        <ul className="flex flex-wrap w-full gap-4">
          {navItems.map(item => (
            <Link key={item.id} href={item.href} className='w-full md:w-[max-content] hover:text-teal-300 duration-300'>
              <li className='flex items-center justify-center gap-1 bg-slate-950 p-4 rounded-lg border-2 border-teal-950'>
                  {item.icon}{item.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  };

export default LibowskiPage;