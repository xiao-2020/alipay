const app = getApp();

Page({
  data: {
    value: 2
  },

  onLoad() {
    app.getUserInfo().then(
      user => {
        this.setData({
          user,
        });
      },
      () => {
        // 获取用户信息失败
      }
    );
  },

  onShow() {
    this.setData({ todos: app.todos });
  },

  onTodoChanged(e) {
    const checkedTodos = e.detail.value;
    app.todos = app.todos.map(todo => ({
      ...todo,
      completed: checkedTodos.indexOf(todo.text) > -1,
    }));
    this.setData({ todos: app.todos });
  },

  addTodo() {
    my.navigateTo({ url: '../add-todo/add-todo' });
  },
  // 获取数据， 每个应用此组件的 页面 传入 初始值  但是 值的改变 会通过方法来获取
  onGetValue(data) {
    this.setData({
      value: data
    })
  }
});
