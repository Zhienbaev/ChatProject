import React from "react";
import ChaterMenu from "./chaterMenu";
import EditForm from "./editForm";
class Chater extends React.Component {
    constructor(props){
      super(props)
      this.state={
      }
    }  

    render() {
      return (
        <div className="chaters" >
          {this.props.chaters && this.props.chaters.map((el) => (
            <div className="chater" style={this.props.taped} id={el.id} onClick={this.props.onClick}>
              <div className="chat-ava" id={el.id}></div>
              <div className="about-chater" id={el.id}>
                <h3 className="chat-name" id={el.id}>{el.name}</h3>
                <h6 className="chat-contact" id={el.id}>{el.contact}</h6>
              </div>
              <ChaterMenu 
                htmlid={el.id} 
                deleteContact={this.props.deleteContact} 
                Editing={this.props.Editing} />
            </div>
        ))}
        </div>
      );
    }
  }
  
  export default Chater;
  