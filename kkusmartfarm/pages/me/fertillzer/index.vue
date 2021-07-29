<template>
  <div>
    <Menu />
    <div class="content">
      <div class="activities">
        <div class="activity">
          <div class="activity-header">
            <div class="activity-header-topic">Activity</div>
            <div class="btn-add-activity-blog">
              <button
                v-b-modal.addActivity
                class="btn-add-activity"
                @click="getPlantPlot()"
              >
                +
              </button>
            </div>
          </div>
          <div class="activity-body">
            <div
              v-for="(item, index) in activity"
              :key="item.activity_id"
              class="activity-blog"
            >
              <div class="activity-body-header">
                <div class="activity-time">
                  <b class="time-begin"> {{ item.activity_time_begin }}</b>
                  <span class="show-plant-plot">{{
                    item.plant_plot_name
                  }}</span>
                </div>
                <div class="btn-status-activity">
                  <input
                    type="radio"
                    :value="item.activity_status"
                    class="btn-activity-status-toggle"
                    :checked="checkStatusActivity(item.activity_status)"
                    @click="toggleActivityMode(index, item.activity_id)"
                  />
                  <button class="btn-edit-activity">
                    <i class="las la-ellipsis-v"></i>
                  </button>
                </div>
              </div>
              <div class="activity-mode mode-days">
                <div class="mode-blog">
                  <i class="las la-network-wired"></i
                  ><span class="show-mode">{{ item.activity_mode }}</span>
                </div>
                <div class="activity-days">
                  <div
                    class="day"
                    :class="checkDays(item.activity_weekday, 'Sun')"
                  >
                    Su
                  </div>
                  <div
                    class="day"
                    :class="checkDays(item.activity_weekday, 'Mon')"
                  >
                    M
                  </div>
                  <div
                    class="day"
                    :class="checkDays(item.activity_weekday, 'Tues')"
                  >
                    Tu
                  </div>
                  <div
                    class="day"
                    :class="checkDays(item.activity_weekday, 'Wed')"
                  >
                    We
                  </div>
                  <div
                    class="day"
                    :class="checkDays(item.activity_weekday, 'Thurs')"
                  >
                    Th
                  </div>
                  <div
                    class="day"
                    :class="checkDays(item.activity_weekday, 'Fri')"
                  >
                    Fri
                  </div>
                  <div
                    class="day"
                    :class="checkDays(item.activity_weekday, 'Sat')"
                  >
                    Sa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="activity-working">
          <div class="activity-header">Fertilizer is working</div>
          <div class="activity-body">
            <div
              v-for="(item, index) in fertilizer_working"
              :key="index"
              class="activity-blog"
              :class="checkQueue(index)"
            >
              <div class="activity-body-header">
                <div class="activity-time">
                  <b class="time-begin"> {{ item.activity_time_begin }}</b>
                  <span class="show-plant-plot">{{
                    item.plant_plot_name
                  }}</span>
                </div>
              </div>
              <div class="activity-mode mode-days">
                <div class="mode-blog">
                  <i class="las la-network-wired"></i
                  ><span class="show-mode">{{ item.activity_mode }}</span>
                </div>
                <div class="activity-days">
                  <div
                    class="day"
                    :class="checkDays(item.activity_weekday, 'Sun')"
                  >
                    Su
                  </div>
                  <div
                    class="day"
                    :class="checkDays(item.activity_weekday, 'Mon')"
                  >
                    M
                  </div>
                  <div
                    class="day"
                    :class="checkDays(item.activity_weekday, 'Tues')"
                  >
                    Tu
                  </div>
                  <div
                    class="day"
                    :class="checkDays(item.activity_weekday, 'Wed')"
                  >
                    We
                  </div>
                  <div
                    class="day"
                    :class="checkDays(item.activity_weekday, 'Thurs')"
                  >
                    Th
                  </div>
                  <div
                    class="day"
                    :class="checkDays(item.activity_weekday, 'Fri')"
                  >
                    Fri
                  </div>
                  <div
                    class="day"
                    :class="checkDays(item.activity_weekday, 'Sat')"
                  >
                    Sa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pump">
        <div class="pump-1">
          <div class="des">
            <div class="icon-pump" :class="checkPumpStatus('pump1')"></div>
            <div class="pump-name">Pump 1</div>
          </div>
          <input
            v-model="pumps.pump1"
            type="checkbox"
            class="pump-checkBox"
            name=""
            id=""
          />
        </div>
        <div class="pump-2">
          <div class="des">
            <div class="icon-pump" :class="checkPumpStatus('pump2')"></div>
            <div class="pump-name">Pump 2</div>
          </div>
          <input
            v-model="pumps.pump2"
            type="checkbox"
            class="pump-checkBox"
            name=""
            id=""
          />
        </div>
      </div>
      <!--Fertilizer-->.
      <!-- Fertilizer Mix -->
      <div class="fertilizer-mix">
        <div class="fertilizer-blog fertilizer-blog-mix">
          <div class="fertilizer-header">
            <div class="fertilizer-des">Fertilizer Mix:</div>
            <div>
              <input
                type="checkbox"
                class="fertilizer-item-status"
                name=""
                id=""
              />
              <button class="btn-control-edit">
                <i class="las la-ellipsis-v"></i>
              </button>
            </div>
          </div>
          <div class="fertilizer-item-body fertilizer-item-body-mix">
            <div class="fertilizer-tank">
              <svg class="fertilizer-tank-svg fertilizer-tank-mix">
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
                <text x="8" y="130" font-size="15" fill="white">50 %</text>
              </svg>
            </div>
            <div class="row-control row3 control-mix">
              <p class="text-control">Control</p>
              <div class="control-button">
                <button class="btn-control-on" @click="statusValue('on')">
                  ON
                </button>
                <button class="btn-control-off" @click="statusValue('off')">
                  OFF
                </button>
              </div>
            </div>
            <div>
              <div class="mix-status">
                <div class="mix-status-blog">
                  <div class="mix-status-text">Vale</div>
                  <div class="mix-content">CLOSE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Fertilizer Zero -->
        <div v-if="lenFertilizer != 0">
          <div
            class="fertilizer-blog"
            v-for="item in fertilizers('getZeroIndex')"
            :key="item.fertilizer_id"
          >
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
                <button @click="editFertilizer(item)" class="btn-control-edit">
                  <i class="las la-ellipsis-v"></i>
                </button>
                <button class="btn-control-del" @click="deleteFertilizer(item)">
                  <i class="las la-trash-alt"></i>
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
                <!--<div class="tank-level-text">Tank Level</div>-->
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
        <div v-else class="fertilizer-blog add-fertilizer">
          <button v-b-modal.addFertilizer class="circle-btn-add">+</button>
        </div>
      </div>
      <!-- Fertilizer -->
      <div class="fertilizer" v-if="lenFertilizer !== 0">
        <div v-for="(item, index) in fertilizers()" :key="index">
          <div
            class="fertilizer-blog"
            v-if="item.fertilizer_type === 'fertilizer'"
          >
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
                <button @click="editFertilizer(item)" class="btn-control-edit">
                  <i class="las la-ellipsis-v"></i>
                </button>
                <button class="btn-control-del" @click="deleteFertilizer(item)">
                  <i class="las la-trash-alt"></i>
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
                <!--<div class="tank-level-text">Tank Level</div>-->
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
        <div class="fertilizer-blog add-fertilizer">
          <button v-b-modal.addFertilizer class="circle-btn-add">+</button>
        </div>
      </div>
    </div>
    <div>
      <!-- Add Activity Modal-->
      <b-modal
        class="add-activity-modal"
        id="addActivity"
        size="lg"
        centered
        header-bg-variant="dark"
        headerClass="p-2 border-bottom-0"
        footerClass="p-2 border-top-0"
        ok="false"
        modal-header-close="true"
        modal-cancel="false"
      >
        <template #modal-header>
          <p class="modal-topic">Add Activity</p>
          <h5></h5>
          <hr />
        </template>

        <template class="modal-body">
          <div class="addActivity-mode">
            <div class="addactivity-mode-name addActivity-name">Mode</div>
            <div class="addActivity-mode-type addActivity-object">
              <b-form-select v-model="addActivity.activity_mode" required>
                <b-form-select-option :value="null" disabled
                  >Please Enter Mode</b-form-select-option
                >
                <b-form-select-option value="auto">Auto</b-form-select-option>
                <b-form-select-option value="auto by time"
                  >Auto by time</b-form-select-option
                >
                <b-form-select-option value="settime"
                  >Set Time</b-form-select-option
                >
                <b-form-select-option value="manual"
                  >Manual</b-form-select-option
                >
              </b-form-select>
            </div>
            <hr />
          </div>
          <div class="addActivity-zone">
            <div class="addActivity-zone-name addActivity-name">Zone</div>
            <!-- <div class="addActivity-zone-select addActivity-object">
              <div v-for="item in plantplot" :key="item.plant_plot_id">
                <input
                  v-model="addActivity.activity_plant_plot"
                  :value="item.plant_plot_id"
                  class="plant_plot_select"
                  type="checkbox"
                />
                {{ item.plant_plot_name }}
              </div>
            </div> -->
            <div class="select-zone">
              <select
                name=""
                id=""
                class="custom-select"
                v-model="addActivity.activity_plant_plot"
              >
                <option :value="null" disabled>Plaese Enter Plant Plot</option>
                <option
                  v-for="item in plantplot"
                  :key="item.plant_plot_id"
                  :value="item.plant_plo_id"
                >
                  {{ item.plant_plot_name }}
                </option>
              </select>
            </div>
            <hr />
          </div>
          <div v-if="timeComponent()" class="time">
            <div class="addActivity-time-begin">
              <div class="addActivity-time-begin-name addActivity-name">
                Start
              </div>
              <div class="addActivity-time addActivity-object">
                <input
                  v-model="addActivity.activity_time_begin[0]"
                  v-on:keyup="checkHr('begin', 'hr')"
                  max="24"
                  min="00"
                  class="input-time"
                  type="number"
                  placeholder="00"
                />
                <p class="colon">:</p>
                <input
                  v-model="addActivity.activity_time_begin[1]"
                  v-on:keyup="checkHr('begin', 'min')"
                  max="59"
                  min="00"
                  class="input-time"
                  type="number"
                  placeholder="00"
                />
              </div>
            </div>
            <div class="addActivity-time-end">
              <div class="addActivity-time-end-name addActivity-name">End</div>
              <div class="addActivity-time addActivity-object">
                <input
                  v-model="addActivity.activity_time_end[0]"
                  max="24"
                  min="00"
                  v-on:keyup="checkHr('end', 'hr')"
                  class="input-time"
                  type="number"
                  placeholder="00"
                />
                <p class="colon">:</p>
                <input
                  v-model="addActivity.activity_time_end[1]"
                  v-on:keyup="checkHr('end', 'min')"
                  max="59"
                  min="00"
                  class="input-time"
                  type="number"
                  placeholder="00"
                />
              </div>
              <hr />
            </div>
          </div>
          <div v-if="settingComponent()" class="setting">
            <div class="addActivity-name">Configure the Sensor</div>
            <div class="setting-object">
              <div class="setting-name">pH Min</div>
              <input
                v-model="addActivity.activity_ph_min"
                type="number"
                class="setting-input"
              />
              <div class="setting-name">pH Max</div>
              <input
                v-model="addActivity.activity_ph_max"
                type="number"
                class="setting-input"
              />
              <div class="setting-name">Ec Min</div>
              <input
                v-model="addActivity.activity_ec_min"
                type="number"
                class="setting-input"
              />
              <div class="setting-name">Ec Max</div>
              <input
                v-model="addActivity.activity_ec_max"
                type="number"
                class="setting-input"
              />
              <div class="setting-name">Humid Min</div>
              <input
                v-model="addActivity.activity_humid_min"
                type="number"
                class="setting-input"
              />
              <div class="setting-name">Humid Max</div>
              <input
                v-model="addActivity.activity_humid_max"
                type="number"
                class="setting-input"
              />
            </div>
            <hr />
          </div>
          <div class="setting-fertilizer">
            <div class="addActivity-name">Fertilizer</div>
            <div class="setting-object setting-object-fertilizer">
              <div
                class="in-setting-fertilizer"
                v-for="item in fertilizer"
                :key="item.fertilizer_id"
              >
                <div class="setting-name">{{ item.fertilizer_name }}</div>
                <input
                  v-model="addActivity.activity_ratio[item.fertilizer_name]"
                  type="number"
                  class="setting-input"
                />
              </div>
            </div>
            <hr />
          </div>
          <div class="addActivity-frequency">
            <div class="addActivity-frequency-name addActivity-name">
              Frequency
            </div>
            <div class="addActivity-frequency-select addActivity-object">
              <div v-for="(item, index) in days" :key="index">
                <input
                  v-model="addActivity.activity_weekday"
                  class="addActivity-input-day"
                  type="checkbox"
                  :id="item.name"
                  :value="item.database"
                />
                <label
                  class="day"
                  :for="item.name"
                  :class="addToActivity(item.database)"
                  >{{ item.label }}</label
                >
              </div>
            </div>
            <hr />
          </div>
        </template>
        <template #modal-footer>
          <b-button @click="closeModal('addActivity')" class="btn btn-cacel"
            >Cancel</b-button
          >
          <b-button @click="save()" class="btn btn-save">Save</b-button>
        </template>
      </b-modal>
      <AddFertilizerModal />
      <!-- Delete Fertilizer Modal -->
      <b-modal
        ref="delete-Fertilizer"
        title="Using Component Methods"
        size="md"
        centered
        header-bg-variant="dark"
        headerClass="p-2 border-bottom-0 deleteModal"
        footerClass="p-2 border-top-0"
        ok="false"
        modal-header-close="true"
        modal-cancel="false"
        hiden-footer="true"
        hide-footer
      >
        <template #modal-header>
          <h5></h5>
          <hr />
        </template>
        <template class="modal-body">
          <div class="red-line"></div>
          <i class="las la-trash-alt trash-icon-modal"></i>
          <div class="delete-label"><b>Delete Fertilizer?</b></div>
          <p class="delete-info">กรุณาตรวจสอบรายละเอียดก่อนทำรายการอีกครั้ง</p>
          <ul class="list-info">
            <li>{{ deleteFertilizerItem.fertilizer_name }}</li>
            <li>{{ deleteFertilizerItem.fertilizer_des }}</li>
            <li>{{ deleteFertilizerItem.fertilizer_type }}</li>
          </ul>
          <div class="delete-footer">
            <button class="btn btn-cancel" @click="closeModalFertilizer()">
              Cancel
            </button>
            <button class="btn btn-confirm" @click="confirmDeleteFertilizer()">
              Confirm
            </button>
          </div>
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import AddFertilizerModal from '@/components/fertilizer/AddFertilizer.vue'
import axios from 'axios'
export default {
  components: { Menu, AddFertilizerModal },
  data() {
    return {
      deleteFertilizerItem: {},
      testEdit: '',
      activity: [],
      plantplot: [],
      fertilizer: [],
      mix: [],
      water: [],
      days: [
        { name: 'Sun', database: 'Sun', label: 'S' },
        { name: 'Mon', database: 'Mon', label: 'M' },
        { name: 'Tues', database: 'Tues', label: 'Tu' },
        { name: 'Wed', database: 'Wed', label: 'We' },
        { name: 'Thurs', database: 'Thurs', label: 'Th' },
        { name: 'Fri', database: 'Fri', label: 'Fri' },
        { name: 'Sat', database: 'Sat', label: 'Sa' },
      ],
      addActivity: {
        activity_time_begin: [null, null],
        activity_time_end: [null, null],
        activity_mode: 'auto',
        activity_weekday: [],
        activity_plant_plot: null,
        activity_status: 'off',
        activity_ec_min: Number(),
        activity_ec_max: Number(),
        activity_ph_min: Number(),
        activity_ph_max: Number(),
        activity_moisture: Number(),
        // activity_humid_max: Number(),
        activity_ratio: {},
      },
      fertilizer_working: [],
      pumps: {
        pump1: false,
        pump2: true,
      },
    }
  },
  methods: {
    async loadData() {
      const url = 'http://localhost:5000/fertilizer'
      const response = await axios.get(url)
      this.activity = response.data.result
      this.activity.forEach((element) => {
        element.activity_weekday = element.activity_weekday.split(',')
      })
      const working = await axios.get('http://localhost:5000/fertilizer/queue')
      this.fertilizer_working = working.data.result
      return true
    },
    checkDays(...args) {
      if (args[0].includes(args[1])) {
        return 'day day-active'
      }
    },
    checkStatusActivity(status) {
      if (status === 'on') {
        return true
      } else {
        return false
      }
    },
    async getPlantPlot() {
      try {
        const response = await axios.get(
          'http://localhost:5000/fertilizer/plantplot'
        )
        this.plantplot = response.data.plantplot
      } catch (error) {}
    },
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
        return 1
      } catch (error) {}
    },
    addToActivity(args) {
      if (this.addActivity.activity_weekday.includes(args)) {
        return 'day day-active'
      }
    },
    settingComponent() {
      if (
        this.addActivity.activity_mode === 'auto' ||
        this.addActivity.activity_mode === 'auto by time'
      ) {
        return true
      }
    },
    timeComponent() {
      if (
        this.addActivity.activity_mode === 'settime' ||
        this.addActivity.activity_mode === 'auto by time'
      ) {
        return true
      }
    },
    async save() {
      try {
        const checktime = await this.CheckTime()
        if (
          checktime ||
          this.addActivity.activity_mode === 'auto' ||
          this.addActivity.activity_mode === 'manual'
        ) {
          const response = await axios.post(
            'http://localhost:5000/fertilizer/addActivity',
            this.addActivity
          )
          if (response.status === 200) {
            this.$root.$emit('bv::hide::modal', 'addActivity')
            // type,massage
            this.toast('success', 'Create activity Success')
          } else {
            alert("someting wen't wrong")
          }
        }
      } catch (error) {}
      // this.toast('create-success', 'Create activity Success', 'Success')
    },
    CheckTime() {
      if (
        this.addActivity.activity_time_begin.includes(null) === false &&
        this.addActivity.activity_time_end.includes(null) === false
      ) {
        const timebegin = new Date(
          2000,
          1,
          1,
          this.addActivity.activity_time_begin[0],
          this.addActivity.activity_time_begin[1]
        )
        const timeend = new Date(
          2000,
          1,
          1,
          this.addActivity.activity_time_end[0],
          this.addActivity.activity_time_end[1]
        )
        if (timeend <= timebegin) {
          alert('Error please enter time end more')
          return false
        }
        return true
      } else {
        return false
      }
    },
    closeModal(args) {
      this.$root.$emit('bv::hide::modal', args)
    },
    checkHr(position, time) {
      let index = 0
      if (time === 'min') {
        index = 1
      }
      this.addActivity['activity_time_' + position][index] = parseInt(
        String(this.addActivity['activity_time_' + position][index]).substring(
          0,
          2
        )
      )
      if (
        index === 0 &&
        this.addActivity['activity_time_' + position][index] > 24
      ) {
        this.addActivity['activity_time_' + position][index] = null
      }
      if (
        index === 1 &&
        this.addActivity['activity_time_' + position][index] > 59
      ) {
        this.addActivity['activity_time_' + position][index] = null
      }
    },
    async toggleActivityMode(index, id) {
      const playload = {
        activity_id: id,
        status: String(),
      }
      if (this.activity[index].activity_status === 'on') {
        playload.status = 'off'
      } else {
        playload.status = 'on'
      }
      const response = await axios.put(
        'http://localhost:5000/fertilizer/updateStatus',
        playload
      )
      console.log(response)
    },
    toast(_class = 'info', massage, _type) {
      const blog = this.$createElement
      const content = blog('p', { class: '' }, [
        blog('div', { class: 'massage-content' }, [
          blog('i', { class: 'las la-check icon-success' }),
          blog('span', { class: 'toast-text' }, massage),
        ]),
      ])
      this.$bvToast.toast([content], {
        variant: _class,
        solid: true,
        noCloseButton: true,
      })
    },
    checkQueue(args) {
      if (args === 0) {
        return 'activity-blog-active'
      } else {
        return 'activity-blog-waiting'
      }
    },
    checkPumpStatus(pumpId) {
      if (this.pumps[pumpId] === true) {
        return 'pump-active'
      }
    },
    statusValue(index, status) {
      this.fertilizer.forEach((element) => {
        if (element.fertilizer_id === index) {
          element.fertilizer_status = status
        }
      })
    },
    getStatusVale(args) {
      if (args === 'on') {
        return 'status-vale-active'
      } else {
        return 'status-vale-off'
      }
    },
    removeElement(args) {
      const id = 'element_id_' + args
      document.getElementById(id).remove()
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
    editFertilizer(fertilizer) {
      const fertilizerEdit = {
        fertilizer_name: '',
        fertilizer_des: '',
        fertilizer_type: '',
        fertilizer_total: '',
        fertilizer_item_topic: '',
      }
      const modalEdit = this.$createElement
      const headerModal = modalEdit(
        'p',
        { class: 'modal-topic' },
        'Edit Fertilizer'
      )
      const bodyModal = modalEdit('div', { class: '' }, [
        modalEdit(
          'div',
          { class: 'add-fertilizer-fertilizer-name modal-header-topic' },
          [
            modalEdit(
              'div',
              { class: 'fertilizer-topic-name' },
              'Fertilizer Name :'
            ),
            modalEdit('input', {
              attrs: {
                value: fertilizer.fertilizer_name,
                class: 'add-fertilizer-input',
                type: 'text',
              },
              domProps: {
                value: fertilizer.fertilizer_name,
                id: 'fertilizer_name_edit',
              },
            }),
            modalEdit('hr'),
            modalEdit(
              'div',
              { class: 'fertilizer-topic-name' },
              'Fertilizer Description :'
            ),
            modalEdit('input', {
              attrs: {
                value: fertilizer.fertilizer_des,
                class: 'add-fertilizer-input',
                type: 'text',
                id: 'fertilizer_des_edit',
              },
              model: {
                value: this.testEdit,
              },
            }),
            modalEdit('hr'),
            modalEdit(
              'div',
              { class: 'fertilizer-topic-name' },
              'Fertilizer Topic :'
            ),
            modalEdit('input', {
              attrs: {
                value: fertilizer.fertilizer_item_topic,
                class: 'add-fertilizer-input',
                type: 'text',
                id: 'fertilizer_topic_edit',
              },
            }),
            modalEdit('hr'),
            modalEdit(
              'div',
              { class: 'fertilizer-topic-name' },
              'Fertilizer Type :'
            ),
            modalEdit(
              'select',
              {
                attrs: {
                  value: fertilizer.fertilizer_type,
                  class: 'add-fertilizer-input',
                  type: 'text',
                  id: 'fertilizer_type_edit',
                },
              },
              [
                modalEdit(
                  'option',
                  { attrs: { value: 'fertilizer' } },
                  'Fertilizer'
                ),
                modalEdit('option', { attrs: { value: 'water' } }, 'Water'),
                modalEdit('option', { attrs: { value: 'mix' } }, 'Mix'),
              ]
            ),
            modalEdit('hr'),
            modalEdit(
              'div',
              { class: 'fertilizer-topic-name' },
              'Fertilizer Total :'
            ),
            modalEdit('input', {
              attrs: {
                value: fertilizer.fertilizer_total,
                class: 'add-fertilizer-input',
                type: 'number',
                id: 'fertilizer_total_edit',
              },
            }),
            modalEdit('hr'),
          ]
        ),
      ])
      this.$bvModal
        .msgBoxConfirm([bodyModal], {
          title: [headerModal],
          centered: true,
          size: 'lg',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          okTitle: modalEdit(
            'button',
            { class: 'btn btn-save btn-secondary' },
            'Save'
          ),
          cancelTitle: modalEdit(
            'button',
            { class: 'btn btn btn-cacel btn-secondary' },
            'Cancel'
          ),
        })
        .then(async (value) => {
          if (value) {
            fertilizerEdit.fertilizer_name = document.getElementById(
              'fertilizer_name_edit'
            ).value
            fertilizerEdit.fertilizer_des = document.getElementById(
              'fertilizer_des_edit'
            ).value
            fertilizerEdit.fertilizer_item_topic = document.getElementById(
              'fertilizer_topic_edit'
            ).value
            fertilizerEdit.fertilizer_type = document.getElementById(
              'fertilizer_type_edit'
            ).value
            fertilizerEdit.fertilizer_total = parseInt(
              document.getElementById('fertilizer_total_edit').value
            )
            console.log('wait for update')
            const modalStatus = await this.updateFertilizer(
              fertilizerEdit,
              fertilizer.fertilizer_id
            )
            if (modalStatus === true) {
              this.$bvModal.hide()
            }
          } else {
            // this.$bvModal.hide()
          }
        })
    },
    async updateFertilizer(fertilizer, fertilizerId) {
      const response = await axios.put(
        'http://localhost:5000/fertilizer/updateFertilizer',
        { data: fertilizer, id: fertilizerId }
      )
      if (response.status === 200) {
        const load = await this.loadData()
        if (load === true) {
          return true
        } else {
          return false
        }
      }
    },
    deleteFertilizer(fertilizer) {
      this.deleteFertilizerItem = fertilizer
      this.$refs['delete-Fertilizer'].show()
    },
    closeModalFertilizer() {
      this.$refs['delete-Fertilizer'].hide()
    },
    async confirmDeleteFertilizer() {
      try {
        const response = await axios.delete(
          'http://localhost:5000/fertilizer/deleteFertilizer',
          { data: { fertilizer_id: this.deleteFertilizerItem.fertilizer_id } }
        )
        if (response.status === 200) {
          const loadFer = await this.getFertilizer()
          if (loadFer === 1) {
            this.$refs['delete-Fertilizer'].hide()
            this.toast(
              'success',
              `Delete : ${this.deleteFertilizerItem.fertilizer_name} Success`,
              'Delete Fertilizer'
            )
          }
        }
      } catch (error) {
        console.log('error')
      }
    },
  },
  mounted() {
    this.getFertilizer()
    setInterval(() => {
      this.loadData()
    }, 3000)
    setInterval(() => {
      this.getFertilizer()
    }, 3000)
  },
  computed: {
    lenFertilizer() {
      let count = 0
      this.fertilizer.forEach((element) => {
        if (element.fertilizer_type === 'fertilizer') {
          count++
        }
      })
      return count
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300;400&display=swap');
:root {
  --color-main: #1a202e;
  --color-softblack: rgb(75, 73, 73);
  --color-black: #58595a;
  --color-secondary: #8da2fb;
  --color-dark-violet: #546ddf;
  --color-menu: #283046;
  --color-soft-primary: #404860;
  --color-gray: #f3f3f3;
  --color-sky: #03a9f4;
  --color-green: #4ba369;
  --color-orange: #ffa147;
  --color-red: #ea5455;
  --color-red2: #e03d3d;
  --color-success: #16b322;
  --color-active: #28c76f;
  --color-blog: #6679e7;
  --color-background: #c2c9d9;
  --color-softbackground: #f5f6fb;
  --color-yellow: #ffeab7;
  --color-softRed: #e36b48;
  --color-softGreen: #76e28c;
  --color-toast-success: #68e49b;
  --color-btn-background: #b4b1df;
  --color-bg-tank: #a8bbbf;
}

/* navigation bar */

.btn-primary {
  border: 0 solid transparent;
}

.btn-secondary {
  border: 0 solid transparent;
}

.main-content {
  margin-left: 0px;
  transition: 0.7s all;
}

.content {
}

.activities {
  width: calc(100% - 280px);
  margin-left: 280px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

/* system */
.btn {
  background-color: transparent;
  border: 0px solid transarent;
}

.btn:hover {
  background-color: transparent;
  border: 0px solid transparent;
}

::-webkit-scrollbar {
  display: none;
  width: 20px;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}

/* activity */
.activity {
  background-color: white;
  width: 99%;
  height: 517px;
  border-radius: 10px;
  max-height: 517px;
  overflow-y: scroll;
}

.activity-header {
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding: 20px;
}

.btn-add-activity {
  border: 0px solid transparent;
  background-color: #6172e4;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  color: white;
  transition: 0.7s;
}

.btn-add-activity:hover {
  background-color: var(--color-dark-violet);
  /*box-shadow: inset 1px 0 10px var(--color-menu);*/
  box-shadow: 1px 1px 5px #718af8;
  transition: 0.7s;
}

.activity-body {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  margin: 0 auto;
  width: 100%;
  padding-bottom: 30px;
}

.activity-blog {
  color: white;
  width: 90%;
  padding-bottom: 20px;
  background: var(--color-blog);
  border-radius: 10px;
  margin: 1rem auto;
  box-shadow: 0 2px 5px var(--color-blog);
}

.activity-blog-active {
  background-color: var(--color-active);
  box-shadow: 0 2px 5px var(--color-active);
}

.activity-blog-waiting {
  background-color: var(--color-orange);
  box-shadow: 0 2px 5px var(--color-orange);
}

.addActivity-name {
  color: var(--color-blog);
}

.activity-body-header {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding: 20px 20px 0 20px;
  font-size: 1.25rem;
}

.activity-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  place-items: center;
  width: 90%;
  height: 50px;
  margin: 0 auto;
  padding: 5px 0 !important;
}

.day {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: var(--color-softbackground);
}

.day-active {
  background-color: var(--color-yellow);
}

.activity-mode,
.activity-zone,
.activity-days {
  padding: 5px 20px;
  color: white;
}

.activity-days {
  color: black;
}

.btn-activity-status-toggle {
  position: relative;
  width: 40px;
  height: 20px;
  -webkit-appearance: none;
  background-color: var(--color-gray);
  border-radius: 20px;
}

.btn-activity-status-toggle:checked {
  background-color: var(--color-active);
  transition: 0.5s;
}

.btn-activity-status-toggle:before {
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

.btn-activity-status-toggle:checked:before {
  left: 20px;
}

.show-plant-plot {
  font-size: 0.75rem;
  color: var(--color-gray);
}

.show-mode {
  padding-left: 10px;
}

.la-network-wired {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 100%;
  font-size: 1.25rem;
}

.mode-days {
  display: flex;
}

.mode-blog {
  display: flex;
  align-items: center;
  width: 50%;
}

.time-begin {
  font-size: 1.25rem;
}

/** Edit Activity */
.btn-edit-activity {
  background-color: transparent;
  border: 0 solid transparent;
  color: white;
  font-size: 1.5rem;
  transition: ease-in-out 0.5s;
}

.btn-edit-activity:hover {
  color: var(--color-background);
  transition: ease-in-out 0.5s;
}

/** Activity working */
.activity-working {
  margin-left: 2%;
  background-color: white;
  width: 99%;
  height: 517px;
  border-radius: 10px;
  max-height: 517px;
  overflow-y: scroll;
}

div#addFertilizer___BV_modal_content_.modal-content {
  background-color: white !important;
}

/** AddActivityModal */
div#addActivity___BV_modal_body_ {
  background-color: white;
  max-height: 95vh;
  border-radius: 10px;
  overflow-y: scroll;
}

header.modal-header {
  display: inline;
  padding: 20px;
  background-color: var(--color-blog) !important;
  color: white;
  font-size: 20px;
}

.modal-topic {
  padding: 20px;
}

header#addActivity___BV_modal_header_ {
  align-items: center;
}

