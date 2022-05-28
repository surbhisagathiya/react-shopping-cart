// feature-1
import React, { Component } from "react";
import Products from "./components/Products";
import data from "./data.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render() {
    return (
      <div className="grid-container">
        <div className="header">
          <a href="/">Shopping Cart</a>
        </div>
        <div className="main">
          <div className="content">
            <div className="content_main">
              <Products products={this.state.products}/>
            </div>
            <div className="sidebar">cart item</div>
          </div>
        </div>
        <div className="footer">All right reservesd</div>
      </div>
    );
  }
}

export default App;
