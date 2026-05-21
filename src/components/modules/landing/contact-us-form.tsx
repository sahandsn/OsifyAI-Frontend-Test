"use client";

import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { H2 } from "@/components/common/typography";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import Image from "next/image";
import DoctorWithPhone from "#/assets/images/doctor-with-phone.png";
import { PhoneInput } from "@/components/common/phone-input";
import { $api } from "@/api";
import { setFormError } from "@/utils/set-form-error";
import { useReCaptcha } from "@/hooks/use-recaptcha";
import toast from "@/components/common/custom-toast";
import { Button } from "@/components/common/button";

const zForm = z.object({
  phone_number: z.string().max(13).nonempty(),
});

type TForm = z.infer<typeof zForm>;

export const ContactUsForm = ({ title }: Readonly<{ title?: string }>) => {
  const t = useTranslations("about-us");
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
      id="CTA"
      aria-labelledby="cta-title"
      className={cn(
        "rounded-3xl bg-[linear-gradient(224.02deg,#4186F6_0%,#B9D7FE_101.78%)] pt-5 dark:bg-[linear-gradient(256.56deg,#142C6F_0%,#3677E5_100%)] md:relative md:flex md:items-center md:justify-between lg:px-[56px] lg:py-[76px]",
      )}
    >
      <div className={cn("mx-4 my-[40px] space-y-[32px] lg:m-0")}>
        <H2
          id="cta-title"
          className={cn(
            "text-center text-[24px] font-bold leading-8 text-neutral-50 lg:text-[32px] lg:leading-[48px] ltr:text-left rtl:text-right",
          )}
        >
          {title ?? t("CTA.title")}
        </H2>
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
                        placeholder={t("CTA.phonenumber-input")}
                        disabled={pending}
                        className={cn(
                          "border-none bg-neutral-50 text-[14px] font-normal leading-[22px] placeholder:text-sm",
                          "xl:text-[16px] xl:leading-6",
                          "dark:bg-neutral-950",
                          "flex-1 border-none bg-transparent p-0 shadow-none outline-none focus:shadow-none focus:outline-none focus:ring-0 focus-visible:ring-0",
                        )}
                      />
                      <Button
                        loading={pending}
                        type="submit"
                        size={"48"}
                        // className={cn(
                        //   "cursor-pointer rounded-[8px] bg-neutral-300 px-6 py-3 text-center text-[16px] font-semibold leading-6 text-neutral-600",
                        //   "hover:bg-neutral-500 dark:bg-neutral-800 dark:hover:bg-neutral-900",
                        //   {
                        //     "bg-primary-500 text-neutral-50 dark:bg-primary-500 dark:text-neutral-50":
                        //       isValid,
                        //   },
                        // )}
                      >
                        {t("CTA.send")}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage className={cn("text-neutral-50")} />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
      <Image
        src={DoctorWithPhone}
        alt={t("CTA.imageAlt")}
        width={400}
        height={400}
        className={cn(
          "object-contain md:absolute md:bottom-0 ltr:md:right-0 rtl:scale-x-[-1] rtl:md:left-0",
        )}
      />
    </section>
  );
};
