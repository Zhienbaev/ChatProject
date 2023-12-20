import React from "react";
import DateTime from "./time";

class Messages extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state={
           
    //     }
    // }
    
    render(){
        if(this.props.msgs.length>0){
            return(
                <div className="msg-from-me-container">
                    {this.props.msgs && this.props.msgs.map((el)=>(<div className="msg-from-me">
                            <h4 className="msg-value">{el.value}</h4>
                            <span><DateTime/></span>
                    </div>))}
                </div>
            )
        } else{
            return(
                <div className="any-messages">Здесь пусто(, Напиши: привет,{this.props.UserName}!</div>

            )
        }
    }
}

export default Messages 