<template>
    <section class="bg-light" id="puppies">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading text-uppercase">Our puppies</h2>
                    <h3 class="section-subheading text-muted"></h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-6 dogs-item" v-for="(obj, key) in puppiesJSON" :key="key">
                    <a class="puppies-link" data-toggle="modal" href="#puppiesModal2">
                        <div class="puppies-hover">
                            <div class="puppies-hover-content">
                                <i class="fas fa-paw fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="" alt="">
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
            puppiesJSON: [
                {
                    img: '',
                    caption: 'COMING SOON',
                    title: ''
                },
                {
                    img: '',
                    caption: 'COMING SOON',
                    title: ''
                },
                {
                    img: '',
                    caption: 'COMING SOON',
                    title: ''
                },
                {
                    img: '',
                    caption: 'COMING SOON',
                    title: ''
                },
                {
                    img: '',
                    caption: 'COMING SOON',
                    title: ''
                },
                {
                    img: '',
                    caption: 'COMING SOON',
                    title: ''
                },
                {
                    img: '',
                    caption: 'COMING SOON',
                    title: ''
                },
                {
                    img: '',
                    caption: 'COMING SOON',
                    title: ''
                },
                {
                    img: '',
                    caption: 'COMING SOON',
                    title: ''
                }
            ]
        })
    }
</script>

<style lang="css">

</style>