<template>
  <div>
    <div class="header-image term-header"></div>
    <div class="header-text">
      <h2 class="slide-transition">Værktøjer</h2>
    </div>
    <div class="input-container">
      <h3>Beregn opsigelsesvarsel:</h3>
      <div class="input-cols">
        <div class="input-row">
          <p>Hvornår blev medarbejderen ansat?</p>
          <date-input v-model="empDate"></date-input>
        </div>
        <div class="input-row">
          <p>Hvornår blev medarbejderen sagt op?</p>
          <date-input v-model="termDate" :error="error" />
        </div>
        <div class="input-row">
          <p>Varsel forlænget (?)</p>
          <generic-input v-model="ext" min="0" type="number"></generic-input>
        </div>
        <nv-button @click="calculate()">Beregn</nv-button>
      </div>
    </div>
    <div v-if="output.terminationNotice" class="ob__summary">
      <div>
        <p class="text-output">
          Medarbejderen blev ansat den
          {{ input.employmentDate.toDateString() }} og opsagt den
          {{ input.terminationDate.toDateString() }}.
        </p>
        <p class="text-output">
          Opsigelsesvarslet er forlænget med
          {{ input.extension }} måneder, og er derfor i alt
          <span class="bold">{{ output.terminationNotice }}</span
          >.<br />
          Medarbejderen skal derfor fratræde den
          <span class="bold">{{ output.terminationDate.toDateString() }}</span
          >.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "@/styles/main.scss";
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

<style lang="scss" scoped>
.text-output {
  text-align: left;
}
.bold {
  font-weight: 600;
}

.ob__summary {
  background-color: $bgColor;
  padding: 20px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
