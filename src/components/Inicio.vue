<script>

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
                <div class="col-3">
                    <div class="sidebar">
                        <b-nav vertical class="pt-5">
                            <b-nav-item>
                                <b-link class="myLink" :to="{ name: 'form' }">Vehiculos</b-link>
                            </b-nav-item>
                        </b-nav>
                    </div>
                </div>
            </b-row>
            <b-col class="cont">
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

.myLink{
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    color: white;
    padding: 1rem;
}

.cont{
    width: 80%;
}
</style>