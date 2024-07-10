"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Button,
  buttonVariants,
} from "@/components/ui/button";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { createBoardTitle } from "@/app/actions/memory_boards";

const CardForm = z.object({
  title: z.string().min(1),
});

type CardFormType = z.infer<typeof CardForm>;

const CreateBoardForm = () => {
  const form = useForm<CardFormType>({
    resolver: zodResolver(CardForm),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = async (data: CardFormType) => {
    console.log("test");

    const res = await createBoardTitle(data.title);

    if (res.error) {
      toast.error(res.error, {
        duration: 10000,
      });
    } else {
      toast.success(
        "Title created. Now time to add images!",
        {
          duration: 10000,
        }
      );
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='relative w-full grid gap-2 h-12 '
      >
        <div
          className={`w-full flex items-start gap-x-2 rounded-md outline outline-1 outline-border px-2 pb-1`}
        >
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem className='p-0 w-full'>
                <Input
                  {...field}
                  className={`border focus-visible:ring-0 border-none w-full`}
                  placeholder='Title of your Memory board'
                />
              </FormItem>
            )}
          />
        </div>
        {form.formState.errors && (
          <div className='text-destructive text-sm'>
            {Object.values(form.formState.errors).map(
              (error) => (
                <p key={error.message}>{error.message}</p>
              )
            )}
          </div>
        )}
        <Button type='submit' className='h-8 w-fit'>
          Create Board Title
        </Button>
      </form>
    </Form>
  );
};

export default CreateBoardForm;
