<template>
    <section id="contact">
      <div class="wrapper" style="max-width: 1140px; margin: auto">
        <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Contact Us</h2>
            <h3 class="section-subheading text-muted"></h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <form id="contactForm" class="contact" name="sentMessage" @submit.prevent="sendEmail" novalidate="novalidate">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input class="form-control"  id="name" type="text" name="user_name" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name.">
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="email" type="email" name="user_email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address.">
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="phone" type="tel" name="phone_number" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number.">
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <textarea class="form-control" id="message" name="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="col-lg-12 text-center">
                  <button id="sendMessageButton" value="send" class="btn btn-primary btn-xl text-uppercase" type="submit" v-on:click="ShowAlert">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      
    </section>
</template>

<script>
  import emailjs from 'emailjs-com'

export default {
    name: 'Contact',
    methods: {
      ShowAlert() {
        this.$swal({
          title: 'Success',
          icon: 'success',
          text: 'Your message has been sent',
        })
      },
      sendEmail: (e) => {
        emailjs.sendForm('contact_service', 'contact', e.target, 'user_sCQS9TxF1maFIKTOA8hrq')
                .then((result) => {
                  console.log('SUCCESS!', result.status, result.text);
                }, (error) => {
                  console.log('FAILED...', error);
                });
      }
    }
    }
</script>