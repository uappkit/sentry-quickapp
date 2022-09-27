const globalCopy: any = global;

/**
 * 小程序平台 SDK 接口
 */
interface SDK {
  request: Function;
  httpRequest?: Function; // 针对钉钉小程序
  getSystemInfo: Function;
  getSystemInfoSync: Function;
  onError?: Function;
  onUnhandledRejection?: Function;
  onPageNotFound?: Function;
  onMemoryWarning?: Function;
  getLaunchOptionsSync?: Function;
}

const currentSdk: SDK = {
  // tslint:disable-next-line: no-empty
  request: () => {
  },
  // tslint:disable-next-line: no-empty
  httpRequest: () => {
  },
  // tslint:disable-next-line: no-empty
  getSystemInfoSync: () => {
  },
  // tslint:disable-next-line: no-empty
  getSystemInfo: () => {
  },
};

/**
 * 获取跨平台的 SDK
 */
const getSDK = () => {
  let fetch: any
  let router: any
  let app: any
  let device: any
  let battery: any

  // tslint:disable-next-line:no-implicit-dependencies no-var-requires
  fetch = require('@system.fetch')

  // tslint:disable-next-line:no-implicit-dependencies no-var-requires
  router = require('@system.router')

  // tslint:disable-next-line:no-implicit-dependencies no-var-requires
  app = require('@system.app')

  // tslint:disable-next-line:no-implicit-dependencies no-var-requires
  device = require('@system.device')

  // tslint:disable-next-line:no-implicit-dependencies no-var-requires
  battery = require('@system.battery')

  // 针对快应用的兼容性封装
  globalCopy.getCurrentPages = () => {
    const stacks: any = router.getPages()
    const ret = []
    for (const route of stacks) {
      ret.push({
        route: route.path,
        options: {},
      })
    }

    return ret
  }

  currentSdk.request = fetch.fetch
  currentSdk.getSystemInfo = () =>
    new Promise<any>((resolve, reject) => {
      const appInfo = app.getInfo();

      const ret = {
        version: appInfo.versionName,
        battery: 0,
        batteryLevel: 0,
        currentBattery: 0,
        appName: appInfo.name,
        system: '',
        model: String,
        brand: String,
        platform: String,
        screenHeight: Number,
        screenWidth: Number,
        statusBarHeight: Number,
        language: String,
        windowWidth: Number,
        windowHeight: Number,
        fontSizeSetting: '',
      }

      device.getInfo({
        // tslint:disable-next-line:no-shadowed-variable
        success: (deviceInfo: any) => {
          ret.language = deviceInfo.language;
          ret.brand = deviceInfo.brand;
          ret.model = deviceInfo.model;
          ret.platform = deviceInfo.platformVersionName;
          ret.screenHeight = deviceInfo.screenHeight;
          ret.screenWidth = deviceInfo.screenWidth;
          ret.statusBarHeight = deviceInfo.statusBarHeight;
          ret.windowHeight = deviceInfo.windowHeight;
          ret.windowWidth = deviceInfo.windowWidth;
          ret.system = `${deviceInfo.osType} ${deviceInfo.osVersionName}`;

          battery.getStatus({
            success: (batteryStatus: any) => {
              ret.currentBattery = batteryStatus.level;
              resolve(ret)
            },
            fail: (e: any) => {
              reject(e)
            }
          })
        },
        fail: (e: any) => {
          reject(e)
        }
      })
    })

  return currentSdk;
};

/**
 * 获取平台名称
 */
const getAppName = () => {
    return "quickapp";
};

const sdk = getSDK();
const appName = getAppName();

export {sdk, appName};
