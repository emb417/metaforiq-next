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

export default async function LibowskiPage () {
  const { props } = await getData();
  const { items } = props;
    return (
<table className="table-auto w-full mb-10">
  <thead className='bg-gray-800 text-gray-300'>
    <tr>
      <th className="px-4 text-left">Recent Best Seller Titles</th>
      <th className='text-left'>Edition</th>
      <th className='text-left'>Year</th>
      <th className='text-left'>Format</th>
      <th className='text-left'>Updated</th>
      <th className='text-left'>Notified</th>
      <th className='text-left'>Locations</th>
    </tr>
  </thead>
  <tbody className="text-gray-400">
    {items.map((item) => (
      <tr key={item.id} className="even:bg-gray-900">
        <td className="px-4"><a href={item.url} target="_blank" rel="noreferrer" className='hover:text-teal-300 duration-300'>{item.title}<br/>{item.subtitle}</a></td>
        <td>{item.edition}</td>
        <td className="text-center">{item.publicationYear.substring(0, 4)}</td>
        <td>{item.format}</td>
        {item.updateDate ? <td>{new Date(item.updateDate*1000).toLocaleString()}</td> : <td></td>}
        {item.notifyDate ? <td>{new Date(item.notifyDate*1000).toLocaleString()}</td> : <td></td>}
        <td>{item.locations}</td>
      </tr>
    ))}
  </tbody>
</table>
    );
  };
