import "./style.css"
import {useParams, useHistory} from "react-router-dom"

function Inicio({usuarios}){
    const history = useHistory()
    const params = useParams()
    return (
        <div>
            <p>Olá, {params.name}</p>
            <button onClick={()=> history.push("/")} className="button">Sair</button>
        </div>
    )

}

export default Inicio;