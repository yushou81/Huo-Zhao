<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <input v-model="newItem" @keyup.enter="addItem" placeholder="Add a new item" />
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
        <button @click="removeItem(index)">Remove</button>
      </li>
    </ul>
  </div>
  <HelloWorld msg="haha + Vue" />
</template>

<script>
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      title: "My Simple Vue App",
      newItem: "",
      items: ["Learn Vue", "Create a project", "Deploy the app"]
    };
  },
  methods: {
    addItem() {
      if (this.newItem.trim() !== "") {
        this.items.push(this.newItem);
        this.newItem = ""; // 清空输入框
      }
    },
    removeItem(index) {
      this.items.splice(index, 1); // 删除某一项
    }
  }
};
</script>
<style scoped>



</style>
