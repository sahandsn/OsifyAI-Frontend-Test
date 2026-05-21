"use client";

import Doctor from "#/assets/icons/cartoon-doctor-with-light-hair.svg";
import { $api } from "@/api";
import { Button } from "@/components/common/button";
import Halo from "@/components/common/halo";
import { PhoneInput } from "@/components/common/phone-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { H2 } from "@/components/common/typography";
import { useReCaptcha } from "@/hooks/use-recaptcha";
import { cn } from "@/lib/utils";
import { setFormError } from "@/utils/set-form-error";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useForm } from "react-hook-form";
import toast from "@/components/common/custom-toast";
import { z } from "zod";

const zForm = z.object({
  phone_number: z.string().max(13).nonempty(),
});

type TForm = z.infer<typeof zForm>;
const Newsletter = () => {
  const t = useTranslations("landing.newsletter");
  const tx = useTranslations("ContactUs");

  const mutation = $api.useMutation("post", "/reservation/", {
    onError(error) {
      setFormError(phoneForm, error);
    },
    onSuccess() {
      toast.success(tx("success - reservation"));
    },
  });
  const reCaptchaInit = useReCaptcha("/reservation/");

  const phoneForm = useForm<TForm>({
    resolver: zodResolver(zForm),
    defaultValues: {
      phone_number: "",
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
    <section
      id="newsletter"
      aria-labelledby="newsletter-title"
      className={cn(
        "relative flex flex-col items-center justify-between gap-12 lg:flex-row-reverse",
      )}
    >
      <Halo
        light={{
          color: "#FECCAA",
          spread: 50,
        }}
        dark={{
          color: "#7C3D12",
          spread: 50,
        }}
        className="absolute end-[28rem] top-[6rem] opacity-0 lg:opacity-30 dark:lg:opacity-50"
      />
      <div
        className={cn(
          "rounded-3xl bg-[linear-gradient(224.02deg,#4186F6_0%,#B9D7FE_101.78%)] md:max-w-[418px]",
          "dark:bg-[linear-gradient(256.56deg,#142C6F_0%,#3677E5_100%)]",
        )}
      >
        <Image src={Doctor} width={418} height={400} alt={t("imageAlt")} />
        <div
          className={cn(
            "hidden rounded-[16px] bg-neutral-50 px-6 py-4 text-center shadow-[0_4px_16px_0_#1B1B1B0F] rounded-be-none dark:bg-neutral-950 lg:block",
            "border border-neutral-50 dark:border-neutral-800",
            "absolute end-72 top-8 lg:top-20",
          )}
        >
          {t("quotation")}
        </div>
      </div>
      <div className={cn("flex flex-col gap-12")}>
        <div className={cn("flex flex-col gap-4")}>
          <H2
            id="newsletter-title"
            className={cn(
              "text-center text-[24px] font-bold leading-8 text-neutral-950",
              "xl:text-[32px] xl:leading-[48px]",
              "dark:text-neutral-100",
            )}
          >
            {t("title")}
          </H2>
          <p
            className={cn(
              "text-center text-[16px] font-normal leading-6 text-neutral-800",
              "md:w-[380px] xl:text-[20px] xl:leading-[32px] md:ltr:text-left md:rtl:text-right",
              "dark:text-neutral-300",
            )}
          >
            {t("description")}
          </p>
        </div>
        <Form {...phoneForm}>
          <form
            onSubmit={phoneForm.handleSubmit(onSubmit)}
            className="flex flex-col"
          >
            <FormField
              control={phoneForm.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div
                      className={cn(
                        "flex items-center gap-2 rounded-[12px] border-[1.2px] border-neutral-400 bg-neutral-50 p-2 px-3 py-2.5",
                        "dark:border-neutral-800 dark:bg-neutral-950",
                      )}
                    >
                      <PhoneInput
                        {...field}
                        placeholder={t("input-placeholder")}
                        disabled={pending}
                        className={cn(
                          "border-none bg-neutral-50 text-[14px] font-normal leading-[22px] placeholder:text-sm",
                          "lg:text-[16px] lg:leading-6",
                          "dark:bg-neutral-950",
                          "flex-1 border-none bg-transparent p-0 shadow-none outline-none focus:shadow-none focus:outline-none focus:ring-0 focus-visible:ring-0",
                        )}
                      />

                      <Button type="submit" size={"48"} loading={pending}>
                        {t("send-button")}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Newsletter;
