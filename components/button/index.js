Component({
  externalClasses: ['l-class'],

  relations: {},

  properties: {
    // default large small
    size: {
      type: String,
      value: 'default'
    },
    // default primary
    type: {
      type: String,
      value: 'default'
    },
    inline: Boolean,
    shape: {
      type: String,
      value: 'square'
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    loading: {
      type: Boolean,
      value: false,
    },
    wholeLine: Boolean,
    openType: String,
    appParameter: String,
    hoverStopPropagation: Boolean,
    hoverStartTime: {
      type: Number,
      value: 20
    },
    hoverStayTime: {
      type: Number,
      value: 70
    },
    lang: {
      type: String,
      value: 'en'
    },
    sessionFrom: {
      type: String,
      value: ''
    },
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean
  },

  methods: {
    handleTap() {
      if (this.data.disabled) return false
      this.triggerEvent('click')
    }
  }
})
