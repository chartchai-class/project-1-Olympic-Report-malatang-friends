<script setup lang="ts">

    import logo from '@/assets/OlympicLogoWhite.png'
    import background from '@/assets/background.png'
    
    import InputText from '@/components/InputText.vue';
    import * as yup from 'yup'
    import { storeToRefs } from 'pinia'
    import { useField,useForm } from 'vee-validate';
    import { useAuthStore } from '@/stores/auth';
    import { useRouter } from 'vue-router';
    import { useMessageStore } from '@/stores/message';

        
    const messageStore=useMessageStore()
    const {message}=storeToRefs(messageStore)

    const router=useRouter()
    const authStore=useAuthStore()

    const validationSchema= yup.object({
        username: yup.string().required('Username is required'),
        password: yup.string().required('Password is required')
    })

    const {errors,handleSubmit}=useForm({
        validationSchema,
        initialValues:{
            username:'',
            password:''
        }
    })
    const {value:username}=useField<string>('username')
    const {value:password}=useField<string>('password')

    
    const onSubmit=handleSubmit((values)=>{
        authStore.login(values.username,values.password)
        .then(()=>{
            router.push({name:'home-view'})
        })
        .catch((err)=>{
            messageStore.updateMessage('could not login')
            setTimeout(()=>{
                messageStore.resetMessage()
            },3000)
           
        })
    })
    
</script>

<template>
    <div
    class="bg-scroll bg-no-repeat bg-cover bg-center text-center"
    :style="{
      backgroundImage: `linear-gradient(0deg, rgba(0, 149, 233, 0.7) 8%, rgba(26, 58, 99, 0.7) 42%), url(${background})`,
    }"
  > 
    <div class="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div id="flashMessage" class="animate-fade" v-if="message">
        <h4>{{ message }}</h4>
      </div>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-28 w-28" 
            :src=logo
            alt="Your Company"/>

            <h2 class="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                Sign in to your account
            </h2>

        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form class="space-y-6" @submit.prevent="onSubmit">
                <div>
                    <label for="username" class="block text-sm font-medium leading-6 text-gray-900">
                       Username
                    </label>
                  <InputText type="text" v-model="username" placeholder="Username" :error="errors['username']"/>
                    </div>


                    <div>
                        <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>

                        <div class="text-sm">
                            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    <InputText type="password" v-model="password" placeholder="Password" :error="errors['password']"/>
                
                    </div>

                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-secondaryBlue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Sign in
                        </button>
                    </div>
            </form>
            

            <p class="mt-6 text-center text-sm text-gray-600">
            <RouterLink :to="{name:'register'}" class="font-medium text-indigo-600 hover:text-indigo-500">
                Register here
            </RouterLink>
            </p>
        </div>
    </div>
    </div>
    </div>
</template>
