import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISearch {
    searchTerm: string | null;
}

const initialState: ISearch = {
    searchTerm: ''
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        getSearchValue: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        }
    }
});

export const { getSearchValue } = searchSlice.actions;
export default searchSlice.reducer;