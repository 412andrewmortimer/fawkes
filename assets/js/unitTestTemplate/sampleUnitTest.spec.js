// Import Vue and the component being tested
import Vue from 'vue'
import sampleUnitTest from './sampleUnitTest.vue'

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('sampleUnitTest', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof sampleUnitTest.created).toBe('function')
  })

  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(typeof sampleUnitTest.data).toBe('function')
    const defaultData = sampleUnitTest.data()
    expect(defaultData.message).toBe('hello!')
  })

  // Inspect the component instance on mount
  it('correctly sets the message when created', () => {
    const vm = new Vue(sampleUnitTest).$mount()
    expect(vm.message).toBe('bye!')
  })

  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    const Constructor = Vue.extend(sampleUnitTest)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).toBe('bye!')
  })
})