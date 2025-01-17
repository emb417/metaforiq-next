import BestSellersItems from "@/components/libowski/best-sellers/BestSellersItems";

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

export default async function BestSellersPane() {
    const { props } = await getData();
    const { items } = props;
    return <BestSellersItems items={items} />;
}