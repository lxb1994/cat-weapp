Component({
  externalClasses: ['l-class'],

  relations: {
    '../tab/index': {
      type: 'parent'
    }
  },

  properties: {
    key: {
      type: String
    }
  },

  data: {
    isActive: false,
    color: '',
    scroll: false
  },

  methods: {
    onActive(val) {
      this.setData({ isActive: val === this.data.key })
    },

    onChangeColor(val) {
      this.setData({ color: val })
    },

    onScroll(val) {
      this.setData({ scroll: val })
    },

    onChangeKey() {
      const parent = this.getRelationNodes('../tab/index')[0]
      parent.onTriggerEvent(this.data.key)
    }
  }
})
