<template>
      <div>
          <div>
              <h1 id="cadtitulo">Cadastro de Tarefas</h1>
          </div>
        <div class="container">
            <div id="container-img">
                <img src="/img/cadastro.svg" id="img-cadastro" alt="">
            </div>
            <form class="formulario align-self-center" id="formulario" v-on:submit="enviarFormulario($event)">
                <div>
                    <input name="date" id="date" v-model="date" type="date">
                </div>
                <div>
                    <p>Deposite aqui o link</p>
                    <input id="link" name="link" v-model="link" class="form-control row" type="text">
                </div>
                <div class="form-group row">
                    <p>Selecione os Projetos</p>
                    <select class="form-control" id="projeto" v-model="projeto" name="projeto">
                        <option selected value="">Selecione</option>
                        <option v-for="projeto in projeto" :key="projeto.id" :value="projeto.projeto">{{projeto.projeto}}</option>
                    </select>
                </div>
                <div class="form-group row">
                    <label for="exampleFormControlTextarea1">Tarefas</label>
                    <textarea name="tarefa" id="tarefa" v-model="tarefa" class="form-control" rows="3"></textarea>
                </div>
                <div class="buttons">
                    <button type="reset" id="buton-excluir" class="btn btn-primary btn-lg">Excluir</button>
                    <button type="submit" id="buton-cadastrar" class="btn btn-secondary btn-lg">Cadastrar</button>
                </div>
            </form>
     </div>
    <div class="table">
            <TabelaCadastrada/>
    </div>
    </div>
</template>

<script>
import TabelaCadastrada from './TabelaCadastrada.vue';

    export default {
        name: 'CadastroTask',
        components:{
            TabelaCadastrada,
        },
        data(){
            return{
                projetos: null,
            }
        },
        methods:{
            async getProjetos(){
                const req  = await fetch("http://localhost:3000/crud");
                const data = await req.json();
                this.projetos = data;
                console.log(this.projetos)
            },
            async enviarFormulario(e){
                e.preventDefault()

                const data = {
                    date: this.date,
                    link: this.link,
                    tarefa: this.tarefa,
                    projetos: this.projetos,  
                }

                const dataJson = JSON.stringify(data);

                const req = await fetch("http://localhost:3000/Tarefas",{
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: dataJson
                }); 

                const res = await req.json();

                console.log(res);

            },
        },
        mounted(){
            this.getProjetos()
        }
    }
</script>

<style scoped>
    
.container{
    width: 1500px;
    display: flex;
    height: 513px;
    justify-content: space-around;
    padding: 30px;
    border-radius: 40px;
    background-color: rgb(20, 89, 238);
    color: #ffff;
    box-shadow: 0 0 1em rgb(36, 34, 34);
}

#container-img{
    padding-right: 50px;
    border-radius: 30px;
}

#img-cadastro{
    width: 450px;
}

.nav{
    position: fixed;
    display: flex;
    text-decoration: none;
    width: 100%;
    font-family: Kanit;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(50, 50, 51, 0.774);
    padding: 10px;
    color: #ffff;
    font-size: 24px;
}

a {
     color: inherit;
} 

 li{
    text-decoration: none;
 }
    
a:hover{
    color: yellow;
    text-shadow: 2px 2px #0000;
}

h1{
    font-family: Patua One;
    text-align: center;
    padding-top: 120px;
    padding-bottom: 20px;
}

.formulario{
    width: 800px;
    font-size: 24px;
    font-weight: 500;
    align-items: center;
    justify-items: center;
    margin: 0 auto;
}

#date{
    width: 200px;
    font-size: 16px;
    border-radius: 15px;
    margin: 10px;
    margin-left: 65%;
}

#buton-submit{
    width: px;
    margin-right: 0px;
}

.buttons{
    display: flex;
    justify-content:space-around;
    padding-top: 25px;
}

#buton-excluir{
    width: 220px;
    border-radius: 50px;
}

#buton-cadastrar{
    width: 220px;
    border-radius: 50px;
}

#logout{
    border-radius: 20px;
    background-color: rgb(149, 141, 141);
    width: 100px;
    border: none;
}

#logout:hover{
    box-shadow: 4px 4px #ffff;
}

#cadtitulo{
    padding-top: 120px;
    font-weight: bold;
    text-align: center;
}

#container-img{
    padding-right: 50px;
    border-radius: 30px;
}

#img-cadastro{
    width: 450px;
}
</style>