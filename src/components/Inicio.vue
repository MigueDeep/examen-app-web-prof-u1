<script>
export default {
    computed: {
        isHomePage() {
            return this.$route.name === 'inicio';
        },
    },
};
</script>

<template>
    <div>
        <b-container fluid>
            <b-row>
                <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div class="container-fluid">

                        <router-link to="/" class="nav-link title">My Aplication</router-link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 options">
                                <li class="nav-item">
                                    <router-link to="inicio" class="nav-link links">Inicio</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </b-row>

            <!-- * Sidebar -->
            <b-row>
                <b-col>
                    <div class="sidebar">
                        <b-nav vertical class="pt-5">
                            <b-nav-item>
                                <b-link class="myLink" :to="{ name: 'form' }">Vehiculos</b-link>
                            </b-nav-item>
                        </b-nav>
                    </div>
                </b-col>
            </b-row>

            <b-col class="cont">
                <div v-if="isHomePage" class="welcome">
                    <h1>Bienvenido a la aplicacion!</h1>
                    <p>Esta es la aplicacion para el examen :).</p>
                    <img src="../assets/porsche.png" alt="imagen de un porsche">
                </div>
                <router-view />
            </b-col>
        </b-container>
    </div>
</template>



<style scoped>
.options {
    margin: 0 auto;
}

.sidebar {
    width: 250px;
    height: 100vh;
    background-color: #343a40;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
    z-index: -1;
    padding-top: 3rem;

}

.title {
    color: white;
    font-size: 32px;
    font-weight: bold;
    font-weight: 100;
}

.links {
    color: white;
    font-size: 19px;
    font-weight: bold;
    font-weight: 100;
}

.myLink {
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    color: white;
    padding: 1rem;
}

.cont {
    width: 80%;
}

.welcome {
    margin-left: 16rem;
    padding: 2rem;
    float: left;
    width: 80%;
}
</style>