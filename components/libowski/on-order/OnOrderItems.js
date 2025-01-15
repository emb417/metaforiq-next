import Item from "@/components/libowski/Item";

async function getData() {
  try {
    const response = await fetch(
      `${process.env.LIBOWSKI_API_URL}/all-on-order`,
      { next: { revalidate: 0 } }
    );
    const data = await response.json();
    if (!data || data.length === 0) {
      return { props: { items: [] } };
    }
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

export default async function Items() {
  const { props } = await getData();
  const { items } = props;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full pb-4">
      {items.length > 0 ? (
        items.map((item) => (
          <Item key={item.id} item={item} />
        ))
      ) : (
        <p className="text-white p-8">No titles recently ordered.</p>
      )}
    </div>
  );
}
