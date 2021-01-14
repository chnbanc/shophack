<template>
  <div class="loader">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.loader {
  position: relative;
  margin-bottom: 20px;
  margin-top: 20px;
  height: 40px;
  width: 40px;
  border-radius: 80px;
  border: 3px solid #C25EA4;
  top: 28%;
  top: -webkit-calc(50% - 43px);
  top: calc(50% - 43px);
  left: 35%;
  left: -webkit-calc(50% - 43px);
  left: calc(50% - 43px);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-animation: loader 2s linear infinite;
  animation: loader 2s linear infinite;
}

.loader:after {
  content: "";
  position: absolute;
  top: -5px;
  left: 20px;
  width: 11px;
  height: 11px;
  border-radius: 10px;
  background-color: #734085;
}

@-webkit-keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>