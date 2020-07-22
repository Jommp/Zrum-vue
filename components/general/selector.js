const Selector = {
  template: `
  <v-select :options="options" 
            :id="selectorId"
            label="abrev"
            v-model="defaultSelected"
            :clearable="false"
            :class="cs">
    
    <template v-slot:option="option">
      <span v-if="option.hasImage">
        <img :src="option.flagSrc">
      </span>
      {{ option.abrev }}
    </template>
  </v-select>
 
  `,
  props: {
    selectorType: {
      type: String,
      required: true
    },
    selectorId: {
      type: String,
      required: false,
      default: '',
    },
    options: {
      type: Array,
      required: true
    },
    cs:{
      type: String,
      required: false,
      default: 'd-flex'
    }
  },
  data() {
    return {
      selectedValue: null, //this value should be used for backend selection operation if necessary
    }
  },
  components: {  },
  mounted() {
    this.selectedValue = this.options.find(opt => opt.selected == true);
  },
  computed: {
    defaultSelected: {
      get(){
        return this.selectedValue;
      },
      set(val){
        this.selectedValue = val;
        this.emitSelectedValue();
      }
    }
  },
  methods: {
    emitSelectedValue(){
      const selected = {
        type: this.selectorType,
        val: this.selectedValue
      }
      this.$root.$emit('selectorChanged', selected);
    }
  },
}