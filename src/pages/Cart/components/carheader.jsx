import React, { Component } from 'react'
import {connect} from "react-redux";
class carheader extends Component {
    
    render() {
        return (
            <div className="car-header">
                <div className="w">
                    <div className="car-logo">
                        <img src="img/logo.png" alt="" /> <b>购物车</b>
                    </div>
                </div>
            </div>
        )
    }
}

let mapstatetoprops = (state=>{
    return {
        car:state.car
    }
})

export default connect(mapstatetoprops)(carheader);