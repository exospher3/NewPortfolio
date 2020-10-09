<template>
  <div class="card bg-dark text-white">
    <img
      class="card-img m-a maimg"
      src="/img/sheridan-trafalgar.jpg"
      alt="Card image"
    />
    <div class="card-img-overlay d-flex flex-column bd-highlight">
      <div class="typewriter">
        <h5 class="card-title p-2 bd-highlight" style="font-size: 5vw">
          Welcome !
        </h5>
      </div>
      <div class="introduction-text">
        <p class="shadow-lg" style="font-size: 1.5vw">
          To Yassin Altaha's Portfolio. I am Computer System Analyst graduate
          from Sheridan College awarded 2nd place in the capstone program for
          the 2019 year, highly passtionate and motivated toward software
          development and web deisgn.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "starter-page",
  data() {
    return {};
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@500&display=swap");
.typewriter h5 {
  color: #fff;
  font-family: Dosis;
  overflow: hidden;
  /* Ensures the content is not revealed until the animation */
  /* border-right: 0.1em solid transparent; */
  /* The typwriter cursor */
  white-space: nowrap;
  /* Keeps the content on a single line */
  margin: 0 auto;
  /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.03em;
  /* Adjust as needed */
  animation: typing 3.5s steps(40, end), blink-caret 0.3s;
  animation-iteration-count: 1, 13;
}

.introduction-text {
  overflow: hidden;
  /* Ensures the content is not revealed until the animation */
  /* border-right: 0.1em solid transparent; */
  /* The typwriter cursor */
  animation: show-up 3.5s ease-in 1;
  /* Keeps the content on a single line */
  margin-top: 350px;
  opacity: 1;
}

/* The typing effect */

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@-webkit-keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */

@keyframes blink-caret {
  from,
  to {
    border-right: 0.1em solid transparent;
  }
  50% {
    border-color: orange;
  }
  100% {
  }
}

@-webkit-keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

/*Customer Enter antimation */
@keyframes show-up {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
@-webkit-keyframes show-up {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@media (max-width: 767.98px) {
  .maimg {
    opacity: 0;
    width: 100%;
    height: auto;
    min-height: 100%;
  }
}
</style>
