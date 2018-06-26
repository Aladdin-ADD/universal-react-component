/**
 * @fileoverview eslint plugin for URC(universal react component)
 * @author 薛定谔的猫
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
const rules = requireIndex(__dirname + '/rules');

module.exports = rules;

