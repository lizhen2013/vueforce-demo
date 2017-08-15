<template>
  <i 
    class="iconfont"
      :class="['icon-' + name]"></i>
</template>

<script type="text/babel">
  export default {
    /* Name */
    name: 'EsIcon',
    /* Props */
    props: {
      name: {
        type: String,
        default: ''
      }
    }
  }
</script>
