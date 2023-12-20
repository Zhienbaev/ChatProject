import React from "react";

class AddUser extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: "",
            contact: "",
            isFavorite: false
        }
        
    }
    render(){
        if(this.props.isAdding){
            return(
                <form className="add-user-form" ref={(el)=> this.sentForm = el} 
                onSubmit={(event)=>{
                    event.preventDefault() 
                    if(this.state.name!=='' || this.state.contact!==''){
                        this.sentForm.reset()
                        this.props.addChater({name: this.state.name, contact: this.state.contact,isFavorite: this.state.isFavorite})
                        this.setState({name: '', contact: '',})
                    }
                }}>
                    <label htmlFor="name-user">Имя</label>
                    <input type="text" className="name-user" id="name-user" onChange={(e)=> this.setState({name: e.target.value})} placeholder="Aidyn Zhienbaev"/>
                    <label htmlFor="contact-user">Контакт</label>
                    <input type="text" className="contact-user" id="contact-user" onChange={(e)=> this.setState({contact: e.target.value})} placeholder="87059712780"/>
                    <div className="favorite-wrapper">
                        <label htmlFor="fovarite" className="fovarite-label">Добавить в близкие</label>
                        <input type="checkbox" id="fovarite" onChange={(e)=> this.setState({isFavorite: e.target.checked})} className="fovarite" />

                    </div>
                    <button className="add-user-btn"  onClick={()=>{
                        if(this.state.name!=='' || this.state.contact!=''){
                            this.sentForm.reset()
                            this.props.addChater({name: this.state.name, contact: this.state.contact,isFavorite: this.state.isFavorite})
                            this.setState({name: '', contact: '',})
                        }
                    }}> Добавить</button>
                </form>
            )
        }
    }


}

export default AddUser 