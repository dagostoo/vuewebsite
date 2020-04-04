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
                    <a class="dogs-link" data-toggle="modal" v-bind:href=" '#dogsModal' + obj.id">
                        <div class="dogs-hover">
                            <div class="dogs-hover-content">
                                <i class="fas fa-paw fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-thumbnail" v-bind:src="obj.img" :alt="dogs">
                    </a>
                    <div class="font-italic dogs-caption">
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
                    img: require('../assets/img/dogs/douche.jpeg'),
                    caption: 'DEVIL BE COME THE STAR DRAGON',
                    title: 'Duche',
                    id: 1
                },
                {
                    img: require('../assets/img/dogs/kaksi.jpg'),
                    caption: 'ESTELLUM CALACTYC FIRST',
                    title: 'Kaksi',
                    id: 2
                },
                {
                    img: require('../assets/img/dogs/connie.jpg'),
                    caption: 'GALAKTIC GRAVITY CONNIE FRANCIS',
                    title: 'Connie',
                    id: 3
                },
                {
                    img: require('../assets/img/dogs/hanka.jpg'),
                    caption: 'HOW BEAUTIFUL YOU ARE TORQUES',
                    title: 'Hanka',
                    id: 4
                },
                {
                    img: require('../assets/img/dogs/gucci.jpg'),
                    caption: 'KAIT KLASSIK MYSTERY OF LIFE',
                    title: 'Gucci',
                    id: 5
                },
                {
                    img: require('../assets/img/dogs/boss.jpg'),
                    caption: 'BOSTON STYLE IN DELIBLE IM PRESHEN',
                    title: 'Boss',
                    id: 6
                },
                {
                    img: require('../assets/img/dogs/kusti.jpg'),
                    caption: 'GALAKTIC GRAVITY GALLAGHER',
                    title: 'Kusti',
                    id: 7
                },
                {
                    img: require('../assets/img/dogs/felicita.jpg'),
                    caption: 'HABIBI BOSTON FELICITA',
                    title: 'Felicita',
                    id: 8
                },
                {
                    img: require('../assets/img/dogs/maria.jpg'),
                    caption: 'GALAKTIC GRAVITY ANGEL FIRST',
                    title: 'Maria',
                    id: 9
                }
            ]
        })
    }
</script>

<style lang="css">
    .img-thumbnail {
        width: 100% !important;
        height: auto !important;
    }

</style>

