import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export const BreadcrumbsSlice = createSlice({
    name: 'Breadcrumbs',
    initialState: {
      DAOName: 'QuintaDAO'
    },
    reducers: {

      changeCurrDAO: (state, action) => {
        state.DAOName = action.payload
      }
    }
})

export const { changeCurrDAO } = BreadcrumbsSlice.actions
export default BreadcrumbsSlice.reducer