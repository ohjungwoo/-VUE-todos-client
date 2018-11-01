<template>
  <div class="container">
    <h2>User List</h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="(user, index) in users">
        {{user.name}}
        <div class="btn-group pull-right" style="font-size: 12px; line-height: 1;">
          <button type="button" class="btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            더보기<span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li><a href="#" @click="deleteUser(index)">삭제</a></li>
            <li><a href="#" @click="postUser(user.id)">작성글보기</a></li>
          </ul>
        </div>
      </li>
    </ul>

    <div style="display: none" id="POST_LIST">
    <h2>작성글 List</h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="(user, index) in users">
        {{user.name}}
        <div class="btn-group pull-right" style="font-size: 12px; line-height: 1;">
          <button type="button" class="btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            더보기<span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li><a href="#" @click="deleteUser(index)">삭제</a></li>
            <li><a href="#" @click="postUser(user.id)">작성글보기</a></li>
          </ul>
        </div>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserPage',
    data(){
      return {
        users : []
      }
    },
    mounted(){
      this.getPickList();
    },
    methods : {
      getPickList() {
        this.$http.get('https://jsonplaceholder.typicode.com/users')
          .then((response) =>  {
            this.users = response.data;
          })
      },
      deleteUser(index){
        this.users.splice(index, 1);
      },
      postUser(userId){
        this.$http.get('https://jsonplaceholder.typicode.com/posts?userId='+userId)
          .then((response) => {
            var html = ''
            response.data.map(function(data, index){
              html += '<li class="list-group-item">';
              html += data.title;
              html += '</li>';
            });

            $('#POST_LIST ul').html(html);
            $('#POST_LIST').show();
        })
      }
    }
  }
  </script>
