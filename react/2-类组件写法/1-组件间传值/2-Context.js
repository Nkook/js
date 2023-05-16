// 在组件树中向下传递数据，可以避免在每个层级手动传递props。具体使用案例：
// 创建Context
const MyContext = React.createContext();

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
      <MyContext.Provider value={this.state.name}>
        <Child />
      </MyContext.Provider>
    );
  }
}

// 子组件
import React, { Component } from 'react';
import MyContext from './MyContext';

class Child extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {name => <p>{name}</p>}
        </MyContext.Consumer>
      </div>
    );
  }
}
