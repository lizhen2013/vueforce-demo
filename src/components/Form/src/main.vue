<template>
  <div 
    class="slds-form"
      :class="[ 
        'slds-form slds-form_' + type,
        { 'slds-wrap' : wrap }
      ]"
      :style="{ display: flex ? 'flex' : ''}"
    >
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    /* Name */
    name: 'EsForm',
    /* Props */
    props: {
      /* [stacked, horizontal] */
      type: {
        type: String,
        default: 'stacked'
      },
      flex: {
        type: Boolean,
        default: true
      },
      wrap: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
