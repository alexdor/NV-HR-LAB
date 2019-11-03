<template>
  <div class="home">
      <input v-model="empDate" type="date"/>
      <input v-model="termDate" type="date"/>
      <input v-model="ext" type="number"/>
      <button v-on:click="calculate()">Beregn!</button>

      <p>{{this.output.terminationNotice}}</p>
      <p>{{this.output.terminationDate.toDateString()}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import OBCalculator from "@/buisness/OB/OBCalculator.ts"
import OBInput from "@/buisness/OB/OBInput.ts"
import OBResult from '../../buisness/OB/OBResult'

export default {
  data(){
      return {
        input: new OBInput(new Date(), new Date(), 0),
        output: new OBResult(0, new Date())
      };
  },
  name: "home",
  components: {
  },
  methods: {
      calculate(){
        this.output = OBCalculator.calculate(this.input);
      }
  },
  computed: {
    empDate: {
      set (val) {
      	this.input.employmentDate = new Date(val)
      },
      get () {
      	return this.input.employmentDate.toISOString().slice(0, 10)
      }
    },
    termDate: {
      set (val) {
      	this.input.terminationDate = new Date(val)
      },
      get () {
      	return this.input.terminationDate.toISOString().slice(0, 10)
      }
    },
    ext: {
        set(val){
            this.input.extension = parseInt(val);
        }, 
        get(){
            return this.input.extension;
        }
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
