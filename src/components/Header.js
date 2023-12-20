import React from "react";
import Chater from "./ChatWith";


class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="Name-chater">{this.props.ChaterName}</div>
                <div className="menu-chat">
                    <div className="call-menu">
                        <div className="video-call-cont menu-cont">
                            <div className="video-call">

                            </div>
                        </div>
                        <div className="audio-call-cont menu-cont">
                            <div className="audio-call">
                            </div>
                        </div>
                    </div>
                    <div className="search-chat-cont menu-cont">
                        <div className="search-chat">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header