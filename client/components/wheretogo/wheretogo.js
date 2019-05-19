const app = getApp()
Component({
  mixins: [],
  data: {
    start: 'a',
    end: '',
  },
  props: {},
  didMount() {
    
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    toggleValue() {
      let start = this.data.start, end = this.data.end;
      this.setData({
        start: end,
        end: start
      })
      app.userPickLocation.start = this.data.start
      app.userPickLocation.end = this.data.end
    },
  },
});
