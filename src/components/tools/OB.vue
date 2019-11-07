<template>
  <div class="home">
    <input v-model="empDate" type="date" />
    <input v-model="termDate" type="date" />
    <input v-model="ext" type="number" />
    <button @click="calculate()">Beregn!</button>

    <p>{{ this.output.terminationNotice }}</p>
    <p>{{ this.output.terminationDate.toDateString() }}</p>
  </div>
</template>

<script>
import { calculate } from "@/business/OB/OBCalculator.ts";
import { OBInput, OBResult } from "@/business/OB/interfaces.ts";
export default {
  name: "Home",
  components: {},
  data() {
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
      set(val) {
        this.input.employmentDate = new Date(val);
      },
      get() {
        // FIXME: fix types here
        return this.input.employmentDate.toISOString().slice(0, 10);
      }
    },
    termDate: {
      set(val) {
        this.input.terminationDate = new Date(val);
      },
      get() {
        return this.input.terminationDate.toISOString().slice(0, 10);
      }
    },
    ext: {
      set(val) {
        this.input.extension = parseInt(val);
      },
      get() {
        return this.input.extension;
      }
    }
  },
  methods: {
    calculate() {
      this.output = calculate(this.input);
    }
  }
};
</script>
<style lang="scss" scoped></style>
