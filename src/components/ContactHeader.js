import React from "react";
import FilterContainer from "./filter";
import AddUser from "./addUser";
import BitcoinPrice from "./bitcoinPrice";


class ConHeader extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isFilter: false,
            isAdding: false,
            showBitcoin:false
        }
    }
    render(){
        return(
            <div className="contact-header">
                <h2>Чаты</h2>
                <div className="contact-menu">
                    <div className="add-user" onClick={()=> this.setState({isAdding: !this.state.isAdding})}>

                    </div>
                    <div className="bitcoin-icon" onClick={()=>this.setState({showBitcoin: !this.state.showBitcoin})}>

                    </div>
                    <div className="filter-chat" onClick={()=> this.setState({isFilter: !this.state.isFilter})}>

                    </div>
                    <FilterContainer filteredChaters={this.props.filteredChaters} isFilter={this.state.isFilter} />
                    <AddUser isAdding={this.state.isAdding} addChater= {this.props.addChater} />
                    {this.state.showBitcoin && <BitcoinPrice />}
                </div>
            </div>
        )
    }
}

export default ConHeader