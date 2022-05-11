<template>
  <div class="memo">
    <div class="act">
      <button class="btn btn-primary" @click="add()">+추가</button>
    </div>
    <ul>
      <li v-for="(d, idx) in state.data" :key="idx">{{ d }}</li>
    </ul>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      data: [],
    });
    const add = () => {
      state.data.push("추가된 메모내용");
    };

    return { state, add };
  },
};
</script>

<style lang="scss" scoped>
.memo {
  .act {
    text-align: right;
    padding: 10px 10px 5px;
  }
  ul {
    list-style: none;
    padding: 15px 0;
    margin: 0;

    li {
      padding: 15px;
      margin: 5px;
      border: 1px solid #eee;
    }
  }
}
</style>
