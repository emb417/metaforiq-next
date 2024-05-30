import React from 'react';
import { GiPayMoney } from "react-icons/gi";

export const metadata = {
  title: 'Recent On Order Titles',
}

async function getData() {
  try {
    const response = await fetch(`${process.env.LIBOWSKI_API_URL}/all-on-order`, { next: { revalidate: 0 } });
    const data = await response.json();
    const sortedItems = data.sort((a, b) => {
      const notifyDiff = b.notifyDate - a.notifyDate;
      if (notifyDiff !== 0) {
        return notifyDiff;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
    return { props: { items: sortedItems } };
  } catch (error) {
    console.error(error);
    return { props: { items: [] } };
  }
}

export default async function OnOrderPage () {
  const { props } = await getData();
  const { items } = props;
    return (
<div className='w-full'>
<h1 className="flex text-2xl text-white m-4 min-w-[max-content]"><GiPayMoney className='text-3xl mr-1 mt-1' />{metadata.title}</h1>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 m-4">
  {items.map((item) => (
    <a key={item.id} href={item.url} target="_blank" rel="noreferrer" className="bg-slate-950 hover:bg-slate-900 p-4 rounded-lg border-2 border-teal-950 w-full hover:text-teal-300 duration-300">
      <p className="text-white">{item.title}</p>
      {item.subtitle ? <p className="text-white">{item.subtitle}</p> : null}
      <p className="text-teal-300">{item.publicationYear.substring(0, 4)} {item.format} {item.edition}</p>
      {item.notifyDate ? <p className="text-gray-400">Notified: {new Date(item.notifyDate*1000).toLocaleString()}</p> : null}
    </a>
  ))}
</div>
</div>
    );
  };
