import React from 'react';

export const metadata = {
  title: 'Recent Best Seller Titles',
}

async function getData() {
  try {
    const response = await fetch(`${process.env.LIBOWSKI_API_URL}/all-best-sellers`);
    const data = await response.json();
    const sortedItems = data.sort((a, b) => a.title.localeCompare(b.title));
    return { props: { items: sortedItems } };
  } catch (error) {
    console.error(error);
    return { props: { items: [] } };
  }
}

export default async function BestSellersPage () {
  const { props } = await getData();
  const { items } = props;
    return (
<table className="table-auto w-full mb-10 border-y-2 border-teal-900 divide-y divide-teal-900">
  <thead className='bg-gray-800 text-gray-300'>
    <tr>
      <th className="text-left px-2">Recent Best Seller Titles</th>
      <th className='text-left px-2'>Notified</th>
      <th className='text-left px-2'>Locations</th>
    </tr>
  </thead>
  <tbody className="text-gray-400 divide-y divide-teal-900">
    {items.map((item) => (
      <tr key={item.id} className="even:bg-gray-900">
        <td className="px-2"><a href={item.url} target="_blank" rel="noreferrer" className='hover:text-teal-300 duration-300'>
          <p>{item.title}</p>
          {item.subtitle ? <p>{item.subtitle}</p> : ''}
          <p>{item.publicationYear.substring(0, 4)} {item.format} {item.edition}</p>
          {item.updateDate ? <p>{new Date(item.updateDate*1000).toLocaleString()}</p> : ''}
        </a></td>
        {item.notifyDate ? <td>{new Date(item.notifyDate*1000).toLocaleString()}</td> : <td></td>}
        <td>{item.locations}</td>
      </tr>
    ))}
  </tbody>
</table>
    );
  };
