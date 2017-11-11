<template>
<div>
  <span class="counter">
    {{ counter }}
  </span>
  <button @click="increment()">Increment counter</button>
</div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
  },
};
</script>

<style>
.counter {
  color: blue;
}
</style>