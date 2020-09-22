import { reactive, onMounted, onUnmounted } from "vue";
export function useKeyboardMove() {
  // 封装对应的键盘移动逻辑

  const position = reactive({
    x: 0,
    y: 0,
  });

  onMounted(() => {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowUp":
          position.y--;
          break;
        case "ArrowDown":
          position.y++;
          break;

        case "ArrowLeft":
          position.x--;
          break;

        case "ArrowRight":
          position.x++;
          break;

        default:
          break;
      }
    });
  });

  onUnmounted(() => {
    //   window.removeEventListener
  });

  return position;
}
