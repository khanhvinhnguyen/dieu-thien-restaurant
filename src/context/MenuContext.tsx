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
  categories: CategoryType;
  menu: MenuType;
}

const defaultContextValue: MenuContextType = {
  categories: { food: [], drink: [] },
  menu: { food: {}, drink: {} },
};

const MenuContext = createContext<MenuContextType>(defaultContextValue);

export const useMenu = () => useContext(MenuContext);

const fetchCategories = async () => {
  const res = await fetch("/data/category.json");
  return await res.json();
};

const fetchMenu = async () => {
  const res = await fetch("/data/menu.json");
  return await res.json();
};

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [categories, setCategories] = useState<CategoryType>({
    food: [],
    drink: [],
  });
  const [menu, setMenu] = useState<MenuType>({ food: {}, drink: {} });

  useEffect(() => {
    const loadData = async () => {
      const categoryData = await fetchCategories();
      setCategories(categoryData);

      const menuData = await fetchMenu();
      setMenu(menuData);
    };

    loadData();
  }, []);

  return (
    <MenuContext.Provider value={{ categories, menu }}>
      {children}
    </MenuContext.Provider>
  );
};
