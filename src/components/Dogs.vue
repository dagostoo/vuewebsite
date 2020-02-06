<template>
    <section class="bg-light" id="dogs">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading text-uppercase">Our Dogs</h2>
                    <h3 class="section-subheading text-muted">Boston Terrier And Cane Corso</h3>
                </div>
            </div>
            <div class="row">

                <div class="col-md-4 col-sm-6 dogs-item" v-for="(obj, key) in dogsJSON" :key="key">
                    <a class="dogs-link" data-toggle="modal" href="#dogsModal2">
                        <div class="dogs-hover">
                            <div class="dogs-hover-content">
                                <i class="fas fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/dogs/02-thumbnail.jpg" alt="">
                    </a>
                    <div class="dogs-caption">
                        <h4>{{ obj.caption }}</h4>
                        <p class="text-muted">{{ obj.title }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data: () => ({
            dogsJSON: [
                {
                    img: '/something/random/img.jpg',
                    caption: 'Duche',
                    title: 'DEVIL BE COME THE STAR DRAGON'
                },
                {
                    img: '/something/random/img.jpg',
                    caption: 'Connie',
                    title: 'GALAKTIC GRAVITY CONNIE FRANCIS'
                },
                {
                    img: '/something/random/img.jpg',
                    caption: 'Hanka',
                    title: 'HOW BEAUTIFUL YOU ARE TORQUES'
                },
                {
                    img: '/something/random/img.jpg',
                    caption: 'Gucci',
                    title: 'KAIT KLASSIK MYSTERY OF LIFE'
                },
                {
                    img: '/something/random/img.jpg',
                    caption: 'Boss',
                    title: 'BOSTON STYLE IN DELIBLE IM PRESHEN'
                },
                {
                    img: '/something/random/img.jpg',
                    caption: 'Kusti',
                    title: 'GALAKTIC GRAVITY GALLAGHER!'
                },
                {
                    img: '/something/random/img.jpg',
                    caption: 'Felicita',
                    title: 'HABIBI BOSTON FELICITA!'
                },
                {
                    img: '/something/random/img.jpg',
                    caption: 'Maria',
                    title: 'GALAKTIC GRAVITY ANGEL FIRST'
                }
            ]
        })
    }
</script>

<style lang="css">

</style>

