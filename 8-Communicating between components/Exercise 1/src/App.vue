<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers @serverInfo="serverData = $event"></servers>
            <app-server-details :serverData="serverData"></app-server-details>
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
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        },
        data : function() {
            return  {
                serverData : {
                    id : 0,
                    status : 'None'
                }
            }
        }
    }

</script>

<style>

</style>
