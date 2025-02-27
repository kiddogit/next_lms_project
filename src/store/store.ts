

import { configureStore } from "@reduxjs/toolkit"
import categorySlice from './category/categorySlice'
// import paymentSlice from './payment/paymentSlice'

export const makeStore = () => {
  return configureStore({
    reducer : {
      categories : categorySlice,
      // payment : paymentSlice,
    },
  })
}

// Infer the type of makestore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

