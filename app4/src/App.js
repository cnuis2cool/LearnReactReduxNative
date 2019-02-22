
import React, {Component} from "react";


class Clock extends Component {
  constructor(props) {
    super(props);

    this.canvas = null;
    this.state = {};
  }

  render() {

    return (
      <div style={{float: "left"}}>
        <canvas ref={(element) => this.canvas = element} width="400" height="400" style={{margin: 10, backgroundColor:"#FF0000"}}>
        </canvas>
        <div>{this.props.timezone}</div>
      </div>
    );
  }

  componentDidMount() {
    var ctx = this.canvas.getContext("2d");
    var radius = this.canvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.90
    setInterval(() => this.drawClock(ctx, radius), 1000);
  }

  drawClock(ctx, radius) {
    this.drawFace(ctx, radius);
    this.drawNumbers(ctx, radius);
    this.drawTime(ctx, radius);
  }

  drawFace(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
  }
  
  drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius*0.15 + "px arial";
    ctx.textBaseline="middle";
    ctx.textAlign="center";
    for(num = 1; num < 13; num++){
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius*0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius*0.85);
      ctx.rotate(-ang);
    }
  }
  
  drawTime(ctx, radius){
      var now = new Date();
      var hour = now.getUTCHours();
      var minute = now.getUTCMinutes();
      var second = now.getUTCSeconds();
      //hour
      hour=hour%12;
      hour=(hour*Math.PI/6)+
      (minute*Math.PI/(6*60))+
      (second*Math.PI/(360*60));
      this.drawHand(ctx, hour, radius*0.5, radius*0.07);
      //minute
      minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
      this.drawHand(ctx, minute, radius*0.8, radius*0.07);
      // second
      second=(second*Math.PI/30);
      this.drawHand(ctx, second, radius*0.9, radius*0.02);
  }
  
  drawHand(ctx, pos, length, width) {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.moveTo(0,0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-pos);
  }

  componentWillUnmount() {

  }

}

// class DatePicker extends Component {

// }

class App extends Component {
  render() {
    return(
      <div>
        <Clock timezone="IST" hours="5" minutes="30" />
        <Clock timezone="NY" hours="-10" minutes="30" />
        <Clock timezone="AUS" hours="10" minutes="30" />
      </div>
    );
  }
}

export default App;


// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { createStore, combineReducers, applyMiddleware } from 'C:/Users/spanugan/AppData/Local/Microsoft/TypeScript/3.2/node_modules/redux';

// import createSagaMiddleware from "redux-saga";
// import {put, takeEvery, all} from "redux-saga/effects";

// function *helloSaga() {
//   console.log("Hello Saga!");
// }

// function *watchCallSumAsync() {
//   yield takeEvery("CALl_SUM_SYNC", () => {
//     console.log("CALl_SUM_SYNC");
//   });
// }

// function *rootSaga() {
//   yield all([helloSaga(), watchCallSumAsync]);
// }

// const sagaMiddleware = createSagaMiddleware();

// const reducer = (state = {calculations: [], busy: false}, {type, payload}) => {
//   switch(type) {
//     case "ADD_CALCULATION":
//       return {calculations: [...state.calculations, payload]};

//     default:
//       return state;
//   }
// };

// // Middleware intercepts calls going to Store
// let store = createStore(combineReducers({reducer}), applyMiddleware(sagaMiddleware));

// // Do this after SagaMiddleWare is part of the store
// sagaMiddleware.run(rootSaga);

// async function coordinator() {
//   // loop and await
// }

// class Calc extends Component {
//   render() {
//     return(
//       <button onClick={() => calcSum(100, 200)}>Sum</button>
//     );
//   }
// }

// // Business logic on the server
// function sum(x, y) {
//   return x + y;
// }

// // Server proxy
// function sumProxy(x, y) {

//   // Like fetch API returns Promise object in which it performs Async operation
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let result = sum(x, y);
//       resolve(result);  // Completes the promise object
//     }, 3000);
//   });
// }

// // Event handlers
// function *calcSum(x, y) {
//   let result;
//   yield sumProxy(x, y).then(resultFromServer => result = resultFromServer);

//   store.dispatch({type: "ADD_CALCULATION", payload: {x, y, result, operation: "SUM"}});
// }


// class App extends Component {
//   render() {
//     return (
//       <Calc />
//     );
//   }
// }

// export default App;

// store.subscribe(() => {
//   console.log(store.getState().reducer.calculations);
// });