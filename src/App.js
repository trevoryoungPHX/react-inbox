import React, { Component } from 'react';
import './App.css';
import Toolbar from './Toolbar'
import MessageList from './MessageList'
import Message from './Message';


class App extends Component {

  state = { messageList: [
  {
    "id": 1,
    "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
    "read": false,
    "starred": true,
    "selected": false,
    "labels": ["dev", "personal"]
  },
  {
    "id": 2,
    "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
    "read": false,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 3,
    "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
    "read": false,
    "starred": true,
    "selected": false,
    "labels": ["dev"]
  },
  {
    "id": 4,
    "subject": "We need to program the primary TCP hard drive!",
    "read": true,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 5,
    "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
    "read": false,
    "starred": false,
    "selected": false,
    "labels": ["personal"]
  },
  {
    "id": 6,
    "subject": "We need to back up the wireless GB driver!",
    "read": true,
    "starred": true,
    "selected": false,
    "labels": []
  },
  {
    "id": 7,
    "subject": "We need to index the mobile PCI bus!",
    "read": true,
    "starred": false,
    "selected": false,
    "labels": ["dev", "personal"]
  },
  {
    "id": 8,
    "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    "read": true,
    "starred": true,
    "selected": false,
    "labels": []
  }]
}

updateStar = (index) => {
   let changeStar = this.state.messageList[index]
   changeStar.starred? changeStar.starred = false : changeStar.starred = true
   this.setState({messageList: this.state.messageList})
 }

 updateCheck = (index) => {
   let changeCheck = this.state.messageList[index]
   changeCheck.selected? changeCheck.selected = false : changeCheck.selected = true
   this.setState({messageList: this.state.messageList})
 }

 updateBulkSelected = () =>{
   let filteredCheck = this.state.messageList.filter((message) => message.selected)
   filteredCheck.length === this.state.messageList.length? this.state.messageList.map((message)=> message.selected = false) : this.state.messageList.map((message)=> message.selected = true);
   this.setState({messageList: this.state.messageList})
 }

 updateMarkRead = () => {
   let filteredCheck = this.state.messageList.filter((message) => message.selected)
   filteredCheck.map((message)=> message.read = true)
   filteredCheck.map((message)=> message.selected = false)
   this.setState({messageList: this.state.messageList})
 }

 updateMarkUnread = () => {
   let filteredCheck = this.state.messageList.filter((message)=> message.selected)
   filteredCheck.map((message)=> message.read = false)
   filteredCheck.map((message)=> message.selected = false)
   this.setState({messageList: this.state.messageList})

 }

 updateDelete = () => {
   let filteredCheck = this.state.messageList.filter((message)=> !message.selected)
   this.setState({messageList: filteredCheck})
 }

 updateAddLabel = (labels) => {
   let filteredCheck = this.state.messageList.filter((message)=> message.selected)
   filteredCheck.map((message)=> message.labels.push(labels))
   filteredCheck.map((message)=> message.selected = false)
   this.setState({messageList: this.state.messageList})
 }

 updateRemoveLabel = (labels) => {
   let filteredCheck = this.state.messageList.filter((message)=> message.selected)
   filteredCheck.map((message)=> message.labels.splice(message.labels.indexOf(labels), 1))
   filteredCheck.map((message)=> message.selected = false)
   this.setState({messageList: this.state.messageList})
 }

  render() {
    return (
      <div className="App">
        <Toolbar
          updateBulkSelectedFunc = {this.updateBulkSelected}
          updateMarkReadFunc = {this.updateMarkRead}
          updateMarkUnreadFunc = {this.updateMarkUnread}
          updateDeleteFunc = {this.updateDelete}
          updateAddLabelFunc = {this.updateAddLabel}
          updateRemoveLabelFunc = {this.updateRemoveLabel}
          messageList = {this.state.messageList}/>
        <MessageList
          messageList={this.state.messageList}
          updateStarFunc={this.updateStar}
          updateCheckFunc={this.updateCheck}/>
      </div>
    );
  }
}

export default App;
