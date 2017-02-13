<template>
    <div class="container">
        <app-header></app-header> <!--Or <appHeader></appHeader>-->
        <hr>
        <div class="row">
            <servers></servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        components: {
            appHeader: Header, //<app-header></app-header> or <appHeader></appHeader> (camelcase)
            Servers, //<servers></servers> (Not have a property)
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
