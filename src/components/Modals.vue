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
                                        <img class="img-fluid d-block mx-auto" v-bind:src="obj.img"  alt="modals" style="width:350px; height:100%; object-fit: cover;">
                                        <img class="img-fluid d-block mx-auto" v-bind:src="obj.img2"  alt="">
                                        <p>{{obj.text}}</p>
                                        <ul class="list-inline">
                                            <li>{{obj.textarea}}</li>
                                            <li>{{obj.textarea2}}</li>
                                            <li>{{obj.textarea3}}</li>
                                            <li>{{obj.textarea4}}</li>
                                            <li>{{obj.textarea5}}</li>
                                            <li>{{obj.textarea6}}</li>
                                            <li>{{obj.textarea7}}</li>
                                            <li>{{obj.textarea8}}</li>
                                            <li>{{obj.textarea9}}</li>
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
                    img: require('../assets/img/modalDogs/douche.jpg'),
                    caption: 'DEVIL BE COME THE STAR DRAGON',
                    title: 'Douche',
                    text: 'Champion of: C.I.B, RUS CH, BALT CH, LVA CH, LTU CH, EST CH, BLR JCH, RUS JCH, BALT J CH, LVA JCH, LTU JCH, EST JCH',
                    textarea:'Breed: Italian Corso',
                    textarea2: 'Sex: Male ',
                    textarea3:'Düsplaasia: A/C 0/0',
                    textarea4: 'Breeder: Jelena Chueva, Ukraina',
                    textarea5: 'Owner: Veronika Aguraiuja, Tallinn, Estonia',
                    textarea6: 'Pedigree: EST-00923/10, UKU0040821',
                    id: '1',
                },
                {
                    img: require('../assets/img/dogs/kaksi.jpg'),
                    caption: 'ESTELLUM CALACTYC FIRST',
                    title: 'Kaksi',
                    text: '',
                    textarea:'',
                    textarea2: '',
                    textarea3:'',
                    textarea4:'',
                    textarea5:'',
                    textarea6:'',
                    id: '2'
                },
                {
                    img: require('../assets/img/modalDogs/hanka.jpg'),
                    caption: 'HOW BEAUTIFUL YOU ARE TORQUES',
                    title: 'Hanka',
                    text: '',
                    textarea:'Champion of: C.I.B., EST CH, LTU CH, FIN CH, RUS JCH, BALT J CH, LVA JCH, LTU JCH, EST JCH',
                    textarea2: 'Breed: Boston Terrier',
                    textarea3:'Born: 16.01.2015',
                     textarea4:'Sex: female',
                    textarea5:'Knees: 0/0',
                    textarea6:'Eyes : clear ( healthy)',
                    textarea7:'Breeder: Izabela Oles, Poland',
                    textarea8:'Owner:  Veronika Aguraiuja ,  Tallinn, Estonia',
                    textarea9:'Pedigree: EST-00395/17 , PKR.IX-69380',
                    id: '4'
                },
                {
                    img: require('../assets/img/modalDogs/gucci.jpg'),
                    caption: 'KAIT KLASSIK MYSTERY OF LIFE',
                    title: 'Gucci',
                    text: '',
                    textarea:'Champion of: EST CH,  EST JCH',
                    textarea2: 'Breed: Boston Terrier',
                    textarea3:'Born: 12.06.2017',
                    textarea4:'Sex: male',
                    textarea5:'Knees: 0/0',
                    textarea6:'Eyes : clear ( healthy)',
                    textarea7:'Breeder: Larisa Korshunova, Russia',
                    textarea8:'Owner: Veronika Aguraiuja, Tallinn, Estonia',
                    textarea9:'Pedigree:EST-02217/19 , RKF5017056',
                    id: '5'
                },{
                    img: require('../assets/img/modalDogs/boss.jpg'),
                    caption: 'BOSTON STYLE IN DELIBLE IM PRESHEN',
                    title: 'Boss',
                    text: '',
                    textarea:'Breed: Boston Terrier',
                    textarea2: 'Born: 01.12.2018',
                    textarea3:'Sex: male',
                    textarea4:'Knees : 0/0',
                    textarea5:'Eyes : clear ( healthy)',
                    textarea6:'Breeder: Svetlana Safronova, Russia',
                    textarea7:'Owner: Veronika Aguraiuja, Tallinn, Estonia',
                    id: '6'
                },
                {
                    img: require('../assets/img/modalDogs/kusti.jpg'),
                    caption: 'GALAKTIC GRAVITY GALLAGHER',
                    title: 'Kusti',
                    text: '',
                    textarea:'Breed: Boston Terrier',
                    textarea2: 'Born: 28.06.2019',
                    textarea3:'Sex: male',
                    textarea4:'Breeder: Veronika Aguraiuja, Tallinn, Estonia',
                    textarea5:'Owner: Veronika Aguraiuja, Tallinn, Estonia',
                    textarea6:'Pedigree: EST-03926/19',
                    id: '7'
                },
                {
                    img: require('../assets/img/modalDogs/felja.jpg'),
                    caption: 'HABIBI BOSTON FELICITA',
                    title: 'Felicita',
                    text: '',
                    textarea:'Champion of: LVA JCH, EST JCH',
                    textarea2: 'Breed: Boston Terrier',
                    textarea3:'Born: 21.09.2013',
                    textarea4:'Sex: female',
                    textarea5:'Knees: 0/2',
                    textarea6:'Eyes: clear ( healthy)',
                    textarea7:'Breeder: Ljudmila Zaritskaja ,Russia',
                    textarea8:'Owner: Veronika Aguraiuja, Tallinn, Estonia',
                    textarea9:'Pedigree:  EST-00033/16 , RKF3767200',
                    id: '8'
                },
                {
                    img: require('../assets/img/modalDogs/masha.jpg'),
                    caption: 'GALAKTIC GRAVITY ANGEL FIRST',
                    title: 'Maria',
                    text: '',
                    textarea:'Champion of: EST CH, EST JCH , LVA JCH',
                    textarea2: 'Breed: Boston Terrier',
                    textarea3:'Born: 01.10.2015',
                    textarea4:'Sex: female',
                    textarea5:'Knees: 0/0',
                    textarea6:'Eyes: clear ( healthy)',
                    textarea7:'Breeder: Veronika Aguraiuja, Tallinn, Estonia',
                    textarea8:'Owner: : Veronika Aguraiuja, Tallinn, Estonia',
                    textarea9:'Pedigree: EST-00040/16',
                    id: '9'
                }

            ]
        })
    }
</script>

<style scoped>

</style>