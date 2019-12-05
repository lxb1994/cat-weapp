Component({
  externalClasses: ['l-class'],

  options: {
    multipleSlots: true
  },

  relations: {
    '../cell-group/index': {
      type: 'parent'
    }
  },

  properties: {
    title: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: ''
    },
    label: {
      type: String,
      value: ''
    },
    isLink: {
      type: Boolean,
      value: false
    },
    linkType: {
      type: String,
      value: 'navigateTo'
    },
    leftValue: {
      type: Boolean,
      value: false
    },
    url: {
      type: String,
      value: ''
    }
  },

  data: {
    isLastCell: true
  },

  methods: {
    handleTap () {
      const { isLink, url, linkType } = this.data

      this.triggerEvent('click', {})
      if (!isLink || !url ) return
      
      let typeArr = ['navigateTo', 'redirectTo', 'switchTab', 'reLaunch']
      let type = linkType
      if (typeArr.indexOf(this.data.linkType) === -1) type = 'navigateTo'

      wx[type].call(wx, {url})
    },

    updateIsLastCell (isLastCell) {
      this.setData({ isLastCell })
    }
  }
})
