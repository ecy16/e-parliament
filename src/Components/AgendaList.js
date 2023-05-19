import React, { useState } from "react"
import './AgendaList.css';
import { Link } from 'react-router-dom';


export function AgendaList() {
    const [agendas,setAgendas] = useState([])



    return (
        <div>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Session</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Session 1</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Session 2</td>
                </tr>
            </table>
               <button>
                <Link to='/VotingSession'>VotingSession</Link>
                </button>         
        </div>
       
    )
}

export default AgendaList