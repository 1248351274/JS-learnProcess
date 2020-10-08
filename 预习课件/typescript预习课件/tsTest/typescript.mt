## typescript环境
1. 安装node 
2. 安装typescript
3. 使用tsc命令
4. tsc ts文件：编译ts文件为js
5. --outDir：编译ts文件到指定的文件夹中
6. --target：目标版本（ES5）
7. --watch：是否监控
8. tsc --outDir ./dist --target es5 --watch ts文件：将ts文件编译到dist文件夹中
9. 编辑tsconfig.json文件
10. tsc执行

## 类型系统
### 基础类型
- string  number  boolear
### null undefined:默认情况是所有其他类型的子类型
    如果变量声明了,标注了类型，值为undefined，未标注类型，类型为any
    null使用if判断
### 对象类型
- Object Array date
    接口：只能作为类型标注，不能作为具体的值
    接口只存在源码和编译过程中，编译过后不存在
    类：定义实体的同时也定义了对应的类型，包含具体结构，使用类
    类会被编译
### 包装对象
- string类型和String类型并不一样，String有的，string不一定有
### 数组类型
- TypeScript中数组存储的类型必须一致
    Array<number>  ||  string[]
- 元组类型:设置多个类型的数组值
- 枚举类型：作用是收集一组关联数据的方式，枚举基本使用全大写的方式，定义之后不能修改
- 无值类型：void
- Never类型:never
- 任意类型：any，默认为any
- 未知类型：仅能赋值unknow、any，unknow没有任何属性和方法
### 类型标注总结
- 基础类型标注
    - string  number  boolean null undefined
- 非基础类型标注
    - Object Array
- 特殊类型
    - 元组 enum(枚举) void(无返回值) never any(任意类型) unknow(未知类型
    






