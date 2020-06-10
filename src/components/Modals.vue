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
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-8 mx-auto">
                                    <div class="modal-body">
                                        <!-- Project Details Go Here -->
                                        <h2 class="text-uppercase">{{ obj.caption }}</h2>
                                        <h3 class="item-intro text-muted">{{ obj.title }}</h3>
                                        <img class="img-fluid d-block mx-auto" v-bind:src="obj.img"  alt="modals" style="width:350px; height:100%; object-fit: cover;">
                                        <img class="img-fluid d-block mx-auto" v-bind:src="obj.img2"  alt="">
                                        <p>{{obj.text}}</p> 
                                        <ul class="list-inline" style="text-align:left; max-width: 380px; margin: auto">
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
                                        <button style="margin-top: 20px" class="btn btn-primary" data-dismiss="modal" type="button">
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
                    text: 'This wonderful dog came to us from Elena Chueva’s kennel called Become The Star Dragon. Dog which combines in himself a power,freedom and amazing nature. This dog is a dream.',
                    textarea:'Champion of: C.I.B, RUS CH, BALT CH, LVA CH, LTU CH, EST CH, BLR JCH, RUS JCH, BALT J CH, LVA JCH, LTU JCH, EST JCH',
                    textarea2: 'Breed: Italian Corso ',
                    textarea3:'Sex: Male',
                    textarea4: 'Düsplaasia: A/C 0/0',
                    textarea5: 'Breeder: Jelena Chueva, Ukraina',
                    textarea6: 'Owner: Veronika Aguraiuja, Tallinn, Estonia',
                    textarea7: 'Pedigree: EST-00923/10, UKU0040821',
                    id: '1',
                },
                {
                    img: require('../assets/img/dogs/kaksi.jpg'),
                    caption: 'ESTELLUM CALACTYC FIRST',
                    title: 'Kaksi',
                    text: 'Kaksi was our first Cane Corso dog. Big thanks to Jaanika Mäeväli, owner of kennel Estellum. Kaksi had very kind smile, nature and very loveful heart. ',
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
                    text: 'Hanka came to us from Izabela Oles’s kennel called Torques. This dog combines in herself a big love, loyalty, mind, care, striving for continuous improvement both at exhibitions and sports (agility). This dog is an companion. Im proud that I have a dog like you.',
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
                    text: 'Gucci - I’m thankful to Larisa Korshunova for this boy. Whoever communicates with him at least once will never forget him. A boy with a special charisma. I love and enjoy it!',
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
                    text: 'Boss came to us from Svetlana Safronova. A boy with excellent nature, steady psyche, sensitivity and attention. My hope and support.',
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
                    text: 'We didn’t plan to leave him with us but he stayed. The son of Hanka and Gucci. This is not a dog, this is a "time bomb" with the qualities of mom and dad on a par. I get extraordinary pleasure from sports work with him! I am happy that you chose us!',
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
                    text: 'Felicita - acquaintance with the Boston Terrier breed began with this dog. I’m endlessly thankful to Ludmila Zaritskaya. I learned what nature, stubbornness, perseverance, a living mind, suppleness, affection and endless insight of this breed are. She is loved regardless of her prankishness.',
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
                    text: 'Maria - our first boston terrier puppy. So further in life, she steps with her head held high, and "the crown does not fall from her head," taking on the role of leader. She is a fair leader! I am very proud of her!',
                    textarea:'Champion of: EST CH, EST JCH , LVA JCH',
                    textarea2: 'Breed: Boston Terrier',
                    textarea3:'Born: 01.10.2015',
                    textarea4:'Sex: female',
                    textarea5:'Knees: 0/0',
                    textarea6:'Eyes: clear ( healthy)',
                    textarea7:'Breeder: Veronika Aguraiuja, Tallinn, Estonia',
                    textarea8:'Owner: Veronika Aguraiuja, Tallinn, Estonia',
                    textarea9:'Pedigree: EST-00040/16',
                    id: '9'
                }

            ]
        })
    }
</script>

<style scoped>

</style>