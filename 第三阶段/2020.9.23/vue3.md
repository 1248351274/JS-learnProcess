###  vue3

ESlint：1，点击忽略 2，查看正确和错误的写法

飞机大战：vue3如何渲染到canvas上

####  渲染机制

- template  ->render()  ->vnode tree(虚拟节点树) ->渲染成真正的DOM ->添加到dom元素 （渲染出来，可以看到）

- 渲染到dom 平台：const div = document.createElement（‘div’）

- canvas平台：调用canvas api创建元素：custom readerer（不在局限dom）
- canvas：pixiJS
- canvas：const game = new Application（）
  - game.view ->canvas
  - game.stage ->根容器
  - 创建自定义的容器
  - 创建图片（可设置坐标
  - 创建图片
  - 创建矩形

#### 飞机大战

无限滚动？



