<template>
    <div>
        <div v-for="obj in modalJSON" :key="obj.id">
            <div class="dogs-modal modal fade" v-bind:id="'dogsModal'+ obj.id" tabindex="-1" role="dialog" aria-hidden="true" >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="close-modal" data-dismiss="modal">
                            <div class="lr">
                                <div class="rl"></div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8 mx-auto">
                                    <div class="modal-body">
                                        <!-- Project Details Go Here -->
                                        <h2 class="text-uppercase">{{ obj.caption }}</h2>
                                        <h3 class="item-intro text-muted">{{ obj.title }}</h3>
                                        <img class="img-fluid d-block mx-auto" v-bind:src="obj.img"  alt="modals">
                                        <p>{{obj.text}}</p>
                                        <ul class="list-inline">
                                            <li>{{obj.textarea}}</li>
                                            <li>{{obj.textarea2}}</li>
                                            <li>{{obj.textarea3}}</li>
                                        </ul>
                                        <button class="btn btn-primary" data-dismiss="modal" type="button">
                                            <i class="fas fa-times"></i>
                                            Close Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            modalJSON: [
                {
                    img: require('../assets/img/dogs/douche.jpeg'),
                    caption: 'DEVIL BE COME THE STAR DRAGON',
                    title: 'ja ne umeju codit',
                    text: '',
                    textarea:'1',
                    textarea2: '2',
                    textarea3:'3',
                    id: '1'
                },
                {
                    img: require('../assets/img/dogs/kaksi.jpg'),
                    caption: 'ESTELLUM CALACTYC FIRST',
                    title: 'Kaksi',
                    text: '',
                    textarea:'',
                    textarea2: '',
                    textarea3:'',
                    id: '2'
                },
                {
                    img: require('../assets/img/dogs/connie.jpg'),
                    caption: 'GALAKTIC GRAVITY CONNIE FRANCIS',
                    title: 'Connie',
                    text: '',
                    textarea:'',
                    textarea2: '',
                    textarea3:'',
                    id: '3'
                },
                {
                    img: require('../assets/img/dogs/hanka.jpg'),
                    caption: 'HOW BEAUTIFUL YOU ARE TORQUES',
                    title: 'Hanka',
                    text: '',
                    textarea:'',
                    textarea2: '',
                    textarea3:'',
                    id: '4'
                },
                {
                    img: require('../assets/img/dogs/gucci.jpg'),
                    caption: 'KAIT KLASSIK MYSTERY OF LIFE',
                    title: 'Gucci',
                    text: '',
                    textarea:'',
                    textarea2: '',
                    textarea3:'',
                    id: '5'
                },{
                    img: require('../assets/img/dogs/boss.jpg'),
                    caption: 'BOSTON STYLE IN DELIBLE IM PRESHEN',
                    title: 'Boss',
                    text: '',
                    textarea:'',
                    textarea2: '',
                    textarea3:'',
                    id: '6'
                },
                {
                    img: require('../assets/img/dogs/kusti.jpg'),
                    caption: 'GALAKTIC GRAVITY GALLAGHER',
                    title: 'Kusti',
                    text: '',
                    textarea:'',
                    textarea2: '',
                    textarea3:'',
                    id: '7'
                },
                {
                    img: require('../assets/img/dogs/felicita.jpg'),
                    caption: 'HABIBI BOSTON FELICITA',
                    title: 'Felicita',
                    text: '',
                    textarea:'',
                    textarea2: '',
                    textarea3:'',
                    id: '8'
                },
                {
                    img: require('../assets/img/dogs/maria.jpg'),
                    caption: 'GALAKTIC GRAVITY ANGEL FIRST',
                    title: 'Maria',
                    text: '',
                    textarea:'',
                    textarea2: '',
                    textarea3:'',
                    id: '9'
                }

            ]
        })
    }
</script>

<style scoped>

</style>