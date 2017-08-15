<template>
  <div>
    <!-- Editable -->
    <div
      v-if="!editable"
      class="slds-form-element slds-hint-parent slds-form-element_edit"
      @dblclick="edit"
      >
      <span 
        class="slds-form-element__label"
        > {{ label }}
      </span>
      <div 
        class="slds-form-element__control slds-border_bottom"
        >
        <span 
          class="slds-form-element__static"
          > {{ model }}
        </span>
        <button 
          class="slds-button slds-button_icon slds-float_right slds-button_icon slds-button_icon-small"
          >
          <svg 
            class="slds-button__icon slds-button__icon_hint"
            >
            <use xlink:href="./static/assets/icons/svg/utility/symbols.svg#edit"></use>
          </svg>
        </button>
      </div>
    </div>
    <!-- Inputable -->
    <div 
      v-else
      class="slds-form-element"
      >
      <label 
        v-if="label"
        class="slds-form-element__label"
        > {{ label }}
      </label>
      <div 
        class="slds-form-element__control"
          :class="[ type === 'datepicker' ? 'slds-input-has-icon slds-input-has-icon--right' : '']"
        >
        <!-- Text -->
        <input 
          v-if=" type === 'text' "
          class="slds-input"
          type="text" 
          :value="model"
          :placeholder="placeholder">
        <!-- Text Area -->
        <textarea 
          v-if=" type === 'textarea' "
          class="slds-textarea" 
          :value="model"
          :placeholder="placeholder">
        </textarea>
        <!-- Select -->
        <div 
          v-else-if=" type === 'select' "
          class="slds-select_container">
          <select 
            class="slds-select"
            v-model="selector"
            @change="change">
            <option v-for="option in options">{{ option }}</option>
          </select>
        </div>
        <!-- Date Picker -->
        <div
          v-else-if=" type === 'datepicker' ">
          <svg
            class="slds-input__icon slds-icon-text-default"
            >
            <use xlink:href="./static/assets/icons/svg/utility/symbols.svg#event"></use>
          </svg>
          <input
            :id="datepickerid"
            class="slds-input" 
            type="text">
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">

  export default {
    /* Name */
    name: 'EsFormElement',
    /* Props */
    props: {
      type: {
        type: String,
        default: 'text'
      },
      label: {
        type: String,
        default: ''
      },
      labelPosition: {
        type: String,
        default: 'left'
      },
      status: {
        type: String,
        default: ''
      },
      required: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: 'input something...'
      },
      options: {
        type: Array,
        default: function () {
          return []
        }
      },
      defaultOption: {
        type: String,
        default: ''
      },
      cleanable: {
        type: Boolean,
        default: false
      },
      editable: {
        type: Boolean,
        default: true
      },
      value: {
        type: [String, Number, Boolean, Date],
        default: ''
      },
      datepickerid: {
        type: String,
        default: 'default'
      },
      custom: {
        validator: function (value) {
          return value > 10
        }
      }
    },
    /* Data */
    data () {
      return {
        selector: this.defaultOption
      }
    },
    /* Computed */
    computed: {
      model () {
        return this.value
      }
    },
    /* Methods */
    methods: {
      change (event) {
        this.$emit('change', this.selector)
      },
      edit (event) {
        this.$emit('dblclick')
      }
    },
    /* Watch */
    watch: {
      /* Nothing */
    }
  }
</script>
