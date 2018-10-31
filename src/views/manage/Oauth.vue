<template>
    <div class="container">
    <div class="card-columns">
        <div
        v-for="client in clients"
        :key="client.cid">

            <div class="card">
                <img class="card-img-top" v-if="client.image" :src="client.image" alt="oauth client image">
                <div class="card-header">{{client.name}}</div>
                <div class="card-body">
                    <p class="card-text">More info!</p>
                    <a href="#" class="btn btn-primary">Manage</a>
                </div>
            </div>

        </div>
    </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: mapState({
        clients: state => state.oauthclients.all
    }),

    created() {
        this.$store.dispatch('oauthclients/getAllClients')
    }
}
</script>


<style scoped>
</style>
