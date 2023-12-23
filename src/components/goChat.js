import React from "react";
import { Link} from 'react-router-dom';


class GoChat extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isShowthis: false
        }
    }

    render(){
        return(
        <nav className='navBar'>
          <ul>
            <p className='link'><Link to="/MyChat">Go To Chat</Link></p>
          </ul>
        </nav>
        )
    }
}

export default GoChat