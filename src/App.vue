<template>
  <div id="app">
    <link rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css">
          <link href="https://fonts.googleapis.com/css2?family=Acme&family=Chivo&display=swap" rel="stylesheet">

    <!-- Navigation -->
    <Navigation/>

    <!-- Header -->
    <Header/>

    <!-- About -->

  <About/>

    <!-- Doggos -->
    <Dogs/>

    <!-- Puppies -->
    <Puppies/>
    <!-- Breed standards -->
    
  <Breed/>

    <!-- Location -->
  <Location/>

    <!-- Contact -->
    <Contact/>

    <!-- Footer -->
   <Footer/>

    <!-- dogs Modals -->
    <Modals/>
  </div>
</template>

<script>

// because thats why it want show up you did not import it like profolio and did not register it
import Breed from './components/Breed'
import Location from './components/Location'
import About from './components/About'
import Contact from './components/Contact'
import Dogs from './components/Dogs'
import Puppies from './components/Puppies'
import Navigation from "./components/Navigation"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modals from "./components/Modals";


export default {
  name: 'app',
  components: {
    Modals,
    Footer,
    Header,
    Dogs,
    Breed,
    Location,
    About,
    Contact,
    Puppies,
    Navigation,
  }
}
</script>

<style>
#app {
  font-family: 'Chivo', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background: black;
  font-family: "Acme", sans-serif !important;
}
mainNav .navbar-nav .nav-item .nav-link {
  font-size: 85% !important;
  letter-spacing: 0px !important;
}


</style>



