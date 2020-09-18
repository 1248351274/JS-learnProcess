import { mount } from "@vue/test-utils";
import Message from "../../src/components/Message.vue";
describe("Message.vue", () => {
  it("should show hello ", () => {
    //     const wrapper = mount(Message, {
    //       propsData: {
    //         msg: "hello",
    //       },
    //     });
    //     expect(wrapper.text()).toBe("hello");
  });

  it("should emit click event when clicked ", async () => {
    const wrapper = mount(Message, {});

    // vue 渲染
    // 不是同步渲染
    // 视图更新是异步的
    await wrapper.find("[data-testid='btn1']").trigger("click");

    console.log(wrapper.text());
    expect(wrapper.find("span").text()).toBe("1");
  });
});
