// import logo from './logo.svg';
import './App.css';
import store from './redux'
import { Provider } from 'react-redux';
import Router from './router'

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
