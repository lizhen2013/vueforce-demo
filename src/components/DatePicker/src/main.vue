<template>
  <div 
    class="slds-form-element"
    >
    <label 
      v-if="label"
      class="slds-form-element__label"
      > {{ label }}
    </label>
    <div 
      class="slds-form-element__control slds-input-has-icon slds-input-has-icon--right"
      >
      <svg
        class="slds-input__icon slds-icon-text-default"
        >
        <use xlink:href="./static/assets/icons/svg/utility/symbols.svg#event"></use>
      </svg>
      <input
        id="date" 
        class="slds-input" 
        type="text">
    </div>
  </div>
</template>

<script type="text/babel">

  import $ from '../vendor/jquery-vendor.js'
  import moment from '../vendor/moment-vendor.js'
  import 'appiphony-lightning-js/dist/jquery.aljs-init.min.js'
  import 'appiphony-lightning-js/dist/jquery.aljs-datepicker.min.js'

  $(document).ready(() => {
    $('#date').datepicker({
      format: 'YYYY-MM-DD',
      initDate: moment().startOf('month').format('YYYY-MM-DD')
    })
  })

  $.aljsInit({
    assetsLocation: './static',
    scoped: true,
    scopingClass: 'slds-scope'
  })

  export default {
    /* Name */
    name: 'EsDatePicker',
    /* Props */
    props: {
      id: {
        type: String,
        default: 'date-default'
      },
      label: {
        type: String,
        default: ''
      }
    },
    /* Data */
    data () {
      return {
        date: moment().startOf('month').format('YYYY-MM-DD')
      }
    },
    /* Computed */
    computed: {
      /* Nothing */
    },
    /* Methods */
    methods: {
      change (event) {
        this.$emit('change', this.selector)
      },
      edit (event) {
        this.$emit('dblclick')
      }
    }
  }
</script>
