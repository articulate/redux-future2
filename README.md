# redux-future2
[![npm version](https://img.shields.io/npm/v/redux-future2.svg)](https://www.npmjs.com/package/redux-future2)
[![npm downloads](https://img.shields.io/npm/dm/redux-future2.svg)](https://www.npmjs.com/package/redux-future2)
[![Build Status](https://travis-ci.org/articulate/redux-future2.svg?branch=master)](https://travis-ci.org/articulate/redux-future2)
[![Coverage Status](https://coveralls.io/repos/github/articulate/redux-future2/badge.svg?branch=master)](https://coveralls.io/github/articulate/redux-future2?branch=master)
[![NSP Status](https://nodesecurity.io/orgs/articulate/projects/94556299-8383-47c3-83a6-1add64143199/badge)](https://nodesecurity.io/orgs/articulate/projects/94556299-8383-47c3-83a6-1add64143199)

Future middleware for redux.

### Usage

```haskell
future : Store -> Function -> Action -> a
```

Redux middleware to dispatch actions that are Futures, also known as Asyncs or Tasks.  Popular libraries providing Future implementations include [`crocks`](https://github.com/evilsoft/crocks) and [`Fluture`](https://github.com/fluture-js/Fluture).

If any action has a property called `fork` that is a function, the action is assumed to be a Future.

```js
const { applyMiddleware, combineReducers, createStore } = require('redux')
const future = require('redux-future2')

const reducers = require('../ducks')

const store = createStore(combineReducers(reducers), applyMiddleware(future))
```

