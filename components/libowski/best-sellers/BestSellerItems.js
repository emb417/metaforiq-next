import Item from "@/components/libowski/Item";
async function getData() {
  try {
    const response = await fetch(
      `${process.env.LIBOWSKI_API_URL}/all-best-sellers`,
      { next: { revalidate: 0 } }
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full pb-4">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
