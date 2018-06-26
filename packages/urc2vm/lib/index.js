'use strict';

const babelTemplate = require('babel-template');

module.exports = function(babel) {
  const {
    types: t,
  } = babel;
  const set = new WeakSet();

  let state = {
    el: [],
    buffer: '',
    aheadEl: [],
    aheadBuffer: '',
  };

  function pushString(str) {
    if (str.startsWith('\n')) {
      return;
    }
    if (state.buffer) {
      state.buffer = state.buffer + str;
    } else {
      state.buffer = str;
    }
  }

  function pushExp(expNode) {
    fluseString();
    state.el.push(expNode);
  }

  function fluseString() {
    state.el.push(t.stringLiteral(state.buffer));
    state.buffer = '';
  }

  function pushStringAHead(str) {
    if (str.startsWith('\n')) {
      return;
    }
    if (state.aheadBuffer) {
      state.aheadBuffer = state.aheadBuffer + str;
    } else {
      state.aheadBuffer = str;
    }
  }

  function pushExpAHead(expNode) {
    fluseAHeadString();
    state.aheadEl.push(expNode);
  }

  function fluseAHeadString() {
    state.aheadEl.push(t.stringLiteral(state.aheadBuffer));
    state.aheadBuffer = '';
  }

  const handlers = {
    JSXElement: {
      exit(path) {
        const node = path.node.openingElement;

        if (/^[A-Z]/.test(node.name.name)) {
          // custom component
          if (path.scope.hasBinding(node.name.name)) {

            const properties = [];

            node.attributes.forEach(attr_node => {
              let value = attr_node.value;
              value = value.expression || value;
              properties.push(t.objectProperty(
                t.identifier(attr_node.name.name),
                value
              ));
            });

            const props = t.objectExpression(
              properties
            );

            const tpl = babelTemplate('(new COMPONENT(PROPS).render())')({
              COMPONENT: t.identifier(node.name.name),
              PROPS: props,
            });

            pushExp(tpl.expression);

          }
        } else {
          pushStringAHead('<' + node.name.name);
          // path.traverse(handlers);

          node.attributes.forEach(attr_node => {
            pushStringAHead(' ' + attr_node.name.name + '="');
            if (t.isJSXExpressionContainer(attr_node.value)) {
              pushExpAHead(attr_node.value.expression);
            } else if (t.isStringLiteral(attr_node.value)) {
              pushStringAHead(attr_node.value.value);
            }
            pushStringAHead('"');
          });
          pushStringAHead('>');


          if (path.node.closingElement) {
            pushString('</' + node.name.name + '>');
          }

        }


        fluseAHeadString();
        fluseString();

        path.replaceWith(
          t.callExpression(
            t.memberExpression(t.arrayExpression(state.aheadEl.concat(state.el)), t.identifier('join')), [ t.stringLiteral('') ]
          )
        );

        state = {
          el: [],
          buffer: '',
          aheadEl: [],
          aheadBuffer: '',
        };
      },
    },

    ConditionalExpression(path) {
      path.skip();
    },

    CallExpression(path) {
      path.skip();
    },

    JSXExpressionContainer: {
      exit(path) {
        if (t.isJSXElement(path.parent)) {
          pushExp(path.node.expression);
        }
      },
    },


    JSXText(path) {
      pushString(path.node.value);
    },
  };

  return {
    inherits: require('babel-plugin-syntax-jsx'),
    visitor: handlers,
  };
};
