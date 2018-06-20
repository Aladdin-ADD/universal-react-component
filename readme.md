<p align="center">
  <a href="https://ci.appveyor.com/api/projects/status/v562l6v4h098dvtf?svg=true">
    <img src="https://ci.appveyor.com/api/projects/status/v562l6v4h098dvtf?svg=true"
         alt="build status">
  </a>
  <a href="https://github.com/tplss/node/blob/master/LICENSE.md">
    <img src="https://img.shields.io/npm/l/rollup.svg"
         alt="license">
  </a>
  <a href="https://david-dm.org/tplss/node">
    <img src="https://david-dm.org/tplss/node/status.svg"
         alt="dependency status">
  </a>
</p>

# universal-react-component

## WHY?

同构在某些场景下尤其重要（比如电商），而传统的react组件由于 jsx 的语法极度灵活，增加了同构的难度。
我们尝试对 jsx 的能力加上限制，从而使编写的 react 组件可以在多端(browser、webworker、server)渲染，从而支持MSR(mixed-side-render)。最终达到：首屏组件通过 ssr/sw 渲染，其余部分通过浏览器端渲染。

## HOW?
URC组件(universal-react-component) 要满足以下条件

+ 不使用 DOM
+ 不使用 BOM，比如 history、location
+ 组件定义为：

```js
class Comp extends React.Component{
    state = {},
    isUniversal = true, // 是否支持多端
    render(){
        return <div></div>; // 如果isUniversal 为 true，只能返回一个 jsx 元素，不能有其它逻辑。
    }
}
```

## TODO

+ 在构建前通过 eslint 来检测是否满足 URC 标准。([@urc/eslint-plugin](https://www.npmjs.com/package/@urc/eslint-plugin))
+ 约束 jsx 能力，从而可以生成其它 template 格式的模板文件(e.g. velocity)。([@urc/babel-plugin-urc2vm](https://www.npmjs.com/package/@urc/babel-plugin-urc2vm))
+ 已有组件： n/w :(
