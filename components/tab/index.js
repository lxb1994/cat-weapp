Component({
  externalClasses: ['l-class'],

  relations: {
    '../tab-item/index': {
      type: 'child',
      linked: function() {
        this.onChangeCurrent()
      },
      linkChanged: function() {
        this.onChangeCurrent()
      },
      unlinked: function() {
        this.onChangeCurrent()
      }
    }
  },

  properties: {
    current: {
      type: String,
      value: '',
      observer: 'onChangeCurrent'
    },
    scroll: {
      type: Boolean,
      value: false
    },
    fixed: {
      type: Boolean,
      value: false
    },
    color: {
      type: String,
      value: '#43a1fc'
    }
  },

  methods: {
    onChangeCurrent(val = this.data.current) {
      const childs = this.getRelationNodes('../tab-item/index')

      if (childs.length > 0) {
        childs.map(item => {
          item.onActive(val)
          item.onChangeColor(this.data.color)
          item.onScroll(this.data.scroll)
        })
      }
    },

    onTriggerEvent(key) {
      this.triggerEvent('change', { key })
    }
  }
})
