import ItemsPane from "@/components/libowski/ItemsPane";

async function getData() {
    try {
      const bestSellersResponse = await fetch(
        `${process.env.LIBOWSKI_API_URL}/all-best-sellers`,
        { next: { revalidate: 0 } }
      );
      const bestSellersData = await bestSellersResponse.json();

      const wishlistResponse = await fetch(`${process.env.LIBOWSKI_API_URL}/wish-list`, {
        next: { revalidate: 0 },
      });
      const wishlistData = await wishlistResponse.json();

      const data = bestSellersData.map((item) => {
        return {
          ...item,
          onWishList: wishlistData.some((wishlistTitle) => wishlistTitle === item.title),
        };
      });
  
      return { props: { items: data } };
    } catch (error) {
      console.error(error);
      return { props: { items: [] } };
    }
  }

export default async function BestSellersPane() {
    const { props } = await getData();
    const { items } = props;
    return <ItemsPane items={items} />;
}