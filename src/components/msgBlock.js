import React from "react";
import Messages from "./messages";

class MsgBlock extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            value:"",
        }
        
    }
    
    render(){

        
        return(
            <div className="msg-block" id="msgBlock">
                <div className={this.props.msgs.length>0 ? 'msg-container': 'eptmpy-msg-container'}>
                    <Messages msgs= {this.props.msgs} UserName={this.props.UserName}/>
                </div>
                <form className="msg-type" 
                    onSubmit={
                        (event)=>{
                            this.sentForm.reset() 
                            event.preventDefault() 
                            this.props.addMsg({value: this.state.value})
                            }
                        } 
                    ref={(el)=> this.sentForm = el}>
                    <input type="text"  className="msg-input" placeholder="Введите сообщение" onChange={(e)=> this.setState({value: e.target.value})}/>
                    <button className="msg-send" type="button" onClick={()=>{
                        this.sentForm.reset() 
                        this.props.addMsg({value: this.state.value})}}>

                    </button>
                </form>
            </div>
            
        )
    }

    

}

export default MsgBlock 