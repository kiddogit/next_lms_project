

import { configureStore } from "@reduxjs/toolkit"
import categorySlice from './category/categorySlice'
import paymentSlice from './payment/paymentSlice'

const store = configureStore({
  reducer : {
    category : categorySlice,
    payment : paymentSlice,
    review : reviewSlice
  }
})