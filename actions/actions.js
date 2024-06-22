"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { login } from "@/app/lib";

export async function authenticate(formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const response = await fetch(process.env.LIBOWSKI_API_URL + "/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  if (response.status === 200) {
    await login(response.body);
    redirect("/libowski/wish-list");
  } else if (response.status === 401) {
    redirect("/login");
  }
}

export async function addWishListItem(formData) {
  const title = formData.get("inputTitle");

  const response = await fetch(process.env.LIBOWSKI_API_URL + "/wish-list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
    }),
  });

  revalidatePath("/wish-list");
}

export async function removeWishListItem(formData) {
  const title = formData.get("inputTitle");

  const response = await fetch(process.env.LIBOWSKI_API_URL + "/wish-list", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
    }),
  });

  revalidatePath("/wish-list");
}
