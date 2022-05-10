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
            <tr>
                <td>usuario</td>
                <td>projet</td>
                <td>tarefa</td>
                <td>http://localhost:8080/cadastro</td>
                <td>09/08/2022</td>
            </tr>
        </tbody>
    </table>
 </div>
</template>

<script>
export default {
    name: "TabelaCadastrada"
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