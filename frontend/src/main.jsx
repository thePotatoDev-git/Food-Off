import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './App.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import PrivateRoute from './components/PrivateRoute.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import MainScreen from './screens/MainScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import EateriesScreen from './screens/EateriesScreen.jsx';
import EateryScreen from './screens/EateryScreen.jsx';
import AddEatery from './components/AddEatery.jsx';
import EateryEditScreen from './screens/EateryEditScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
        {/* Private Routes */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/main" element={<MainScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/eateries" element={<EateriesScreen />} />
        <Route path="/eateries/:id" element={<EateryScreen />} />
        <Route path="/addEatery" element={<AddEatery />} />
        <Route path="/eateries/:id/edit" element={<EateryEditScreen />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={ router } />
    </React.StrictMode>
  </Provider>
)
