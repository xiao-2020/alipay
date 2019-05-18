Component({
  data: {
    value: 1
  },
  props: {
    value: 1,
    min: 0,
    max: Infinity,
    onGetValue: data => {}
  },
  methods: {
    descPerson() {
      if(this.data.value > this.props.min) {
        this.setData({
          value: --this.data.value
        })
        this.props.onGetValue(this.data.value)
      }
    },
    addPerson() {
      if(this.data.value < this.props.max) {
        this.setData({
          value: ++this.data.value
        })
        this.props.onGetValue(this.data.value)
      }
    }
  },
  onInit() {
    console.log(this,'onInit')
  },
  deriveDataFromProps() {
    console.log(this,'deriveDataFromProps')
  },
  didMount() {
    this.setData({
      value: this.props.value
    })
    console.log(this, 'didMount')
  },
  didUpdate() {
    console.log(this, 'didUpdate')
  },
  didUnmount() {
    console.log(this, 'didUnmount')
  },
})