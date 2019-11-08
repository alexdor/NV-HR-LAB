<template>
  <div class="row">
    <div class="cell date">
      <input v-model="sickday.date" type="date" />
    </div>
    <div class="cell weekday">{{ weekday }}</div>
    <div class="cell hours">
      <input v-model="sickday.hours" type="number" />
    </div>
    <div class="cell days">{{ days }}</div>
    <div class="cell cumulative-days">{{ cumulativeDays }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
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
input {
  border: 2px solid #ae966c;
  border-radius: 10px;
  text-align: left;
  padding: 5px;
}
input[type="number"] {
  width: 60px;
}
</style>
