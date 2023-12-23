import React from "react";
import Chater from "./ChatWith";
import { Link } from "react-router-dom";


class Contacts extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isfoundChater: false,
            tapedChater: false,
        }
        this.onTaping=this.onTaping.bind(this)
    }
    
    render(){
        return(
            <div className="contacts">
                <div className="contacts-search">
                    <div className="loopa-icon"></div>
                    <input type="text" className="search" placeholder="Поиск или новый чат"/>
                </div>
                <Chater
                    Editing={this.props.Editing}
                    deleteContact={this.props.deleteContact}
                    chaters={this.props.chaters} 
                    onClick={(e)=>{
                        this.props.selectUser({id: e.target.id})
                        if(!this.state.tapedChater){
                            this.setState({tapedChater: true})
                            this.onTaping(e)
                        }else{
                            const allUsers=document.getElementsByClassName('chater')
                            for (let i = 0; i < allUsers.length; i++) {
                                allUsers[i].style.backgroundColor = 'initial';
                              }
                              this.onTaping(e)
                        }
                }} />
                <div className="my-profil" > <Link to="/MyProfill"> Мой Профиль </Link> </div>
            </div>
        )
    }

    onTaping(e){
        if(e.target.className!=='chater'){
            if(e.target.parentElement.className!=='chater'){
                e.target.parentElement.parentElement.style.backgroundColor='#492647'
                e.target.parentElement.parentElement.style.borderRaduis='5px'
            }else{
                e.target.parentElement.backgroundColor='#492647'
                e.target.parentElement.borderRaduis='5px'
            }
            
        }else{
            e.target.style.backgroundColor='#492647'
            e.target.style.borderRaduis='5px'
        }
    }
}

export default Contacts