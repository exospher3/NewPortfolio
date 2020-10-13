<template>
  <div class="mcontainer">
    <img src="/img/sheridan-trafalgar.jpg" alt="Snow" style="width: 100%" />
    <div class="bottom-left">
      <div class="introduction-text">
        To Yassin Altaha's Portfolio. I am Computer System Analyst graduate from
        Sheridan College awarded 2nd place in the capstone program for the 2019
        year, highly passtionate and motivated toward software development and
        web deisgn.
      </div>
    </div>
    <div class="top-left">
      <div class="typewriter">Welcome !</div>
    </div>
  </div>

  <!-- <div class="card bg-dark text-white">
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
  </div> -->
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

/* Container holding the image and the text */
.mcontainer {
  position: relative;
  text-align: left;
  font-size: 1.5vw;
  color: white;
}

/* Bottom left text */
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}

/* Top left text */
.top-left {
  font-size: 5vw;
  position: absolute;
  top: 8px;
  left: 16px;
  width: 100%;
}

/* Top left text */
.top-center {
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Top left text */
.bottom-center {
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* Top right text */
.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}

/* Bottom right text */
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}

/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.typewriter {
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

@media (max-width: 480px) {
  .maimg {
    /* min-width: 750px;
    min-height: 750px; */
  }
}
</style>
