
// Example 11 - Full fledged App.
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider, connect} from "react-redux";
import Test from "./components/Test";
import TestEditing from "./components/TestEditing";
import AddQuestion from "./components/AddQuestion";
import store from "./reducers/store";

const AppComponent = () => (
    <div className="container-fluid" style={{marginTop:10}}>
        <h3>Online Test Application</h3>
        <hr/>
        <div className="row">
            <div className="col-4">
                <Test/>
            </div>
            <div className="col-5">
                <TestEditing/>
            </div>
            <div className="col-3">
                <AddQuestion/>
            </div>
        </div>
    </div>
);

ReactDOM.render(
    <Provider store={store}>
        <AppComponent/>
    </Provider>,
    document.getElementById("root")
);



//-----------------------------
/* End of Example 11 */
//-----------------------------

// // Example 10
// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { Provider, connect} from "react-redux";
// import { createStore, combineReducers } from "redux";

// function counterReducer (state = { count: 0 }, action) {
    
//     switch (action.type) {

//         case "INCREMENT":
//             return {count: state.count + 1}; // return to store so that this object is passed by store next time

//         case "DECREMENT":
//             return {count: state.count - 1};

//         default:
//             return state;
//     }
// }

// /******************* Helper functions for dispatch ************* */

// function increment() {
//     return {type: "INCREMENT", payload: null};  // action
// }

// function  decrement() {
//     return {type: "DECREMENT", payload: null};
// }

// /************************************************************** */

// const IncrementComponent = ({c, increment}) => (
//     <div>
//         {c}
//         <button onClick={() => increment()}>Increment</button>
//     </div>
// );

// let obtainStateForIC = (store) => {
//     return { c: store.counterReducer.count };
// };

// let IncrementComponentFromConnect = connect(obtainStateForIC, {increment})(IncrementComponent);

// const DecrementComponent = ({c, decrement}) => (
//     <div>
//         {c}
//         <button onClick={() => decrement()}>Decrement</button>
//     </div>
// );

// let obtainStateForDC = (store) => {
//     return { c: store.counterReducer.count };
// };

// let DecrementComponentFromConnect = connect(obtainStateForDC, {decrement})(DecrementComponent);

// class AppComponent extends Component {

//     render() {
//         return(
//             <div>
//                 <IncrementComponentFromConnect/>
//                 <br/>
//                 <DecrementComponentFromConnect/>
//             </div>
//         );
//     }
// }

// // Make reducer part of the store
// let store = createStore(combineReducers({ counterReducer }));

// // store.subscribe(() => {
// //     console.log('State: ' + store.getState().counterReducer.count);
// // });

// ReactDOM.render(
//     <Provider store={store}>
//         <AppComponent />
//     </Provider>,
//     document.getElementById("root")
// );


// //-----------------------------
// /* End of Example 10 */
// //-----------------------------

// // Example 9
// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { Provider, connect} from "react-redux";
// import { createStore, combineReducers } from "redux";

// function counterReducer (state = { count: 0 }, action) {
    
//     switch (action.type) {

//         case "INCREMENT":
//             return {count: state.count + 1}; // return to store so that this object is passed by store next time

//         case "DECREMENT":
//             return {count: state.count - 1};

//         default:
//             return state;
//     }
// }

// /******************* Helper functions for dispatch ************* */

// function increment() {
//     return {type: "INCREMENT", payload: null};  // action
// }

// function  decrement() {
//     return {type: "DECREMENT", payload: null};
// }

// /************************************************************** */

// class IncrementComponent extends Component {
//     constructor(props){
//         super(props);   // props become data member
//     }

//     render() {
//         return(
//             <div>
//                 {this.props.c}
//                 <button onClick={() => this.props.increment()}>Increment</button>
//             </div>
//         );
//     }
// }

// let obtainStateForIC = (store) => {
//     return { c: store.counterReducer.count };
// };

// let IncrementComponentFromConnect = connect(obtainStateForIC, {increment})(IncrementComponent);

// class DecrementComponent extends Component {

//     constructor(props){
//         super(props);   // props become data member
//     }

//     render() {
//         return(
//             <div>
//                 {this.props.c}
//                 <button onClick={() => this.props.decrement()}>Decrement</button>
//             </div>
//         );
//     }
// }

// let obtainStateForDC = (store) => {
//     return { c: store.counterReducer.count };
// };

// let DecrementComponentFromConnect = connect(obtainStateForDC, {decrement})(DecrementComponent);

// class AppComponent extends Component {

//     render() {
//         return(
//             <div>
//                 <IncrementComponentFromConnect/>
//                 <br/>
//                 <DecrementComponentFromConnect/>
//             </div>
//         );
//     }
// }

