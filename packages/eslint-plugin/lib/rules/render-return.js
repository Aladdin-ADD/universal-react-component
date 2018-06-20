/**
 * @fileoverview urc render
 * @author 薛定谔的猫<hh_2013@foxmail.com>
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'urc render',
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create(context) {

    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {

      // give me methods
      'ClassDeclaration MethodDefinition': function(node) {
        // render 函数
        if (node.key.type === 'Identifier' && node.key.name === 'render') {
          // TODO: check null
          if (node.value.body.body.length > 1) {
            return context.report({
              node: node.value.body,
              message: 'only return statement is allowed in render function.',
            });
          }
          if (node.value.body.body.length === 1 && node.value.body.body[0].type !== 'ReturnStatement') {
            return context.report({
              node: node.value.body,
              message: 'only return statement is allowed in render function.',
            });
          }
        }
      },
    };
  },
};
