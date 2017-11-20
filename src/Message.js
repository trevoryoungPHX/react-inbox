import React, { Component } from 'react';


class Message extends Component {
  render(){

    let isRead = this.props.message.read? 'read' : 'unread';
    let isStarred = this.props.message.starred? 'star fa fa-star' : 'star fa fa-star-o';
    let isSelected = this.props.message.selected? 'selected' : '';
    let isChecked = this.props.message.selected? 'checked' : '';
    let labels = this.props.message.labels.map((labels, i) => {
    return <span key ={i} className = 'label label-warning'>{labels}</span>})

    return (
        <div>
          <div className={`row message ${isRead} ${isSelected}`}>
            <div className="col-xs-1">
              <div className="row">
                <div className="col-xs-2">
                  <input type="checkbox" checked={`${isChecked}`}/>
                </div>
                 <div className="col-xs-2">
                  <i className={`${isStarred}`}/>
                </div>
              </div>
            </div>
            <div className="col-xs-11">
              {labels}
              <a href="#">
                {this.props.message.subject}
              </a>
            </div>
          </div>
        </div>
    );
  }
}

export default Message;
