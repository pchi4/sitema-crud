<template>
      <div id="container" class="d-flex justify-content-center">
        <div class="primeiro-container">
            <form action="admin/login" method="POST" id="formulario-login" class="formulario align-self-center">
                <div class="form-group">
                    <label for="exampleInputEmail1"> Matricula</label>
                    <input name="matricula" id="matricula" type="number" class="form-control" maxlength="10" aria-describedby="emailHelp" placeholder="Matricula">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Senha</label>
                    <input name="senha" type="password" id="senha" class="form-control" placeholder="Senha">
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" type="submit" id="buton-enviar" value="buton-enviar">Entrar</button>
                </div>
                <div class="password">
                    <a href="#">Esqueceu sua senha ?</a>
                </div>
            </form>
        </div>
        <section class="segundo-container">
            <div>
                <h1>Olá!</h1>
                <h3>Caso você não tenha o acesso</h3>
                <p>Precisamos que você se</p>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" id="buton-cadastrar" value="Enviar">Cadastre-se</button>
            </div>
        </section>
        <router-link to="/cadastro">Cadastro</router-link>
    </div>
</template>

<script>
export default {
    name: "FormLogin"
}
</script>

<style>
    #container{
    padding-top: 100px;
}

.primeiro-container{
    background-color: rgb(20, 89, 238);
    border-radius: 30px 0px 0px 30px;
    padding: 30px;
    width: 500px;
    height: 300px;
    color: #ffff;
    box-shadow: 0 0 1em rgb(36, 34, 34);
}

.segundo-container{
    background-color: rgb(181, 245, 245);
    border-radius: 0px 30px 30px 0px;
    width: 350px;
    text-align: center;
    padding: 30px;
    box-shadow: 0 0 1em rgb(51, 49, 49);
}

.form-group{
    width: 300px;
    padding: 10px 0px;
    display: block;
    margin: 0 auto;
}

.password{
    justify-items: center;
    align-items: center;
    text-align: center;
}

#buton-enviar{
    background-color: #ffff;
    color: black;
    width: 150px;
    border-radius: 50px;
    display: block;
    margin: 0 auto;
}

#buton-cadastrar{
    width: 150px;
    border-radius: 50px;
}
</style>