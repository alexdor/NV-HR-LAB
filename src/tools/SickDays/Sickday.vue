<template>
  <div class="row">
    <div class="cell hours">
      <generic-input
        v-if="!sickday.generated"
        v-model="sickday.hours"
        min="0"
        step="0.01"
        type="number"
        @input="dateUpdate()"
      />
      <span v-else> {{ sickday.hours }}</span>
    </div>

    <div class="cell date">
      <date-input
        v-if="!sickday.generated"
        v-model="sickday.date"
        @input="dateUpdate()"
      ></date-input>
      <span v-else class="cell date">{{ formatedDate }}</span>
    </div>
    <div class="cell weekday">{{ sickday.weekDay }}</div>
    <div class="cell days">{{ days }}</div>
    <div class="cell cumulative-days">{{ cumulativeDays }}</div>
    <div v-if="!sickday.generated" class="cell remove-cell align-center">
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

.hours span,
.date span {
  padding: 11px 30px;
  width: 220px;
  border-radius: 30px;
  font-size: 16px;
  margin: 5px;
}

input {
  margin-left: 0;
  color: #ae966c;
}
</style>

<script lang="ts">
import Vue from "vue";
import GenericInput from "@/components/GenericInput.vue";
import DateInput from "@/components/DateInput.vue";
import NvButton from "@/components/NvButton.vue";
import { getWeekDay } from "@/helpers/days";
import { format } from "date-fns";
export default Vue.extend({
  components: { GenericInput, DateInput, NvButton },
  props: ["sickday", "workHours", "language", "accumulatedHours"],
  data() {
    return {
      text: {
        en: { date: "Date", hours: "Hours" },
        dk: { date: "Dag", hours: "Timer" }
      }
    };
  },
  computed: {
    days: function(): string {
      return (this.sickday.hours / this.workHours).toFixed(2);
    },
    cumulativeDays: function(): string {
      return (this.accumulatedHours / this.workHours).toFixed(2);
    },
    formatedDate: function(): string {
      return format(this.sickday.date, "dd MMM yyyy");
    }
  },
  methods: {
    deleteSickDay(): void {
      this.$emit("delete", this.sickday.id);
    },
    dateUpdate(): void {
      this.sickday.weekDay = getWeekDay(this.sickday.date);
      this.$emit("date-update", this.sickday.id);
    }
  }
});
</script>
