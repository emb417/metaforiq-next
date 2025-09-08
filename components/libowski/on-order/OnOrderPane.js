import ItemsPane from "@/components/libowski/ItemsPane";

async function getData() {
  try {
    const onOrderResponse = await fetch(
      `${process.env.LIBOWSKI_API_URL}/all-on-order`,
      { next: { revalidate: 0 } }
    );
    const onOrderData = await onOrderResponse.json();

    const wishlistResponse = await fetch(
      `${process.env.LIBOWSKI_API_URL}/wish-list`,
      {
        next: { revalidate: 0 },
      }
    );
    const wishlistData = await wishlistResponse.json();

    const data = onOrderData.map((item) => {
      return {
        ...item,
        onWishList: wishlistData.some(
          (wishlistTitle) => wishlistTitle === item.title
        ),
      };
    });

    return { props: { items: data } };
  } catch (error) {
    console.error(error);
    return { props: { items: [] } };
  }
}

export default async function Items() {
  const { props } = await getData();
  const { items } = props;

  return <ItemsPane items={items} />;
}
