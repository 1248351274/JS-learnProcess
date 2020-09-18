import { mount } from "@vue/test-utils";
import Counter from "../../src/components/Counter.vue";
describe("Counter", () => {
  test("slot ", () => {
    const wrapper = mount(Counter, {
      slots: {
        default: "<div>vue04</div>",
      },
    });

    expect(wrapper.text()).toBe("vue04");
  });

  test("should show counter ", () => {
    const wrapper = mount(Counter, {});

    expect(wrapper.text()).toBe("counter");
  });
});
