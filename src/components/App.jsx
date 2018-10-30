import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initializeAction } from '../actions'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: ''
    }
  }

onClickMe() {
  this.props.initializeAction();
}
  render() {

    return(
      <div>
      <button
        className = 'btn btn-success'
        onClick={() => {this.onClickMe()}}
      >
        Click Me!
      </button>
      <div>{this.props.value}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state
  }
}
export default connect(mapStateToProps,{ initializeAction })(App);
