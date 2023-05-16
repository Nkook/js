// 父组件向子组件传递数据，通过props传递。具体使用案例：
// 父组件
import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Tom'
    };
  }

  render() {
    return (
      <div>
        <Child name={this.state.name} />
      </div>
    );
  }
}

// 子组件
import React, { Component } from 'react';

class Child extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
