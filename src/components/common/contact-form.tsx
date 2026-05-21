"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/common/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { $api } from "@/api";
import { useReCaptcha } from "@/hooks/use-recaptcha";
import { zFeedback } from "@/client/zod.gen";
import { PhoneInput } from "./phone-input";
import { Button } from "./button";
import { setFormError } from "@/utils/set-form-error";
import toast from "@/components/common/custom-toast";

type TForm = z.infer<typeof zFeedback>;

export function ContactForm() {
  const t = useTranslations("ContactUs.form");
  const tx = useTranslations("ContactUs");

  const mutation = $api.useMutation("post", "/feedback/", {
    onError(error) {
      setFormError(form, error);
    },
    onSuccess() {
      toast.success(tx("success - feedback"));
    },
  });
  const reCaptchaInit = useReCaptcha("/feedback/");

  const form = useForm<TForm>({
    resolver: zodResolver(zFeedback),
    defaultValues: {
      name: "",
      phone_number: "",
      text: "",
    },
  });

  const onSubmit = async (data: TForm) => {
    const token = await reCaptchaInit.execute();
    mutation.mutate({
      body: {
        ...data,
        recaptcha_code: token ?? "",
      },
    });
  };

  const pending = mutation.isPending || reCaptchaInit.isExecuting;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 rounded-xl border-[1.2px] border-neutral-300 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
      >
        <h2 className="text-[24px] font-semibold text-black dark:text-neutral-100">
          {t("title")}
        </h2>

        {/* Full Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-0.5 text-[16px] font-medium text-neutral-800 dark:text-neutral-300">
                {t("fullName.label")}
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder={t("fullName.placeholder")}
                  className="h-12 w-full rounded-[8px] border border-neutral-400 px-4 py-3 text-[16px] dark:border-neutral-800"
                  disabled={pending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone Number Field */}
        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-0.5 text-[16px] font-medium text-neutral-800 dark:text-neutral-300">
                {t("phoneNumber.label")}
              </FormLabel>
              <FormControl>
                <PhoneInput
                  {...field}
                  placeholder={t("phoneNumber.placeholder")}
                  disabled={pending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message Field */}
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-0.5 text-[16px] font-medium text-neutral-800 dark:text-neutral-300">
                {t("message.label")}
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder={t("message.placeholder")}
                  rows={5}
                  className="h-[120px] w-full resize-none rounded-[8px] border border-neutral-400 px-4 py-3 dark:border-neutral-800"
                  disabled={pending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" size={"48"} loading={pending}>
          {t("submitButton")}
        </Button>
      </form>
    </Form>
  );
}
