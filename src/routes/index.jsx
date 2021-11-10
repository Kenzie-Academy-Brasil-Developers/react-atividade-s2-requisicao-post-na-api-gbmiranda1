import { Switch, Route } from "react-router-dom"
import Entrar from "../pages/entrar"
import Cadastrar from "../pages/cadastro"
import Inicio from "../pages/inicio"
import { useState } from "react"

export default function Routes(){
    const [usuarios, setUsers] = useState([])
    return (
        <div>
        <Switch>
            <Route exact path="/">
                <Entrar usuarios={usuarios}></Entrar>
            </Route>
            <Route exact path="/cadastrar">
                <Cadastrar usuarios={usuarios} setUsers={setUsers}></Cadastrar>
            </Route>
            <Route exact path="/inicio/:name">
                <Inicio usuarios={usuarios}></Inicio>
            </Route>
        </Switch>
        </div>
    )
}