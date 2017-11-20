import React, { Component } from 'react';
import Message from "./Message"


class MessageList extends Component {
  render(){
    return (
        <div>
          {this.props.messageList.map((item, index)=> <Message
                  key={index}
                  cssId={index}
                  message={item}
                  updateStarFunc={this.props.updateStarFunc}
                  updateCheckFunc={this.props.updateCheckFunc}
                />)}
        </div>
    );
  }
}

export default MessageList;
