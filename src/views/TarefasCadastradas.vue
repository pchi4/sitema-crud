<template>
    <div>
        <h1>Tarefas Cadastradas</h1>
        <div class="container">
            <div class="container-img">
            <img src="/img/cad.png" alt="">
            </div>
            <form action="/admin/filtrar-projetos" method="POST" class="formulario align-self-center">
            <div class="button-date">
                <h3>Deseja filtrar alguma tarefa?</h3><br>
                <h2>Selecione a data no qual deseja filtrar</h2>
                <input name="date" id="date" type="date">
            </div>
            <div class="buttons">
                <a href="/admin/filtrar-projetos"><button type="submit" id="buton-filtrar" value="{{filterProjeto.periodo}}"
                    class="btn btn-secondary btn-lg">Filtrar</button></a>
            </div>
            </form>
        </div>
        <div class="grid">
            <TabelaFeatures/>
        </div>
    </div>
</template>

<script>
import TabelaFeatures from './TabelaFeaures.vue';

export default {
    name:'TarefasCadastradas',
    components:{
        TabelaFeatures,
    }
}
</script>

<style scoped>
.container{
    width: 9011px;
    display: flex;
    justify-content: space-around;
    height: 400px;
    padding: 30px;
    border-radius: 20px;
    background-color: rgb(20, 89, 238);
    color: #ffff;
    box-shadow: 0 0 1em rgb(36, 34, 34);
}

.formulario{
    padding-top: 30px;
}

h1{
    font-family: Slabo, sans-serif;
    text-align: center;
    padding-top: 120px;
    padding-bottom: 20px;
    font-weight: bold;
}

.button-date{
    align-items: center;
    margin: 0 auto;
    text-align: center;
    padding: 15px 0px;
}

#date{
    width: 200px;
    border: none;
    height: 30px;
    border-radius: 5px;
    margin: 10px;
}

#buton-submit{
    width: px;
    margin-right: 0px;
}

.buttons{
    display: flex;
    justify-content:space-around
}

#buton-excluir{
    width: 250px;
    border-radius: 50px;
}

#buton-cadastrar{
    width: 250px;
    border-radius: 50px;
}

#buton-filtrar{
    width: 180px;
    border-radius: 30px;
}


#buton-delete{
    font-size: 30px;
}

#button-edit{
    font-size: 30px;
}

#buton-delete:hover{
    color: rgb(137, 49, 236);
}
#button-edit:hover{
    color: rgb(137, 49, 236);
}
</style>