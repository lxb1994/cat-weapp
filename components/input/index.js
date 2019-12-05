Component({
  behaviors: ['wx://form-field'],

  externalClasses: ['l-class', 'l-placeholder-class'],

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  properties: {
    title: {
      type: String
    },
    // text || textarea || password || number
    type: {
      type: String,
      value: 'text'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: ''
    },
    autofocus: {
      type: Boolean,
      value: false
    },
    mode: {
      type: String,
      value: 'normal'
    },
    error: {
      type: Boolean,
      value: false
    },
    maxlength: {
      type: Number
    },
    required: {
      type: Boolean
    }
  },

  methods: {
    handleInputChange (event) {
      const { detail = {} } = event
      const { value = '' } = detail
      this.setData({ value })

      this.triggerEvent('change', {value})
    },

    handleInputFocus (event) {
      this.triggerEvent('focus', event)
    },

    handleInputBlur (event) {
      this.triggerEvent('blur', event)
    }
  }
})
