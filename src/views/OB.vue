<template>
  <div class="ob">
    <div class="ob__header--image"></div>
    <div class="ob__header--text">
      <h2>Værktøjer</h2>
    </div>
    <div class="ob__input--container">
      <h3>Beregn opsigelsesvarsel:</h3>
      <div class="ob__input--cols">
        <div class="ob__input--row">
          <p>Hvornår blev medarbejderen ansat?</p>
          <date-input v-model="empDate"></date-input>
        </div>
        <div class="ob__input--row">
          <p>Hvornår blev medarbejderen sagt op?</p>
          <date-input v-model="termDate" :error="error" />
        </div>
        <div class="ob__input--row">
          <p>Varsel forlænget (?)</p>
          <generic-input v-model="ext" min="0" type="number"></generic-input>
        </div>
        <nv-button @click="calculate()">Beregn</nv-button>
      </div>
    </div>
    <div class="ob__summary">
      <h4>{{ output.terminationNotice }}</h4>
      <h4>{{ output.terminationDate.toDateString() }}</h4>
    </div>
  </div>
</template>

<style media="screen" lang="scss">
.ob__header--image {
  background-image: url("../../public/img/nv-stamped.jpg");
  background-size: cover;
  height: 55vh;
  background-position: 50% 65%;
}

.ob__header--text {
  margin: auto;
  padding: 5px;
  width: 55%;
  margin-top: -30px;
  background-color: white;

  @media screen and (max-width: 640px) {
    width: 80%;
  }
}

.ob__input--container {
  .ob__input--cols {
    margin: auto;
    margin-top: 25px;
    max-width: 550px;

    .ob__input--row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 8px 0;

      @media screen and (max-width: 640px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
          margin-bottom: 5px;
        }
      }

      input {
        @media screen and (max-width: 640px) {
          width: 255px;
        }
      }

      input[type="number"] {
        width: 153px;

        @media screen and (max-width: 640px) {
          width: 195px;
        }
      }
    }
  }

  .btn {
    margin-top: 25px;
  }
}

.ob__summary {
  background-color: #f8f3f0;
  padding: 20px;
  margin-top: 40px;
}
</style>

<script lang="ts">
import { calculate } from "@/tools/OB/OBCalculator";
import DateInput from "@/components/DateInput.vue";
import GenericInput from "@/components/GenericInput.vue";
import NvButton from "@/components/NvButton.vue";
import { OBInput, OBResult } from "@/tools/OB/interfaces";
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: { DateInput, GenericInput, NvButton },
  data(): { input: OBInput; output: OBResult } {
    return {
      input: {
        employmentDate: new Date(),
        terminationDate: new Date(),
        extension: 0
      },
      output: { terminationNotice: 0, terminationDate: new Date() }
    };
  },
  computed: {
    empDate: {
      set(val: Date): void {
        this.input.employmentDate = new Date(val);
      },
      get(): Date {
        return this.input.employmentDate;
      }
    },
    termDate: {
      set(val: Date): void {
        this.input.terminationDate = new Date(val);
      },
      get(): Date {
        return this.input.terminationDate;
      }
    },
    ext: {
      set(val: string): void {
        this.input.extension = parseInt(val) || 0;
      },
      get(): number {
        return this.input.extension;
      }
    },
    error(): boolean {
      return (
        this.input.employmentDate.getTime() >
        this.input.terminationDate.getTime()
      );
    }
  },
  methods: {
    calculate(): void {
      this.output = calculate(this.input);
    }
  }
});
</script>
