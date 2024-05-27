import React from "react";
import AddItem from '@/components/AddIem';
import WishListItems from "@/components/WishListItems";

export const metadata = {
    title: 'Wish List',
}

export default async function WishListPage() {
    return (
        <div className="flex flex-wrap w-full text-white">
            <h1 className="text-2xl font-bold m-4 min-w-[max-content]">Wish List</h1>
            <AddItem />
            <WishListItems />
        </div>
    );
}