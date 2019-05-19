App({
    // 用户信息
    userInfo: null,
    // 获取用户信息的方法
    getUserInfo() {
        return new Promise((resolve, reject) => {
            if (this.userInfo) resolve(this.userInfo);
            my.getAuthCode({
                scopes: ['auth_user'],
                success: authcode => {
                    console.info(authcode);
                    my.getAuthUserInfo({
                        success: res => {
                            this.userInfo = res;
                            resolve(this.userInfo);
                        },
                        fail: () => {
                            reject({});
                        },
                    });
                },
                fail: () => {
                    reject({});
                },
            });
        });
    },
    // 用户位置信息
    userLocationInfo: null,
    getUserLocationInfo() {},
    // 用户设置的起始点和终点
    userPickLocation: {
      start: null,
      end: null,
    },
});