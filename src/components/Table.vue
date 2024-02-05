<template>
    <div class="container">
        <b-breadcrumb :items="nav"></b-breadcrumb>
        <hr>
        <div class="overflow-auto">
            <b-pagination v-model="currentPage" :total-rows="vehicles.length" :per-page="perPage"
                aria-controls="my-table"></b-pagination>

            <p class="mt-3">Current Page: {{ currentPage }}</p>

            <b-table id="my-table" :items="vehicles" :per-page="perPage" :current-page="currentPage" small></b-table>
        </div>
    </div>
</template>

<script>

import vehicleService from '../services/Vehicle'

export default {
    data() {
        return {
            nav: [
                {
                    text: 'Formulario',
                    href: '/form'
                },
                {
                    text: 'Tabla',
                    href: '/form/table'
                },
            ],
            perPage: 5,
            currentPage: 1,
            vehicles: [],
        }
    },
    mounted() {
        this.getVehicles()
    },
    computed: {
        rows() {
            return this.items.length
        }
    },
    methods: {
        async getVehicles() {
            try {
                const data = await vehicleService.getVehicles(
                    parseInt(this.perPage)
                )
                this.vehicles = data.content
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>
.container {
    margin-left: 15rem;
    padding: 2rem;
}
</style>