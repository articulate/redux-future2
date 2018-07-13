// future : Store -> Function -> Action -> a
function future(store) {
  return function(next) {
    return function(action) {
      if (action && typeof action.fork === 'function') {
        action.fork(store.dispatch, store.dispatch)
      } else {
        next(action)
      }
    }
  }
}

module.exports = future
