<template>
  <a-result
    status="404"
    title="404"
    sub-title="对不起，您正在寻找的页面不存在。尝试检查URL的错误，然后按浏览器上的刷新按钮或尝试在我们的应用程序中找到其他内容。."
  >
    <template #extra>
      <a-button type="primary" href="/">返回首页</a-button>
    </template>
  </a-result>
</template>
