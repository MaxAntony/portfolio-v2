import { pages } from "@root/data";
import { createContext, Dispatch, SetStateAction, useContext } from "react";

type GlobalContent = {
  page: pages;
  setPage: Dispatch<SetStateAction<pages>>;
};

export const GlobalContext = createContext<GlobalContent>({
  page: pages.home,
  setPage: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);