footer#addActivity___BV_modal_footer_ {
  display: flex !important;
  align-items: center;
  justify-items: center;
}

.btn-save {
  width: 150px;
  padding: 10px 0;
  border-radius: 20px;
  background-color: var(--color-blog);
  border: 1px solid transparent;
}

.btn-save:hover {
  background-color: var(--color-blog);
  box-shadow: 0px 1px 10px var(--color-blog);
  border: 1px solid transparent;
}

.btn-cacel {
  width: 150px;
  padding: 10px 0;
  border-radius: 20px;
  background-color: transparent;
  color: var(--color-blog);
  border: 1px solid var(--color-blog);
}

.btn-cacel:hover {
  color: var(--color-blog);
  border: 1px solid var(--color-blog);
  box-shadow: 0px 1px 10px var(--color-blog);
}

.modal-body {
  margin: 0 auto;
  width: 80%;
}

.addActivity-mode {
  margin-top: 20px;
  align-items: center;
}

.addActivity-name {
  text-align: left;
}

.addActivity-mode-type {
  width: 100%;
}

.custom-select {
  border: 1px solid var(--color-blog);
}

.plant_plot_select {
  margin-top: 10px;
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  border: 1px solid var(--color-blog);
}

.plant_plot_select:checked {
  background-color: var(--color-secondary);
}

