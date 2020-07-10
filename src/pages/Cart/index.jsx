import React, { Component } from "react";
import CarHeader from "./components/carheader";

import Carfooter from "./components/carfooter";
import Wrapheader from "./components/wrapheader";
import Item from "./components/item";
import { connect } from "react-redux";

import { getdata } from "../../store/actions/car";

import '../../style/css/base.css'

function Cartitle() {
  return (
    <div className="cart-filter-bar">
      <em>全部商品</em>
    </div>
  );
}

class Cart extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <CarHeader />

        <div className="c-container">
          <div className="w">
            <Cartitle />
            <div className="cart-warp">
              <Wrapheader />
              <div className="cart-item-list">
                {this.props.car.map((e) => {
                  return <Item e={e} key={e.id} />;
                })}
              </div>
              <Carfooter />
            </div>
          </div>
        </div>
      </div>
    );
  }
  select(e) {
    console.log(e);
  }
  componentDidMount() {
    this.props.dispatch(getdata());
  }
}

let mapstatetoprops = ({ car }) => {
  return {
    car,
  };
};

export default connect(mapstatetoprops)(Cart);
