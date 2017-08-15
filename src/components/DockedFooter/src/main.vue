<template>
  <div 
    class="slds-docked-form-footer"
    >
    <slot>
      <button type="button" class="slds-button slds-button_neutral">Cancel</button>
      <button type="button" class="slds-button slds-button_brand">Save</button>
    </slot>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'EsDockedFooter'
  }
</script>
