import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import TestComponent from '../src/components/TestComponent.vue'

describe('tests', () => {
  it('should mock the function fnInside', () => {
    const wrapper = mount(TestComponent, {
      global: {
        mocks: {
          fnInside: vi.fn().mockReturnValue(1),
        },
      },
    })

    expect(wrapper.vm.fnOutside()).toBe(1)
  })
})

