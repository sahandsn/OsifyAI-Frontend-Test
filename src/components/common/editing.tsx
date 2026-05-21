import { Check, Pencil, X } from "lucide-react";
import { Button } from "./button";
import { ComponentProps, Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";

type TEditing = {
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  cancelBtn?: ComponentProps<typeof Button>;
  approveBtn?: ComponentProps<typeof Button>;
  editBtn?: ComponentProps<typeof Button>;
  className?: string;
  loading?: boolean;
};

export const Editing = (props: Readonly<TEditing>) => {
  const {
    isEditing,
    setIsEditing,
    cancelBtn,
    approveBtn,
    editBtn,
    loading,
    className,
  } = props;
  if (!isEditing) {
    return (
      <Button
        {...editBtn}
        type="button"
        shape={editBtn?.shape ?? "icon"}
        disabled={editBtn?.disabled || loading}
        variant={editBtn?.variant ?? "text"}
        className={cn("w-fit", editBtn?.className, className)}
        onClick={(e) => {
          setIsEditing(true);
          editBtn?.onClick?.(e);
        }}
      >
        {editBtn?.children ?? <Pencil className="size-20" />}
      </Button>
    );
  }

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Button
        {...cancelBtn}
        type="reset"
        shape={cancelBtn?.shape ?? "icon"}
        disabled={cancelBtn?.disabled || loading}
        variant={cancelBtn?.variant ?? "secondary"}
        className={cn("w-fit", cancelBtn?.className)}
      >
        {cancelBtn?.children ?? <X className="size-20" />}
      </Button>
      <Button
        {...approveBtn}
        type="submit"
        shape={approveBtn?.shape ?? "icon"}
        loading={approveBtn?.loading || loading}
        variant={approveBtn?.variant ?? "primary"}
        className={cn("w-fit", approveBtn?.className)}
      >
        {approveBtn?.children ?? (
          <Check
            className={cn("size-20", {
              hidden: loading,
            })}
          />
        )}
      </Button>
    </div>
  );
};
