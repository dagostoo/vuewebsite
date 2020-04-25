<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
            <img src="../assets/img/logos/cutted_white.png" class="navbar-brand js-scroll-trigger" href="#home"
                 style="width:120%; max-width:200px">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <scrollactive :offset="80"
                              :duration="800"
                              bezier-easing-value=".5,0,.35,1">
                    <ul class="navbar-nav text-uppercase ml-auto">
                        <li class="nav-item">
                            <a class="scrollactive-item nav-link js-scroll-trigger" href="#about">About us</a>
                        </li>
                        <li class="nav-item">
                            <a class="scrollactive-item nav-link js-scroll-trigger" href="#breed">Breed standards</a>
                        </li>
                        <li class="nav-item">
                            <a class="scrollactive-item nav-link js-scroll-trigger" href="#dogs">Our dogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="scrollactive-item nav-link js-scroll-trigger" href="#puppies">Our puppies</a>
                        </li>
                        <li class="nav-item">
                            <a class="scrollactive-item nav-link js-scroll-trigger" href="#location">Location</a>
                        </li>
                        <li class="nav-item">
                            <a class="scrollactive-item nav-link js-scroll-trigger" href="#contact">Contact</a>
                        </li>
                    </ul>
                </scrollactive>
            </div>
        </div>
    </nav>
</template>

<script>


    export default {
        name: "Navigation",
        data() {
            return {imgPath: require("../assets/img/logos/golden_logo.png")}
        },
    }



</script>

<style>
    .navbar-brand {
        max-width: 180px !important;
        padding-bottom: 15px !important;
    }

    .fixed-top {
        position: absolute;
        background-color: black !important
    }

    mainNav {
        padding-top: 25px !important;
        padding-bottom: 25px !important;
        font-family: 'Acme' sans-serif !important;
    }
    .btn-primary {
        background-color: gray !important;
        border-color: gray !important
    }
    .nav-link {
        font-family: 'Acme', sans-serif !important;
    }

    .btn {
        font-weight: 600 !important;
        padding-top: 1rem !important;
        padding-bottom: 1rem !important;
    }

    nav {
        padding: 0px 0px 0px 0px !important;
    }

    .navbar-collapse {
        flex-grow: 0 !important
    }

    .container {
        width: 150% !important;
    }

</style>