<template>
  <div 
    v-show="status" 
    class="slds-spinner_container" 
    :style="{
      'z-index': zIndex
    }">
    <div class="slds-spinner--brand slds-spinner slds-spinner--large">
      <div class="slds-spinner__dot-a"></div>
      <div class="slds-spinner__dot-b"></div>
    </div>  
  </div>
</template>

<script type="text/babel">
  export default {
    /* Name */
    name: 'EsLoading',
    /* Props */
    props: {
      status: {
        type: Boolean,
        default: false
      },
      zIndex: {
        type: Number,
        default: 2001
      }
    }
  }
</script>
