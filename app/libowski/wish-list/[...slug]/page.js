import Link from "next/link";

export const metadata = {
  title: "Update Item",
};

async function getData(slug) {
  try {
    const response = await fetch(
      `${process.env.LIBOWSKI_API_URL}/${slug[0]}-wish-list/${slug[1]}`,
      { next: { revalidate: 0 } }
    );
    const data = await response.text();
    return { props: { message: data } };
  } catch (error) {
    console.error(error);
    return { props: { message: "Server Error" } };
  }
}

export default async function RemoveItemPage({ params }) {
  const { props } = await getData(params.slug);
  const { message } = props;
  return (
    <div>
      <h1 className="text-xl font-bold my-4 ml-4 text-white">
        {params.slug[0] === "remove-from"
          ? "Remove "
          : params.slug[1] === "add-to"
          ? "Add "
          : ""}
        Wish List Item
      </h1>
      <div className="flex flex-wrap items-center justify-start text-2xl text-white m-4">
        <p className="text-white m-4">{message}</p>
        <Link
          href="/libowski/wish-list"
          className="bg-slate-900 m-4 px-4 py-2 w-full md:w-[max-content] border-2 border-teal-950 rounded-lg text-white hover:text-teal-300 duration-300"
        >
          Wish List
        </Link>
      </div>
    </div>
  );
}
