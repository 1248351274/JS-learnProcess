### vue6---Vuex

#### 组件的通讯方式

##### 组件通讯:本质，两个组件可以说上话

- 父子组件通讯 ，props $emit 

  子：props：["title"]  $emit

  父--子：父：定义title属性  

  ​					this.$children(获取的是子组件的实例) = this.$ref.compA

  标签也可以使用$ref,获取到该元素

  子--父：子：发起$emit('click')   

  ​						this.$parent

  $children和$parent对应组件强绑定

- 多层通讯

  父-->子-->孙--->....

  - 父向子，孙传递，provide    inject

    父：provide：{

    ​	foo:"foo"

    }

    子，孙...:inject:["foo"]

    

    父：provide(){

    ​	return  {

    ​		foo:"bar"

    ​	}

    }

    子，孙...:inject:["foo"]，子孙可以修改值

  - 父：通过定义自定义属性 子孙...：v-bind = “$attrs“ 接收，不需要定义props

     		属性暴露？inheritAttrs：false

    ​		实例：设计公共组件中用到，例如button设置$attrs.disables

    父：通过定义自定义方法，子孙...：v-on="$listeners" 收集方法

- 非关系组件通讯----???

  EventBus：创建Vue实例

  1:EventBus.$on('child'，this.handle) ----侦听     EventBus.$once('child') ，只侦听一次

  2:EventBus.$emit('child'，)---触发

  3:EventBus.$off('child'，this.handle)--删除

#### Vuex

- Vuex是什么？ Vuex是专门为vue状态（数据）管理

- const store= new Vuex.Store({state:{},getter:{},mutations:{changeMsg(){}},actions:{

  ​																			getMsg({commit}){setTimeout(()=>																			{commit("changeMsg")},1000)}

  ​																		})

- store.state

  import { mapState } from 'vuex'

  computed:{...mapState(["msg","name","age"])//展开运算符}

  ​					...mapState({myMsg:"msg"})

- getter（和计算属性一样，有缓存）:多个组件需要写计算属性

  computed:{...mapGettter(["msg","name","age"])

- mutations:记录修改,异步会导致记录混乱

  this.$store.commit('changeMsg',{msg:'mutations change msg'})

  methods:{...mapMutations(["msg","name","age"])

- actions:异步走actions，保证mutations是同步的 

- methods:{...mapActions(["msg","name","age"])

  this.$store.depatch('getMsg')

- modules：组合多个模块













