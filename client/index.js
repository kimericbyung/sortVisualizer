import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from './Header.vue'

const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}
\
        { path: '', component: UserHome },

        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        { path: 'profile', component: UserProfile },

        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        { path: 'posts', component: UserPosts }
      ]
    }
  ]
})

new Vue({
  el: '#app',
  data() {
    return {
      User
    }
  }
})