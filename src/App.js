import React from "react";
import Header from "./components/Header";
import MsgBlock from "./components/msgBlock";
import Contact from "./components/contact";
import EditForm from "./components/editForm";
import MyProfill from "./components/myProfil";

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isShowingProfil:false,
            isEditing: false,
            isFiltered:false,
            favoriteContacts:[],
            numberUser:0,
            chaters:[
                {
                    id: 1,
                    name: 'Zamanbek',
                    contact: '87009492926',
                    isFavorite: true,
                    msgs: [
                        {
                            id: 1,
                            value:'Assalamualeikum',
                            time:'16:31'
                
                        },
                    ]
                },
                {
                    id: 2,
                    name: 'Zhanai',
                    contact: '87009492926',
                    isFavorite: false,
                    msgs: [
                        {
                            id: 1,
                            value:'Privet',
                            time:'16:31'
                
                        },
                    ]
                }
            ]
        }
        this.addMsg = this.addMsg.bind(this)
        this.addChater=this.addChater.bind(this)
        this.selectUser=this.selectUser.bind(this)
        this.deleteContact=this.deleteContact.bind(this)
        this.filterChaters=this.filterChaters.bind(this)
        this.editContact=this.editContact.bind(this)
        this.showProfil=this.showProfil.bind(this)
    }
    render(){
        return(
            <div className="Container">
                <Contact ShowProfil={this.showProfil} Editing={()=> {this.setState({isEditing: !this.state.isEditing})}} filteredChaters={this.filterChaters} selectUser={this.selectUser} addChater={this.addChater} chaters={!this.state.isFiltered ? this.state.chaters : this.state.favoriteContacts} deleteContact={this.deleteContact} />
                <div className="chat-container">
                    <Header ChaterName={this.state.chaters[this.state.numberUser].name}/>
                    <MsgBlock  addMsg={this.addMsg} UserName={this.state.chaters[this.state.numberUser].name} msgs= {this.state.chaters[this.state.numberUser].msgs} />
                </div>
                {this.state.isShowingProfil && <MyProfill/>}
                {this.state.isEditing && <EditForm  editContact={this.editContact} name={this.state.chaters[this.state.numberUser].name} number={this.state.chaters[this.state.numberUser].contact}/>}
            </div>
        )
    }

    deleteContact(delId){
        if(delId !== this.state.chaters.length){
            let filteredChaters = this.state.chaters.filter((el) => {
                return el.id !== delId
            })
            console.log(filteredChaters);
            
            this.setState({chaters: []})
            this.setState({chaters:[...filteredChaters]})
        } else{
            alert('Нельзя удалить последний Элемент! Потому что я еще не решил эту проблему😊 p.sAidyn ')
        }
    }

    showProfil(){
        console.log(this.state.isShowingProfil);
        this.setState({isShowingProfil: !this.state.isShowingProfil})
    }
    addChater(user){
        const id = this.state.chaters.length+1;
        let msgs = []
        this.setState({chaters: [...this.state.chaters, {id , msgs, ...user}]})
        console.log(this.state.chaters.length)
    }
    selectUser(user){
        this.setState({numberUser: user.id-1})
        console.log(this.state.numberUser);
    }
    addMsg(msg){       
        let AllChaters= this.state.chaters
        let UserID=this.state.numberUser
        let newMessage=this.state.chaters[UserID]
        let id= newMessage.msgs.length + 1;
        newMessage.msgs= [...newMessage.msgs, {id,...msg}]
        console.log(newMessage.msgs);
        AllChaters[UserID]=newMessage
        console.log(AllChaters);
        this.setState({chaters: []})
        this.setState({chaters: [...AllChaters]})
    }
    filterChaters(){
        let filter = this.state.chaters.filter((el)=>{
            return el.isFavorite!== false
        })
        this.setState({favoriteContacts: [...filter]})
        console.log(this.state.favoriteContacts);
        this.setState({isFiltered: !this.state.isFiltered})
    }
    editContact(user){
        let AllChaters= this.state.chaters
        AllChaters[this.state.numberUser].name=user.name
        AllChaters[this.state.numberUser].contact=user.contact
        AllChaters[this.state.numberUser].isFavorite=user.isFavorite
        this.setState({chaters: []})
        this.setState({chaters: [...AllChaters]})
    }
}

export default App;