// // Make reducer part of the store
// let store = createStore(combineReducers({ counterReducer }));

// // store.subscribe(() => {
// //     console.log('State: ' + store.getState().counterReducer.count);
// // });

// ReactDOM.render(
//     <Provider store={store}>
//         <AppComponent />
//     </Provider>,
//     document.getElementById("root")
// );


// //-----------------------------
// /* End of Example 9 */
// //-----------------------------


// // Example 8
// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { Provider, connect} from "react-redux";
// import { createStore, combineReducers } from "redux";

// function counterReducer (state = { count: 0 }, action) {
    
//     switch (action.type) {

//         case "INCREMENT":
//             return {count: state.count + 1}; // return to store so that this object is passed by store next time

//         case "DECREMENT":
//             return {count: state.count - 1};

//         default:
//             return state;
//     }
// }

// class IncrementComponent extends Component {
//     constructor(props){
//         super(props);   // props become data member
//     }

//     increment() {
//         let action = {type: "INCREMENT", payload: null};
//         this.props.dispatch(action);
//     }

//     render() {
//         return(
//             <div>
//                 {this.props.c}
//                 <button onClick={() => this.increment()}>Increment</button>
//             </div>
//         );
//     }
// }

// let obtainState = (store) => {
//     return { c: store.counterReducer.count };
// };

// let IncrementComponentFromConnect = connect(obtainState)(IncrementComponent);

// class DecrementComponent extends Component {

//     constructor(props){
//         super(props);   // props become data member
//     }

//     decrement() {
//         let action = {type: "DECREMENT", payload: null};
//         //store.dispatch(action); // calls reducer with previous value of state
//         this.props.dispatch(action);    // same as above
//     }

//     render() {
//         return(
//             <div>
//                 {this.props.c}
//                 <button onClick={() => this.decrement()}>Decrement</button>
//             </div>
//         );
//     }
// }

// let DecrementComponentFromConnect = connect(obtainState)(DecrementComponent);

// class AppComponent extends Component {

//     render() {
//         return(
//             <div>
//                 <IncrementComponentFromConnect/>
//                 <br/>
//                 <DecrementComponentFromConnect/>
//             </div>
//         );
//     }
// }

// // Make reducer part of the store
// let store = createStore(combineReducers({ counterReducer }));

// // store.subscribe(() => {
// //     console.log('State: ' + store.getState().counterReducer.count);
// // });

// ReactDOM.render(
//     <Provider store={store}>
//         <AppComponent />
//     </Provider>,
//     document.getElementById("root")
// );


// //-----------------------------
// /* End of Example 8 */
// //-----------------------------



// // Example 7
// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { Provider, connect} from "react-redux";
// import { createStore, combineReducers } from "redux";

// function counterReducer (state = { count: 0 }, action) {
    
//     switch (action.type) {

//         case "INCREMENT":
//             return {count: state.count + 1}; // return to store so that this object is passed by store next time

//         case "DECREMENT":
//             return {count: state.count - 1};

//         default:
//             return state;
//     }
// }

// // const invokeIncrementAction = () => {
// //     return { type: "INCREMENT", payload: null }; //action = type + payload
// // }


// // const invokeDecrementAction = () => {
// //     return { type: "DECREMENT", payload: null }; //action = type + payload
// // }

// class IncrementComponent extends Component {
//     increment() {
//         let action = {type: "INCREMENT", payload: null};
//         store.dispatch(action);
//     }

//     render() {
//         return(
//             <div>
//                 <button onClick={() => this.increment()}>Increment</button>
//             </div>
//         );
//     }
// }

// // let obtainState = (store) => {
// //     return { count: store.counterReducer.count };
// // };

// //let IncrementComponentFromConnect = connect(obtainState, {invokeIncrementAction})(IncrementComponent);

// class DecrementComponent extends Component {

//     decrement() {
//         let action = {type: "DECREMENT", payload: null};
//         store.dispatch(action); // calls reducer with previous value of state
//     }

//     render() {
//         return(
//             <div>
//                 <button onClick={() => this.decrement()}>Decrement</button>
//             </div>
//         );
//     }
// }

// //let DecrementComponentFromConnect = connect(obtainState, {invokeDecrementAction})(DecrementComponent);

// class AppComponent extends Component {
//     render() {
//         return(
//             <div>
//                 <IncrementComponent/>
//                 {store.getState().counterReducer.count}
//                 <DecrementComponent/>
//             </div>
//         );
//     }
// }


// // Make reducer part of the store
// let store = createStore(combineReducers({ counterReducer }));

// store.subscribe(() => {
//     console.log('State: ' + store.getState().counterReducer.count);
// });

