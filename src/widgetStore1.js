import {create} from 'zustand'
import data from './data.json'
import { persist } from 'zustand/middleware';

let category1data = data.categories[0].widgets;

console.log(category1data);


const useCategory1Store = create (
    persist(
      (set) => ({
        category1WidgetsData: category1data, // Initialize with the first category's widget
  
        addCate1Widget: (newWidget) => 
          set((state) => ({
            category1WidgetsData: [...state.category1WidgetsData, newWidget],
          })),
  
        removeCate1Widget: (widgetId) =>
          set((state) => ({
            category1WidgetsData: state.category1WidgetsData.filter((widget) => widget.id !== widgetId),
          })),
          //on Page-Refresh reset the state to its initialization
          resetState1: () => set(() => {
            localStorage.setItem('dashboardState', JSON.stringify(category1data));
            return { category1WidgetsData: category1data };
          }),  
        
        toggleCate1Checked:(name)=>
          set((state)=>({
            category1WidgetsData: state.category1WidgetsData.map((widget) => widget.widgetName == name? {...widget, checked : !widget.checked} : widget)
          })),  
        updateCate1Widget: () =>
          set((state) => ({
            category1WidgetsData: state.category1WidgetsData.filter((widget) => widget.checked),
          })),
      }),
      {
        name: 'widget-storage1', // Unique name for local storage
      }
    ),
  );
  
  export default useCategory1Store;