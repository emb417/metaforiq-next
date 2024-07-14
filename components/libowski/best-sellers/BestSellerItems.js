import ItemAvailability from "@/components/libowski/best-sellers/ItemAvailability";
async function getData() {
  try {
    const response = await fetch(
      `${process.env.LIBOWSKI_API_URL}/all-best-sellers`,
      { next: { revalidate: 300 } }
    );
    const data = await response.json();

    const sortedItems = [...data]
      .sort((a, b) => (b.updateDate || 0) - (a.updateDate || 0))
      .sort((a, b) => {
        const aHasAvailability = Object.keys(a.availability || {}).length > 0;
        const bHasAvailability = Object.keys(b.availability || {}).length > 0;
        if (aHasAvailability && !bHasAvailability) return -1;
        if (!aHasAvailability && bHasAvailability) return 1;
        return 0;
      });

    return { props: { items: sortedItems } };
  } catch (error) {
    console.error(error);
    return { props: { items: [] } };
  }
}

export default async function Items() {
  const { props } = await getData();
  const { items } = props;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="bg-slate-950 hover:bg-slate-900 p-2 rounded-lg border-2 border-teal-950 w-full hover:text-teal-300 duration-300"
        >
          <p className="text-white text-xl">{item.title}</p>
          {item.subtitle ? <p className="text-white">{item.subtitle}</p> : null}
          <p className="text-teal-300">
            {item.publicationYear.substring(0, 4)} {item.format} {item.edition}
          </p>
          {item.updateDate ? (
            <p className="text-gray-400">
              Updated: {new Date(item.updateDate * 1000).toLocaleString()}
            </p>
          ) : null}
          <ItemAvailability availability={item.availability} />
        </a>
      ))}
    </div>
  );
}
