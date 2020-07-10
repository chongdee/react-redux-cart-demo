
import React, { Component } from 'react'

import {connect} from 'react-redux';

import { selectAll } from '../../../store/actions/car'

class Carfooter extends Component {
    selectall(e) {
        let isselectall = e.target.checked;
        this.props.dispatch(selectAll(isselectall))
    }
    all() {
        return this.props.car.every((e) => e.checked)
    }
     len() {
        return this.props.car.filter(e => e.checked).length
    }
    counts(){
        let selectproducts = this.props.car.filter(e => e.checked);
        let count=0;
        selectproducts.forEach(e=>{
            count+=Number(e.count);
        })
        return count;
    }
    mount(){
        let selectproducts = this.props.car.filter(e => e.checked);
        let count = 0;
        selectproducts.forEach(e => {
            count += Number(e.count)*(Number(e.price)*100)/100;
        })
        return count;
    }

    render() {

        return (
            <div className="cart-floatbar">
                <div className="select-all">
                    <input 
                        checked={this.all()}
                        onChange={(e)=>{this.selectall(e)}}
                    type="checkbox" 
                    name="" id="" 
                    className="checkall" />全选
                </div>
                <div className="operation">
                    <a href={"/"} className="remove-batch"> 删除选中的商品</a>
                    <a href={"/"} className="clear-all">清理购物车</a>
                </div>
                <div className="toolbar-right">
                    <div className="amount-sum">已经选<em>{this.counts()}</em>件商品</div>
                    <div className="price-sum">总价： <em>￥{this.mount().toFixed(2)}</em></div>
                    <div className="btn-area">去结算</div>
                    <h2></h2>
                </div>
            </div>
        )
    }
}

let mapstatetoprops = (state)=>{
    return {
        car:state.car
    }
}

export default connect(mapstatetoprops)(Carfooter)

