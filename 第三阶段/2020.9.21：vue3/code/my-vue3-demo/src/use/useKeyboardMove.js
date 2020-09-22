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
export function useMousePosition() {
  const Mouseposition = reactive({
    x: 0,
    y: 0,
  });
  function handleMouse(e){
    console.log(e);
    Mouseposition.x = e.x
    Mouseposition.y = e.y
  }
  onMounted(() => {
    window.addEventListener("mousemove", handleMouse ,true);
  });

  onUnmounted(() => {
    console.log('onUnmounted');
    window.removeEventListener("mousemove", handleMouse,true);
  });

  return Mouseposition;
}