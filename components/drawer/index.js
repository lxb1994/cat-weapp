Component({
  externalClasses: ['l-class'],

  relations: {},

  properties: {
    show: {
      type: Boolean,
      value: false
    },
    mode: {
      type: String,
      value: 'right'
    },
    maskClosable: {
      type: Boolean,
      value: true
    }
  },

  methods: {
    handleCloseMask () {
      if (!this.data.maskClosable) return
      this.setData({show: false})
    }
  }
})
