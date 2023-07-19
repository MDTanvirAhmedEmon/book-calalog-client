import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../../types/globaltypes";

interface IState {
    wishlist: IBook[];
}

const initialState: IState = {
    wishlist: [],
};

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addBookToWishList: (state, action: PayloadAction<IBook>) => {
            const existing = state.wishlist.find(book => book._id === action.payload._id);
            if (!existing) {
                state.wishlist.push(action.payload);
            }
        },
        removeFromWishList: (state, action: PayloadAction<IBook>) => {
            state.wishlist = state.wishlist.filter(book => book._id !== action.payload._id);
        },
    },
});

export const { addBookToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
