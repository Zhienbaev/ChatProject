import React from "react";

class ChaterMenu extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:0
        }
      }  
    render(){
            return(
            <div className="chater-menu" id={this.props.htmlid}>
                <div className="delete" onClick={()=>{this.props.deleteContact(this.props.htmlid)}} id={this.props.htmlid}>
                    <div className="icon-delete" id={this.props.htmlid}  ></div>
                </div>
                <div className="edit" id={this.props.htmlid} onClick={()=>{
                    this.props.Editing()
                }}>
                    <div className="icon-edit" id={this.props.htmlid} onClick={()=>{
                    this.props.Editing()
                }} ></div>
                </div>
            </div>
            
        )
}
}
export default ChaterMenu