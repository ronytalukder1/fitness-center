import logo from './logo.svg';
import './App.css';


import { Toaster } from 'react-hot-toast';


import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Route/Route';

function App() {
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
