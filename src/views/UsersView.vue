<script setup lang="ts">
  import background from '@/assets/background.png';
  import { ref, onMounted, computed, watchEffect } from 'vue'
  import UsersService from '@/services/UsersService';
  import type { User } from '@/types';
  import { useRouter } from 'vue-router';

  const router=useRouter()
  const users=ref<User[] | null>(null)
  const totalUsers=ref(0)

  const hasNexPage = computed(() => {
  const totalPages = Math.ceil(totalUsers.value / perPage.value)
  return page.value < totalPages
})

  const props = defineProps({
  page: {
    type: Number,
    default: 1
  },
  perPage:{
    type:Number,
    default:10
  }
})


const page = computed(() => props.page);
const perPage=computed(()=> props.perPage);
onMounted(()=>{
 fetchUsers()
})

function fetchUsers(){
  UsersService.getUsers(perPage.value,page.value)
  .then((response)=>{
    users.value=response.data;
    totalUsers.value=Number(response.headers['x-total-count'])
  })
  .catch(()=>{
    router.push({name:'NetworkError'});
  })
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
                        <button v-if="user.roles.includes('ROLE_USER')" class="text-blue-600 hover:text-blue-900">
                            Upgrade to Admin
                        </button>
                        <button v-else class="text-red-600 hover:text-red-900">
                            Downgrade to User
                        </button>
                    </td>
                </tr>

               
          </tbody>
        </table>

        <div class="pagination">
      <RouterLink
        id="page-prev"
        :to="{ name: 'users', query: { page: page - 1,perPage:perPage } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Prev Page</RouterLink
      >

      <RouterLink
        id="page-next"
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