.plant_plot_select:before {
  display: inline-block;
  vertical-align: middle;
  content: '';
}

.plant_plot_select:checked:before {
  content: '';
}

.setting-input {
  border: 1px solid var(--color-blog);
}

#addActivityMode {
  padding: 10px 10px;
  width: 100%;
  border: 0 solid transparent;
  border-radius: 10px;
  background-color: var(--color-gray);
}

.addActivity-zone {
  margin-top: 20px;
}

.addActivity-object {
  margin-top: 20px;
  width: 100%;
}

.addActivity-zone-select {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.addActivity-time-begin,
.addActivity-time-end {
  align-items: flex-end;
  margin-top: 20px;
}

.input-time {
  font-size: 3rem;
  width: 40%;
  text-align: center;
  background: transparent;
  border: 0 solid transparent;
  border-bottom: 1px solid var(--color-secondary);
}

.input-time:focus {
  outline: none;
  background: transparent;
  border: 0 solid transparent;
  border-bottom: 1px solid var(--color-secondary);
}

.colon {
  text-align: center;
  font-size: 3rem;
  width: 20%;
  color: var(--color-black);
}

.addActivity-time {
  display: flex;
  background-color: var(--color-softbackground);
  padding: 10px;
  border-radius: 10px;
}

.addActivity-frequency {
  margin-top: 20px;
  align-items: center;
}

.addActivity-input-day {
  display: none;
}

.addActivity-frequency-select {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

/** setting */
.setting {
  margin-top: 20px;
}

.setting-object {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
}

.setting-name,
.setting-input {
  margin-top: 20px;
  width: 100%;
  height: 2rem;
}

.setting-input {
  width: 90%;
  border: 1px solid var(--color-blog);
  border-radius: 5px;
  background-color: white;
  padding: 5px;
}

.setting .addActivity-name {
  margin-top: 20px;
}

.setting-fertilizer {
  margin-top: 20px;
}

.setting-fertilizer .addActivity-name {
  margin-top: 20px;
}

.setting-object-fertilizer {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
}

.setting-object-fertilizer .in-setting-fertilizer .setting-input {
  display: flex;
  float: right;
}

.in-setting-fertilizer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

/* Toast */

.toast {
  border: 0 solid transparent;
  border-radius: 5px;
  background-color: white !important;
}

.toast-body {
  border-radius: 10px;
  background-color: white;
  margin-left: 0px !important;
  padding: 10px !important;
}

.massage-content {
  padding: 10px;
  height: 100%;
  margin-left: 0px !important;
}

.b-toast {
  background-color: white;
  border-left: 10px solid var(--color-active);
}

.b-toast-success .toast .toast-header {
  background-color: white;
  color: var(--color-main);
  border-bottom: 0 solid transparent;
  padding: 0px !important;
}

.b-toast-success .toast {
  background-color: white;
  color: var(--color-main);
  border-bottom: 0 solid transparent;
}

.b-toast-create-success {
  border-radius: 0px;
}

header.toast-header {
  height: 100%;
  padding-left: 10px;
}

.mr-2 {
  padding-left: 40px;
  padding-top: 10px;
}

div.toast-body {
  height: 100%;
  margin-left: 0px !important;
  padding: 0px !important;
}

.icon-success {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: white;
  background-color: var(--color-active);
  border-radius: 100%;
}

.massage-content {
  display: flex;
  align-items: center;
}

.toast-text {
  margin-left: 10px;
}
/** Pump */
.pump {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-left: 280px;
  width: calc(100% - 280px);
  height: 100px;
  padding: 0 20px;
}

.pump-1,
.pump-2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 99%;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
}

.pump-2 {
  margin-left: 2%;
}

.des {
  display: flex;
  align-items: center;
}

.pump-name {
  float: left;
  margin-left: 20px;
}

.icon-pump {
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: var(--color-gray);
  transition: 0.5s;
}

.pump-checkBox {
  float: right;
  position: relative;
  width: 40px;
  height: 20px;
  -webkit-appearance: none;
  background-color: var(--color-gray);
  border-radius: 20px;
}

.pump-checkBox:checked {
  background-color: var(--color-active);
  transition: 0.5s;
}

.pump-checkBox:before {
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

.pump-checkBox:checked:before {
  left: 20px;
}

/** Fertilizer */
.fertilizer {
  width: calc(100% - 280px);
  margin-left: 280px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-height: 300px;
  padding: 0 20px;
}

.fertilizer-mix {
  width: calc(100% - 280px);
  margin-left: 280px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  min-height: 300px;
  padding: 0 20px;
}

.fertilizer-blog {
  width: 98%;
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
  min-height: 330px;
}

.add-fertilizer {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.circle-btn-add {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-blog);
  width: 100px;
  height: 100px;
  font-size: 5rem;
  border-radius: 100%;
  border: 0 solid transparent;
  box-shadow: 0 2px 5px var(--color-blog);
  color: white;
}

.fertilizer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-control-edit {
  background-color: transparent;
  border: 0 solid transparent;
  width: 30px;
  font-size: 1.5rem;
}

.btn-control-del {
  background-color: transparent;
  border: 0 solid transparent;
  width: 30px;
  font-size: 1.5rem;
  color: var(--color-red);
  transition: ease-in-out 0.2s;
}

.btn-control-del:hover {
  color: red;
}

.fertilizer-item-body {
  display: flex;
  margin-top: 10px;
  transition: ease-in-out 0.2s;
}

.fertilizer-item-body-mix {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 330px;
  align-items: center;
}

.fertilizer-item-body-mix:nth-child(1) {
  align-items: flex-start;
}

.text-mix {
  text-align: center;
}

.mix-control {
  background-color: #f7f7f7;
  width: 100%;
  height: 100px;
  border-radius: 10px;
}

.fertilizer-tank {
  display: flex;
  width: 50%;
}

.fertilizer-tank-svg {
  margin: 0 auto;
  width: 50%;
  margin-top: 20px;
}

.fertilizer-tank-svg text {
  text-align: center;
  margin: 0 auto;
  color: white;
}

.fertilizer-tank-rect {
  width: 100%;
  height: 300px;
  fill: var(--color-bg-tank);
}

.fertilizer-tank-rect-result {
  transform: rotate(180deg);
  transform-origin: 50% 100%;
  width: 100%;
  height: 100px;
  fill: var(--color-blog);
}

.fertilizer-tank-mix {
  height: 300px;
  margin: 0 auto;
}

.fertilizer-control {
  padding: 20px;
  width: 100%;
}

.row-control {
  margin-top: 10px;
  height: 50px;
}

.row1-text-des {
  text-align: center;
  color: var(--color-bg-tank);
  font-size: 0.8rem;
}

.row1 {
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: flex-end;
}

.status-vale {
  width: 50px;
  height: 50px;
  background-color: var(--color-active);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease-in-out 0.5s;
}

.status-vale-active {
  width: 50px;
  height: 50px;
  background-color: var(--color-active);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease-in-out 0.5s;
}

.status-vale-off {
  width: 50px;
  height: 50px;
  background-color: var(--color-red);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease-in-out 0.5s;
}

.status-vale-text {
  color: white;
  font-size: 0.6rem;
}

svg.circle {
  width: 105px;
  height: 105px;
  margin: 0 auto;
}

.row2 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff8f2;
  border-radius: 10px;
  color: var(--color-sky);
}

.input-fertilizer-control-manual {
  width: 100px;
  background-color: transparent;
  border: 0 solid transparent;
  text-align: right;
}

.input-fertilizer-control-manual:focus {
  border: 0 solid transparent;
}

.unit {
  color: var(--color-bg-tank);
}

.row3 {
  font-size: 0.8rem;
  color: #8a8a8a;
  padding: 20px;
  height: 110px;
  background-color: #f7f7f7;
  border-radius: 10px;
}

.text-control {
  text-align: center;
}

.control-button {
  display: flex;
  justify-content: space-between;
  color: white;
}

.btn-control-on,
.btn-control-off {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 0 solid transparent;
  color: white;
}

.btn-control-on {
  transition: 0.5s;
  background-color: var(--color-active);
}

.btn-control-off {
  transition: 0.5s;
  background-color: var(--color-red);
}

.btn-control-on:hover {
  box-shadow: 0 2px 5px var(--color-active);
  transition: 0.5s;
  background-color: var(--color-active);
}

.btn-control-off:hover {
  box-shadow: 0 2px 5px var(--color-red);
  transition: 0.5s;
  background-color: var(--color-red);
}

.la-glass-whiskey {
  height: 150px;
}

.pump-active {
  background-color: var(--color-active);
  transition: 0.5s;
}

.fertilizer-item-status {
  position: relative;
  width: 40px;
  height: 20px;
  -webkit-appearance: none;
  background-color: var(--color-gray);
  border-radius: 20px;
}

.fertilizer-item-status:before {
  content: '';
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  transform: scale(1.1);
  box-shadow: 0 2px 5px var(--color-main);
  border-radius: 100%;
  transition: 0.5s;
}

.fertilizer-item-status:checked {
  background-color: var(--color-active);
  transition: 0.5s;
}

.fertilizer-item-status:checked:before {
  left: 20px;
  transition: 0.5s;
}

.circle-fertilizer {
  fill: none;
  stroke: var(--color-gray);
  stroke-width: 5;
  stroke-dasharray: 230;
  stroke-linecap: round;
  transform: rotate(130deg);
  transform-origin: 50% 50%;
}

.circle-fertilizer-result {
  stroke-dashoffset: 50;
  transition: ease-out 0.5s;
  stroke: var(--color-active);
  box-shadow: 0 2px 10px var(--color-active);
}

.control-mix {
  padding: 10px;
}

.mix-status-blog {
  width: 90%;
  margin-top: 10px;
  font-size: 0.8rem;
  color: #8a8a8a;
  padding: 10px;
  height: 110px;
  background-color: #f7f7f7;
  border-radius: 10px;
  float: right;
}

.mix-status-text {
  text-align: center;
  margin-bottom: 1rem;
}

.mix-content {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 10px;
  background-color: var(--color-red);
  height: 50px;
}

/*Delete Fertilizer*/
header.deleteModal {
  background-color: transparent !important;
}

.trash-icon-modal {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: var(--color-red);
  font-size: 50px;
  z-index: 100000000;
  margin-top: -50px;
  color: white;
}

div#__BVID__43___BV_modal_content_.modal-content {
  background-color: transparent !important;
  border: 0 solid transparent;
}

