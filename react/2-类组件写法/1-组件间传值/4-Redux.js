// 通过Redux的store来管理组件间的状态，可以实现组件间的数据共享。具体使用案例：
// 安装redux和react-redux
// npm install redux react-redux --save

// 创建store
import { createStore } from 'redux';

const initialState = {
  name: 'Tom'
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

// 父组件
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Parent extends Component {
  handleChangeName = () => {
    this.props.dispatch({
      type: 'CHANGE_NAME',
      payload: 'Jerry'
    });
  };

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <button onClick={this.handleChangeName}>Change Name</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name
});

export default connect(mapStateToProps)(Parent);

// 子组件
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Child extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name
});

export default connect(mapStateToProps)(Child);
