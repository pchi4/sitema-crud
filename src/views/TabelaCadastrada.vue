<template>
<div class="grid">
    <table id="myTable" class="table table-dark table-striped">
        <thead>
            <tr>
                <th scope="col">Usuario</th>
                <th scope="col">Projeto</th>
                <th scope="col">Tarefa</th>
                <th scope="col">Link das Tarefas</th>
                <th scope="col">Periodo</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="projeto in projetos" :key="projeto.id">
                <td>usuario</td>
                <td>{{projeto.projeto}}</td>
                <td>{{projeto.tarefa}}</td>
                <td>{{projeto.link}}</td>
                <td>{{projeto.date}}</td>
            </tr>
        </tbody>
    </table>
 </div>
</template>

<script>

export default {
    name: "TabelaCadastrada",
    data(){
        return {
            projetos: null,

        }
    },
    methods:{
        async getTarefa(){
            const req  = await fetch("http://localhost:3000/tarefa");
            const data = await req.json();
            this.projetos = data;
            
            console.log(this.projetos)
        }
    },
    mounted(){
        this.getTarefa();
    }
}
</script>

<style scoped>
   .grid {
    align-items: center;
    padding: 50px;
    text-align: center;
    justify-content: center;
}

table {
    border-collapse: collapse;
    border: 2px solid rgb(44, 43, 43);
    letter-spacing: 1px;
    margin: 0 auto;
    font-family: sans-serif;
    width: 1200px;
}

td{
    overflow: hidden;
    padding: 5px 15px;
    border-bottom: 1px solid rgb(44, 43, 43);;
}

.grid th {
    border: 1px solid rgb(20, 20, 20);
    padding: 10px;
    font-weight: bold;
   
}

.grid tr:nth-child(even) {
    background-color: #eee;
} 
</style>