import {create} from 'zustand'
import data from './data.json'
import { persist } from 'zustand/middleware';

let category2data = data.categories[1].widgets;

console.log(category2data);


const useCategory2Store = create (
    persist(
      (set) => ({
        category2WidgetsData: category2data, // Initialize with the first category's widget
  
        addCate2Widget: (newWidget) => 
          set((state) => ({
            category2WidgetsData: [...state.category2WidgetsData, newWidget],
          })),
  
        removeCate2Widget: (widgetId) =>
          set((state) => ({
            category2WidgetsData: state.category2WidgetsData.filter((widget) => widget.id !== widgetId),
          })),
          //on Page-Refresh reset the state to its initialization
          resetState2: () => set(() => {
            localStorage.setItem('dashboardState', JSON.stringify(category2data));
            return { category2WidgetsData: category2data };
          }),  
          toggleCate2Checked:(name)=>
            set((state)=>({
              category2WidgetsData: state.category2WidgetsData.map((widget) => widget.widgetName == name? {...widget, checked : !widget.checked} : widget)
            })),  
          updateCate2Widget: () =>
            set((state) => ({
              category2WidgetsData: state.category2WidgetsData.filter((widget) => widget.checked),
            })),
      }),
      {
        name: 'widget-storage2', // Unique name for local storage
      }
    ),
  );
  
  export default useCategory2Store;