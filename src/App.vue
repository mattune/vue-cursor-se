<template>
  <div id="app">
    <h1>マウスオーバーでSE再生→失敗：カスタムディレクティブだとブラウザの自動再生のアレに引っかかる</h1>
    <p>一度は何かしらクリックしないとやっぱり駄目っぽい。<br>1回クリックすると音が鳴る。</p>
    <a href="#" class="pos1" v-cse>hover me</a>
    <a href="#" class="pos2" v-cse>hover me</a>
    <a href="#" class="pos3" v-cse>hover me</a>
    <a href="#" class="pos4" v-cse>hover me</a>
    <a href="#" class="pos5" v-cse>hover me</a>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  padding: 100px;

  a {
    position: absolute;
    display: inline-block;
    border: 1px solid #000;
    padding: 15px;
    background-color: #f0f;
    opacity: 0.5;
    color: #fff;

    &.pos1 { top: 200px; left: 100px; }
    &.pos2 { top: 300px; left: 400px; }
    &.pos3 { top: 500px; right: 100px; }
    &.pos4 { top: 700px; left: 100px; }
    &.pos5 { top: 900px; right: 300px; }
  }
}
</style>
