import { Candidates } from './components/Candidates';
import { Search } from './components/Search';
import { Tabs } from './components/Tabs';

import './app.css';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="app__container">
        <div className="app__tabs">
          <Tabs />
        </div>
        <div className="app__content">
          <Search />
          <Candidates />
        </div>
      </div>
    </Provider>
  );
}

export default App;
