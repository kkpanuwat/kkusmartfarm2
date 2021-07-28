<template>
  <div>
    <Menu />
    <div class="content">
      <div class="zone">
        <!--<div v-for="zone in zones" :key="zone._id" class="zone_1 zone-blog">
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
        </div> -->
      </div>
      <div class="control">
        <div class="control-blog">
          <div class="control-header">
            <div class="topic">Fertilizer</div>
            <div class="show-mode">Mode : {{ zones.mode }}</div>
          </div>
          <div class="control-status">
            <template v-if="status_sensor">
              <div class="circle-status online"></div>
              <div class="status-name">Online</div>
            </template>
            <template v-else>
              <div class="circle-status offline"></div>
              <div class="status-name">Offline</div>
            </template>
          </div>
          <div class="auto-mode mode">
            <div class="mode-name">Auto</div>
            <div class="button-mode">
              <input
                @click="setMode('Auto')"
                type="radio"
                name="mode"
                id="btn-auto"
                class="btn-automode"
                value="Auto"
                v-model="zones.mode"
              />
              <div class="btn-auto-setting">
                <button class="btn-setting-auto btn-setting" v-b-modal.modal-1>
                  <i class="las la-sliders-h"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="settime-mode mode">
            <div class="mode-name">Setting Time</div>
            <div class="button-mode">
              <input
                @click="setMode('Setting Time')"
                type="radio"
                name="mode"
                id="btn-settime"
                class="btn-settimemoe"
                value="Setting Time"
                v-model="zones.mode"
              />
            </div>
          </div>
          <button @click="showSettingTime()" class="btn-add-time">
            <i class="las la-plus"></i> Add
          </button>
          <div class="settime-content">
            <div class="settime-blog">
              <div class="header-time">
                <div class="time-value">7.30</div>
                <div class="close text-close">
                  <i class="las la-times-circle"></i>
                </div>
              </div>
              <div class="header-day">
                <div class="value-days">Day: Sun,Mon,Tue</div>
                <div class="btn-settime-day">
                  <input
                    v-model="settingTime"
                    type="checkbox"
                    name="settingTime"
                    value="zone1"
                    id=""
                  />
                </div>
              </div>
              <div class="header-settime-zone">
                <div class="settime-zone-value">Zone: zone1, zone2, zone3</div>
              </div>
            </div>
            <!-- Blog 2 -->
            <div class="settime-blog">
              <div class="header-time">
                <div class="time-value">8.30</div>
                <div class="close text-close">
                  <i class="las la-times-circle"></i>
                </div>
              </div>
              <div class="header-day">
                <div class="value-days">Day: Sun,Mon,Tue</div>
                <div class="btn-settime-day">
                  <input
                    v-model="settingTime"
                    type="checkbox"
                    name="settingTime"
                    value="zone2"
                    id=""
                  />
                </div>
              </div>
              <div class="header-settime-zone">
                <div class="settime-zone-value">Zone: zone1, zone2, zone3</div>
              </div>
            </div>
            <!-- Blog3 -->
            <div class="settime-blog">
              <div class="header-time">
                <div class="time-value">9.30</div>
                <div class="close text-close">
                  <i class="las la-times-circle"></i>
                </div>
              </div>
              <div class="header-day">
                <div class="value-days">Day: Sun,Mon,Tue</div>
                <div class="btn-settime-day">
                  <input
                    v-model="settingTime"
                    type="checkbox"
                    name="settingTime"
                    value="zone3"
                    id=""
                  />
                </div>
              </div>
              <div class="header-settime-zone">
                <div class="settime-zone-value">Zone: zone1, zone2, zone3</div>
              </div>
            </div>
            <!-- manual mode -->
            <div class="manual-mode mode">
              <div class="mode-name">Manual</div>
              <div class="button-mode">
                <input
                  v-model="zones.mode"
                  @click="setMode('Manual')"
                  type="radio"
                  name="mode"
                  id="btn-manual"
                  class="btn-manualmode"
                  value="Manual"
                />
              </div>
            </div>
            <div class="manual-content">
              <div class="pump-blog">
                <div class="pump-name">Pump</div>
                <div class="btn-pump">
                  <input
                    v-model="pump"
                    type="checkbox"
                    name="pump"
                    value="on"
                    id=""
                  />
                </div>
              </div>
              <div class="liquid-fer">Liquid Fertilizer</div>
              <div class="liquid-blog">
                <div class="liquid1 liquid-blog-content">
                  <div class="liquid-header">
                    <div class="liquid-name">No. 1 ปุ๋ยหมัก</div>
                    <div class="btn-status-liquid">
                      <div class="btn-pump">
                        <input type="checkbox" name="" value="on" id="" />
                      </div>
                    </div>
                  </div>
                  <div class="progressbar progress-bar-1">
                    <div class="blog-percent">
                      <svg class="rect-percent">
                        <rect width="100%" height="100%"></rect>
                        <rect width="100%" class="result-percent"></rect>
                      </svg>

                      <div class="progressbar-name">Tank Level</div>
                    </div>
                    <div class="progressbar-desc">
                      <div class="liquid-flow">Flow rate : 230 ml/min</div>
                      <svg class="rect">
                        <rect width="100%" height="10"></rect>
                        <rect class="flow-percent"></rect>
                      </svg>
                      <div class="liquid-desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eius animi quisquam, atque a omnis tenetur dicta,
                        magni dignissimos iste consectetur molestiae ipsa! Optio
                        numquam veritatis ut illo! Voluptatem, harum? Corporis
                        dicta nihil nesciunt magni harum eaque id, dolores
                        voluptatibus esse excepturi ad veniam quidem aut
                        quibusdam, facilis, ipsa inventore porro impedit
                        obcaecati expedita dignissimos voluptas itaque? Vitae
                        reprehenderit necessitatibus officia, ipsum pariatur
                        nulla vel corrupti soluta perspiciatis quibusdam tempore
                        repellendus illo nesciunt quas id. Enim quas eum quia,
                        natus id, corporis exercitationem dignissimos vero ipsa
                        explicabo libero deserunt in quisquam unde laborum
                        deleniti sed voluptate iusto neque porro ex ullam.
                      </div>
                      <input type="text" name="" id="" class="set-liquid" /> ml
                    </div>
                  </div>
                </div>
                <!-- blog 2-->
                <div class="liquid1 liquid-blog-content">
                  <div class="liquid-header">
                    <div class="liquid-name">No. 1 ปุ๋ยหมัก</div>
                    <div class="btn-status-liquid">
                      <div class="btn-pump">
                        <input type="checkbox" name="" value="on" id="" />
                      </div>
                    </div>
                  </div>
                  <div class="progressbar progress-bar-1">
                    <div class="blog-percent">
                      <svg class="rect-percent">
                        <rect width="100%" height="100%"></rect>
                        <rect width="100%" class="result-percent"></rect>
                      </svg>

                      <div class="progressbar-name">Tank Level</div>
                    </div>
                    <div class="progressbar-desc">
                      <div class="liquid-flow">Flow rate : 230 ml/min</div>
                      <svg class="rect">
                        <rect width="100%" height="10"></rect>
                        <rect class="flow-percent"></rect>
                      </svg>
                      <div class="liquid-desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eius animi quisquam, atque a omnis tenetur dicta,
                        magni dignissimos iste consectetur molestiae ipsa! Optio
                        numquam veritatis ut illo! Voluptatem, harum? Corporis
                        dicta nihil nesciunt magni harum eaque id, dolores
                        voluptatibus esse excepturi ad veniam quidem aut
                        quibusdam, facilis, ipsa inventore porro impedit
                        obcaecati expedita dignissimos voluptas itaque? Vitae
                        reprehenderit necessitatibus officia, ipsum pariatur
                        nulla vel corrupti soluta perspiciatis quibusdam tempore
                        repellendus illo nesciunt quas id. Enim quas eum quia,
                        natus id, corporis exercitationem dignissimos vero ipsa
                        explicabo libero deserunt in quisquam unde laborum
                        deleniti sed voluptate iusto neque porro ex ullam.
                      </div>
                      <input type="text" name="" id="" class="set-liquid" /> ml
                    </div>
                  </div>
                </div>
                <!-- blog 3 -->
                <div class="liquid1 liquid-blog-content">
                  <div class="liquid-header">
                    <div class="liquid-name">No. 1 ปุ๋ยหมัก</div>
                    <div class="btn-status-liquid">
                      <div class="btn-pump">
                        <input type="checkbox" name="" value="on" id="" />
                      </div>
                    </div>
                  </div>
                  <div class="progressbar progress-bar-1">
                    <div class="blog-percent">
                      <svg class="rect-percent">
                        <rect width="100%" height="100%"></rect>
                        <rect width="100%" class="result-percent"></rect>
                      </svg>

                      <div class="progressbar-name">Tank Level</div>
                    </div>
                    <div class="progressbar-desc">
                      <div class="liquid-flow">Flow rate : 230 ml/min</div>
                      <svg class="rect">
                        <rect width="100%" height="10"></rect>
                        <rect class="flow-percent"></rect>
                      </svg>
                      <div class="liquid-desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eius animi quisquam, atque a omnis tenetur dicta,
                        magni dignissimos iste consectetur molestiae ipsa! Optio
                        numquam veritatis ut illo! Voluptatem, harum? Corporis
                        dicta nihil nesciunt magni harum eaque id, dolores
                        voluptatibus esse excepturi ad veniam quidem aut
                        quibusdam, facilis, ipsa inventore porro impedit
                        obcaecati expedita dignissimos voluptas itaque? Vitae
                        reprehenderit necessitatibus officia, ipsum pariatur
                        nulla vel corrupti soluta perspiciatis quibusdam tempore
                        repellendus illo nesciunt quas id. Enim quas eum quia,
                        natus id, corporis exercitationem dignissimos vero ipsa
                        explicabo libero deserunt in quisquam unde laborum
                        deleniti sed voluptate iusto neque porro ex ullam.
                      </div>
                      <input type="text" name="" id="" class="set-liquid" /> ml
                    </div>
                  </div>
                </div>
                <!-- blog 4 -->
                <div class="liquid1 liquid-blog-content">
                  <div class="liquid-header">
                    <div class="liquid-name">No. 1 ปุ๋ยหมัก</div>
                    <div class="btn-status-liquid">
                      <div class="btn-pump">
                        <input type="checkbox" name="" value="on" id="" />
                      </div>
                    </div>
                  </div>
                  <div class="progressbar progress-bar-1">
                    <div class="blog-percent">
                      <svg class="rect-percent">
                        <rect width="100%" height="100%"></rect>
                        <rect width="100%" class="result-percent"></rect>
                      </svg>

                      <div class="progressbar-name">Tank Level</div>
                    </div>
                    <div class="progressbar-desc">
                      <div class="liquid-flow">Flow rate : 230 ml/min</div>
                      <svg class="rect">
                        <rect width="100%" height="10"></rect>
                        <rect class="flow-percent"></rect>
                      </svg>
                      <div class="liquid-desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eius animi quisquam, atque a omnis tenetur dicta,
                        magni dignissimos iste consectetur molestiae ipsa! Optio
                        numquam veritatis ut illo! Voluptatem, harum? Corporis
                        dicta nihil nesciunt magni harum eaque id, dolores
                        voluptatibus esse excepturi ad veniam quidem aut
                        quibusdam, facilis, ipsa inventore porro impedit
                        obcaecati expedita dignissimos voluptas itaque? Vitae
                        reprehenderit necessitatibus officia, ipsum pariatur
                        nulla vel corrupti soluta perspiciatis quibusdam tempore
                        repellendus illo nesciunt quas id. Enim quas eum quia,
                        natus id, corporis exercitationem dignissimos vero ipsa
                        explicabo libero deserunt in quisquam unde laborum
                        deleniti sed voluptate iusto neque porro ex ullam.
                      </div>
                      <input type="text" name="" id="" class="set-liquid" /> ml
                    </div>
                  </div>
                </div>
                <!-- blog 5-->
                <div class="liquid1 liquid-blog-content">
                  <div class="liquid-header">
                    <div class="liquid-name">No. 1 ปุ๋ยหมัก</div>
                    <div class="btn-status-liquid">
                      <div class="btn-pump">
                        <input type="checkbox" name="" value="on" id="" />
                      </div>
                    </div>
                  </div>
                  <div class="progressbar progress-bar-1">
                    <div class="blog-percent">
                      <svg class="rect-percent">
                        <rect width="100%" height="100%"></rect>
                        <rect width="100%" class="result-percent"></rect>
                      </svg>

                      <div class="progressbar-name">Tank Level</div>
                    </div>
                    <div class="progressbar-desc">
                      <div class="liquid-flow">Flow rate : 230 ml/min</div>
                      <svg class="rect">
                        <rect width="100%" height="10"></rect>
                        <rect class="flow-percent"></rect>
                      </svg>
                      <div class="liquid-desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eius animi quisquam, atque a omnis tenetur dicta,
                        magni dignissimos iste consectetur molestiae ipsa! Optio
                        numquam veritatis ut illo! Voluptatem, harum? Corporis
                        dicta nihil nesciunt magni harum eaque id, dolores
                        voluptatibus esse excepturi ad veniam quidem aut
                        quibusdam, facilis, ipsa inventore porro impedit
                        obcaecati expedita dignissimos voluptas itaque? Vitae
                        reprehenderit necessitatibus officia, ipsum pariatur
                        nulla vel corrupti soluta perspiciatis quibusdam tempore
                        repellendus illo nesciunt quas id. Enim quas eum quia,
                        natus id, corporis exercitationem dignissimos vero ipsa
                        explicabo libero deserunt in quisquam unde laborum
                        deleniti sed voluptate iusto neque porro ex ullam.
                      </div>
                      <input type="text" name="" id="" class="set-liquid" /> ml
                    </div>
                  </div>
                </div>
                <!--blog 6 -->
                <div class="liquid1 liquid-blog-content">
                  <div class="liquid-header">
                    <div class="liquid-name">No. 1 ปุ๋ยหมัก</div>
                    <div class="btn-status-liquid">
                      <div class="btn-pump">
                        <input type="checkbox" name="" value="on" id="" />
                      </div>
                    </div>
                  </div>
                  <div class="progressbar progress-bar-1">
                    <div class="blog-percent">
                      <svg class="rect-percent">
                        <rect width="100%" height="100%"></rect>
                        <rect width="100%" class="result-percent"></rect>
                      </svg>

                      <div class="progressbar-name">Tank Level</div>
                    </div>
                    <div class="progressbar-desc">
                      <div class="liquid-flow">Flow rate : 230 ml/min</div>
                      <svg class="rect">
                        <rect width="100%" height="10"></rect>
                        <rect class="flow-percent"></rect>
                      </svg>
                      <div class="liquid-desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eius animi quisquam, atque a omnis tenetur dicta,
                        magni dignissimos iste consectetur molestiae ipsa! Optio
                        numquam veritatis ut illo! Voluptatem, harum? Corporis
                        dicta nihil nesciunt magni harum eaque id, dolores
                        voluptatibus esse excepturi ad veniam quidem aut
                        quibusdam, facilis, ipsa inventore porro impedit
                        obcaecati expedita dignissimos voluptas itaque? Vitae
                        reprehenderit necessitatibus officia, ipsum pariatur
                        nulla vel corrupti soluta perspiciatis quibusdam tempore
                        repellendus illo nesciunt quas id. Enim quas eum quia,
                        natus id, corporis exercitationem dignissimos vero ipsa
                        explicabo libero deserunt in quisquam unde laborum
                        deleniti sed voluptate iusto neque porro ex ullam.
                      </div>
                      <input type="text" name="" id="" class="set-liquid" /> ml
                    </div>
                  </div>
                </div>
                <!--blog 7 -->
                <div class="liquid1 liquid-blog-content">
                  <div class="liquid-header">
                    <div class="liquid-name">No. 1 ปุ๋ยหมัก</div>
                    <div class="btn-status-liquid">
                      <div class="btn-pump">
                        <input type="checkbox" name="" value="on" id="" />
                      </div>
                    </div>
                  </div>
                  <div class="progressbar progress-bar-1">
                    <div class="blog-percent">
                      <svg class="rect-percent">
                        <rect width="100%" height="100%"></rect>
                        <rect width="100%" class="result-percent"></rect>
                      </svg>

                      <div class="progressbar-name">Tank Level</div>
                    </div>
                    <div class="progressbar-desc">
                      <div class="liquid-flow">Flow rate : 230 ml/min</div>
                      <svg class="rect">
                        <rect width="100%" height="10"></rect>
                        <rect class="flow-percent"></rect>
                      </svg>
                      <div class="liquid-desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                      </div>
                      <input type="text" name="" id="" class="set-liquid" /> ml
                    </div>
                  </div>
                </div>
                <!-- Mix tank -->
                <div class="liquid1 liquid-blog-content">
                  <div class="liquid-header">
                    <div class="liquid-name">Mix tank</div>
                  </div>
                  <div class="fertilizer-water-level-blog">
                    <div class="water-level">
                      <div class="circle-water circle-mix"></div>
                      <div class="water-name">Fertilizer water level</div>
                    </div>
                    <div class="fertilizer-flow">
                      <div class="circle-flow circle-mix"></div>
                      <div class="flow-name">Fertilizer flow</div>
                    </div>
                    <div class="circle-fertilizer-mix">
                      <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle
                          class="result-circle-mix"
                          cx="70"
                          cy="70"
                          r="70"
                        ></circle>
                      </svg>
                    </div>
                    <div class="mixtank-name">900.05 ml/min</div>
                    <svg class="rect">
                      <rect width="100%" height="10"></rect>
                      <rect class="flow-percent"></rect>
                    </svg>
                  </div>
                </div>
              </div>
              <!-- select zone -->
              <div class="fertilizer-zone-blog">
                <div class="fertilizer-zone-name">Fertilizer Zone :</div>
                <div class="select-zone">
                  <select name="" id="" v-model="selectZone">
                    <option
                      v-for="zone in zoneName"
                      :key="zone._id"
                      :value="zone.name"
                      :selected="true"
                    >
                      {{ zone.name }}
                    </option>
                  </select>
                </div>
              </div>
              <!--button-->
              <div class="button-blog">
                <button class="btn btn-reset">RESET</button>
                <button class="btn btn-save">SAVE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <b-modal
        class="autoSettingBlog"
        id="modal-1"
        size="xl"
        title="Auto Setting"
        no-stacking
      >
        <div class="auto-ec-setting-blog">
          <p class="sensor-name">EC-MIN :</p>
          <input v-model="auto_ec.min" type="number" name="" id="" />
          <p class="sensor-name">EC-MAX :</p>
          <input v-model="auto_ec.max" type="number" name="" id="" />
        </div>
        <div class="auto-ph-setting-blog">
          <p class="sensor-name">Ph-MIN :</p>
          <input v-model="auto_ph.min" type="number" name="" id="" />
          <p class="sensor-name">Ph-MAX :</p>
          <input v-model="auto_ph.max" type="number" name="" id="" />
        </div>
        <div class="auto-humid-setting-blog">
          <p class="sensor-name">Humid-MIN :</p>
          <input v-model="auto_humid.min" type="number" name="" id="" />
          <p class="sensor-name">Humid-MAX :</p>
          <input v-model="auto_humid.max" type="number" name="" id="" />
        </div>
        <div class="auto-ldr-setting-blog">
          <p class="sensor-name">LDR-MIN :</p>
          <input v-model="auto_ldr.min" type="number" name="" id="" />
          <p class="sensor-name">LDR-MAX :</p>
          <input v-model="auto_ldr.max" type="number" name="" id="" />
        </div>
        <div class="btn-auto-edit">
          <button class="btn btn-primary">Save</button>
          <button class="btn btn-danger">Cancle</button>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import axios from 'axios'
