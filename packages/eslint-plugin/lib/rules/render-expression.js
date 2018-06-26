/**
 * @fileoverview urc render
 * @author 唯然<weiran.zsd@alibaba-inc.com>
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'urc render',
      recommended: true,
    },
    fixable: null,
    schema: [],
  },

  create(context) {
    function isValidExpression(node) {
      const expr = node.expression;

      // <div>{foo}</div>
      if (expr.type === 'Identifier' || expr.type === 'Literal') {
        return true;
      }

      // <div>{foo ? bar : quz}</div>
      if (expr.type === 'ConditionalExpression' &&
            (expr.test.type === 'Identifier' || expr.test.type === 'Literal') &&
            (expr.consequent.type === 'Identifier' || expr.consequent.type === 'Literal') &&
            (expr.alternate.type === 'Identifier' || expr.alternate.type === 'Literal')) {
        return true;
      }

      // support map: <div>{arr.map(it => <span>{it}</span>)}</div>
      // TODO: null check
      if (expr.type === 'CallExpression' && expr.callee.type === 'MemberExpression' &&
            expr.callee.property.name === 'map') {
        return expr.arguments.length === 1 && expr.arguments[0].type === 'ArrowFunctionExpression';
      }

      return false;
    }
    return {

      JSXExpressionContainer(node) {
        if (!isValidExpression(node)) {
          context.report({
            node,
            message: 'only Identifier/Literal/arr.map is allowed in JSX expression',
          });
        }
      },
    };
  },
};
