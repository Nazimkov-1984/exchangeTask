import { createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'modalStore',
  initialState: {
    value: false,
    age: 5
  },
  reducers: {
    toggleModal: state => {
    state.value = !state.value;
    },
    setAge: state => {
      state.age +=1;
    }
  }
})

export const {toggleModal, setAge} = counterSlice.actions;


