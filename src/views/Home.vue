<template>
    <div>
        <NavComponent/>
        <h1 id="titulo">Bem vindo(a)</h1>
        <FormLogin/>
    </div>
</template>

<script>
import NavComponent from '../components/NavComponent.vue';
import FormLogin from './FormLogin.vue';

export default {
    name: 'HomeLogin',
    components: {
        NavComponent,
        FormLogin
    }
}
</script>

<style scoped>
    #titulo{
        padding-top: 230px;
        text-align: center;
        font-weight:bold;
    }
</style>