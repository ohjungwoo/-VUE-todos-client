<style>
  #list {
    width: 400px;
    border: 1px solid black;
    border-collapse: collapse;
  }

  #list td, #list th {
    border: 1px solid black;
    text-align: center;
  }

  #list > thead > tr {
    color: yellow;
    background-color: purple;
  }
</style>

<template>
  <div id="example">
    <p>국가명 : <input type="text" v-model="countryname" placeholder="국가명"></p>
    <table id="list">
      <thead>
      <tr>
        <th>번호</th>
        <th>국가명</th>
        <th>수도</th>
        <th>지역</th>
      </tr>
      </thead>
      <tbody id="contacts">
      <tr v-for="c in filtered">
        <td>{{c.no}}</td>
        <td>{{c.name}}</td>
        <td>{{c.capital}}</td>
        <td>{{c.region}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<script type="text/javascript">
  var model = {
    countryname: "",
    countries: [
      {no: 1, name: "미국", capital: "워싱턴DC", region: "america"},
      {no: 2, name: "프랑스", capital: "파리", region: "europe"},
      {no: 3, name: "영국", capital: "런던", region: "europe"},
      {no: 4, name: "중국", capital: "베이징", region: "asia"},
      {no: 5, name: "태국", capital: "방콕", region: "asia"},
      {no: 6, name: "한국", capital: "서울", region: "asia"},
    ]
  }

  export default {
    name: 'SearchFilterEx'
    ,data() {
      return model
    }
    ,created: function () {
      console.log('Created!!');
    },
    updated: function () {
      console.log('updated!!');
    }
    , watch :{
      result : function(){
        console.log('watch');
      }
    }
    , computed: {
      result : function(){
        console.log('computed');
      }
      ,filtered: function () {
        let cname = this.countryname.trim();
        return this.countries.filter((item) => {
          if (item.name.includes(cname)) {
            return true;
          }
          ;
        })
      }
    }
  }
</script>
