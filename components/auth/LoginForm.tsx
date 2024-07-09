"use client";

import { login, signup } from "@/app/actions/users";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, ZodIssue } from "zod";
import { loginFormSchema } from "@/lib/schemas";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function LoginForm() {
  const [errors, setErrors] = useState<ZodIssue[]>([]);
  // 1. Define your form.
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(
    values: z.infer<typeof loginFormSchema>
  ) {
    // Do something with the form values.

    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const handleLoginSubmit = async (formData: FormData) => {
    const res = await login(formData);

    if (res.error) {
      setErrors(res.error);
      res.error.forEach((err) => {
        if (
          (err.path.length && err.path[0] === "email") ||
          err.path[0] === "password"
        ) {
          form.setError(err.path[0], {
            message: err.message,
          });
        }
      });
    }
  };

  const handleSignupSubmit = async (formData: FormData) => {
    const res = await signup(formData);

    if (res.error) {
      setErrors(res.error);
      res.error.forEach((err) => {
        if (
          (err.path.length && err.path[0] === "email") ||
          err.path[0] === "password"
        ) {
          form.setError(err.path[0], {
            message: err.message,
          });
        }
      });
    }
  };

  return (
    <Form {...form}>
      <form className='space-y-8 max-w-3xl mx-auto bg-slate-50 p-10 rounded-lg'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input id='email' type='email' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  id='password'
                  type='password'
                  placeholder='*******'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button formAction={handleLoginSubmit}>
          Sign In
        </Button>
        <Button
          variant={"outline"}
          formAction={handleSignupSubmit}
        >
          Sign Up
        </Button>
      </form>
    </Form>
  );
}
