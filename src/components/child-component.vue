<style>
  .buttonstyle { width:120px; height:30px; text-align: center; }
</style>
<template id="childTemplate">
  <div>
    <button class="buttonstyle" v-on:click="clickEvent" v-bind:data-lang="buttonInfo.value">{{ buttonInfo.text }}</button>
  </div>
</template>
<script type="text/javascript">
  export default {
    props : [ 'buttonInfo' ],
    methods : {
      clickEvent : function(e) {
        this.$emit('timeclick', e.target.innerText, e.target.dataset.lang);
      }
    }
  }
</script>
