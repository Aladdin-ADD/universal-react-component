/**
 * @fileoverview urc render expression
 * @author 唯然<weiran.zsd@alibaba-inc.com>
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/render-expression');
const RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6 }, parser: 'babel-eslint' });
ruleTester.run('render-return', rule, {

  valid: [
    `class Comp extends React.Component{
        state = {};
        isUniversal = true;
        render(){
            return <div>{foo}</div>;
        }
    }`,
    `class Comp extends React.Component{
        state = {};
        isUniversal = true;
        render(){
            return <div>{'foo'}</div>;
        }
    }`,
    `class Comp extends React.Component{
        state = {};
        isUniversal = true;
        render(){
            return <div>{foo ? bar : quz}</div>;
        }
    }`,
    `class Comp extends React.Component{
        state = {};
        isUniversal = true;
        render(){
            return <div>{foo ? 'bar' : quz}</div>;
        }
    }`,
    `class Comp extends React.Component{
        state = {};
        isUniversal = true;
        render(){
            return <div>{arr.map(it => it)}</div>;
        }
    }`,
  ],

  invalid: [
    {
      code: `class Comp extends React.Component{
            state = {};
            isUniversal = true;
            render(){
                var h = 0;
                return <div>{foo()}</div>;
            }
        }`,
      errors: [{ message: 'only Identifier/Literal/arr.map is allowed in JSX expression' }],
    },
  ],
});
