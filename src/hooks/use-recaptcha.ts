import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useState, useCallback } from "react";
import toast from "@/components/common/custom-toast";
import { env } from "@/env";

export const useReCaptcha = (action: string) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isExecuting, setIsExecuting] = useState(false);

  const execute = useCallback(async () => {
    if (env.NEXT_PUBLIC_RECAPTCHA_GA_AVAILABLE === "false") {
      return "1";
    }

    setIsExecuting(true);
    try {
      const token = await executeRecaptcha?.(action);
      return token;
    } catch (error) {
      console.error(`reCaptcha error on action "${action}":`, error);
      toast.error("reCaptcha error, please try again later.");
      return null;
    } finally {
      setIsExecuting(false);
    }
  }, [executeRecaptcha, action]);

  return { execute, isExecuting };
};
