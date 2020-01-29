<template>
    <section class="bg-light" id="ourdogs">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Our Dogs</h2>
            <h3 class="section-subheading text-muted">Cane Corso Kennel Galaktic Gravity</h3>
          </div>
        </div>
        <div class="row">
          
            <div class="col-md-4 col-sm-6 portfolio-item" v-for="(obj, key) in portfolioJSON" :key="key">
                <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fas fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/duche1.jpg" alt="">
                </a>
                <div class="portfolio-caption">
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
        portfolioJSON: [
            {
                img: '/something/random/img.jpg',
                caption: 'Kony',
                title: 'Female'
            },
            {
                img: 'https://www.kingarthurflour.com/sites/default/files/styles/featured_image/public/recipe_legacy/48-3-large.jpg?itok=inlusIOg',
                caption: 'Duche',
                title: 'Male'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Felicita',
                title: 'Female'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Hanka',
                title: 'Female'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Gucci',
                title: 'Male'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Boss',
                title: 'Male' 
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Masha',
                title: 'Female'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Kusti',
                title: 'Male' 
            }
        ]
    })
}
</script>

<style lang="css">

</style>


