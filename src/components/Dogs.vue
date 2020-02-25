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
                    caption: 'DEVIL BE COME THE STAR DRAGON',
                    title: 'Duche'
                },
                {
                    img: '/something/random/img.jpg',
                    caption: 'GALAKTIC GRAVITY CONNIE FRANCIS',
                    title: 'Connie'
                },
                {
                    img: '/something/random/img.jpg',
                    caption: 'HOW BEAUTIFUL YOU ARE TORQUES',
                    title: 'Hanka'
                },
                {
                    img: '/something/random/img.jpg',
                    caption: 'KAIT KLASSIK MYSTERY OF LIFE',
                    title: 'Gucci'
                },
                {
                    img: '/something/random/img.jpg',
                    caption: 'BOSTON STYLE IN DELIBLE IM PRESHEN',
                    title: 'Boss'
                },
                {
                    img: '/something/random/img.jpg',
                    caption: 'GALAKTIC GRAVITY GALLAGHER',
                    title: 'Kusti'
                },
                {
                    img: 'data:image/jpeg;base64,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',
                    caption: 'HABIBI BOSTON FELICITA',
                    title: 'Felicita'
                },
                {
                    img: '/something/random/img.jpg',
                    caption: 'GALAKTIC GRAVITY ANGEL FIRST',
                    title: 'Maria'
                }
            ]
        })
    }
</script>

<style lang="css">

</style>

