import {
  configureStore,
  ThunkAction,
  Action,
  PreloadedState,
  combineReducers,
} from "@reduxjs/toolkit";
import { structuresReducer } from "./features/structures/structuresSlice/structuresSlice";
import { uiReducer } from "./features/ui/uiSlice/uiSlice";
import { userReducer } from "./features/users/userSlice/userSlice";
import { structureReducer } from "./features/structures/structureSlice/structureSlice";

const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
  structures: structuresReducer,
  structure: structureReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = setupStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