div#__BVID__43___BV_modal_body_.modal-body {
  background-color: white;
  width: 100%;
  z-index: 50;
  border-radius: 10px;
  padding: 0px;
}

.red-line {
  width: 100%;
  height: 10px;
  background-color: var(--color-red);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.delete-label {
  margin-top: 20px;
  text-align: center;
  font-size: 2rem;
  color: var(--color-main);
}

.delete-info {
  margin-top: 10px;
  text-align: center;
  color: var(--color-black);
}

.list-info {
  margin-left: 40%;
  list-style: none;
  color: var(--color-black);
}

.list-info li::before {
  content: '- ';
}

.delete-footer {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-content: center;
  place-items: center;
  background-color: var(--color-gray);
  width: 100%;
  height: 50px;
}

.btn-cancel,
.btn-confirm {
  width: 100%;
  height: 50px;
  color: white;
}

.btn-confirm {
  background-color: var(--color-red);
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  transition: ease-in-out 0.5s;
}

.btn-cancel {
  background-color: var(--color-gray);
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  color: var(--color-black);
}

.btn-confirm:hover {
  background-color: var(--color-red2);
  color: white;
  transition: ease-in-out 0.5s;
}

/*.sensor-name {
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
} */

@media only screen and (max-width: 1124px) {
  .activities {
    display: block;
    margin-left: 0px;
    width: 100%;
  }
  .activity {
    width: 100%;
  }
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
    width: 100%;
  }
  header {
    left: 0px;
  }

  /* activity */
  .activity-body {
    display: flex;
    margin: 0 auto;
    width: 90%;
    overflow-x: scroll;
  }

  .activity {
    height: 100%;
  }

  .activity-mode {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .activity-working {
    width: 100%;
    margin-top: 20px;
    height: 100%;
    margin-left: 0px;
  }

  .activity-blog {
    width: 150%;
    margin-left: 20px;
  }

  .day {
    width: 30px;
    height: 30px;
    margin-left: 5px;
  }

  .activity-days {
    margin-left: 0px;
  }

  .pump {
    width: 100%;
    margin-left: 0px;
    grid-gap: 5px;
  }

  .pump-1,
  .pump-2 {
    width: 100%;
    margin: 0px;
  }
}

@media only screen and (max-width: 376px) {
  .activities {
    margin-left: 0px;
    width: 100%;
  }
  .activity {
    width: 100%;
  }
  .activity-body {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
    margin: 0 auto;
  }
  .activity-blog {
    width: 120%;
  }
  .day {
    width: 20px;
    height: 20px;
  }
  .activity-days {
    margin-left: 0px;
  }
  .addActivity-zone-select {
    grid-template-columns: repeat(2, 1fr);
  }
  .setting-object {
    grid-template-columns: repeat(2, 1fr);
  }
  .setting-object-fertilizer {
    grid-template-columns: repeat(1, 1fr);
  }
  .btn-save {
    width: 100px;
  }
  .btn-cacel {
    width: 100px;
  }
}
</style>
