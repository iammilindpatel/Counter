import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/myCounterSlice.jsx'; 

const store = configureStore({
  reducer: {
    // This is where we add our slices.
    // The key 'counter' will be the name of the state property (e.g., state.counter)
    counter: counterReducer,
    // you can add more reducers for other features here
    // user: userReducer,
  },
});



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
      
  </StrictMode>
)
