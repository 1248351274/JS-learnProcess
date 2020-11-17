# echarts 高级应用

##### 多坐标轴

**多坐标轴的常见应用就是一个图表有两个y 轴。**
多坐标轴的设置方法：

- 在yAxis 中写入两个对象，对象里interval代表每行数量
- 在series 中设置数据时，使用 yAxisIndex 属性设置跟legend的下标相关联

#### 异步数据

**数据的更新有两种思路：**

- 请求到数据后，setOption()

- 先setOption()，有什么先配置什么。等请求到数据后，再追加配置

  请求方式：ajax、fetch都可以

#### 数据集

**dataset 的优点：**

- 基于原始数据，设置映射关系，形成图表。
- 数据和配置分离，便于单独管理。
- 数据可以被多个系列或者组件复用。
- 支持更多的数据的常用格式，例如二维数组、对象数组等。

##### 数据集与图表的映射方式

 第1列映射类目轴

第2列第1个系列

第3列第2个系列

第4列第3个系列

```javascript
const source=[
    ['大前端','学习人数','就业人数'],
    ['html',30,50],
    ['css',20,60],
    ['js',40,70],
]
```

另一种写法，对象数组格式

```javascript
const source =[
['大前端':'html','学习人数':30,'就业人数':50],
['大前端':"css",'学习人数':'20','就业人数':60],
['大前端':'js','学习人数':20,'就业人数':70],
]
```

##### 数据到图形的映射

 使用 series.seriesLayoutBy 属性来配置 dataset 是列（column）还是行（row）映射为图形系列（series） 

##### 数据集的编码映射encode 

 series.encode 属性将对应的数据映射到坐标轴（如 X、Y 轴） 

``` dataset: {
    source: [
      ['score', 'amount', 'product'],
      [89.3, 58212, 'Matcha Latte'],
      [57.1, 78254, 'Milk Tea'],
      [74.4, 41032, 'Cheese Cocoa'],
      [50.1, 12755, 'Cheese Brownie'],
      [89.7, 20145, 'Matcha Cocoa']
    ]
  }, 
  series: [
        {
            type: 'bar',
            encode: {
                // 将 "amount" 列映射到 X 轴。
                x: 'amount',
                // 将 "product" 列映射到 Y 轴。
                y: 'product'
            }
        }
    ]
```

注意： encode 声明的基本结构如下，其中冒号左边是坐标系、标签等特定名称，如 'x', 'y', 'tooltip' 等 

#### 区域缩放

**作用：概览整体，观察细节**
dataZoom 组件的类型：

- 框选型数据区域缩放组件（dataZoomSelect）：提供一个选框进行数据区域缩放。即 toolbox.feature.dataZoom，配置项在 toolbox 中。
- 内置型数据区域缩放组件（dataZoomInside）：内置于坐标系中，使用户可以在坐标系上通过鼠标拖拽、鼠标滚轮、手指滑动（触屏上）来缩放或漫游坐标系。
- 滑动条型数据区域缩放组件（dataZoomSlider）：有单独的滑动条，用户在滑动条上进行缩放或漫游。

#### 视觉通道（颜色、尺寸等）的映射

使用 visualMap 组件进行视觉通道的映射。

视觉元素可以是：

- symbol: 图元的图形类别。
- symbolSize: 图元的大小。
- color: 图元的颜色。
- colorAlpha: 图元的颜色的透明度。
- opacity: 图元以及其附属物（如文字标签）的透明度。
- colorLightness: 颜色的明暗度。
- colorSaturation: 颜色的饱和度。
- colorHue: 颜色的色调。

visualMap 组件可以定义多个，从而可以同时对数据中的多个维度进行视觉映射。

```   visualMap: {
    visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 10,
        max: 100,
        text: ['High Score', 'Low Score'],
        // Map the score column to color
        dimension: 0,
        inRange: {
            color: ['#D7DA8B', '#E15457']
        }
    },
```

#### 事件

##### ECharts 如何监听事件

ECharts 使用on 绑定事件，事件名称对应 DOM 事件名称，均为小写的字符串。如：

```javascript
myChart.on('click', function (params) {
    // 控制台打印数据的名称
    console.log(params.name);
});
1234
```

##### 鼠标事件

ECharts 支持常规的鼠标事件类型，包括 ‘click’、‘dblclick’、‘mousedown’、‘mousemove’、‘mouseup’、‘mouseover’、‘mouseout’、‘globalout’、‘contextmenu’ 事件。
所有的鼠标事件包含参数 [params](https://www.echartsjs.com/zh/tutorial.html#ECharts 中的事件和行为)如被点击的图形信息 params.componentType 。

#### 富文本标签

## 富文本标签

**富文本标签，就是内容丰富的文本标签。**