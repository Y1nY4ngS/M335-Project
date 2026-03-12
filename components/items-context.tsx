import React, { createContext, useContext, useState, ReactNode } from 'react';

type FoundItems = {
  [key: number]: boolean;
};

type ItemsContextType = {
  foundItems: FoundItems;
  toggleItem: (itemId: number) => void;
};

const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

type ItemsProviderProps = {
  children: ReactNode;
};

export function ItemsProvider({ children }: ItemsProviderProps) {
  const [foundItems, setFoundItems] = useState<FoundItems>({});

  const toggleItem = (itemId: number) => {
    setFoundItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <ItemsContext.Provider value={{ foundItems, toggleItem }}>
      {children}
    </ItemsContext.Provider>
  );
}

export function useItems() {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error('useItems must be used inside an ItemsProvider');
  }

  return context;
}