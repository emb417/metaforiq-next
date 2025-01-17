import BestSellersItems from "@/components/libowski/best-sellers/BestSellersItems";

async function getData() {
    try {
      const response = await fetch(
        `${process.env.LIBOWSKI_API_URL}/all-best-sellers`,
        { next: { revalidate: 0 } }
      );
      const data = await response.json();
  
      return { props: { items: data } };
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