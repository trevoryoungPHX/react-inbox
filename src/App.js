import React, { Component } from 'react';
import './App.css';
import Toolbar from './Toolbar'
import MessageList from './MessageList'
import axios from 'axios'
import ComposeForm from "./ComposeForm"

class App extends Component {

  state = {
    messageList: [],
    showCompose: false
  }

componentDidMount = async () => {
  let messages = await axios.get('http://localhost:8000/messages')
  this.setState({messageList: messages.data })
}

addMessage = async (message) => {
  let newMessage = {
    ...message, //subject:message.subject, body: message.body, the rest
    labels: JSON.stringify([]),
    read: false,
    selected: false,
    starred: false
  }
  let newMessages = await axios.post(`http://localhost:8000/messages`, newMessage)
  this.setState({ messageList: newMessages.data })
}



toggleComposeForm = () => {
  this.setState({ showCompose: !this.state.showCompose})
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

 updateRemoveLabel = (label) => {
   let filteredCheck = this.state.messageList.filter((message)=> message.selected)
   filteredCheck.map((message)=> message.labels.includes(label)? message.labels.splice(message.labels.indexOf(label), 1) : message.labels)
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
          messageList = {this.state.messageList}
          toggleComposeForm={this.toggleComposeForm}
          showCompose={this.state.showCompose}
          />
        {this.state.showCompose ? <ComposeForm addMessage={this.addMessage}/> : null}
        <MessageList
          messageList={this.state.messageList}
          updateStarFunc={this.updateStar}
          updateCheckFunc={this.updateCheck}
          />
      </div>
    );
  }
}

export default App;
