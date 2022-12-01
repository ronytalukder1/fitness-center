import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Exercise from './components/Exercise/Exercise';
import { Toaster } from 'react-hot-toast';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div>
      <Header></Header>
      <Exercise></Exercise>
      <Blog></Blog>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
