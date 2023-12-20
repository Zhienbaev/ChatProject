import React from "react";

class EditForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: this.props.name,
            number:this.props.number,
            isFavorite: false
        }
      }  
    render(){
        return(
            <form className="edit-form" 
            ref={(el)=> this.sentForm = el}
            onSubmit={
                (event)=>{
                    event.preventDefault() 
                    if(this.state.name!=='' || this.state.number!==''){
                        this.sentForm.reset()
                        this.props.editContact({name: this.state.name, contact: this.state.number, isFavorite: this.state.isFavorite})
                        this.setState({name: '', contact: '',})
                    }
                }
            }>
                <h3>Изменить данные</h3>
                <input type="text" className="edit-name" placeholder={this.props.name} onChange={(e)=>{this.setState({name: e.target.value })}}/>
                <input type="text" className="edit-number" placeholder={this.props.number} onChange={(e)=>{this.setState({number: e.target.value })}}/>
                <div className="favorite-wrapper">
                        <label htmlFor="fovarite" className="fovarite-label">Добавить в близкие</label>
                        <input type="checkbox" id="fovarite" onChange={(e)=> this.setState({isFavorite: e.target.checked})} className="fovarite" />

                    </div>
                <button className="add-user-btn">изменить</button>
            </form>
        )
    }
}

export default EditForm