// // ReactDOM.render(
// //     <Provider store={store}>
// //         <AppComponent />
// //     </Provider>,
// //     document.getElementById("root")
// // );

// function render() {
//     ReactDOM.render(<AppComponent/>, document.getElementById("root"));
// }

// render();

// store.subscribe(render);


// //-----------------------------
// /* End of Example 7 */
// //-----------------------------


// // Example 6
// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { Provider, connect} from "react-redux";
// import { createStore, combineReducers } from "redux";

// const booksReducer = (state = { books: [{id:1, title: "T1", author: "A1", price: 111}] }, action) => {
//     switch (action.type) {

//         case "ADD_NEW_BOOK":
//             return {books: [...state.books, action.payload]};

//         case "DELETE_BOOK":
//             return {books: state.books.filter(book => book !== action.payload.book)};

//         default:
//             break;
//     }

//     return state;   // return to store
// }

// // ***************** Actions - start *************

// const addNewBook = (title, author, price) => {
//     return { type: "ADD_NEW_BOOK", payload: {title, author, price} }; //action = type + payload
// };

// const deleteBook = (book) => {
//     return { type: "DELETE_BOOK", payload: {book} }; //action, dispatch
// };

// // ***************** Actions - end *************

// const BookComponent = ({ book, deleteBook }) => (
//     <tr>
//         <td>{book.title}</td>
//         <td>{book.author}</td>
//         <td>{book.price}</td>
//         <td>
//             <button onClick={() => deleteBook(book)}>Delete</button>
//         </td>
//     </tr>
// );

// let BookComponentFromConnect = connect(null, { deleteBook })(BookComponent);

// const BookListComponent = ({ books }) => (

//     <table border={1} cellPadding={10} cellSpacing={0}>
//         <thead>
//             <tr>
//                 <th>Title</th>
//                 <th>Author</th>
//                 <th>Price</th>
//                 <th>Action</th>
//             </tr>
//         </thead>
//         <tbody>
//             {
//                 books.map(book => <BookComponentFromConnect key={book.id} book={book} />)
//             }
//         </tbody>
//     </table>
// );

// const obtainState = (store) => {
//     return { books: store.booksReducer.books };
// };

// let BookListComponentFromConnect = connect(obtainState)(BookListComponent);

// const AddNewBookComponent = ({ addNewBook }) => (
//     <div>
//         Title: <input type="text" />
//         <br />
//         Author: <input type="text" />
//         <br />
//         Price: <input type="number" />
//         <br />
//         <button onClick={() => addNewBook("T2", "A2", 222)}>Add New Book</button>
//     </div>
// );

// let AddNewBookComponentFromConnect = connect(null, { addNewBook })(AddNewBookComponent);

// const AppComponent = () => (
//     <div>
//         <BookListComponentFromConnect />
//         <br />
//         <AddNewBookComponentFromConnect />
//     </div>
// );

// // store will call the reducer function to obtain initial state,
// // this state will be passed to reducer when it is called next.
// // The store calls the reducer and passes to previous state return by the reducer.
// // We never call the reducer directly. The reducer must be called through the store so that 
// // when reducer updates state, store notifies the componenys about the update.
// // To call reducers using store we have dispatch an action to the store
// let store = createStore(combineReducers({ booksReducer }));

// ReactDOM.render(
//     <Provider store={store}>
//         <AppComponent />
//     </Provider>,
//     document.getElementById("root")
// );

// //-----------------------------
// /* End of Example 6 */
// //-----------------------------


// // Example 5
// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// const BookComponent = ({book, deleteBook}) => (
//     <tr>
//         <td>{book.title}</td>
//         <td>{book.author}</td>
//         <td>{book.price}</td>
//         <td>
//             <button onClick={() => deleteBook(book)}>Delete</button>
//         </td>
//     </tr>
// );

// class BookListComponent extends Component {
//     constructor() {
//         super();

//         this.oldState = []; // mutable operations will be performed

//         // keep data in state object. It should be immutable
//         this.state = {
//             books: [
//                 {id: 1, title: "T1", author: "A1", price: 111},
//                 {id: 2, title: "T2", author: "A2", price: 222},
//                 {id: 3, title: "T3", author: "A3", price: 333}
//             ]
//         };
//     }

//     addNewBook(/* this */) {
//         this.oldState.push(this.state); // mutable

//         this.setState({ 
//             books: [ 
//                 ...this.state.books, 
//                 {title: "T4", author: "A4", price: 444}
//             ] 
//         });   // change state and cal render
//     }

//     deleteBook(/* this */ selectedBook) {
//         this.oldState.push(this.state); // mutable

//         this.setState({
//             books: this.state.books.filter(book => book !== selectedBook)
//         });
//     }

