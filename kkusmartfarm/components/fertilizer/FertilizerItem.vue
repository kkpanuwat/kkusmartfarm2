<template>
  <div>
    <div v-for="(item, index) in fertilizers()" :key="index">
      <div class="fertilizer-blog" v-if="item.fertilizer_type === 'fertilizer'">
        <div class="fertilizer-header">
          <div class="fertilizer-des">{{ item.fertilizer_name }}:</div>
          <div>
            <input
              type="checkbox"
              class="fertilizer-item-status"
              name=""
              id=""
              :checked="checkStatusActivity(item.fertilizer_status)"
            />
            <button class="btn-control-edit">
              <i class="las la-ellipsis-v"></i>
            </button>
          </div>
        </div>
        <div class="fertilizer-item-body">
          <div class="fertilizer-tank">
            <svg class="fertilizer-tank-svg">
              <rect
                width="60"
                height="60"
                rx="20"
                ry="15"
                class="fertilizer-tank-rect"
              ></rect>
              <rect
                width="60"
                height="60"
                rx="20"
                ry="15"
                class="fertilizer-tank-rect-result"
              ></rect>
              <text x="8" y="130" font-size="15" fill="white">
                {{ item.fertilizer_tank_level }} %
              </text>
            </svg>
          </div>
          <div class="fertilizer-control">
            <div class="row-control row1">
              <div>
                <div
                  class="status-vale"
                  :class="getStatusVale(item.fertilizer_status)"
                >
                  <span
                    class="status-vale-text"
                    v-if="item.fertilizer_status === 'on'"
                    >OPEN</span
                  >
                  <span class="status-vale-text" v-else>CLOSE</span>
                </div>
                <div class="row1-text-des">Vale</div>
              </div>
              <div>
                <div class="flowrate-chart">
                  <svg class="circle">
                    <circle
                      class="circle-fertilizer"
                      cx="50"
                      cy="50"
                      r="48"
                    ></circle>
                    <circle
                      class="circle-fertilizer circle-fertilizer-result"
                      cx="50"
                      cy="50"
                      r="48"
                    ></circle>
                    <text
                      x="30"
                      y="50"
                      font-size="15"
                      fill="var(--color-bg-tank)"
                    >
                      200.54
                    </text>
                    <text
                      x="35"
                      y="70"
                      font-size="10"
                      fill="var(--color-bg-tank)"
                    >
                      ml/min
                    </text>
                  </svg>
                </div>
                <div class="row1-text-des">Flow Rate</div>
              </div>
            </div>
            <div class="row-control row2">
              <i class="las la-water"></i
              ><input
                class="input-fertilizer-control-manual"
                type="number"
                name=""
                id=""
                placeholder="100"
              />
              <span class="unit">ml</span>
            </div>
            <div class="row-control row3">
              <p class="text-control">Control</p>
              <div class="control-button">
                <button
                  class="btn-control-on"
                  @click="statusValue(item.fertilizer_id, 'on')"
                >
                  ON
                </button>
                <button
                  class="btn-control-off"
                  @click="statusValue(item.fertilizer_id, 'off')"
                >
                  OFF
                </button>
              </div>
            </div>
          </div>
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
      fertilizer: [],
    }
  },
  methods: {
    async getFertilizer() {
      try {
        const response = await axios.get(
          'http://localhost:5000/fertilizer/fertilizers'
        )
        this.fertilizer = response.data.fertilizer
        response.data.fertilizer.forEach((element) => {
          element.status_vale = 'on'
          const ratioName = element.fertilizer_name
          this.addActivity.activity_ratio[ratioName] = null
          // if (element.fertilizer_type === 'fertilizer') {
          //   this.fertilizer.push(element)
          // } else if (element.fertilizer_type === 'water') {
          //   this.water.push(element)
          // } else {
          //   this.mix.push(element)
          // }
        })
        console.log(this.fertilizer)
      } catch (error) {}
    },
    fertilizers(type = 'all') {
      const data = []
      this.fertilizer.forEach((element) => {
        if (element.fertilizer_type === 'fertilizer') {
          data.push(element)
        }
      })
      if (type === 'getZeroIndex') {
        return data.slice(0, 1)
      }
      return data.slice(1, data.length)
    },
  },
  mounted() {
    setInterval(() => {
      this.getFertilizer()
    }, 3000)
  },
}
</script>

<style></style>
