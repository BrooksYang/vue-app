<template>
    <Row type="flex" justify="center">
        <div id="home">
            <img alt="Vue logo" src="../assets/logo.png">
            <HelloWorld msg="Welcome to Your Vue.js App" />
        </div>
    </Row>
</template>

<script>
    import HelloWorld from '../components/HelloWorld.vue';

    export default {
        name: 'home',

        components: {
            HelloWorld,
        },
    };
</script>
