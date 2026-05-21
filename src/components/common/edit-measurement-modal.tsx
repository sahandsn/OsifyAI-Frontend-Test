"use client";

import { useTranslations } from "next-intl";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/common/button";
import { inputVariants } from "@/components/common/input";
import { Label } from "@/components/common/label";
import { cn } from "@/lib/utils";
import { InputGroup, InputGroupAddon } from "../ui/input-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomInputGroupInput } from "./custom-input-group";

interface BoneAgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: number | undefined) => void;
  title: string;
  description: string;
  cancelLabel?: string;
  saveLabel?: string;
  pending?: boolean;
}

export function BoneAgeModal({
  isOpen,
  onClose,
  onSave,
  title,
  description,
  cancelLabel,
  saveLabel,
  pending,
}: BoneAgeModalProps) {
  const tModal = useTranslations("BoneAgeModal");
  const t = useTranslations("HeightCalculator");
  const tEditModal = useTranslations("EditMeasurementModal");

  const zSchema = z.object({
    years: z.coerce.number<number>().int().nonnegative().nullish(),
    months: z.coerce.number<number>().int().gte(0).lte(12).nullish(),
  });

  const form = useForm<z.infer<typeof zSchema>>({
    resolver: zodResolver(zSchema),
    defaultValues: {
      years: null,
      months: null,
    },
  });

  const handleSave = (data: z.infer<typeof zSchema>) => {
    const val = 12 * (data?.years ?? 0) + (data?.months ?? 0);
    onSave(val);
  };
  const handleCancel = () => {
    onClose();
    form.reset(form.formState.defaultValues);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="md:w-[424px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSave)}
            className="flex flex-col gap-4"
          >
            <h2 className="text-lg font-semibold text-foreground">{title}</h2>
            <p className="text-sm text-muted-foreground">{description}</p>
            <div className="flex flex-col gap-2">
              <Label className="text-sm">{tModal("label")}</Label>

              <div className="flex grid-cols-2 flex-col gap-4 md:grid">
                <FormField
                  control={form.control}
                  name="years"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <InputGroup
                          className={cn(
                            "!outline-0 !ring-0",
                            inputVariants({ size: "48" }),
                          )}
                        >
                          <InputGroupAddon align={"inline-end"}>
                            {t("bone-age-year")}
                          </InputGroupAddon>
                          <CustomInputGroupInput
                            {...field}
                            onChange={(val) => {
                              const value = val.target.value;
                              if (value === "") {
                                field.onChange(null);
                              } else {
                                field.onChange(value);
                              }
                            }}
                            value={field.value ?? undefined}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="months"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <InputGroup
                          className={cn(
                            "!outline-0 !ring-0",
                            inputVariants({ size: "48" }),
                          )}
                        >
                          <InputGroupAddon align={"inline-end"}>
                            {t("bone-age-month")}
                          </InputGroupAddon>
                          <CustomInputGroupInput
                            {...field}
                            onChange={(val) => {
                              const value = val.target.value;
                              if (value === "") {
                                field.onChange(null);
                              } else {
                                field.onChange(value);
                              }
                            }}
                            value={field.value ?? undefined}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <DialogFooter className="gap-2">
              <Button
                type="button"
                variant="secondary"
                onClick={handleCancel}
                className="h-12 flex-1 rounded-[8px] text-sm"
              >
                {cancelLabel || tEditModal("cancel")}
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="h-12 flex-1 rounded-[8px] text-sm"
                loading={pending}
                disabled={!form.formState.isDirty}
              >
                {saveLabel || tEditModal("save")}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
