import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadItems, saveItems } from '../utils/storage';

interface InventoryContextType {
  items: InventoryItemType[];
  addOrUpdateItem: (item: InventoryItemType) => void;
  deleteItem: (id: string) => void;
  currentItem?: InventoryItemType;
  setCurrentItem: (item?: InventoryItemType) => void;
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

export const useInventory = () => {
  const context = useContext(InventoryContext);
  if (!context) throw new Error("useInventory must be used within InventoryProvider");
  return context;
};

export const InventoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<InventoryItemType[]>([]);
  const [currentItem, setCurrentItem] = useState<InventoryItemType | undefined>(undefined);

  useEffect(() => {
    loadItems().then(setItems);
  }, []);

  useEffect(() => {
    saveItems(items);
  }, [items]);

  const addOrUpdateItem = (item: InventoryItemType) => {
    setItems(prev =>
      prev.some(i => i.id === item.id)
        ? prev.map(i => (i.id === item.id ? item : i))
        : [...prev, item]
    );
  };

  const deleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <InventoryContext.Provider value={{
      items, addOrUpdateItem, deleteItem, currentItem, setCurrentItem
    }}>
      {children}
    </InventoryContext.Provider>
  );
};
