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
  const [message, setMessage] = useState("");
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

    if (res.message) {
      setMessage(res.message);
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form className='space-y-8 max-w-3xl mx-auto border shadow-xl p-10 rounded-lg'>
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
        <div className='flex gap-3'>
          <Button
            size={"lg"}
            formAction={handleLoginSubmit}
          >
            Sign In
          </Button>
          <Button
            size={"lg"}
            variant={"outline"}
            formAction={handleSignupSubmit}
          >
            Sign Up
          </Button>
        </div>
        {message && (
          <p className='w-full h-20 flex justify-center items-center bg-green-100 text-green-600'>
            {message}
          </p>
        )}
      </form>
    </Form>
  );
}
