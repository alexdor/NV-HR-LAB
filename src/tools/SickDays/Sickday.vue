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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GenericInput from "@/components/GenericInput.vue";
import DateInput from "@/components/DateInput.vue";
export default Vue.extend({
  components: { GenericInput, DateInput },
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
<style lang="scss" scoped>
.row {
  display: table-row;
}
.cell {
  display: table-cell;
  padding: 3px 5px;
  width: 2%;
  &.date {
    width: 0.01%;
  }
}
</style>
