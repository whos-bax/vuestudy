<template>
  <div class="black-bg" v-if="modalIsOpen == true" @click="modalIsOpen = false">
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
      <button @click="modalIsOpen = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <!-- <a v-for="re in 3" :key="re">Home</a>  -->
    <a v-for="re2 in menus" :key="re2">
      {{ re2 }}
    </a>
  </div>
  <!-- <div v-for="(a,i) in products" :key="i">
    <h4>{{ products[i] }}</h4>
  </div> -->

  <div v-for="i in oneroom" :key="i">
    <img :src="i.image" class="room-img" />
    <h4>{{ i.title }}</h4>
    <p>{{ i.price }}</p>
    <br />
  </div>

  <hr />
  <div>
    <img
      src="./assets/room0.jpg"
      class="room-img"
      @click="modalIsOpen = true"
    />
    <h4>{{ products[0] }}</h4>
    <p>50 만원</p>
    <button @click="신고수[0]++">허위매물신고</button>
    <button v-on:click="decrease(0)">실수에요</button>
    <span>신고수 : {{ 신고수[0] }} </span>
  </div>

  <div>
    <img src="./assets/room1.jpg" class="room-img" />
    <h4>{{ products[1] }}</h4>
    <p>70 만원</p>
    <button @click="신고수[1]++">허위매물신고</button>
    <button v-on:click="decrease(1)">실수에요</button>
    <span>신고수 : {{ 신고수[1] }} </span>
  </div>

  <div>
    <img src="./assets/room2.jpg" class="room-img" />
    <h4>{{ products[2] }}</h4>
    <p>70 만원</p>
    <button @click="신고수[2]++">허위매물신고</button>
    <button v-on:click="decrease(2)">실수에요</button>
    <span>신고수 : {{ 신고수[2] }} </span>
  </div>
</template>

<script>
import data from "./assets/oneroom.js";
export default {
  name: "App",
  data() {
    return {
      oneroom: data,
      modalIsOpen: false,
      신고수: [0, 0, 0],
      menus: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    };
  },
  methods: {
    decrease(a) {
      this.신고수[a]--;
    },
  },
  components: {},
};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.room-img {
  width: 500px;
  margin-top: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkseagreen;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
  cursor: pointer;
}
</style>
