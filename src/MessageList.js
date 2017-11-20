import React, { Component } from 'react';
import Message from "./Message"


class MessageList extends Component {
  render(){
    return (
        <div>
          {this.props.messageObj.map((message, index) => <Message
          key={index}
          cssID={index}
          message={message} />)}
        </div>
    );
  }
}

export default MessageList;
