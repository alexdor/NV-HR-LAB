<template>
  <div class="row">
    <div class="cell date">
      <date-input v-model="sickday.date"></date-input>
    </div>
    <div class="cell weekday">{{ weekday }}</div>
    <div class="cell hours">
      <generic-input v-model="sickday.hours" min="0" type="number" />
    </div>
    <div class="cell days">{{ days }}</div>
    <div class="cell cumulative-days">{{ cumulativeDays }}</div>
    <div class="cell remove-cell align-center">
      <nv-button class="table-delete-button">x</nv-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-delete-button {
  padding: 1px 7px 3px 7px;
  width: auto;
  height: auto;

  &:hover {
    color: white;
    background-color: #b19971;
  }
}
</style>

<script lang="ts">
import "@/assets/main.scss";
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
    deleteTodo(sickday: string): void {
      this.$emit("delete-todo", sickday);
    }
  }
});
</script>
