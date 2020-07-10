import React, { Component } from 'react'

import { connect } from 'react-redux';
import { selectAll} from '../../../store/actions/car'

class Wrapheader extends Component {
    selectall(e) {
        let isselectall = e.target.checked;
        this.props.dispatch(selectAll(isselectall))
    }
    all(){
        return this.props.car.every((e)=>e.checked)
    }
    render() {
        return (
            <div className="cart-thead">
                <div className="t-checkbox">
                    <input 
                    onChange={(e) => { this.selectall(e)}}
                    type="checkbox" 
                    name="" id="" 
                    checked={this.all()}
                    className="checkall" 
                    /> 全选
                </div>
                <div className="t-goods">商品</div>
                <div className="t-price">单价</div>
                <div className="t-num">数量</div>
                <div className="t-sum">小计</div>
                <div className="t-action">操作</div>
            </div>
        )
    }
}


let mapstatetoprops = (state) => {
    return {
        car: state.car
    }
}

export default connect(mapstatetoprops)(Wrapheader)