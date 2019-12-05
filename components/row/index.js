Component({
  externalClasses: ['l-class'],

  relations: {
    '../col/index': {
      type: 'child',
      linked: function (target) {
          if (this.data.gutter) {
              target.setGutter(this.data.gutter);
          }
      }
    }
  },

  properties: {
    gutter: Number
  },

  mounted() {
    if (this.data.gutter) {
      this.setGutter()
    }
  },

  methods: {
    setGutter: function () {
      const _this = this
      const gutter = this.data.gutter
      const margin = "-" + Number(gutter) / 2 + "px"
      const style = gutter
        ? "margin-right: " + margin + "; margin-left: " + margin + ";"
        : '';
      this.setData({ style: style })
      this.getRelationNodes('../col/index').forEach(function (col) {
        col.setGutter(_this.data.gutter)
      })
    }
  }
})
