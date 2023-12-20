import React from "react";
import ConHeader from "./ContactHeader";
import Contacts from "./Contacts";

class Contact extends React.Component{
    
    render(){
        return(
            <div className="contact-container">
                <ConHeader filteredChaters={this.props.filteredChaters} addChater={this.props.addChater} />
                <Contacts ShowProfil={this.props.ShowProfil} Editing={this.props.Editing} chaters={this.props.chaters} selectUser={this.props.selectUser} deleteContact={this.props.deleteContact}/>
            </div>
        )
        
    }
    
    
}

export default Contact