// 使用事件总线来进行组件间的通信，可以实现非父子组件之间的数据传递。具体使用案例：
// // 安装eventemitter3
// npm install eventemitter3 --save

// // 创建Event Bus
// import EventEmitter from 'eventemitter3';

// const eventBus = new EventEmitter();

// export default eventBus;

// 父组件
import React, { Component } from 'react';
import eventBus from './eventBus';

class Parent extends Component {
  handleChangeName = () => {
    eventBus.emit('changeName', 'Jerry');
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

// 子组件
import React, { Component } from 'react';
import eventBus from './eventBus';

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Tom'
    };
  }

  componentDidMount() {
    eventBus.on('changeName', name => {
      this.setState({
        name: name
      });
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
      </div>
    );
  }
}
