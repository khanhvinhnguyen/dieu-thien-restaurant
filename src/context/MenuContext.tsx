"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface CategoryType {
  food: never[];
  drink: never[];
}

interface MenuType {
  food: {};
  drink: {};
}

interface MenuContextType {
  menu: MenuType;
}

const defaultContextValue: MenuContextType = {
  menu: { food: {}, drink: {} },
};

const MenuContext = createContext<MenuContextType>(defaultContextValue);

export const useMenu = () => useContext(MenuContext);

const fetchMenu = async () => {
  const res = await fetch("/data/menu.json");
  return await res.json();
};

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [menu, setMenu] = useState<MenuType>({ food: {}, drink: {} });

  useEffect(() => {
    const loadData = async () => {
      const menuData = await fetchMenu();
      setMenu(menuData);
    };

    loadData();
  }, []);

  return (
    <MenuContext.Provider value={{ menu }}>{children}</MenuContext.Provider>
  );
};
