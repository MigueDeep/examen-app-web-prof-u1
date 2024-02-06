<template>
    <div class="container">
        <b-breadcrumb :items="nav"></b-breadcrumb>
        <hr>
        <h2>Vehiculos registrados</h2>
        <div class="overflow-auto mt-3">
            <b-pagination v-model="currentPage" :total-rows="vehicles.length" :per-page="perPage"
                aria-controls="my-table"></b-pagination>

            <p class="mt-3">Current Page: {{ currentPage }}</p>

            <b-table id="my-table" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :items="vehicles"
                :per-page="perPage" :current-page="currentPage" label-sort-asc="" label-sort-desc="" small></b-table>
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
            sortBy: "brand",
            sortDesc: false,
            fields: [
                {
                    key: 'brand',
                    label: 'Marca',
                    sortable: true
                },
                {
                    key: 'model',
                    label: 'Modelo',
                    sortable: true
                },
                {
                    key: 'year',
                    label: 'Año',
                    sortable: true
                },
                {
                    key: 'serie',
                    label: 'Serie',
                    sortable: true
                }
            ]
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
        async getVehicles(ctx) {
            console.log(ctx)
            try {
                const data = await vehicleService.getVehicles({
                    size: parseInt(this.perPage),
                    sort: this.sortBy,
                }
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