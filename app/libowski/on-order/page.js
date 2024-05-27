import React from 'react';

export const metadata = {
  title: 'Recent On-Order Titles',
}

async function getData() {
  try {
    const response = await fetch(`${process.env.LIBOWSKI_API_URL}/all-on-order`);
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

export default async function LibowskiPage () {
  const { props } = await getData();
  const { items } = props;
    return (
<table className="table-auto w-full mb-10">
  <thead className='bg-gray-800 text-gray-300'>
    <tr>
      <th className='text-left px-4'>Recent On-Order Titles</th>
      <th className='text-left'>Edition</th>
      <th className='text-left'>Year</th>
      <th className='text-left'>Format</th>
      <th className='text-left'>Notified</th>
    </tr>
  </thead>
  <tbody className="text-gray-400">
    {items.map((item) => (
      <tr key={item.id} className="even:bg-gray-900">
        <td className="px-4"><a href={item.url} target="_blank" rel="noreferrer" className='hover:text-teal-300 duration-300'>{item.title}<br/>{item.subtitle}</a></td>
        <td>{item.edition}</td>
        <td className="text-center">{item.publicationYear.substring(0, 4)}</td>
        <td>{item.format}</td>
        {item.notifyDate ? <td>{new Date(item.notifyDate*1000).toLocaleString()}</td> : <td></td>}
      </tr>
    ))}
  </tbody>
</table>
    );
  };
