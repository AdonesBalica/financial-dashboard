import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyle from './globalStyles';

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
