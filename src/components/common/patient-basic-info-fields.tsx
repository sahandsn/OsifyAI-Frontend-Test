"use client";

import { z } from "zod";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/common/input";
import { Select, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/common/label";
import { DatePicker } from "@/components/common/date-picker";
import { format, parseISO } from "date-fns";
import { ApiAcceptableDate } from "@/constants/date";
import { zPatientManagementBasicInfoRequestWritable } from "@/client/zod.gen";
import { useTranslations } from "next-intl";
import {
  SelectContent,
  SelectTrigger,
  SelectItem,
} from "@/components/common/select";
import { isValidPhoneNumber } from "react-phone-number-input";
import { PhoneInput } from "@/components/common/phone-input";
import { IndicatorInput } from "@/components/common/indicator-input";
import { fromBlankValue, toBlankValue } from "@/utils/blank-value";
import { calculateFullAgeRelative } from "@/utils/age";
import { useNumber } from "@/hooks/use-number";
import { isValidNationalIdFormat } from "@persian-tools/persian-tools";
import { cn } from "@/lib/utils";

export const zReasonEnum =
  zPatientManagementBasicInfoRequestWritable.shape.reason.unwrap();

export const zInsuranceEnum =
  zPatientManagementBasicInfoRequestWritable.shape.insurance.unwrap().unwrap();

const baseShape = zPatientManagementBasicInfoRequestWritable.omit({
  appointment_calendar_interval: true,
  appointment_booking: true,
  utm: true,
}).shape;

export const zPatientBasicInfo = z.object({
  ...baseShape,
  national_number: z.string().min(1).refine(isValidNationalIdFormat),
  reason: zReasonEnum,
  fheight: z.coerce.number<number>().gte(30).lte(250).nullish(),
  mheight: z.coerce.number<number>().gte(30).lte(250).nullish(),
  phone_number: z
    .string()
    .optional()
    .refine((data) => {
      if (data) {
        return isValidPhoneNumber(data);
      }
      return true;
    }),
});

export type TPatientBasicInfo = z.infer<typeof zPatientBasicInfo>;

type TFieldName = keyof TPatientBasicInfo;

type TFields<T extends FieldValues> = {
  [K in TFieldName]: Path<T>;
};

const defaultFields: TFields<TPatientBasicInfo> = {
  national_number: "national_number",
  name: "name",
  gender: "gender",
  birth_date: "birth_date",
  reason: "reason",
  phone_number: "phone_number",
  fheight: "fheight",
  mheight: "mheight",
  insurance: "insurance",
};

export const PatientBasicInfoFields = <T extends FieldValues>(
  props: Readonly<{
    form: UseFormReturn<T>;
    title?: React.ReactNode;
    fields?: Partial<TFields<T>>;
    mode: "appointment" | "reception";
  }>,
) => {
  const t = useTranslations("AddPatientForm.step1");
  const tr = useTranslations("HeightCalculator");
  const tx = useTranslations("General");
  const { formatNumber } = useNumber();
  const { form, title, mode } = props;

  const fields = {
    ...defaultFields,
    ...props.fields,
  } as TFields<T>;

  return (
    <div className="space-y-6">
      {title ? (
        <h2 className="text-[20px] font-bold leading-[28px] text-neutral-900 dark:text-neutral-100">
          {title}
        </h2>
      ) : null}

      <div className="flex grid-cols-3 flex-col gap-4 gap-y-4 md:grid md:gap-y-6">
        <FormField
          control={form.control}
          name={fields.name}
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="name" required>
                {t("fullName.label")}
              </Label>
              <FormControl>
                <Input
                  {...field}
                  id="name"
                  placeholder={t("fullName.placeholder")}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={fields.gender}
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="gender" required>
                {t("gender.label")}
              </Label>
              <Select onValueChange={field.onChange} value={field.value ?? ""}>
                <FormControl>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder={t("gender.placeholder")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Male">{t("gender.male")}</SelectItem>
                  <SelectItem value="Female">{t("gender.female")}</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={fields.birth_date}
          render={({ field }) => {
            const age = calculateFullAgeRelative(field.value);
            return (
              <FormItem className="group">
                <Label htmlFor="birth_date" required>
                  {t("birthDate.label")}
                </Label>
                <FormControl>
                  <DatePicker
                    {...field}
                    id="birth_date"
                    value={field.value ? parseISO(field.value) : undefined}
                    onChange={(val) => {
                      if (val) {
                        field.onChange(format(val, ApiAcceptableDate));
                      } else {
                        field.onChange("");
                      }
                    }}
                  />
                </FormControl>
                <FormDescription>
                  {tx("value-age", {
                    years: formatNumber(age.years ?? 0),
                    months: formatNumber(age.months ?? 0),
                  })}
                </FormDescription>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <div
          className={cn(
            "col-span-full flex grid-cols-2 flex-col gap-4 gap-y-4 md:grid md:gap-y-6",
            {
              "!hidden md:!hidden": mode === "appointment",
            },
          )}
        >
          <FormField
            control={form.control}
            name={fields.reason}
            render={({ field }) => (
              <FormItem>
                <Label required htmlFor="reason">
                  {t("reason.label")}
                </Label>
                <Select
                  onValueChange={(val) => {
                    field.onChange(fromBlankValue(val));
                  }}
                  value={toBlankValue(field.value)}
                  key={toBlankValue(field.value)}
                >
                  <FormControl>
                    <SelectTrigger id="reason">
                      <SelectValue placeholder={t("reason.placeholder")} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {zReasonEnum.options.map((option) => (
                      <SelectItem
                        key={toBlankValue(option)}
                        value={toBlankValue(option)}
                      >
                        {t(`reason.${option}`)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={fields.phone_number}
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="related_phone_number">
                  {t("phoneNumber.label")}
                </Label>
                <FormControl>
                  <PhoneInput
                    {...field}
                    placeholder={t("phoneNumber.placeholder")}
                    id="related_phone_number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name={fields.fheight}
          render={({ field }) => (
            <FormItem
              className={cn({
                hidden: mode === "appointment",
              })}
            >
              <Label htmlFor="fheight">{t("fatherHeight.label")}</Label>
              <FormControl>
                <IndicatorInput
                  {...field}
                  endIndicator={tr("height-unit")}
                  onChange={(val) => {
                    const value = val.target.value;
                    if (value === "") {
                      field.onChange(null);
                    } else {
                      field.onChange(value);
                    }
                  }}
                  value={field.value ?? undefined}
                  id="fheight"
                  placeholder={t("fatherHeight.placeholder")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={fields.mheight}
          render={({ field }) => (
            <FormItem
              className={cn({
                hidden: mode === "appointment",
              })}
            >
              <Label htmlFor="mheight">{t("motherHeight.label")}</Label>
              <FormControl>
                <IndicatorInput
                  {...field}
                  endIndicator={tr("height-unit")}
                  onChange={(val) => {
                    const value = val.target.value;
                    if (value === "") {
                      field.onChange(null);
                    } else {
                      field.onChange(value);
                    }
                  }}
                  value={field.value ?? undefined}
                  id="mheight"
                  placeholder={t("motherHeight.placeholder")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={fields.insurance}
          render={({ field }) => (
            <FormItem
              className={cn({
                hidden: mode === "appointment",
              })}
            >
              <Label htmlFor="insurance">{t("insurance.label")}</Label>
              <Select
                onValueChange={(val) => {
                  field.onChange(fromBlankValue(val));
                }}
                value={toBlankValue(field.value)}
                key={toBlankValue(field.value)}
              >
                <FormControl>
                  <SelectTrigger id="insurance">
                    <SelectValue placeholder={t("insurance.placeholder")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {zInsuranceEnum.options.map((option) => (
                    <SelectItem
                      key={toBlankValue(option)}
                      value={toBlankValue(option)}
                    >
                      {t(`insurance.${option}`)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};
