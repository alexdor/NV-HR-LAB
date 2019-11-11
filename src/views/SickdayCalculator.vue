<template>
  <div>
    <div class="header-image sb-header"></div>
    <div class="header-text">
      <h2>Sygedagsberegner</h2>
    </div>
    <div class="input-container">
      <div class="input-cols">
        <div class="input-row">
          <label for="workHours">{{ text[language].workHours }}:</label>
          <generic-input
            v-model="workHours"
            name="workHours"
            type="number"
            step="0.01"
          />
        </div>
      </div>
    </div>
    <div class="sb-table-container">
      <div class="table">
        <div class="tableHeader">
          <div class="row">
            <div class="cell" @click="sortByDate()">
              {{ text[language].date }}
            </div>
            <div class="cell">{{ text[language].day }}</div>
            <div class="cell" @click="sortByHours()">
              {{ text[language].hours }}
            </div>
            <div class="cell">{{ text[language].days }}</div>
            <div class="cell">{{ text[language].daysSick }}</div>
          </div>
        </div>
        <div class="tableBody">
          <sickday
            v-for="(sickday, index) in sickdays"
            :key="sickday.id"
            :sickday.sync="sickday"
            :language="language"
            :work-hours.sync="workHours"
            :accumulated-hours="
              sickdays
                .slice(0, index + 1)
                .reduce((total, next) => total + Number(next.hours), 0)
            "
          ></sickday>
          <create-sickday @create-sickday="createSickday"></create-sickday>
        </div>
      </div>
      <div class="sb-table-below">
        <div class="sb-table-total">
          <b>Total Hours: </b>
          {{ sickdays.reduce((a, b) => a + Number(b.hours), 0) }}
        </div>
        <div class="sb-table-add">
          <a><h3>Add to table</h3></a>
          <nv-button class="table-add-button">+</nv-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-add-button {
  padding: 1px 6px 3px 6px;
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
import Sickday from "@/tools/SickDays/Sickday.vue";
import CreateSickday from "@/tools/SickDays/CreateSickday.vue";
import { NewSickDay } from "@/tools/SickDays/interfaces";
import GenericInput from "@/components/GenericInput.vue";
import NvButton from "@/components/NvButton.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    Sickday,
    GenericInput,
    CreateSickday,
    NvButton
  },
  props: { language: { type: String, default: "en" } },
  data() {
    return {
      sortBy: "none",
      sickdays: [] as NewSickDay[],
      workHours: 7.4,
      weekdays: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      text: {
        en: {
          date: "Date",
          day: "Weekday",
          hours: "Hours",
          days: "Days",
          daysSick: "Days Sick",
          workHours: "Employee's daily hours"
        },
        dk: {
          date: "Fraværsdato",
          day: "Ugedag",
          hours: "Timer",
          days: "Dage",
          daysSick: "Dage Sygefravær",
          workHours: "Medarbejderens daglig arbejdstid"
        }
      }
    };
  },
  methods: {
    createSickday(newSickday: NewSickDay): void {
      this.sickdays.push(newSickday);
    },
    sortByDate(): void {
      if (this.sortBy == "date") {
        this.sortBy = "date2";
        this.sickdays.sort((a, b) => +new Date(b.date) - +new Date(a.date));
      } else {
        this.sortBy = "date";
        this.sickdays.sort((a, b) => +new Date(a.date) - +new Date(b.date));
      }
    },
    sortByHours(): void {
      if (this.sortBy == "hours") {
        this.sortBy = "hours2";
        this.sickdays.sort((a, b) => +new Date(b.hours) - +new Date(a.hours));
      } else {
        this.sortBy = "hours";
        this.sickdays.sort((a, b) => +new Date(a.hours) - +new Date(b.hours));
      }
    }
  }
});
</script>
