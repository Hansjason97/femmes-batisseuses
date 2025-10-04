"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  email: z.email({message: "Adresse invalide"}),
});

function NewsletterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{"Abonnez-vous à notre Newsletter"}</FormLabel>
              <FormControl>
                <span className="flex">
                  <Input
                    {...field}
                    placeholder="Votre adresse mail"
                    className="bg-white px-4 rounded-l-sm rounded-r-none text-text-default"
                  />
                  <Button
                    type="submit"
                    className="flex-1 rounded-l-none"
                    variant={"primary"}
                  >
                    {"S'abonner"}
                  </Button>
                </span>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default NewsletterForm;
