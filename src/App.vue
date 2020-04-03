<template>
  <div id="app">
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};

window.onload = function() {
  document.addEventListener("touchstart", function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  document.addEventListener("gesturestart", function(event) {
    event.preventDefault();
  });
};
</script>

<style>
#app {
  width: 100%;
  overflow-x: hidden;
  background-color: #f7f7f7;
}

.fll {
  float: left;
}

.flr {
  float: right;
}

.ml10 {
  margin-left: 10px;
}

.ml4 {
  margin-left: 4px;

}
</style>
