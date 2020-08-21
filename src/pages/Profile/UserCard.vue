<template>
  <card type="user">
    <p class="card-text"></p>
    <div class="author">
      <div class="block block-one"></div>
      <div class="block block-two"></div>
      <div class="block block-three"></div>
      <div class="block block-four"></div>
      <a href="#">
        <img class="avatar" src="img/profile2.jpg" alt="..." />
        <h5 class="title display-2">{{ user.fullName }}</h5>
      </a>
      <p class="description">{{ user.title }}</p>
    </div>
    <p></p>
    <p class="card-description text-center">{{ user.description }}</p>
    <div slot="footer" class="button-container">
      <base-button icon round class="btn-linkedin">
        <a href="https://www.linkedin.com/in/yassin-altaha/">
          <i class="fab fa-linkedin"></i>
        </a>
      </base-button>
      <base-button icon round class="btn-github">
        <a href="https://github.com/exospher3">
          <i class="fab fa-github"></i>
        </a>
      </base-button>
      <base-button icon round class="btn-instagram">
        <a href="https://www.instagram.com/exospheric3/?hl=en">
          <i class="fab fa-instagram"></i>
        </a>
      </base-button>
      <base-button icon round class="btn-google">
        <a href="mailto: yassin.altaha@gmail.com">
          <i class="fab fa-google-plus"></i>
        </a>
      </base-button>
    </div>
  </card>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>
<style></style>
