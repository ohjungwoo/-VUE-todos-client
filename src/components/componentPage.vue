<template id="listTemplate">
<li>{{message}}</li>
</template>



<script type="text/javascript">
  Vue.component('list-component', {
    template : '#listTemplate',
    props : {
      message : { type:String, default:'안녕하세요' },
      count : { type:Number, required:true }
    }
  })
</script>


<div id="app">
  <ul>
    <list-component message="Hello" v-bind:count="100"></list-component>
    <list-component message="씬짜오" :count="21"></list-component>
    <list-component message="니하오마"></list-component>
    <list-component v-bind:count="1000"></list-component>
  </ul>
</div>
