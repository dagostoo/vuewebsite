<template>
    <section id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading text-uppercase ">About us</h2>
                    <h3 class="section-subheading text-muted">Little information about our kennel.</h3>
                </div>
            </div>



            <div class="flex">


            <div class="column text">
                <h4 class="about-heading">There were always dogs in the house. The kennel began its activity in
                    2015.
                </h4>
                <p>The desire to organize a kennel appeared after the acquisition of a puppy of breed
                Boston Terrier. The breed really sunk into the soul, but could not supplant the love of the breed
                Cane Corso. Therefore, the name of the kennel "GALAKTIC GRAVITY" was given in honor of the first Cane
                Corso dog - ESTELLUM GALACTIC FIRST.
                Dogs are surrounded by love, care and attention, independently participating in exhibitions,
                breeding and doing sports. They are all members of our family.</p>

                </div>

                <div class="dog_image_div column">
                <img src="../assets/img/logos/black_logo.png" class="dog_image" alt="Responisve image">
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'About'

    }
</script>

<style>
    .flex {
        display:flex;
    }
    .text {
        text-align: left;
        margin-right: 150px;
        margin-left: 30px;
    }
    .dog_image_div {
        justify-content: right;
        margin-right: -15px;
        margin-top: 5px;
    }

    .dog_image {
        width: 360px;
        height: auto;
    }
    .about-heading {
        font-size: 23px;
        font-weight: 700;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 1200px)  {
        .dog_image_div {
            margin-top: 30px;
            margin-right: -20px;
        }

        .dog_image {
            width: 340px;
        }
    }

    @media screen and (max-width: 992px){
        .flex {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }

        .text {
            margin: 0px;
        }

        .dog_image_div {
            justify-content: flex-end;
        }
    }

    @media screen and  (max-width: 768px){
        .text {
            margin-right: 0px;
            margin-left: 0px;
        }

        .dog_image {
            width: 300px;
        }

    }

</style>

