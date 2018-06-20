/**
 * @fileoverview urc render
 * @author 唯然<weiran.zsd@alibaba-inc.com>
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/render-return');
const RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6 }, parser: 'babel-eslint' });
ruleTester.run('render-return', rule, {

  valid: [
    `class Comp extends React.Component{
            state = {};
            isUniversal = true; // 是否支持多端
            render(){
                return <div></div>; // 如果isUniversal 为 true，只能返回一个 jsx 元素，不能有其它逻辑。
            }
        }`,
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: `class Comp extends React.Component{
                state = {};
                isUniversal = true; // 是否支持多端
                render(){
                    var h = 0;
                    return <div>{h}</div>;
                }
            }`,
      errors: [{ message: 'only return statement is allowed in render function.' }],
    },
  ],
});