export default {
  components: { Menu },
  data() {
    return {
      auto_ec: {},
      auto_ph: {},
      auto_humid: {},
      auto_ldr: {},
      zones: [],
      zoneName: [],
      red: '#ff0000',
      test: 0,
      mode: String,
      status_sensor: true,
      settimeContent: [{ _id: '1234', name: 'panuwat' }],
      settingTime: [],
      pump: String,
      selectZone: String,
      autoMode: {},
    }
  },
  methods: {
    async loadData() {
      const url = 'http://localhost:5000/fertilizer'
      try {
        const getData = await axios.get(url)
        this.zones = getData.data.datas[0]
      } catch (error) {
        console.error(error)
      }
    },
    async loadSystem() {
      const url = 'http://localhost:5000/fertilizer'
      try {
        const getData = await axios.get(url)
        this.zones = getData.data.datas[0]
        this.zoneName = this.zones.zone
        // this.mode = this.zones[0].mode
        // this.auto_ec = this.zones[0].auto_mode.ec
        // this.auto_ph = this.zones[0].auto_mode.ph
        // this.auto_humid = this.zones[0].auto_mode.humid
        // this.auto_ldr = this.zones[0].auto_mode.ldr
        // this.selectZone = this.zones[0].zone[0].name
      } catch (error) {}
    },
    showSettingTime() {
      alert(this.settingTime)
    },
    setMode(args) {
      try {
        const data = {
          mode: args,
        }
        axios.put('http://localhost:5000/setmode', data).then((res) => {})
      } catch (error) {}
    },
  },
  mounted() {
    this.loadSystem()
    this.loadData()
    setInterval(() => {
      this.loadData()
    }, 3000)
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300;400&display=swap');
:root {
  --color-main: #1a202e;
  --color-secondary: #8da2fb;
  --color-dark-violet: #546ddf;
  --color-menu: #283046;
  --color-soft-primary: #404860;
  --color-gray: #f3f3f3;
  --color-sky: #03a9f4;
  --color-green: #4ba369;
  --color-orange: #f8863f;
  --color-red: #bb2020;
}

.sensor-name {
  width: 150px;
}

.btn-auto-edit {
  display: flex;
  justify-content: flex-end;
}

.modal-body {
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.auto-ec-setting-blog,
.auto-ph-setting-blog,
.auto-humid-setting-blog,
.auto-ldr-setting-blog {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: right;
}

.close {
  font-size: 3rem;
  color: white !important;
}

.modal-footer {
  display: none;
}

.modal-header {
  color: white;
  font-size: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 1rem;
  /* border-bottom: 1px solid #dee2e6; */
  /* border-top-left-radius: calc(0.3rem - 1px); */
  /* border-top-right-radius: calc(0.3rem - 1px);*/
}

.btn-setting {
  color: white;
  font-size: 2rem;
  margin-left: 20px;
  background-color: transparent;
  width: 80px;
  padding: 5px 0;
  border: 1px solid transparent;
  transition: 0.5s all;
}

.btn-setting:hover {
  color: var(--color-dark-violet);
  transition: 0.5s all;
}

.button-mode {
  display: flex;
}

.button-blog {
  display: flex;
  justify-content: center;
}

.btn {
  background-color: transparent;
  border: 1px solid transparent;
  width: 150px;
  padding: 15px 0;
  border-radius: 10px;
}

.btn-reset {
  background-color: rgb(212, 199, 18);
}

.btn-save {
  background-color: var(--color-green);
  margin-left: 20px;
}

.select-zone {
  margin-left: 20px;
}

.fertilizer-zone-blog {
  padding: 50px 0;
  display: flex;
  justify-items: center;
  justify-content: center;
}

.mixtank-name {
  padding: 20px 0;
  text-align: center;
}

.circle-fertilizer-mix {
  display: flex;
  margin: 0 auto;
  width: 150px;
  fill: none;
  stroke: var(--color-gray);
  transform: translate(5px, 5px);
  stroke-width: 10;
  stroke-dasharray: 440;
  stroke-dashoffset: 440;
  stroke-linecap: round;
}

.circle-fertilizer-mix svg {
  margin-top: 20px;
  width: 150px;
}

.result-circle-mix {
  stroke-dashoffset: calc(440 - (440 * (5 * 1)) / 100);
  stroke: var(--color-orange);
}

.fertilizer-water-level-blog {
  margin: 0 auto;
}

.flow-name,
.water-name {
  margin-left: 20px;
}

.water-level {
  margin-top: 20px;
  display: flex;
}

.fertilizer-flow {
  margin-top: 20px;
  display: flex;
}

.circle-flow {
  background-color: var(--color-secondary);
}

.circle-water {
  background-color: var(--color-green);
}

.circle-mix {
  width: 20px;
  height: 20px;
  border-radius: 100%;
}

.set-liquid {
  position: absolute;
  bottom: 0px;
  width: 50%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid transparent;
}

.liquid-desc {
  min-height: 170px;
  max-height: 170px;
  overflow-y: hidden;
}

.flow-percent {
  fill: var(--color-dark-violet);
  width: 30%;
  height: 10px;
}

.progressbar-desc {
  position: relative;
  float: left;
  padding: 20px 5px;
}

.result-percent {
  fill: var(--color-menu);
  height: 200px;
}

svg.rect-percent {
  display: flex;
  margin: 0 auto;
  width: 60%;
  height: 280px;
  fill: var(--color-green);
  border-radius: 100px;
}

.progressbar-name {
  padding: 10px 0;
  text-align: center;
}

.progressbar {
  display: flex;
}

.blog-percent {
  width: 30%;
  padding: 20px 0;
  height: 320px;
}

.progressbar-desc {
  width: 70%;
}

.liquid-header {
  display: flex;
  justify-content: space-between;
}

.liquid-blog {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  width: (100vw - 280px - 40px);
}

.liquid-blog-content {
  width: 400px;
  height: 400px;
  background-color: var(--color-soft-primary);
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
}

.liquid-fer {
  padding-left: 40px;
  margin-top: 10px;
}

.pump-blog {
  display: flex;
  justify-content: space-between;
  padding-left: 40px;
}

input[type='checkbox'] {
  position: relative;
  width: 40px;
  height: 20px;
  -webkit-appearance: none;
  background-color: var(--color-gray);
  border-radius: 20px;
}

input[type='checkbox']:checked {
  background-color: var(--color-dark-violet);
  transition: 0.5s;
  box-shadow: inset 1px 0 8px var(--color-main);
}

input[type='checkbox']:before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: #fff;
  transform: scale(1.1);
  box-shadow: 0 2px 5px var(--color-main);
  border-radius: 100%;
  transition: 0.5s;
}

input:checked[type='checkbox']:before {
  left: 20px;
}

.header-day {
  display: flex;
  justify-content: space-between;
  color: white;
}

.la-times-circle {
  font-size: 2rem;
  color: white;
}

.settime-content {
  color: white;
  padding: 20px;
}

.settime-blog {
  background-color: var(--color-soft-primary);
  border-radius: 10px;
  padding: 20px 20px;
  margin-bottom: 10px;
}

.header-time {
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.text-close {
  float: left;
}

.btn-add-time {
  margin-left: 20px;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  color: white;
  background-color: var(--color-secondary);
  border: 1px solid transparent;
  transition: 0.5s;
}

.btn-add-time:hover {
  background-color: var(--color-dark-violet);
  box-shadow: 1px 0 10px var(--color-dark-violet);
  transition: 0.5s;
}
.la-plus {
  font-size: 1.2rem;
}

input[type='radio'] {
  position: relative;
  width: 80px;
  height: 40px;
  -webkit-appearance: none;
  background-color: var(--color-gray);
  border-radius: 20px;
}

input[type='radio']:checked {
  background-color: var(--color-dark-violet);
  transition: 0.5s;
  box-shadow: inset 1px 0 8px var(--color-main);
}

input[type='radio']:before {
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  top: 0;
  left: 0;
  background: #fff;
  transform: scale(1.1);
  box-shadow: 0 2px 5px var(--color-main);
  border-radius: 100%;
  transition: 0.5s;
}

input:checked[type='radio']:before {
  left: 40px;
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  width: calc(100vw - 300px);
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
  padding: 40px;
}

.control-blog {
  width: 100%;
  min-height: 500px;
  background-color: var(--color-menu);
  border-radius: 10px;
}

.control-header {
  padding: 20px;
  color: white;
  font-size: 1.2rem;
  display: flex;
}

.show-mode {
  margin-left: 30px;
}

.control-status {
  width: 100%;
  padding-left: 20px;
  display: flex;
  float: left;
  color: white;
  font-size: 1.2rem;
}

.circle-status {
  width: 20px;
  height: 20px;
  border-radius: 100px;
}

.status-name {
  margin-left: 20px;
}

.online {
  background-color: var(--color-green);
  box-shadow: 0px 0px 8px var(--color-green);
}

.offline {
  background-color: var(--color-orange);
  box-shadow: 0px 0px 8px var(--color-orange);
}

.auto-mode {
  display: flex;
  color: white;
  padding: 20px;
  padding-top: -10px;
  font-size: 1.2rem;
  justify-content: space-between;
}

.manual-mode {
  display: flex;
  color: white;
  padding: 20px 0;
  font-size: 1.2rem;
  justify-content: space-between;
}

.settime-mode {
  display: flex;
  color: white;
  padding: 20px;
  padding-top: -10px;
  font-size: 1.2rem;
  justify-content: space-between;
}

.mode {
  padding-top: -10px;
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