//     undo() {
//         this.setState(this.oldState.pop());
//     }

//     render() {
//         return (
//             <div>
//                 <table border={1} cellPadding={10} cellSpacing={0}>
//                     <thead>
//                         <tr>
//                             <th>Title</th>
//                             <th>Author</th>
//                             <th>Price</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             this.state.books.map(book => <BookComponent key={book.id} book={book} deleteBook={ (book) => this.deleteBook(book)}/>)
//                         }
//                     </tbody>
//                 </table>
//                 <button onClick={() => this.addNewBook()}>
//                     Add new Book
//                 </button>
//                 <button onClick={() => this.undo()}>
//                     Undo
//                 </button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<BookListComponent />, document.getElementById("root"));

// //-----------------------------
//     /* End of Example 5 */
// //-----------------------------


// // Example 4
// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// const BookComponent = ({book}) => (
//     <tr>
//         <td>{book.title}</td>
//         <td>{book.author}</td>
//         <td>{book.price}</td>
//     </tr>
// );

// class BookListComponent extends Component {
//     constructor() {
//         super();

//         // keep data in state object. It should be immutable
//         this.state = {
//             books: [
//                 {title: "T1", author: "A1", price: 111},
//                 {title: "T2", author: "A2", price: 222},
//                 {title: "T3", author: "A3", price: 333}
//             ]
//         };
//     }

//     render() {
//         return (
//             <table border={1} cellPadding={10} cellSpacing={0}>
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Author</th>
//                         <th>Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         this.state.books.map(book => <BookComponent book={book}/>)
//                     }
//                 </tbody>
//             </table>
//         )
//     }
// }

// ReactDOM.render(<BookListComponent />, document.getElementById("root"));

//-----------------------------
/* End of Example 4 */
//-----------------------------


// // Example 3
// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// class BookListComponent extends Component {
//     constructor() {
//         super();

//         // keep data in state object. It should be immutable
//         this.state = {
//             books: [
//                 {title: "T1", author: "A1", price: 111},
//                 {title: "T2", author: "A2", price: 222},
//                 {title: "T3", author: "A3", price: 333}
//             ]
//         };
//     }

//     render() {
//         return (
//             <table border={1} cellPadding={10} cellSpacing={0}>
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Author</th>
//                         <th>Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         this.state.books.map(book => 
//                             <tr>
//                                 <td>{book.title}</td>
//                                 <td>{book.author}</td>
//                                 <td>{book.price}</td>
//                             </tr>)
//                         }
//                 </tbody>
//             </table>
//         )
//     }
// }

// ReactDOM.render(<BookListComponent />, document.getElementById("root"));


//-----------------------------
/* End of Example 3 */
//-----------------------------


// // Example 2
// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// // JS Class
// class CounterComponent extends Component {

//     // this - ref variable receives ref of object
//     constructor(/* this = ref of CounterComponent object */) {
//         super();    // base class comstructor

//         // Reference variable holds ref of JS object
//         // this is a reference variable when we do .variable =something,
//         // the variable gets created as a key inside the object
//         // state becomes data member of each Counter Component object

//         // state must be immutable
//         this.state = { count: 0 };
//     }

//     decrement(/* this */) {
//         //this.state.count--; //mutable opertaion. Should NOT perform on state object

//         // setState - react method
//         // it posts sending new object to state and call to render
//         this.setState({ count: this.state.count - 1 });
//     } // state will be changed after control returns from this method and then render() will be called

//     increment(/* this */) {
//         //this.state.count++; // mutable operation
//         this.setState({ count: this.state.count + 1 });
//     }

//     render(/* this = ref of CounterComponent object */) {
//         return(
//             // JSX
//             <div>
//                 <button onClick={ () => this.decrement() }>-</button>
//                     {this.state.count}
//                 <button onClick={ () => this.increment() }>+</button>
//             </div>
//         );
//     }
// }

// // JS Class
// class AppComponent extends Component {
//     render() {
//         return(
//             // JSX
//             <div>
//                 <CounterComponent />
//                 <CounterComponent />
//                 <CounterComponent />
//             </div>
//         );
//     }
// }

// ReactDOM.render(<AppComponent/>, document.getElementById("root"));

//-----------------------------
/* End of Example 2 */
//-----------------------------

// // Example 1
// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// class SampleComponent extends Component {

//     render() {
//         return <b>Hello World</b>
//     }
// }

// // rootDiv is a reference variable, will receive reference of div DOM object
// let rootDiv = window.document.getElementById("root");

// //rootDiv.innerHTML = "<button>Hello World</button>";

// ReactDOM.render(<SampleComponent/>, rootDiv);