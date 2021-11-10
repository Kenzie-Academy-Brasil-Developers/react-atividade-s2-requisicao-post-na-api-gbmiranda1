import {DivFlex, ContainerPopUP, DivFlexAlterada} from "./style"
import {useState} from "react"


function PopupSenhaInvalida({setMostrarPopUp}){

    return (
        <DivFlex>
            <ContainerPopUP>
                <DivFlexAlterada>
                    <span>Usuário ou Senha incorretos</span>
                    <button onClick={() => setMostrarPopUp(false)}>Fechar</button>
                </DivFlexAlterada>
            </ContainerPopUP>
        </DivFlex>
    )
}

export default PopupSenhaInvalida;