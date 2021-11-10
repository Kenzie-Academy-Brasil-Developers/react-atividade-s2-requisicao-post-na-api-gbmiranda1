import "./style.css"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory }  from 'react-router-dom'
import axios from "axios";
import {useState} from "react"
import PopupSenhaInvalida from "../../components/loginInvalido"
import Inicio from "../inicio";

function Entrar({usuarios}){
    const history = useHistory();
    const [mostrarPopUp, setMostrarPopUp] = useState(false)

    const formSchema = yup.object().shape({
        username: yup.string().required("Usuário obrigatório"),
        password: yup.string().required("Senha obrigatória"),
    })
    
    const { register, 
              handleSubmit, 
              formState: { errors },
      } = useForm({
        resolver:yupResolver(formSchema),
    })
    
    const onSubmitFunction = data => {
        axios.post("https://kenzieshop.herokuapp.com/sessions/", data)
        .then((response) => {
            history.push(`/inicio/${data.username}`)
        })
        .catch((err) => {
            setMostrarPopUp(!mostrarPopUp)
        })
    }


    return(
        <div>
            {mostrarPopUp && <PopupSenhaInvalida setMostrarPopUp={setMostrarPopUp}></PopupSenhaInvalida>}
            <form className="forms" onSubmit={handleSubmit(onSubmitFunction)}>
                <h1 className="cadastro-h1">Entrar</h1>
                <input placeholder="Usuário" type="text" {...register("username")}/>
                <p className="error">{errors.username?.message}</p>
                <input placeholder="Senha" type="password" {...register("password")} />
                <p className="error">{errors.password?.message}</p>
                <button type="submit" className="button">Entrar</button>
                <button onClick={() => history.push("/cadastrar")} className="button cadastro">Cadastrar</button>
            </form>

            
        </div>
    )
}

export default Entrar;