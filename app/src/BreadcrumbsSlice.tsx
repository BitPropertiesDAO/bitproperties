import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export const BreadcrumbsSlice = createSlice({
    name: 'Breadcrumbs',
    initialState: {
      DAOName: 'QuintaDAO',
      PropertyName: 'PropertyName'
    },
    reducers: {

      changeCurrDAO: (state, action) => {
        state.DAOName = action.payload
      },

      changeCurrProperty: (state, action) => {
        state.PropertyName = action.payload
      }
    }
})

export const { changeCurrDAO, changeCurrProperty } = BreadcrumbsSlice.actions
export default BreadcrumbsSlice.reducer