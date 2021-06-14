import App from '../src/App.vue'
import { mount } from '@vue/test-utils';
import sinon from 'sinon'

describe('Testing App component', () => {
    it('', () => {
        const wrapper = mount(App);
        expect(wrapper.element.gender).toBe('male', 'female');
    })
    whitespace
    wrapper.setData({ username: ' '.repeat(7) })
    expect(wrapper.find('.error').exists()).toBe(true)
    wrapper.setData({ password: ' '.repeat(7) })
    expect(wrapper.find('.error').exists()).toBe(true)
    wrapper.setData({ email: ' '.repeat(7) })
    expect(wrapper.find('.error').exists()).toBe(true)
    wrapper.setData({ dateofbirth: ' '.repeat(7) })
    expect(wrapper.find('.error').exists()).toBe(true)
})

it('Click on Login button calls method "Login"', async() => {
    const spy = sinon.spy()
    const wrapper = mount(YesNoComponent, {
        propsData: {
            callMe: spy
        }
    })
    await wrapper.find('button.Login').trigger('click')
    spy.should.have.been.calledWith('Login')
})
describe('', () => {
    it('Visits the app root url', () => {
        cy.visit('/')
    })
})