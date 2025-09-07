import WishListRemoveItem from "@/components/libowski/wish-list/WishListRemoveItem";

const getData = async () => {
  // Check if we are in the build environment by looking for the placeholder URL.
  // This prevents the build from failing if the API is not available.
  if (process.env.LIBOWSKI_API_URL === "http://localhost:8080") {
    // Return a mock or empty data set to allow the build to succeed.
    return { props: { items: [] } };
  }

  try {
    const response = await fetch(`${process.env.LIBOWSKI_API_URL}/wish-list`, {
      next: { revalidate: 0 },
    });
    const data = await response.json();
    return { props: { items: data } };
  } catch (error) {
    console.error(error);
    return { props: { items: [] } };
  }
};

export default async function WishListItems() {
  const { props } = await getData();
  const { items } = props;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {items.length > 0 ? (
        items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-start bg-slate-950 p-4 rounded-lg border-2 border-teal-950"
          >
            <div className="flex items-center gap-4 w-full text-white">
              {item}
            </div>
            <WishListRemoveItem key={index} title={item} />
          </div>
        ))
      ) : (
        <p className="text-white">No wish list items.</p>
      )}
    </div>
  );
}
