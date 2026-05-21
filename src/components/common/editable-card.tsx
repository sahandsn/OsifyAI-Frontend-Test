"use client";

import { CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "../common/button";
import { Pencil, X } from "lucide-react";
import { ReactNode, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { CardComponent } from "./card";

type EditableCardProps = {
  ShowComponent: ReactNode;
  EditComponent: ({ close }: { close: () => void }) => ReactNode;
  title?: string;
  description?: string;
  isEditable?: boolean;
};

export default function EditableCard(props: Readonly<EditableCardProps>) {
  const {
    title,
    description,
    EditComponent,
    ShowComponent,
    isEditable = true,
  } = props;
  const [isEditing, setIsEditing] = useState(false);

  const t = useTranslations("PatientDetails");

  const closeEditMode = useCallback(() => {
    setIsEditing(false);
  }, []);

  return (
    <CardComponent
      title={
        <div className="w-full flex-row items-center justify-between gap-2">
          <div className="flex flex-col gap-y-1.5">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>

          <Button
            variant={isEditing ? "secondary" : "text"}
            className={cn("ms-auto gap-2", {
              hidden: isEditing || !isEditable,
            })}
            onClick={() => setIsEditing((prev) => !prev)}
          >
            {isEditing ? <X size={16} /> : <Pencil size={16} />}
            <span className="hidden md:inline">
              {isEditing ? t("cancel") : t("edit")}
            </span>
          </Button>
        </div>
      }
    >
      {isEditing ? EditComponent({ close: closeEditMode }) : ShowComponent}
    </CardComponent>
  );
}
