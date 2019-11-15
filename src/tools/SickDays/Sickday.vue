<template>
  <div class="row">
    <div class="cell hours">
      <generic-input
        v-model="sickday.hours"
        min="0"
        step="0.01"
        type="number"
        @enter="sendForm()"
      />
    </div>
    <div class="cell date">
      <date-input v-model="sickday.date" @input="sendForm()"></date-input>
    </div>
    <div class="cell weekday">{{ weekday }}</div>
    <div class="cell days">{{ days }}</div>
    <div class="cell cumulative-days">{{ cumulativeDays }}</div>
    <div class="cell remove-cell align-center">
      <nv-button class="table-delete-button" @click="deleteSickDay"
        >x</nv-button
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-delete-button {
  padding: 0px 6px 2px 6px;
  width: auto;
  height: auto;

  &:hover {
    color: white;
    background-color: #b19971;
  }
}

.row {
  display: table-row;
}
.cell {
  display: table-cell;
  padding: 3px 5px;
  letter-spacing: 0.6px;
  width: 2%;

  @media screen and (max-width: 640px) {
    padding: 3px 10px;
  }
}

input {
  margin-left: 0;
}
</style>

<script lang="ts">
import Vue from "vue";
import GenericInput from "@/components/GenericInput.vue";
import DateInput from "@/components/DateInput.vue";
import NvButton from "@/components/NvButton.vue";
export default Vue.extend({
  components: { GenericInput, DateInput, NvButton },
  props: ["sickday", "workHours", "language", "accumulatedHours"],
  data() {
    return {
      text: {
        en: { date: "Date", hours: "Hours" },
        dk: { date: "Dag", hours: "Timer" }
      },
      weekdays: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ]
    };
  },
  computed: {
    weekday: function(): string {
      return this.weekdays[new Date(this.sickday.date).getDay()];
    },
    days: function(): string {
      return (this.sickday.hours / this.workHours).toFixed(2);
    },
    cumulativeDays: function(): string {
      return (this.accumulatedHours / this.workHours).toFixed(2);
    }
  },
  methods: {
    deleteSickDay(): void {
      this.$emit("delete", this.sickday.id);
    },
    sendForm(): void {
      this.$emit("create-sickday", this.sickday.id);
    }
  }
});
</script>
