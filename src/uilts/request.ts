/**
 * 装饰器封装的 fetch 函数
 * @param url 请求的 URL
 * @param options 请求的选项
 */
function fetchDecorator(url: string, options?: RequestInit): any {
  // 返回一个函数
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    // 获取原方法
    const originalMethod = descriptor.value;

    // 重写原方法
    descriptor.value = async function (...args: any[]) {
      try {
        // 执行 fetch 请求
        const response = await fetch(url, options);

        // 判断返回状态是否成功
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        // 将返回数据转换为 json 对象
        const json = await response.json();

        // 执行原方法，并传入返回数据
        return originalMethod.apply(this, [json, ...args]);
      } catch (error) {
        console.error(error);
      }
    };

    // 返回修改后的 descriptor
    return descriptor;
  };
}

class request {
  //
  @fetchDecorator('get')
  public getData(url: string, options?: RequestInit) {
    return;
  }
}

export default request;
