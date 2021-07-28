<template>
  <div>
    <div v-for="zone in zones" :key="zone._id" class="zone_1 zone-blog">
      <div class="zone-name">Hydroponic : {{ zone.name }}</div>
      <div class="info-ec">
        <div class="circle-ec"></div>
        <span>EC Value</span>
      </div>
      <div class="info-ph">
        <div class="circle-ph"></div>
        <span>PH Value</span>
      </div>
      <svg class="circle">
        <circle cx="70" cy="70" r="70"></circle>
        <circle
          v-bind:style="{
            strokeDashoffset: 440 - (440 * (5 * zone.ec)) / 100,
          }"
          id="value1"
          cx="70"
          cy="70"
          r="70"
        ></circle>
      </svg>
      <span class="ec-value">EC Value</span>
      <div class="ph-blog">
        <div class="ph-topic">
          PH value : <span class="ph-value"> {{ zone.ph }} </span>
        </div>
        <div class="ph-graph">
          <svg class="rect">
            <rect width="100%" height="10"></rect>
            <rect
              class="ph_1"
              :style="{ width: (100 / 14) * zone.ph + '%' }"
            ></rect>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      zones: [],
      inZone: '',
      red: '#ff0000',
      test: 0,
    }
  },
  methods: {
    loadData() {
      const url = 'http://localhost:5000/fertilizer'
      try {
        axios.get(url).then((res) => {
          this.zones = res.data.datas
          this.zones = this.zones[0].zone
        })
      } catch (error) {
        console.error(error)
      }
    },
  },
  mounted() {
    this.loadData()
    setInterval(() => {
      this.loadData()
    }, 3000)
  },
}
</script>

<style>
:root {
  --color-main: #1a202e;
  --color-secondary: #8da2fb;
  --color-dark-violet: #546ddf;
  --color-menu: #283046;
  --color-gray: #f3f3f3;
  --color-sky: #03a9f4;
  --color-green: #4ba369;
  --color-orange: #f8863f;
}

.main-content {
  margin-left: 0px;
  transition: 0.7s all;
}

.content {
  margin-left: 280px;
  display: block;
}

.zone {
  width: 100%;
  background-color: white;
}

.zone-blog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  float: left;
  margin-left: 1rem;
  margin-top: 1rem;
  border-radius: 10px;
  padding: 40px;
  color: white;
  background-color: #283046;
  width: 250px;
  height: 500px;
}

.zone-name {
  width: 100%;
  float: left;
  text-align: left;
  padding-bottom: 10px;
}

svg.circle {
  width: 150px;
  height: 150px;
}

svg.rect {
  width: 100%;
  height: 10px;
  fill: var(--color-gray);
  border-radius: 10px;
}

circle {
  fill: none;
  stroke: var(--color-gray);
  transform: translate(5px, 5px);
  stroke-width: 10;
  stroke-dasharray: 440;
  stroke-dashoffset: 440;
  stroke-linecap: round;
}

circle:nth-child(1) {
  stroke-dashoffset: 0;
  stroke: var(--color-gray);
}

#value1 {
  stroke-dashoffset: calc(440 - (440 * (5 * 0.8)) / 100);
  stroke: var(--color-orange);
}

#value2 {
  stroke-dashoffset: calc(440 - (440 * (5 * 15)) / 100);
  stroke: var(--color-orange);
}

#value3 {
  stroke-dashoffset: calc(440 - (440 * (5 * 20)) / 100);
  stroke: var(--color-orange);
}

.ph_1 {
  fill: var(--color-green);
  border-radius: 10px;
  width: calc((100 / 14) * 8.1%);
  height: 10px;
}

.zone_1 {
}

.ec-value {
  padding: 10px;
  color: var(--color-gray);
}

.ph-blog {
  padding-top: 10px;
  width: 100%;
}

.graph-value {
  margin-top: 10px;
  display: block;
  width: 100%;
  height: 10px;
  background-color: white;
  border-radius: 10px;
}

.info-ph,
.info-ec {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  width: 100%;
}

.info-ph span,
.info-ec span {
  padding-right: 50px;
}

.circle-ph,
.circle-ec {
  width: 20px;
  height: 20px;
  border-radius: 100%;
}

.circle-ec {
  background-color: var(--color-orange);
}

.circle-ph {
  background-color: var(--color-green);
}

.control {
  width: calc(100vw - 280px);
  height: 100px;
  background-color: red;
}

@media only screen and (max-width: 1124px) {
  .zone {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    float: none;
    width: 100vw;
    max-width: 100vw;
    padding: 10px;
  }
  .zone-blog {
    margin: 0px;
    margin-top: 20px;
  }
  .content {
    position: relative;
    margin-left: 0px;
  }
}
</style>
