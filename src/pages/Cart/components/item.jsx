import React, { Component } from "react";

import { connect } from "react-redux";
import { setdata, selectdata } from "../../../store/actions/car";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  select(id, event) {
    // this.props.dispatch(setdata({ checked: event.target.checked, id }))
    this.props.dispatch(selectdata({ checked: event.target.checked, id }));
  }
  addone(e) {
    e.count++;
    this.props.dispatch(setdata(e));
  }
  reduceone(e) {
    e.count--;
    this.props.dispatch(setdata(e));
    return false;
  }

  render() {
    let e = this.props.e;
    return (
      <div
        className={e.checked ? "cart-item check-cart-item" : "cart-item"}
        key={e.id}
      >
        <div className="p-checkbox">
          <input
            type="checkbox"
            checked={e.checked}
            className="j-checkbox"
            onChange={(event) => this.select(e.id, event)}
          />
        </div>
        <div className="p-goods">
          <div className="p-img">
            <img src="upload/p1.jpg" alt="" />
          </div>
          <div className="p-msg">{e.name}</div>
        </div>
        <div className="p-price">{e.price}</div>
        <div className="p-num">
          <div className="quantity-form">
            <a onClick={this.reduceone.bind(this, e)} className="decrement">
              -
            </a>
            <input
              type="text"
              className="itxt"
              value={e.count}
              onChange={() => {}}
            />
            <a onClick={this.addone.bind(this, e)} className="increment">
              +
            </a>
          </div>
        </div>
        <div className="p-sum">{(e.price * 100 * e.count) / 100}</div>
        <div className="p-action">
          <a href={"/"}>删除</a>
        </div>
      </div>
    );
  }
}

let mapstatetoprops = (state) => {
  return {
    car: state.car,
  };
};

export default connect(mapstatetoprops)(Item);
