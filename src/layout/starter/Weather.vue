<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <h3>Weather APP using OpenWeather API, Axois and Geolocation</h3>
    </div>
    <div class="row justify-content-center" v-if="gettingLocation">
      <div class="spinner-border text-center">
        <div class="lds-dual-ring text-light"></div>
        <div v-if="errorStr">{{ errorStr }}</div>
      </div>
    </div>

    <div class="row justify-content-center align-items-center" v-else>
      <div class="col-md-4 col-lg-6">
        <card class="text-center" style="height:350px">
          <img :src="link" class="fimg" />
          <h1>{{ condition.main }}</h1>
          <h2>{{ condition.description }}</h2>
          <h3>{{ city }} - {{ country }}</h3>
        </card>
      </div>

      <div class="col-md-4 col-lg-6">
        <card type="user" class="text-center" style="height:350px">
          <div class="mb-4 text-right">
            <label class="switch" @change="toggleDegree">
              <input type="checkbox" />
              <div>
                <span>F</span>
              </div>
            </label>
          </div>
          <div>
            <h3>Temp : {{ temp }} {{ tempUnite }}</h3>
            <h3>Feels like : {{ temp_feels }} {{ tempUnite }}</h3>
            <h3>
              Min : {{ temp_min }} {{ tempUnite }} ~~ Max: {{ temp_max }}
              {{ tempUnite }}
            </h3>
            <h3>Couldy : {{ cloud }} %</h3>
          </div>
        </card>
      </div>

      <div class="col-md-4 col-lg-12 p-2">
        <card class="text-center pt-4">
          <h3>Visibility: {{ visibility }} m</h3>
          <h3>Wind Speed: {{ wind.speed }} m/s</h3>
          <h3>
            Wind Direction:
            {{ wind.deg }} --
            <i class="tim-icons icon-minimal-up" :style="degreeIcon"></i>
          </h3>
          <h3>Humidity: {{ humidity }}%</h3>
          <h3>Pressure: {{ pressure }} hPa</h3>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "weather-app",
  components: {},
  data() {
    return {
      address: "",
      feh: false,
      location: null,
      gettingLocation: null,
      errorStr: null,
      link: null,
      autocomplete: null,
      tempUnite: "C",
      country: null,
      city: null,
      cloud: null,
      visibility: null,
      humidity: null,
      pressure: null,
      testWind: "180",
      temp: null,
      temp_min: null,
      temp_max: null,
      temp_feels: null,

      condition: {},
      forecast: {},
      wind: {}
    };
  },
  created() {
    this.gettingLocation = true;
  },
  methods: {
    /**
     * When the location found
     * @param {Object} addressData Data of the found location
     * @param {Object} placeResultData PlaceResult object
     * @param {String} id Input container ID
     */
    getAddressData: function(addressData) {
      this.address = addressData;
    },
    toggleDegree() {
      if (!this.feh) {
        this.tempUnite = "F";
        this.temp = this.c2f(this.temp);
        this.temp_min = this.c2f(this.temp_min);
        this.temp_max = this.c2f(this.temp_max);
        this.temp_feels = this.c2f(this.temp_feels);
        this.feh = true;
      } else if (this.feh) {
        this.tempUnite = "C";
        this.temp = this.f2c(this.temp);
        this.temp_min = this.f2c(this.temp_min);
        this.temp_max = this.f2c(this.temp_max);
        this.temp_feels = this.f2c(this.temp_feels);
        this.feh = false;
      }
    },
    c2f(cel) {
      return Math.round(cel * 1.8 + 32);
    },
    f2c(feh) {
      return Math.round((feh - 32) / 1.8);
    },
    k2c() {
      this.temp = Math.round(this.temp - 273.15);
      this.temp_min = Math.round(this.temp_min - 273.15);
      this.temp_max = Math.round(this.temp_max - 273.15);
      this.temp_feels = Math.round(this.temp_feels - 273.15);
    },
    async getLocation() {
      return new Promise((res, rej) => {
        if (!("geolocation" in navigator)) {
          rej(new Error("Geolocation is no avaiable"));
        }

        navigator.geolocation.getCurrentPosition(
          pos => {
            res(pos);
          },
          err => {
            rej(err);
          }
        );
      });
    },

    async getForecast(lati, long) {
      await axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?lat=" +
            lati +
            "&lon=" +
            long +
            "&appid=4ba6ecad9f13b3eba2c1a375d3bc2b3b"
        )
        .then(response => {
          this.visibility = response.data.visibility;
          this.country = response.data.sys.country;
          this.condition = response.data.weather[0];

          this.temp = response.data.main.temp;
          this.temp_feels = response.data.main.feels_like;
          this.temp_min = response.data.main.temp_min;
          this.temp_max = response.data.main.temp_max;
          this.pressure = response.data.main.pressure;
          this.humidity = response.data.main.humidity;

          this.cloud = response.data.clouds.all;

          this.wind = response.data.wind;
          this.city = response.data.name;

          this.link =
            "http://openweathermap.org/img/wn/" +
            this.condition.icon +
            "@2x.png";
          this.gettingLocation = false;

          this.k2c();
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  async mounted() {
    try {
      this.location = await this.getLocation();
      await this.getForecast(
        this.location.coords.latitude,
        this.location.coords.longitude
      );
    } catch (e) {
      console.log(e);
      this.getLocation = false;
      this.errorStr = e.message;
    }
  },
  computed: {
    degreeIcon() {
      return { transform: "rotate(" + this.wind.deg + "deg)" };
    }
  }
};
</script>

<style scopped lang="scss">
/* Toggle Button CSS */
.switch {
  --line: #505162;
  --dot: #f7f8ff;
  --circle: #9ea0be;
  --duration: 0.3s;
  --text: #9ea0be;
  cursor: pointer;
  input {
    display: none;
    & + div {
      position: relative;
      &:before,
      &:after {
        --s: 1;
        content: "";
        position: absolute;
        height: 4px;
        top: 10px;
        width: 24px;
        background: var(--line);
        transform: scaleX(var(--s));
        transition: transform var(--duration) ease;
      }
      &:before {
        --s: 0;
        left: 0;
        transform-origin: 0 50%;
        border-radius: 2px 0 0 2px;
      }
      &:after {
        left: 28px;
        transform-origin: 100% 50%;
        border-radius: 0 2px 2px 0;
      }
      span {
        padding-left: 56px;
        line-height: 24px;
        color: var(--text);
        &:before {
          --x: 0;
          --b: var(--circle);
          --s: 4px;
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          box-shadow: inset 0 0 0 var(--s) var(--b);
          transform: translateX(var(--x));
          transition: box-shadow var(--duration) ease,
            transform var(--duration) ease;
        }
        &:not(:empty) {
          padding-left: 64px;
        }
      }
    }
    &:checked {
      & + div {
        &:before {
          --s: 1;
        }
        &:after {
          --s: 0;
        }
        span {
          &:before {
            --x: 28px;
            --s: 12px;
            --b: var(--dot);
          }
        }
      }
    }
  }
}

/* Loading css */
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Component css */

.fimg {
  width: 120px;
  height: 120px;
}

@media only screen and (max-width: 1010px) {
  /* Component css */

  .img {
    width: 75px;
    height: 75px;
  }
}
</style>
