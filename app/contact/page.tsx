"use client";

import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { emailFormSchema } from "@/schemas/email-form-schema";
import { sendEmail } from "@/server/email";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useAction } from "next-safe-action/hooks";
import * as z from "zod";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { bounceTransition, fadeInScale } from "@/constants/animations";

const ContactPage = () => {
  const form = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const { execute, isExecuting } = useAction(sendEmail, {
    onSuccess: () => {
      toast.success("Email sent successfully");
    },
    onError: () => {
      toast.error("Failed to send email");
    },
  });

  const handleSubmit = (data: z.infer<typeof emailFormSchema>) => {
    execute(data);
  };

  return (
    <div className="pt-4 px-4 flex flex-col gap-4 pb-20 sm:px-24 md:px-40 md:pt-12 lg:px-24 lg:py-24">
      <div className="w-full lg:max-w-[1000px] 3xl:max-w-[1200px] mx-auto flex flex-col gap-4">
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: [0.16, 1, 0.3, 1],
            duration: 0.5,
          }}
          className="text-3xl font-semibold"
        >
          Contact
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
            duration: 0.5,
          }}
          className="text-foreground-muted lg:w-1/2"
        >
          Let me know anything that's on your mind!
        </motion.p>
        <Form {...form}>
          <motion.form
            variants={fadeInScale}
            initial="initial"
            animate="animate"
            transition={{
              ...bounceTransition,
              delay: 0.2,
            }}
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <Card className="lg:rounded-3xl">
              <div className="flex flex-col gap-4 lg:flex-row">
                <div className="w-full flex flex-col gap-2">
                  <p>Your name</p>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <Input {...field} placeholder="John Doe" />
                    )}
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-500">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>
                <div className="w-full flex flex-col gap-2">
                  <p>Your email</p>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <Input {...field} placeholder="john.doe@gmail.com" />
                    )}
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>Message</p>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <Textarea
                      className="h-40"
                      {...field}
                      placeholder="Your message"
                    />
                  )}
                />
                {form.formState.errors.message && (
                  <p className="text-red-500">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>
              <Button color="biloba" disabled={isExecuting} className="w-max">
                {isExecuting && "Sending message... "}
                {isExecuting ? (
                  <Loader className="w-4 h-4 animate-spin" />
                ) : (
                  "Send message"
                )}
              </Button>
            </Card>
          </motion.form>
        </Form>
      </div>
    </div>
  );
};

export default ContactPage;
