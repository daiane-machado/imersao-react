import React from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../comoponents/PageDefault";

function CadastroVideo (){
    return(
        <PageDefault>
            <h1>Cadastro de Vídeo</h1>
            <Link to="/cadastro/categoria">
                Cadastrar categoria
            </Link>
        </PageDefault>
    )
}
export default CadastroVideo