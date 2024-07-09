import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Must be longer than 6 characters",
  }),
});
