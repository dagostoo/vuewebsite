<template>
    <header class="masthead">
        <div class="container">
            <div class="intro-text">
                <scrollactive :offset="80"
                              :duration="800"
                              bezier-easing-value=".5,0,.35,1">
                        <div style="font-size: 56px" class="intro-heading text-uppercase text-left col-6">Welcome To Kennel Galaktic Gravity website!</div>
                        <div style="font-size: 56px;  line-height: 1.2;" class="intro-lead-in text-left col-7">It's Nice To Meet You</div>
                        <a class=" scrollactive-item btn-header btn-primary btn-xl text-uppercase js-scroll-trigger col-4 col-md-2" href="#about">Tell Me More</a>
                </scrollactive>        
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style>
.intro-lead-in {
    font-family: 'Acme', sans-serif !important;
}
.intro-heading {
    font-family: 'Acme', sans-serif !important;
    
}
.intro-text {
    padding-top: 200px !important;
    padding-bottom: 220px !important;
}
.btn-header {
    float: left !important;
    margin: 15px !important;
    font-family: 'Acme', sans-serif !important;
}
.btn-header {border-radius: 8px;}
</style>

