"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { login } from "@/lib/Session";
import { loginFormSchema, wishListFormSchema } from "@/lib/Schema";

export async function authenticate(formData) {
  const data = loginFormSchema.parse(Object.fromEntries(formData));

  const response = await fetch(process.env.LIBOWSKI_API_URL + "/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: data.username,
      password: data.password,
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
  const data = wishListFormSchema.parse(Object.fromEntries(formData));

  const response = await fetch(process.env.LIBOWSKI_API_URL + "/wish-list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: data.inputTitle,
    }),
  });

  revalidatePath("/wish-list");
}

export async function removeWishListItem(formData) {
  const data = wishListFormSchema.parse(Object.fromEntries(formData));

  const response = await fetch(process.env.LIBOWSKI_API_URL + "/wish-list", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: data.inputTitle,
    }),
  });

  revalidatePath("/wish-list");
}
