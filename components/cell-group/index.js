Component({
  externalClasses: ['l-class'],

  relations: {
    '../cell/index': {
      type: 'child',
      linked () {
        this._isLastCell()
      },
      linkChanged () {
        this._isLastCell()
      },
      unlinked () {
        this._isLastCell()
      }
    }
  },

  properties: {
    noBorder: {
      type: Boolean,
      value: false
    }
  },

  methods: {
    _isLastCell() {
      let cells = this.getRelationNodes('../cell/index')
      const len = cells.length

      if (len > 0) {
        let lastIndex = len - 1

        cells.forEach((cell, index) => {
          cell.updateIsLastCell(index === lastIndex)
        })
      }
    }
  }
})
