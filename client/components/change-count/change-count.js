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
    desc() {
      if(this.data.value > this.props.min) {
        this.setData({
          value: --this.data.value
        })
        this.props.onGetValue(this.data.value)
      }
    },
    add() {
      if(this.data.value < this.props.max) {
        this.setData({
          value: ++this.data.value
        })
        this.props.onGetValue(this.data.value)
      }
    }
  },
  // 初始化  注意兼容性
  onInit() {},
  // 更新或加载时调用
  deriveDataFromProps() {},
  // 挂载时调用
  didMount() {
    this.setData({
      value: this.props.value
    })
  },
  // 更新时钩子函数
  didUpdate() {},
  // 销毁时钩子函数
  didUnmount() {},
})