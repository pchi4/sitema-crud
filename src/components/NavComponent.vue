<template>
    <nav>
    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link active" href="">
                <img src="/img/bandiera.jpg" width="60" height="50" alt="">
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" href="">Cadastre-se</a>
        </li>
    </ul>
</nav>
</template>

<script>
export default {
    name: 'NavComponent',
    rules:{
        'vue/multi-word-component-names': 0,
    },
}
</script>

<style>
.nav{
    position: fixed;
    display: flex;
    text-decoration: none;
    width: 100%;
    font-family: Kanit; 
    justify-content: space-between;
    align-items: center;
    background-color: rgb(51, 50, 50);
    padding: 10px;
    color: #ffff;
    font-size: 24px;
    
}

a { 
    color: inherit; 
} 

a:link {
    text-decoration: none;
}

a:hover{
    color: yellow;
    text-shadow: 2px 2px #0000;
}
</style>