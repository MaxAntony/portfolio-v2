import { pages } from "@root/data";
import { useGlobalContext } from "@root/state/context/state.context";
import { FC } from "react";

type props = { path: pages };
export const PageWrapper: FC<props> = ({ children, path }) => {
  const { page: activePage } = useGlobalContext();

  return (
    <div
      className={`absolute top-0 bottom-0 left-0 right-0 overflow-x-hidden overflow-y-scroll transition-opacity ${
        activePage === path ? "z-10 opacity-100" : "-z-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};
