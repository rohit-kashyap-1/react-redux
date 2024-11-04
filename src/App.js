import logo from './logo.svg';
import './App.css';

import { store } from './store/store';
import { Provider } from 'react-redux';

import Todo from './components/Todo';
import Todos from './components/Todos';
import Navbar from './components/Navbar';
import CurrentProject from './components/currentProject';
import SetProject from './components/SetProject';
import BottomComponent from './components/BottomComponent';
function App() {
  return (
    <div className="">
      <Provider store={store}>
        {/* <Navbar />
        <Todo />
        <Todos /> */}
        <CurrentProject />
        <SetProject />
        <BottomComponent />
      </Provider>
    </div>
  );
}

export default App;
