"use client";

import { Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { useTranslation } from "react-i18next";

interface SuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
}

export default function SuccessDialog({
  open,
  onOpenChange,
  title,
  description,
}: SuccessDialogProps) {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm border border-border bg-background shadow-lg">
        <div className="flex flex-col items-center text-center pt-2">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Check className="h-5 w-5 text-primary" />
          </div>

          <DialogHeader className="space-y-2">
            <DialogTitle className="text-center text-lg font-medium">
              {title ?? t("contact.successTitle")}
            </DialogTitle>
            <DialogDescription className="text-center text-sm">
              {description ?? t("contact.successDescription")}
            </DialogDescription>
          </DialogHeader>

          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="mt-6 px-5 py-2 text-sm rounded-md border border-border text-foreground hover:bg-muted transition-colors"
          >
            {t("contact.successClose")}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
