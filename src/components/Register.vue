<template>
    <div class="container">
        <b-breadcrumb :items="items"></b-breadcrumb>
        <hr>
        <b-link :to="{ name: 'table' }">Ver tabla </b-link>
        <hr>
        <h2>Registrar de vehiculos</h2>
        <div>
            <div class="myForm">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form-control box-form formulario">

                    <!-- TODO: MODELO  -->
                    <b-form-group id="input-group-1" label="Modelo" label-for="input-2" class="mb-3">
                        <b-form-input id="input-1" v-model="form.model" type="text" placeholder="Modelo"></b-form-input>
                    </b-form-group>

                    <!-- TODO: MARCA -->
                    <b-form-group id="input-group-1" label="Marca" label-for="input-2" class="mb-3">
                        <b-form-input id="input-1" v-model="form.brand" type="text" placeholder="Marca"></b-form-input>
                    </b-form-group>

                    <!-- TODO: AÑO DE FABRICACIÓN -->
                    <b-form-group id="input-group-3" label="Año de fabricacion:" label-for="input-3" class="mb-3">
                        <b-form-input id="input-1" v-model="form.year" type="text"
                            placeholder="Año de fabricacion"></b-form-input>
                    </b-form-group>

                    <!-- TODO: NUMERO DE SERIE -->
                    <b-form-group id="input-group-1" label="Numero de serie" label-for="input-2" class="mb-3">
                        <b-form-input id="input-1" v-model="form.serie" type="text"
                            placeholder="Numero de serie"></b-form-input>
                    </b-form-group>



                    <b-button type="submit" variant="primary" class="mx-2">Enviar</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>

                <b-alert show variant="warning" v-if="errors.length">
                    <b>Errores:</b>
                    <ol>
                        <li v-for="err in errors">{{ err }}</li>
                    </ol>
                </b-alert>
                <b-alert show variant="success" v-if="success">
                    <h1>Formulario enviado exitosamente!</h1>
                </b-alert>
            </div>
        </div>
    </div>
</template>

<script>
import vehicleService from '../services/Vehicle'

export default {
    data() {
        return {
            items: [
                {
                    text: 'Formulario',
                    href: '/form'
                },
            ],
            form: {
                year: '',
                brand: '',
                model: '',
                serie: ''
            },
            show: true,
            errors: [],
            success: false
        }
    },
    methods: {
        onSubmit: function (e) {
            this.errors = [];

            const newDate = parseInt(this.form.year);

            if (this.form.model === "") {
                this.errors.push("El modelo es requerido.");
            } else if (!this.validModel(this.form.model)) {
                this.errors.push("El modelo no debe contener caracteres especiales.");
            }
            if (this.form.brand === "") {
                this.errors.push("El marca es requerido.");
            } else if (!this.validModel(this.form.brand)) {
                this.errors.push("El marca no debe contener caracteres especiales.");
            }
            if (this.form.year === "") {
                this.errors.push("La fecha es requerida")
            } else if (newDate > 2024) {
                this.errors.push("La fecha no puede ser mayor al año actual")
            }
            if (this.form.serie === "") {
                this.errors.push("El numero de serie es requerido")
            } else if (!this.validSerie(this.form.serie)) {
                this.errors.push("El numero de serie no es valido")
            }
            
            if (this.errors.length === 0) {
                this.success = true;
                vehicleService.registerVehicle(
                    {
                        id: Math.floor(Math.random() * 100) + 25,
                        model: this.form.model,
                        brand: this.form.brand,
                        year: this.form.year,
                        serie: this.form.serie
                    }
                    )
            }

            e.preventDefault();
        },
        onReset: function (e) {
            this.form.model = '';
            this.form.brand = '';
            this.form.year = '';
            this.form.serie = '';
            this.errors = [];
        },
        validModel: function (model) {
            return /^[a-zA-Z0-9]*$/.test(model);
        },
        validSerie: function (serie) {
            return /^[A-Z]{4}[0-9]{3}-[0-9]{2}[A-Z]{2}$/.test(serie);
        },
    }

}

</script>

<style scoped>
.container {
    margin-left: 15rem;
    padding: 2rem;
}

.myForm {
    padding: 2rem;
    display: flex;
    gap: 5rem;
}

.formulario {
    width: 50%;
}
</style>