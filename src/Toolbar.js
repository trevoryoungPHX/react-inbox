import React, { Component } from 'react';

class Toolbar extends Component {
  handleBulkSelect = (e) => {
    this.props.updateBulkSelectedFunc()
  }

  handleMarkRead = (e) => {
    this.props.updateMarkReadFunc()
  }

  handleMarkUnread = (e) => {
    this.props.updateMarkUnreadFunc()
  }

  handleDelete = (e) => {
    this.props.updateDeleteFunc()
  }

  handleAddLabel = (e) => {
    this.props.updateAddLabelFunc(e.target.value)
  }

  handleRemoveLabel = (e) => {
    this.props.updateRemoveLabelFunc(e.target.value)
  }



  render (){
    let unread = this.props.messageList.filter((message)=> !message.read).length
    let check = this.props.messageList.filter((message)=> message.selected).length
    let toolbarCheck = check === 0? 'fa fa-square-o' : check === this.props.messageList.length? 'fa fa-check-square-o' : 'fa fa-minus-square-o'
    let disabled = check === 0? 'disabled' : ''


    return(
        <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{unread}</span>
            unread messages
          </p>

          <a className="btn btn-danger" onClick={this.props.toggleComposeForm}>
            <i className="fa fa-plus"></i>
          </a>

          <button onClick={this.handleBulkSelect} className="btn btn-default">
            <i className={`${toolbarCheck}`}></i>
          </button>

          <button onClick={this.handleMarkRead} className="btn btn-default" disabled={`${disabled}`}>
            Mark As Read
          </button>

          <button onClick={this.handleMarkUnread} className="btn btn-default" disabled={`${disabled}`}>
            Mark As Unread
          </button>

          <select  onChange={this.handleAddLabel} className="form-control label-select" disabled={`${disabled}`}>
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select onChange={this.handleRemoveLabel} className="form-control label-select" disabled={`${disabled}`}>
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button onClick={this.handleDelete} className="btn btn-default" disabled={`${disabled}`}>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>

    );
  }
}

export default Toolbar;
