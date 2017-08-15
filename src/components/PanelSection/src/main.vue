<template>
  <div 
    class="slds-panel__section"
      :class="{
        'slds-border_top': border === 'top',
        'slds-border_bottom': border === 'bottom',
        'slds-border_left': border === 'left',
        'slds-border_right': border === 'right',
        'slds-border_top slds-border_bottom slds-border_left slds-border_right': border === 'around',
      }"
    >
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    /* Name */
    name: 'EsPanelSection',
    /* Props */
    props: {
      border: {
        type: String,
        default: 'none'
      }
    }
  }
</script>
