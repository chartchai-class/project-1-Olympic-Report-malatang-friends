<script setup lang="ts">
 import { useAuthStore } from './stores/auth';
 import { useRouter } from 'vue-router';
 import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount, mdiAccountPlus, mdiLogin } from '@mdi/js';

const authStore=useAuthStore()
const router=useRouter()

function logout(){
  authStore.logout()
  router.push({name:'login'})
}

const token=localStorage.getItem('token')
const user=localStorage.getItem('user')
if(token && user)
{
  authStore.reload(token,JSON.parse(user))
}
else{
  authStore.logout()
}


</script>

<template>
    <div>
      <header>
        <div class="wrapper">
        <nav class="py-6">
          <nav class="flex">
            <ul v-if="!authStore.currentUserName" class="flex navbar-nav ml-auto">
              <li class="nav-item px-2">
                <!--for sign up-->
                <router-link to="/register" class="nav-link">
                  <div class="flex items-center">
                    <SvgIcon type="mdi" :path="mdiAccountPlus"/>
                    <span class="ml-3">Sign Up</span>
                  </div>
                </router-link>
              </li>

               <!--for login-->
               <li class="nav-item px-2">
                <router-link to="/login" class="nav-link">
                  <div class="flex items-center">
                    <SvgIcon type="mdi" :path="mdiLogin"/>
                    <span class="ml-3">Login</span>
                  </div>
                </router-link>
               </li>
            </ul>
            
            <ul v-if="authStore.currentUserName" class="flex navbar-nav ml-auto">
              <li class="nav-item px-2">
                <router-link to="/profile" class="nav-link">
                  <div class="flex items-center">
                    <SvgIcon type="mdi" :path="mdiAccount"/>
                    <span class="ml-3">
                      {{ authStore.currentUserName }}
                    </span>
                  </div>
                </router-link>
              </li>

              <li class="nav-item px-2">
                <a class="nav-link hover:cursor-pointer" @click="logout">
                  <div class="flex items-center">
                    <SvgIcon type="mdi" :path="mdiLogin"/> 
                    <span class="ml-3">LogOut</span>
                  </div>
                </a>
              </li>


            </ul>
          </nav>
        
           <span v-if="authStore.isAdmin">
            <RouterLink 
            class="font-bold text-gray-700"
            exact-active-class="text-green-500" 
            :to="{ name: 'add-event' }"
            >New Event</RouterLink>
           </span>
        </nav>
      </div>
      </header>
      <SpeedInsights />
      <RouterView />
  </div>
</template>
