<template>
  <ScrollTop>
      <a class="back-ttop">
        <i class="fa fa-chevron-up"></i>
        top
      </a>
  </ScrollTop>
</template>

<script>
import ScrollTop from './ScrollTop'
export default {
  components: {
    ScrollTop
  }
}
</script>

<style>
@import '../assets/css/style.css';

.back-ttop {
  background: #0078ff;
  color: #fff !important;
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 25px;
  border-radius: 50%;
  transition: background 0.5s;
  z-index: 11;
  display: block;
}
</style>
