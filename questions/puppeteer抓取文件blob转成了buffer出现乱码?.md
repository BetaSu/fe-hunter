<!-- {name: 'config', type: 'scene'} -->

### 发生问题的场景

说明：
使用 puppeteer 抓取一个 excel 文件(Content-Type:application/vnd.ms-excel;charset=UTF-8), 页面上直接 new Blob([response.data], { type: 'application/vnd.ms-excel;charset=UTF-8' })是可以正常保存的; 但是我用 puppeteer 拦截请求, 只能用 response.buffer 取回文件数据;然后出现了乱码
具体代码如下

```javascript
  protected async excel文件下载(url: string, payload: any) {
    const getBuffer = new Promise<any>((resolve) => {
      this.page.once('response', async (response) => {
        if (!response.url().includes(url)) return;
        const buffer = await response.buffer(); // 这里没有blob方法, 只有buffer/text等方法
        console.log('拦截的buffer大小', buffer?.length); // 大小1661361, 感觉在这里已经乱码了
        resolve(buffer);
      });

      this.page!.evaluate(
        (opts) => {
          return fetch(opts.url, {
            method: 'POST',
            body: JSON.stringify(opts.payload),
            headers: {
              responseType: 'arrayBuffer',
              'Content-Type': 'application/json;charset=UTF-8',
              'Content-Disposition':
                'attachment;filename=2023-11-01%E6%97%A5%E5%89%8D%E8%8A%82%E7%82%B9%E7%94%B5%E4%BB%B7%E6%9F%A5%E8%AF%A2.xls',
            },
          }).then(async (res) => {
            const blob = await res.clone().blob();
            console.log('blob', blob.size); // 原始大小1323520是正确的, 但是puppeteer不能返回blob
            return res;
          });
        },
        {
          url,
          payload,
        },
      );
    });
    const timer = new Promise<undefined>((resolve) => setTimeout(resolve, 1000 * 30));
    const fileBuffer: any = await Promise.race([getBuffer, timer]);

    console.log('内部fileBuffer', fileBuffer!.length); // 这里大小1661361
  }
```

### 需要解决的问题

解决上面的问题: 可能是 blob 转成 buffer 的问题, 也可能是 puppeteer 有其他的方法, 又或者是请求接口有其他设置, 能解决乱码问题即可。

### 最佳答案评选标准

第一位能解决该问题的答案
