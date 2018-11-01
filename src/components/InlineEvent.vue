<style>
  .layout1 {
    margin: 30px 30px 30px 30px;
  }

  .set1 {
    background-color: aqua;
    color: purple;
  }

  .set2 {
    text-align: center;
    width: 120px;
  }

  .set3 {
    border: sandybrown dashed 1px;
  }

  .score {
    border: solid 1px black;
  }

  .warning {
    background-color: orange;
    color: purple;
  }

  .warnimage {
    width: 18px;
    height: 18px;
    top: 5px;
    position: relative;
  }
</style>

<template>
  <div id="example" class="container layout1">
    <p><input type="text" v-model="amount" class="form-control"/></p>
    <p>
      <button id="deposit" v-on:click="deposit($event)"
              class="btn btn-primary">예금
      </button>
      <button id="withdraw" v-on:click="withdraw"
              class="btn btn-primary">인출
      </button>
    </p>
    <h3>계좌 잔고 : {{balance}}</h3>

    <br>
    <br>
    <br>
    <div v-on:contextmenu.prevent="ctxStop">
      <a href="https://facebook.com" @click="confirmFB">페이스북</a>
    </div>

    <br/>
    <br/>
    <br/>
    11111111
    <div id="outer" @click="outerClick">
      22222222
      <div id="inner" @click.stop="innerClick">333333</div>
    </div>

    <br/>
    <br/>
    <br/>
    <button id="a" v-bind:style="style1" @mouseover.stop="overEvent" @mouseout.stop="outEvent">테스트
    </button>
    <br>
    <br>
    <br>
    <button id="btn1" v-bind:class="mystyle">버튼1</button>
    <p>
      <input type="checkbox" v-model="mystyle.set1" value="true"/>set1 디자인<br/>
      <input type="checkbox" v-model="mystyle.set2" value="true"/>set2 디자인<br/>
      <input type="checkbox" v-model="mystyle.set3" value="true"/>set3 디자인<br/>
    </P>
    <br/>
    <br/>
    <br/>
    <div>
      점수 : <input type="text" class="score" v-model.number="score" v-bind:class="info"/>
      <img src="images/error.png" class="warnimage" v-show="info.warning"/>
    </div>
  </div>
</template>
<script type="text/javascript">
  var model = {
    amount: 0
    , balance: 0
    , style1: {backgroundColor: "aqua", border: 'solid 1px gray', with: '100px', textAlign: 'center'}
    , mystyle: {set1: false, set2: false, set3: false}
    , score: 0
  }

  export default {
    name: 'example'
    , data: function(){
      return model
    }
    , methods: {
      deposit: function (e) {
        var amt = parseInt(this.amount);
        if (amt <= 0) {
          alert("0보다 큰 값을 예금해야 합니다");
        } else {
          this.balance += amt;
        }
      },
      withdraw: function (e) {
        var amt = parseInt(this.amount);
        if (amt <= 0) {
          alert("0보다 큰 값을 인출할 수 있습니다");
        } else if (amt > this.balance) {
          alert("잔고보다 많은 금액을 인출할 수 없습니다");
        } else {
          this.balance -= amt;
        }
      }
      , ctxStop: function (e) {
      }
      , confirmFB: function (e) {
        if (!confirm("페이스북으로 이동할까요?")) {
          e.preventDefault();
        }
      }
      , outerClick: function (e) {
        console.log("### OUTER CLICK")
        console.log("Event Phase : ", e.eventPhase);
        console.log("Current Target : ", e.currentTarget);
        console.log("Target : ", e.target);
      }
      , innerClick: function (e) {
        console.log("### INNER CLICK")
        console.log("Event Phase : ", e.eventPhase);
        console.log("Current Target : ", e.currentTarget);
        console.log("Target : ", e.target);
      }
      , overEvent: function (e) {
        this.style1.backgroundColor = "purple";
        this.style1.color = "yellow";
      }
      , outEvent: function (e) {
        this.style1.backgroundColor = "aqua";
        this.style1.color = "gray";
      }
    }
    , computed: {
      info: function () {
        if (this.score >= 1 && this.score <= 100)
          return {warning: false};
        else
          return {warning: true};
      }
    }
  }
</script>
