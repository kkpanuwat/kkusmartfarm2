<template>
  <b-modal
    class="add-fertilizer-modal"
    id="addFertilizer"
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
      <p class="modal-topic">Add Fertilizer</p>
      <h5></h5>
    </template>

    <template class="modal-body">
      <div class="add-fertilizer-fertilizer-name modal-header-topic">
        <div class="fertilizer-topic-name">Fertilizer Name :</div>
        <input
          v-model="data.fertilizer_name"
          class="add-fertilizer-input"
          type="text"
          name=""
          id=""
        />
        <hr />
      </div>
      <div class="add-fertilizer-fertilizer-name modal-header-topic">
        <div class="fertilizer-topic-name">Fertilizer Desciption :</div>
        <input
          v-model="data.fertilizer_des"
          class="add-fertilizer-input"
          type="text"
          name=""
          id=""
        />
        <hr />
      </div>
      <div class="add-fertilizer-fertilizer-name modal-header-topic">
        <div class="fertilizer-topic-name">Fertilizer Topic :</div>
        <input
          v-model="data.fertilizer_item_topic"
          class="add-fertilizer-input"
          type="text"
          name=""
          id=""
        />
        <hr />
      </div>
      <div class="add-fertilizer-fertilizer-name modal-header-topic">
        <div class="fertilizer-topic-name">Fertilizer Type :</div>
        <b-form-select
          v-model="data.fertilizer_type"
          class="add-fertilizer-input"
        >
          <b-form-select-option
            v-for="(item, index) in fertilizer_type"
            :key="index"
            :value="item"
          >
            {{ item }}</b-form-select-option
          >
        </b-form-select>
        <hr />
      </div>
      <div class="add-fertilizer-fertilizer-name modal-header-topic">
        <div class="fertilizer-topic-name">Fertilizer Total :</div>
        <input
          v-model="data.fertilizer_total"
          class="add-fertilizer-input"
          type="number"
          name=""
          id=""
        />
        <hr />
      </div>
    </template>
    <template #modal-footer>
      <b-button @click="closeModal('addFertilizer')" class="btn btn-cacel"
        >Cancel</b-button
      >
      <b-button @click="save()" class="btn btn-save">Save</b-button>
    </template>
  </b-modal>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      fertilizer_type: ['fertilizer', 'water', 'mix'],
      data: {
        fertilizer_name: null,
        fertilizer_des: null,
        fertilizer_type: null,
        fertilizer_status: 'off',
        fertilizer_total: 0,
        fertilizer_item_topic: null,
        fertilizer_tank_level: 0,
      },
    }
  },
  methods: {
    closeModal(args) {
      this.$root.$emit('bv::hide::modal', args)
    },
    async save() {
      const url = 'http://localhost:5000/fertilizer/addFertilizer'
      const response = await axios.post(url, this.data)
      console.log(response.data)
      const closeActivity = await this.closeModal('addFertilizer')
      console.log(closeActivity)
    },
  },
}
</script>

<style>
.modal-header {
  display: inline;
  padding: 20px;
  background-color: var(--color-blog) !important;
  color: white;
  font-size: 20px;
}

.modal-header-topic {
  margin-top: 20px;
}

.fertilizer-topic-name {
  color: var(--color-blog);
}

.add-fertilizer-input {
  width: 100%;
  margin-top: 10px;
  border: 1px solid var(--color-blog);
  border-radius: 10px;
  padding: 10px;
}

select.add-fertilizer-input {
  height: 3rem;
}
</style>
