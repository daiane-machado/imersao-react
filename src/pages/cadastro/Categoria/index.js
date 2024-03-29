import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormField from "../../../comoponents/FormField";
import PageDefault from "../../../comoponents/PageDefault";

function CadastroCategoria (){
    const valoresIniciais = {
        nome:'',
        descricao:'',
        cor:'#000000',
    }
    const [categorias, setCategorias] = useState([])
    const [values, setValues] = useState(valoresIniciais)
    

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor, // nome: 'valor'
        })
    }

    function handleChange(infoDoEvento){
        setValue(
            infoDoEvento.target.getAttribute('name'),
            infoDoEvento.target.value
        );
    }

    return(
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <React.StrictMode>
            <form onSubmit={function handleSubmit(infoDoEvento){
                infoDoEvento.preventDefault();
                setCategorias([
                    ...categorias, 
                    values
                ]);
                setValues(valoresIniciais)
                
            }}>
               <FormField 
                    label="Nome da Categoria: "
                    type="text"
                    value={values.nome}
                    name="nome"
                    onChange={handleChange}
                    placeholder="Nome da categoria"
               />
                <FormField
                    label="Descrição: "
                    type="textarea"
                    value={values.descricao}
                    name="descricao"
                    onChange= {handleChange}
                />

                <FormField
                    label="Cor: "
                    type="color"
                    value={values.cor}
                    name="cor"
                    onChange= {handleChange}
                    />
               
                
                <button >
                    Cadastrar
                </button>
            </form>
            </React.StrictMode>

            <ul>
                {categorias.map((categoria, indice) => {
                   return(
                    <li key={`${indice}`}> 
                        {categoria.nome}
                    </li>
                   )
                }) }
            </ul>
            


           
            <Link to="/">
                Ir para Home
            </Link>

        </PageDefault>
    )
}
export default CadastroCategoria