import { useContext } from "react";
import { TranslateContext } from "@/context/translateProvider";

export const useTranslate = () => {
  return useContext(TranslateContext);
};
