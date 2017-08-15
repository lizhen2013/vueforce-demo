<template>
  <div id="app">
    <es-page>
      <!-- Page Header -->
      <es-page-header 
        title="产品管理">
        <es-form>
          <es-form-element 
            type="select" 
            defaultOption="均衡基金"
            :options="products"
            @change="toggle" />
        </es-form>
      </es-page-header>
      <!-- Panel Body -->
      <es-panel>
        <es-panel-section border="none">
          <es-form>
            <div class="layout">
              <es-form-element
                :label="product.amount.label"
                :value="product.amount.value"
                :editable="product.amount.edit"
                @dblclick="edit(product.amount)" />
            </div>
           <div class="layout">
              <es-form-element
                :label="product.horizon.label"
                :value="product.horizon.value"
                :editable="product.horizon.edit"
                @dblclick="edit(product.horizon)" />
            </div>
            <div class="layout">
              <es-form-element
                type="datepicker"
                :datepickerid="product.start.id"
                :label="product.start.label"
                :value="product.start.value"
                :editable="product.start.edit"
                @dblclick="edit(product.start)" />
            </div>
            <div class="layout">
              <es-form-element
                type="datepicker"
                :datepickerid="product.end.id"
                :label="product.end.label"
                :value="product.end.value"
                :editable="product.end.edit"
                @dblclick="edit(product.end)" />
            </div>
            <div class="layout">
              <es-form-element
                :label="product.remark.label"
                :value="product.remark.value"
                :editable="product.remark.edit"
                @dblclick="edit(product.remark)" />
            </div>
          </es-form>
        </es-panel-section>
      </es-panel>
      <!-- Footer -->
      <es-docked-footer
        v-if="editing"
        >
        <button 
          class="slds-button slds-button_neutral"
          @click="cancel"
          > 取消
        </button>
        <button 
          class="slds-button slds-button_brand"
          @click="save"
          > 保存
        </button>
      </es-docked-footer>
      <!-- Loading -->
      <es-loading :status="loading" />
    </es-page>
  </div>
</template>

<script>

  import Vue from 'vue'
  import $ from './utils/vendor/jquery-vendor.js'
  import moment from './utils/vendor/moment-vendor.js'
  import 'appiphony-lightning-js/dist/jquery.aljs-init.min.js'
  import 'appiphony-lightning-js/dist/jquery.aljs-datepicker.min.js'
  
  import demo from './api/demo-data.js'

  $.aljsInit({
    assetsLocation: './static',
    scoped: true,
    scopingClass: 'slds-scope'
  })

  export default {
    /* Name */
    name: 'app',
    /* Data */
    data: function () {
      return {
        editing: false,
        loading: false,
        products: [],
        product: {},
        today: moment()
      }
    },
    /* Mounted */
    created: function () {
      this.products = demo.products
      this.product = demo.proto
    },
    /* Mounted */
    mounted: function () {
      this.product = demo.data.get('均衡基金')
    },
    /* Methods */
    methods: {
      toggle (model) {
        var self = this
        self.loading = true
        demo.fetch(model).then((result) => {
          self.product = result
          self.loading = false
        })
      },
      edit (field) {
        this.editing = true
        field.edit = true
        if (field.id) {
          Vue.nextTick(() => {
            $('#' + field.id).datepicker({
              format: 'YYYY-MM-DD',
              initDate: field.value
            })
          })
        }
      },
      save () {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.cancel()
        }, 1000)
      },
      cancel () {
        var product = this.product
        this.editing = false
        Object.keys(product).forEach((key) => {
          if (product[key].edit) {
            product[key].edit = false
          }
        })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Microsoft Yahei';
  }

  .layout {
    width: 50%;
    padding: .75rem;
    box-sizing: border-box;
  }
</style>
