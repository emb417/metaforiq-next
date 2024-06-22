import { z } from "zod";

const loginFormSchema = z.object({
  username: z.string(),
  password: z.string(),
});

const wishListFormSchema = z.object({
  inputTitle: z.string(),
});

export { loginFormSchema, wishListFormSchema };
