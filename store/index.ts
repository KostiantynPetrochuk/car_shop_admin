import { configureStore } from "@reduxjs/toolkit";
import brandsReducer from "@/store/features/brands/brandsSlice";
import featuresReducer from "@/store/features/features/featuresSlice";
import carsReducer from "@/store/features/cars/carsSlice";

export const store = configureStore({
  reducer: {
    brands: brandsReducer,
    features: featuresReducer,
    cars: carsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
