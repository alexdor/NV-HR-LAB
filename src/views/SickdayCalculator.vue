<template>
  <div>
    <div class="header-image sb-header"></div>
    <div class="header-text">
      <h2 class="slide-transition">Sygedagsberegner</h2>
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
            <div class="cell pointer" @click="sortByHours()">
              {{ text[language].hours }}
            </div>
            <div class="cell pointer" @click="sortByDate()">
              {{ text[language].date }}
            </div>
            <div class="cell">{{ text[language].day }}</div>
            <div class="cell">{{ text[language].days }}</div>
            <div class="cell">{{ text[language].daysSick }}</div>
          </div>
        </div>
        <div class="tableBody">
          <sickday
            v-for="(sickday, index) in sickdays"
            :key="sickday.id"
            ref="sickdays"
            :sickday.sync="sickday"
            :language="language"
            :work-hours.sync="workHours"
            :accumulated-hours="
              sickdays
                .slice(0, index + 1)
                .reduce((total, next) => total + Number(next.hours), 0)
            "
            @delete="deleteSickDay"
            @date-update="dateUpdate"
          ></sickday>
        </div>
      </div>
      <div class="sb-table-below">
        <div class="sb-table-total">
          <b>Total Hours: </b>
          {{ sickdays.reduce((a, b) => a + Number(b.hours), 0).toFixed(2) }}
        </div>
        <div class="sb-table-add pointer" @click="createSickday">
          <h3>Add to table</h3>
          <nv-button class="table-add-button">+</nv-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.table-add-button {
  padding: 1px 6px 3px 6px;
  width: auto;
  height: auto;

  &:hover {
    color: white;
    background-color: #b19971;
  }
}

.sb-header {
  background-image: url("../../public/img/sickleave.jpg");
  background-position: 50% 70%;
}

.sb-table-container {
  background-color: $bgColor;
  padding: 20px;
  margin: 20px auto;

  .sb-table-below,
  .table {
    max-width: 850px;
    text-align: left;
    margin: auto;
  }

  .table {
    border-bottom: $borderStyle;
    padding-bottom: 20px;
    display: table;

    @media screen and (max-width: 500px) {
      display: block;
      overflow-x: auto;
    }

    .tableHeader {
      display: table-header-group;
      font-weight: bold;

      .row {
        padding: 12px 5px;
      }
    }

    .tableBody {
      display: table-row-group;
    }
  }

  .sb-table-below {
    display: flex;
    flex-direction: row;
    max-width: 850px;
    margin: auto;
    justify-content: space-between;
    align-items: center;

    .sb-table-add {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 15px;
    }

    .sb-table-total {
      padding: 0 15px;
    }
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
</style>

<script lang="ts">
// import "@/styles/main.scss";
import Sickday from "@/tools/SickDays/Sickday.vue";
import GenericInput from "@/components/GenericInput.vue";
import NvButton from "@/components/NvButton.vue";
import { getNewDay } from "@/helpers/days";
import Vue from "vue";
import {
  adjustWeekendsOnAddDate,
  adjustWeekendsOnDeleteDate
} from "@/tools/SickDays/weekendLogic";
import { SickDay } from "../tools/SickDays/interfaces";

const defaultWorkHours = 7.4;
export default Vue.extend({
  components: {
    Sickday,
    GenericInput,
    NvButton
  },
  props: { language: { type: String, default: "en" } },
  data() {
    return {
      sortBy: "none",
      sickdays: [] as SickDay[],
      workHours: defaultWorkHours,
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
    createSickday(id: string): void {
      const index = this.sickdays.findIndex(sickDay => sickDay.id === id);
      // create new sickday, if user click the button or presses enter on the last element
      if (index === -1 || index === this.sickdays.length - 1) {
        const newDate = getNewDay(this.workHours);
        this.sickdays = adjustWeekendsOnAddDate(
          [...this.sickdays, newDate],
          newDate.id,
          true
        );
      }

      // move focus to the input of the next sickday
      this.$nextTick(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const sickdays = this.$refs.sickdays as any[];
        const input = sickdays[index === -1 ? sickdays.length - 1 : index + 1];
        if (!input) {
          return;
        }
        input.$children[0].$el.focus();
      });
    },
    deleteSickDay(id: string): void {
      this.sickdays = adjustWeekendsOnDeleteDate(this.sickdays, id);
    },
    dateUpdate(id: string): void {
      this.sickdays = adjustWeekendsOnAddDate(this.sickdays, id);
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
        this.sickdays.sort((a, b) => b.hours - a.hours);
      } else {
        this.sortBy = "hours";
        this.sickdays.sort((a, b) => a.hours - b.hours);
      }
    }
  }
});
</script>
