import React from "react";
// import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import store from "./store";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <div className="header">
            <a href="/">React Shopping Cart</a>
          </div>
          <div className="main">
            <div className="content">
              <div className="content_main">
                <Filter></Filter>
                <Products></Products>
              </div>
              <div className="sidebar">
                <Cart></Cart>
              </div>
            </div>
          </div>
          <div className="footer">All right is reserved.</div>
        </div>
      </Provider>
    );
  }
}

export default App;
