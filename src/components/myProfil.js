import React from "react";
import { Link } from "react-router-dom";

class MyProfill extends React.Component {
    render(){
        return(

            <div className="my-profill-container">

                <table border="1">
                    <thead>
                        <tr>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Группа</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Айдын</td>
                        <td>Жиенбаев</td>
                        <td>IT2-2105</td>
                        </tr>
                        <tr>
                        <td>Контакты</td>
                        <td colspan="2">8 705 971 2780</td>
                        </tr>
                        <tr>
                        <td rowspan="2">Владение языки программирование</td>
                        <td>Java</td>
                        <td>C++</td>
                        </tr>
                        <tr>
                        <td>React.js</td>
                        <td>Python</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                        <td colspan="3">О себе</td>
                        </tr>
                    </tfoot>
                </table>
                <div className="link"><Link to="/MyChat">Назад</Link></div>
            </div>
        )
    }
}

export default MyProfill