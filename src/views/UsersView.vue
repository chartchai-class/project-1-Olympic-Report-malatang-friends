<script setup lang="ts">
  import background from '@/assets/background.png';
  import { ref, onMounted, computed, watchEffect } from 'vue'
  import UsersService from '@/services/UsersService';
  import type { User } from '@/types';
  import { useRouter,useRoute } from 'vue-router';
  import { useMessageStore } from '@/stores/message';
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '@/stores/auth';

  const router=useRouter()
  const route=useRoute()


  const messageStore=useMessageStore()
  const {message}=storeToRefs(messageStore)

  const users=ref<User[] | null>(null)
  const totalUsers=ref(0)

const page = computed(() => Number(route.query.page) || 1);
const perPage=computed(()=> Number(route.query.perPage) || 3);

  const hasNexPage = computed(() => {
  const totalPages = Math.ceil(totalUsers.value / perPage.value)
  return page.value < totalPages
})

onMounted(()=>{
  fetchUsers();
})

watchEffect(()=>{
  fetchUsers();
})

function fetchUsers(){
  UsersService.getUsers(perPage.value,page.value)
  .then((response)=>{
    users.value=response.data;
    totalUsers.value=Number(response.headers['x-total-count'])
    console.log(totalUsers.value)
  })
  .catch(()=>{
    router.push({name:'NetworkError'});
  })
}

function updateRole(userId: number) {
  const user = users.value?.find((u) => u.id === userId);
  
  if (user) {
    // Determine the new role based on the current role
    let newRole: string;
    if (user.roles.includes('ROLE_ADMIN')) {
      newRole = 'ROLE_USER'; // Change to ROLE_USER if currently ROLE_ADMIN
    } else {
      newRole = 'ROLE_ADMIN'; // Change to ROLE_ADMIN if currently ROLE_USER
    }

    UsersService.updateUserRole(userId, newRole)
      .then(() => {
        // Update user's role in the local state
        user.roles = [newRole]; // Set the new role in the user's roles
        messageStore.updateMessage('Success Update');
        setTimeout(() => {
          messageStore.resetMessage();
        }, 3000);
      })
      .catch(() => {
        messageStore.updateMessage('Failed Update');
        setTimeout(() => {
          messageStore.resetMessage();
        }, 3000);
      });
  }
}

function upgrade(userId: number) {
  updateRole(userId); // Call updateRole which will toggle the role
}

function downgrade(userId: number) {
  updateRole(userId); // Call updateRole which will toggle the role
}


</script>

<template>
      <div
    class="bg-scroll bg-no-repeat bg-cover bg-center text-center h-screen"
    :style="{
      backgroundImage: `linear-gradient(0deg, rgba(0, 149, 233, 0.7) 8%, rgba(26, 58, 99, 0.7) 42%), url(${background})`,
    }"
  >
  <div class="flex flex-col items-center">
      <h1 class="font-poppins mt-4 font-semibold text-2xl text-white mb-8">
       Users Dashboard
      </h1>
      <div class="overflow-x-auto">
        <table
          class="table-auto min-w-full bg-white rounded border-separate border-spacing-y-3"
        >
          <thead
            class=" bg-primaryBlue text-left bg-gray-900 tracking-wider text-white"
          >
            <tr>
              <th class="p-3 text-center">User name</th>
              <th class="p-2 text-center">Email</th>
              <th class="p-3 text-center">Role</th>
              <th class="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td class="p-3">{{ user.username}}</td>
                    <td class="p-3">{{ user.email }}</td>
                    <td class="p-3">{{ user.roles[0]}}</td>
                    <td class="p-3">
                        <button
                         v-if="user.roles.includes('ROLE_USER')"
                         class="text-blue-600 hover:text-blue-900"
                         @click="upgrade(user.id)">
                            Upgrade
                        </button>
                        <button v-else
                        @click="downgrade(user.id)"
                         class="text-red-600 hover:text-red-900">
                            Downgrade
                        </button>
                    </td>
                </tr>

               
          </tbody>
        </table>

        <div class="flex pb-28 pt-8 pagination">
      <RouterLink
       class="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white  hover:bg-secondaryBlue shadow-lg hover:shadow-indigo-500/4 hover:scale-105 transform transition duration-500 ease-in-out"
        id="page-prev"
        :to="{ name: 'users', query: { page: page - 1,perPage:perPage } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Prev
        </RouterLink>

      <RouterLink
        id="page-next"
        class="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-black bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:text-white hover:bg-secondaryBlue shadow-lg hover:shadow-indigo-500/4 hover:scale-105 transform transition duration-500 ease-in-out"
        :to="{ name: 'users', query: { page: page + 1,perPage:perPage } }"
        rel="next"
        v-if="hasNexPage"
        >Next Page &#62;</RouterLink
      >
    </div>
      </div> 
    </div>
  </div>
</template>



<style scoped>
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>