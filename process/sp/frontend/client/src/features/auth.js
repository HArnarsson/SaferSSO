import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    isAuthenticated: false,
    user: null,
    loading: false,
    registered: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetRegister: state => {
        state.registered = false;
    },
  },
});

export const { resetRegister } = userSlice.actions
export default userSlice.reducer