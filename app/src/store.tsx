import { configureStore } from "@reduxjs/toolkit";
import DaoCreationSlice from "./Components/DaoManager/CreateDAO/DaoCreationSlice";
import BreadcrumbsSlice from "./BreadcrumbsSlice";

const rootReducer = {
  Alchemy: DaoCreationSlice,
  BreadcrumbsReducer: BreadcrumbsSlice
}

const store = configureStore({
  reducer: rootReducer
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
