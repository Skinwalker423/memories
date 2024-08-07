"use client";

import {
  FileUploader,
  FileInput,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/extension/file-uploader";
import { DropzoneOptions } from "react-dropzone";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
} from "@/components/ui/form";
import {
  Button,
  buttonVariants,
} from "@/components/ui/button";
import { toast } from "sonner";

import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { updateMemory } from "@/app/actions/memory_boards";
import { useParams } from "next/navigation";

const CardForm = z.object({
  files: z
    .array(
      z
        .instanceof(File)
        .refine((file) => file.size < 4 * 1024 * 1024, {
          message: "File size must be less than 4MB",
        })
    )
    .max(5, {
      message: "Maximum 5 files are allowed",
    })
    .nullable(),
});

type CardFormType = z.infer<typeof CardForm>;

interface AddMemoryImageFormProps {
  userId: string;
}

const AddMemoryImageForm = ({
  userId,
}: AddMemoryImageFormProps) => {
  const form = useForm<CardFormType>({
    resolver: zodResolver(CardForm),
    defaultValues: {
      files: null,
    },
  });
  const { boardId }: { boardId: string } = useParams();

  const dropzone = {
    multiple: true,
    maxFiles: 3,
    maxSize: 4 * 1024 * 1024,
  } satisfies DropzoneOptions;

  const onSubmit = async (data: CardFormType) => {
    if (data.files && data.files[0]) {
      const image = data.files[0];
      const formData = new FormData();
      formData.append("file", image);
      formData.append("userId", userId);
      formData.append("boardId", boardId);
      const res = await updateMemory(formData);

      if (res.error) {
        toast.error(res.error);
      }

      if (res.message) {
        form.reset();
        toast.success(res.message);
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='relative w-fit grid gap-2 h-full'
      >
        <div
          className={`w-full flex items-start gap-x-2 rounded-md outline outline-1 outline-border px-2 pb-1 ${
            form.watch("files") !== null ? "pt-4" : "pt-2"
          }`}
        >
          <FormField
            control={form.control}
            name='files'
            render={({ field }) => (
              <FormItem>
                <FileUploader
                  value={field.value}
                  onValueChange={field.onChange}
                  dropzoneOptions={dropzone}
                  reSelect={true}
                >
                  <FileInput
                    className={cn(
                      buttonVariants({
                        size: "icon",
                      }),
                      "size-8"
                    )}
                  >
                    <div className='w-[200px] h-[200px] bg-neutral-200 flex flex-col justify-center items-center rounded-xl'>
                      <h3>Add Image</h3>
                      <ImageIcon size={100} />
                    </div>
                  </FileInput>
                  {field.value &&
                    field.value.length > 0 && (
                      <FileUploaderContent className='absolute bottom-20 p-2 -ml-3 rounded-b-none rounded-t-md flex-row gap-2 max-h-[200px] w-full'>
                        {field.value.map((file, i) => (
                          <FileUploaderItem
                            key={i}
                            index={i}
                            aria-roledescription={`file ${
                              i + 1
                            } containing ${file.name}`}
                            className='p-0 w-[200px] h-[200px]'
                          >
                            <Image
                              src={URL.createObjectURL(
                                file
                              )}
                              alt={file.name}
                              className='rounded-md w-[200px] h-[200px] object-cover'
                              width={200}
                              height={200}
                            />
                          </FileUploaderItem>
                        ))}
                      </FileUploaderContent>
                    )}
                </FileUploader>
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
        <Button
          disabled={form.formState.isSubmitting}
          type='submit'
          className='h-8 w-fit'
        >
          {form.formState.isSubmitting
            ? "adding..."
            : "Confirm Image"}
        </Button>
      </form>
    </Form>
  );
};

export default AddMemoryImageForm;
