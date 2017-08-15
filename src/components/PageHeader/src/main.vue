<template>
  <div class="slds-page-header">
    <div class="slds-grid slds-grid_vertical">
      <div class="slds-media slds-no-space slds-media_center">
        <div class="slds-media__figure">
          <div class="slds-icon_container slds-icon-standard-lead">
            <svg class="slds-icon">
              <use :xlink:href="[ './static/assets/icons/svg/standard/symbols.svg#' + icon ]"></use>
            </svg>
          </div>
        </div>
        <div class="slds-media__body">
          <h1 class="slds-page-header__title slds-align-middle">{{ title }}</h1>
        </div>
        <slot></slot>
      </div>      
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'EsPageHeader',
    props: {
      title: {
        type: String,
        default: 'default title'
      },
      icon: {
        type: String,
        default: 'account'
      },
      color: {
        type: String,
        default: 'blue'
      }
    }
  }
</script>
