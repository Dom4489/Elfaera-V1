import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing';
import ProductInfo from './Pages/ProductInfo';
// import Checkout from './Pages/Checkout';
import LogIn from './Pages/Login';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/store" element={<Landing />} />
          <Route path="/product" element={<ProductInfo />} />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;