<template>
  <div class="home">
    <date-input v-model="empDate"></date-input>
    <date-input v-model="termDate" :error="error" />
    <generic-input v-model="ext" min="0" type="number"></generic-input>
    <nv-button @click="calculate()">Beregn!</nv-button>

    <p>{{ output.terminationNotice }}</p>
    <p>{{ output.terminationDate.toDateString() }}</p>
  </div>
</template>

<script lang="ts">
import { calculate } from "@/business/OB/OBCalculator.ts";
import DateInput from "@/components/DateInput.vue";
import GenericInput from "@/components/GenericInput.vue";
import NvButton from "@/components/NvButton.vue";
import { OBInput, OBResult } from "@/business/OB/interfaces.ts";
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
