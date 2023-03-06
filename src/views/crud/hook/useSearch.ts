import { getAsyncCrudData } from "@/api/crud";
import { ref, onMounted, computed, watchEffect, watch } from "vue";
import { useScroll, watchThrottled } from "@vueuse/core";

export const useSearchWork = () => {
  const city = ref([]);

  onMounted(() => {
    getCrudData();
  });
  /**
   * @description 获取城市数据
   */
  const getCrudData = () => {
    getAsyncCrudData().then(res => {
      console.log("👍 ~~ res:", res);
      city.value = [...city.value, ...res.data];
    });
  };
  return { city, getCrudData };
};

export const useSearchFn = () => {
  const { city, getCrudData } = useSearchWork();
  const el = ref();
  // el.value = document.querySelector(".el-scrollbar__view");
  const { x, y, arrivedState } = useScroll(el);
  watchThrottled(
    () => arrivedState.bottom,
    (val, oldval) => {
      if (val) {
        getCrudData();
      }
    },
    { throttle: 1000 }
  );
  // watchEffect(() => {
  // });
  onMounted(() => {
    el.value = document.querySelector(".el-select-dropdown__wrap");
  });
  /**
   * @description 获取option滚动，并触底获取数据
   */
  const onRollOption = () => {};

  return { city, x, y };
};
