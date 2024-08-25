import {create} from 'zustand'
import data from './data.json'
import { persist } from 'zustand/middleware';

let category3data = data.categories[2].widgets;

console.log(category3data);


const useCategory3Store = create (
    persist(
      (set) => ({
        category3WidgetsData: category3data, // Initialize with the first category's widget
  
        addCate3Widget: (newWidget) => 
          set((state) => ({
            category3WidgetsData: [...state.category3WidgetsData, newWidget],
          })),
  
        removeCate3Widget: (widgetId) =>
          set((state) => ({
            category3WidgetsData: state.category3WidgetsData.filter((widget) => widget.id !== widgetId),
          })),
          //on Page-Refresh reset the state to its initialization
          resetState3: () => set(() => {
            localStorage.setItem('dashboardState', JSON.stringify(category3data));
            return { category3WidgetsData: category3data };
          }),  
        
        toggleCate3Checked:(name)=>
          set((state)=>({
            category3WidgetsData: state.category3WidgetsData.map((widget) => widget.widgetName == name? {...widget, checked : !widget.checked} : widget)
          })),  
        updateCate3Widget: () =>
          set((state) => ({
            category3WidgetsData: state.category3WidgetsData.filter((widget) => widget.checked),
          })),
      }),
      {
        name: 'widget-storage3', 
      }
    ),
  );
  
  export default useCategory3Store;