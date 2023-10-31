import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Component/Routers/Router/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div class="App">
      <RouterProvider router={Router} ></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
