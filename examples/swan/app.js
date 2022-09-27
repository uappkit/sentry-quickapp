import * as sentry from 'sentry-quickapp'

// 初始化 Sentry
Sentry.init({
  dsn: "https://47703e01ba4344b8b252c15e8fd980fd@sentry.io/1528228",
});

App({
  globalData: {
    userInfo: null,
  },
  onLaunch() {
    // 展示本地存储能力
    // 获取用户信息
    // console.log(systemInfo);

    // Sentry.captureException(new Error("test"));

    // 测试 异常是否可以上报
    // throw new Error("this is a test 4G error.");
    // throw new Error("lalalalalala");
    // myUndefinedFunction();

    // 测试 async 函数中异常是否可以被 onError 捕获
    // const ret = await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve('this is await ret.');
    //   }, 2000);
    // });
    // console.log(ret);
    // myrUndefinedFunctionInAsyncFunction();

    // 一种可以在 async 函数中进行主动上报异常的方式
    // try {
    //   myrUndefinedFunctionInAsyncFunction();
    // } catch (e) {
    //   Sentry.captureException(e)
    // }

    // 测试 swan API 调用失败是否会上报
    // swan.getStorage({
    //   success(res) {
    //     console.log(res);
    //   },
    //   // fail(error) {
    //   //   console.log('API 调用失败: ', error);
    //   // }
    // })

    // throw new Error(`TypeError: Cannot read property 'd' of undefined
    // at UserInfo (index.js:1069:8)
    // at Jd (vendors.js:27859:98)
    // at ve (vendors.js:27878:273)
    // at ue (vendors.js:27878:103)
    // at se (vendors.js:27877:178)
    // at ig (vendors.js:27962:63)
    // at hg (vendors.js:27934:22)
    // at bg (vendors.js:27933:366)
    // at Of (vendors.js:27927:214)
    // at eval (vendors.js:27825:115)
    // at push../node_modules/scheduler/cjs/scheduler.production.min.js.exports.unstable_runWithPriority (vendors.js:30541:438)
    // at hc (vendors.js:27824:325)
    // at kc (vendors.js:27825:61)
    // at F (vendors.js:27824:495)
    // at Wc (vendors.js:27918:155)
    // at Object.enqueueForceUpdate (vendors.js:27839:76)
    // at AppWrapper.push../node_modules/react/cjs/react.production.min.js.F.forceUpdate (vendors.js:29646:456)
    // at AppWrapper.mount (taro.js:6414:14)
    // at Object.mount (taro.js:6459:15)
    // at Object.onLoad (taro.js:6016:19)
    // at tryCatch (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.d23efdb4d49be26bcea4.js:277:293991), <anonymous>:15:21759)
    // at t.n.callMethod (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.d23efdb4d49be26bcea4.js:277:293991), <anonymous>:15:27988)
    // at t.n.callLifetime (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.d23efdb4d49be26bcea4.js:277:293991), <anonymous>:15:28250)
    // at t.n.onLoad (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.d23efdb4d49be26bcea4.js:277:293991), <anonymous>:15:27063)
    // at swan (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.d23efdb4d49be26bcea4.js:277:293991), <anonymous>:15:45935)
    // at eval (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.d23efdb4d49be26bcea4.js:277:293991), <anonymous>:15:44306)
    // at yx (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.d23efdb4d49be26bcea4.js:277:293991), <anonymous>:15:44316)
    // at WS.xx (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.d23efdb4d49be26bcea4.js:277:293991), <anonymous>:15:47014)
    // at WS.emit (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.d23efdb4d49be26bcea4.js:277:293991), <anonymous>:1:174337)
    // at Object.subscribeHandler (eval at window.loadTmaScript (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.d23efdb4d49be26bcea4.js:277:293991), <anonymous>:1:176996)
    // at /Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.d23efdb4d49be26bcea4.js:277:285984
    // at EventEmitter.<anonymous> (/Applications/bytedanceide.app/Contents/Resources/app.asar.unpacked/simulator-sdk/dist/preload/bgPreload.d23efdb4d49be26bcea4.js:277:285581)
    // at EventEmitter.emit (events.js:182:13)`);
  },
  onShow() {
    // 测试 Promise 中异常是否可以上报
    // new Promise((resovle, reject) => {
    //   inPromiseFn();
    //   resovle();
    // });
    // .then((res) => {
    //   console.log(res);
    // }, (err) => {
    //   console.log(err);
    //   Sentry.captureException(err)
    // });
  },
  // 不需要显示调用 Sentry.captureException(error)
  onError(error) {
    // console.warn(error);
    // Sentry.captureException(error);
  },
  // onPageNotFound(res) {
  //   console.warn(res);
  // }
});
