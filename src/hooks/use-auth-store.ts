import { components } from "@/types/api-swagger";
import { useSessionStorage } from "@mantine/hooks";

type TAuthState = {
  otp?: components["schemas"]["OTPInit"];
  timeStamp?: number;
  choice: TLoginChoice;
};

const defaultState: TAuthState = {
  otp: undefined,
  timeStamp: undefined,
  choice: "patient",
};

export type TLoginChoice = "patient" | "doctor";

export const useAuthStore = () => {
  const [store, setStore] = useSessionStorage<TAuthState>({
    key: "login-store",
    defaultValue: defaultState,
  });

  const setOtpTimeStamp = ({
    otp,
    timeStamp,
  }: {
    otp: TAuthState["otp"];
    timeStamp: TAuthState["timeStamp"];
  }) => {
    setStore((prev) => ({
      ...prev,
      otp,
      timeStamp,
    }));
  };

  const setChoice = (choice: TAuthState["choice"]) => {
    setStore((prev) => ({
      ...prev,
      choice,
    }));
  };

  const reset = () => {
    setStore(defaultState);
  };

  return { reset, setChoice, setOtpTimeStamp, ...store };
};
