import React, { Component } from 'react';


class Message extends Component {

  handleStar = (e) => {
  console.log(e.target.id)
  e.preventDefault();
  this.props.updateStarFunc(e.target.id)
  }

  handleCheck = (e) => {
    console.log(e.target.id)
    this.props.updateCheckFunc(e.target.id)
  }

  render(){

    let isRead = this.props.message.read? 'read' : 'unread';
    let isStarred = this.props.message.starred? 'star fa fa-star' : 'star fa fa-star-o';
    let isSelected = this.props.message.selected? 'selected' : '';
    let isChecked = this.props.message.selected? 'checked' : '';

    let labels = this.props.message.labels.map((labels, i) => {
    return <span key ={i} className = 'label label-warning'>{labels}</span>})

      return(
            <div className={`row message ${isRead} ${isSelected}`} key={this.props.cssId}>
              <div className="col-xs-1">
                <div className="row">
                  <div className="col-xs-2">
                    <input id={`${this.props.cssId}`} onClick={this.handleCheck} type="checkbox" checked={`${isChecked}`}/>
                  </div>
                  <div className="col-xs-2">
                    <i id={`${this.props.cssId}`} onClick={this.handleStar} className={`${isStarred}`}></i>

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


          );
        }
      }


export default Message;
