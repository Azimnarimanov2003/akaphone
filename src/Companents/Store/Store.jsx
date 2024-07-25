
 import { create } from 'zustand';

 const useShareStore = create((set) => ({
   cards: [],
   setCards: (cards) => set({ cards })
 }));
 
 export default useShareStore;
 