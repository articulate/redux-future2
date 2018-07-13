const { Async }  = require('crocks')
const { expect } = require('chai')
const spy        = require('@articulate/spy')

const future = require('.')

describe('future (redux middleware)', () => {
  const axn   = { type: 'TYPE', payload: null }
  const left  = Async.Rejected(axn)
  const right = Async.Resolved(axn)
  const next  = spy()
  const store = { dispatch: spy() }

  afterEach(() => {
    next.reset()
    store.dispatch.reset()
  })

  describe('when action is a rejected future', () => {
    beforeEach(() =>
      future(store)(next)(left)
    )

    it('forks the future and dispatches the rejected value', () => {
      expect(store.dispatch.calls.length).to.equal(1)
      expect(store.dispatch.calls[0]).to.eql([axn])
    })

    it('does not call the next middleware', () =>
      expect(next.calls.length).to.equal(0)
    )
  })

  describe('when action is a resolved future', () => {
    beforeEach(() =>
      future(store)(next)(right)
    )

    it('forks the future and dispatches the resolved value', () => {
      expect(store.dispatch.calls.length).to.equal(1)
      expect(store.dispatch.calls[0]).to.eql([axn])
    })

    it('does not call the next middleware', () =>
      expect(next.calls.length).to.equal(0)
    )
  })

  describe('when action is not a future', () => {
    beforeEach(() =>
      future(store)(next)(axn)
    )

    it('does not fork anything to dispatch values', () =>
      expect(store.dispatch.calls.length).to.equal(0)
    )

    it('calls the next middleware with the action', () =>
      expect(next.calls[0]).to.eql([axn])
    )
  })
})
