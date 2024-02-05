<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">

                <router-link to="/" class="nav-link title">My Aplication</router-link>
                
                
            
                <!-- <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 options">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link links">Inicio</router-link>
                        </li>
                    </ul>
                </div> -->
            </div>
        </nav>

        <!-- Informacion de la landing -->
        <div class="container"> 
            <div class="info">
                <h1>Bienvenido a tu landing</h1>
                <p>Este es un parrafo de prueba para el desarrollo de este examen</p>
                <router-link to="inicio" class="btn">Ir a inicio</router-link>
            </div>
            <div class="img">
                <img src="../assets/logo.svg" alt="imagen del logo" height="400">
            </div>
        </div>
        
        <footer>
            <div>
                <h4>Examen de aplicaciones web profesionales</h4>
            </div>
        </footer>
    </div>
</template>

<script>

</script>

<style scoped>
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

.container{
    padding-top: 5rem;
    height: 100vh;
    display: flex;
    gap: 8rem;
}

.info{
    margin-top: 10rem;

}

.btn{
    border-color: #34495e;
    color: #34495e;
}

.btn:hover{
    background-color: #34495e;
    color: white;
}

footer{
    background-color: #34495e;
    color: white;
    padding: 2rem;
    text-align: center;
}

</style>