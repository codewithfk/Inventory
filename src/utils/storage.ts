// utils/storage.ts

import AsyncStorage from '@react-native-async-storage/async-storage';
const STORAGE_KEY = 'inventory_items';

export const saveItems = async (items: InventoryItemType[]) => {
  try {
    const json = JSON.stringify(items);
    await AsyncStorage.setItem(STORAGE_KEY, json);
  } catch (error) {
    console.error('Error saving inventory items:', error);
  }
};

export const loadItems = async (): Promise<InventoryItemType[]> => {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : [];
  } catch (error) {
    console.error('Error loading inventory items:', error);
    return [];
  }
};
