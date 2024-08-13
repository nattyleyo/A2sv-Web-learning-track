import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import jobDataReducer from "../slices/jobsData/jobsdataSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const perConfig = {
  key: "persist-key",
  storage: storage,
};

// Create the persisted reducer
const persistedReducer = persistReducer(perConfig, jobDataReducer);

// Configure the store with middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // Ignore these actions
        ignoredPaths: ["some.nested.path"], // Optionally ignore other paths
      },
    }),
});

// Create persistor
export const persistor = persistStore(store);

// Type definitions for use in your components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hooks for dispatch and selector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
