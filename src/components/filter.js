import React from "react";

class FilterContainer extends React.Component{
    render(){
        if(this.props.isFilter)
            return(
                <div className="filter-menu">
                            <h4>Фильтр чатов</h4>
                            <div className="none-read" onClick={this.props.filteredChaters}>
                                Близкие
                            </div>
                            <div className="Contact-filter">
                                Контакты
                            </div>
                            <div className="none-contacts-filter">
                                Не являются контактами
                            </div>
                            <div className="groups">
                                Группы
                            </div>
                            <div className="none-send-msgs">
                                Черновики
                            </div>
                        </div>
            )
    }
}
export default FilterContainer