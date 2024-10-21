<script setup lang="ts">
import InputText from '@/components/InputText.vue';
import logo from '@/assets/OlympicLogoWhite.png'
import background from '@/assets/background.png'
</script>


  <template>
  <div
    class="bg-scroll bg-no-repeat bg-cover bg-center text-center"
    :style="{
      backgroundImage: `linear-gradient(0deg, rgba(0, 149, 233, 0.7) 8%, rgba(26, 58, 99, 0.7) 42%), url(${background})`,
    }"
  >  
  <div class="flex min-h-screen flex-col justify-center px-4 py-8 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-28 w-28"
        :src="logo"
        alt="olympics"
      />
      <h2 class="mt-2 text-center text-2xl font-bold tracking-tight text-white">
        Create your account
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <InputText type="email" placeholder="Enter your email" />
            </div>
          </div>

          <div>
            <label for="username" class="block text-sm font-medium text-gray-700">
              Username
            </label>
            <div class="mt-1">
              <InputText type="text" placeholder="Enter username" />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div class="mt-1">
              <InputText type="password" placeholder="Create a password" />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center rounded-md bg-secondaryBlue py-2 px-4 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Register
            </button>
          </div>
        </form>

        <p class="mt-6 text-center text-sm text-gray-600">
          Already have an account?
          <RouterLink :to="{name:'login'}" class="font-medium text-indigo-600 hover:text-indigo-500">
            Sign in here
          </RouterLink>
        </p>
      </div>
    </div>
  </div>
</div>
</template>




<style scoped>

</style>