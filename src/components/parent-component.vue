<!-- parent Component 시작 -->
<template id="parent-template">
  <div>
    <child-component v-for="s in buttons" v-bind:button-info="s" v-on:timeclick="timeclickEvent">
    </child-component>
    <hr />
    <div>{{ msg }}</div>
  </div>
</template>
<script type="text/javascript">
  import childComponent from './child-component.vue';

  export default {
    components: {
      childComponent
    }
    ,props : [ 'buttons' ]
    ,data : function() {
      return { msg:"" };
    }
    ,methods : {
      timeclickEvent : function(k, v) {
        this.msg = k + ", " +v;
      }
    }
  }
</script>


<div id="app">
  <ul>
    <list-component message="Hello" v-bind:count="100"></list-component>
    <list-component message="씬짜오" :count="21"></list-component>
    <list-component message="니하오마"></list-component>
    <list-component v-bind:count="1000"></list-component>
  </ul>
</div>
