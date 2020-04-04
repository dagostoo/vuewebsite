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
                                        <p class="item-intro text-muted">{{ obj.title }}.</p>
                                        <img class="img-fluid d-block mx-auto" v-bind:src="obj.img"  alt="modals">
                                        <p>{{obj.text}}</p>
                                        <ul class="list-inline">
                                            <li>Date: January 2017</li>
                                            <li>Client: Threads</li>
                                            <li>Category: Illustration</li>
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
                    text: 'dolboeb',
                    id: '1'
                },
                {
                    img: require('../assets/img/dogs/kaksi.jpg'),
                    caption: 'DEVIL BE COME THE STAR DRAGON',
                    title: 'ja dolboeb',
                    text: 'dolb',
                    id: '2'
                },
                {
                    img: require('../assets/img/dogs/douche.jpeg'),
                    caption: 'DEVIL BE COME THE STAR DRAGON',
                    title: 'ebanii daun',
                    text: 'daun',
                    id: '3'
                }

            ]
        })
    }
</script>

<style scoped>

</style>