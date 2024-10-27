<template>
    <button @click="toggleTheme" class="p-2 text-xl rounded-md focus:outline-none transition-colors duration-200" aria-label="Toggle Dark Mode">
      <span v-if="isDarkMode">☀️</span>
      <span v-else>🌙</span>
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDarkMode: false,
      };
    },
    created() {
      // Check localStorage for the user's theme preference
      const userTheme = localStorage.getItem('theme');
      if (userTheme === 'dark') {
        document.documentElement.classList.add('dark');
        this.isDarkMode = true;
      }
    },
    methods: {
      toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        if (this.isDarkMode) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      },
    },
  };
</script>

<style scoped>
  /* Optional styles for your button */
</style>  