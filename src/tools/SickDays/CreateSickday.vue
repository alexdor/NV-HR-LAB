<template>
  <div class="row">
    <div class="cell date">
      <date-input v-model="date" @input="sendForm()" />
    </div>
    <div class="cell weekday"></div>
    <div class="cell hours">
      <input
        v-model="hours"
        type="number"
        size="3"
        @keyup.enter="sendForm()"
        @blur="sendForm()"
      />
    </div>
    <div class="cell"></div>
    <div class="cell"></div>
  </div>
</template>

<script lang="ts">
import "@/assets/main.scss";
import Vue from "vue";
import { NewSickDay } from "./interfaces";
import DateInput from "@/components/DateInput.vue";
import { uuidv4 } from "@/helpers/uuid";
export default Vue.extend({
  components: {
    DateInput
  },
  data() {
    return {
      id: uuidv4(),
      date: new Date(),
      hours: 0,
      isCreating: true
    };
  },
  methods: {
    openForm(): void {
      this.isCreating = true;
    },
    closeForm(): void {
      this.isCreating = false;
    },
    sendForm(): void {
      if (this.date && this.hours && this.hours > 0) {
        const date = this.date;
        const hours = this.hours;
        this.$emit("create-sickday", {
          date,
          hours
        } as NewSickDay);
        this.date = new Date();
        this.id = uuidv4();
        this.hours = 0;
        this.isCreating = true;
      }
    }
  }
});
</script>
