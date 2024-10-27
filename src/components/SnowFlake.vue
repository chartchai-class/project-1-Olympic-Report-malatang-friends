<template>
    <div class="snowflakes" aria-hidden="true">
      <div v-for="(icon, index) in icons" :key="index" class="snowflake">
        {{ icon }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // List of Olympic-related icons/emojis
        icons: [
          '🏅', // medal
        '🥇', // gold medal
        '🥈', // silver medal
        '🥉', // bronze medal
        '🇺🇸', // US flag
        '🇨🇦', // Canada flag
        '🇬🇧', // UK flag
        '🇦🇺', // Australia flag
        '🇯🇵', // Japan flag
        '🇩🇪', // Germany flag
        '🇫🇷', // France flag
        '🇮🇹', // Italy flag
        '🇨🇳', // China flag
        '🇮🇳', // India flag
        '🇧🇷', // Brazil flag
        '🇰🇷', // South Korea flag
        '🇷🇺', // Russia flag
        '🇲🇽', // Mexico flag
        '🇪🇸', // Spain flag
        '🇳🇱', // Netherlands flag
        '🇸🇪', // Sweden flag
        '🇳🇴', // Norway flag
        '🇦🇷', // Argentina flag
        '🇿🇦', // South Africa flag
        '🏆', // trophy
        '⚽', // soccer ball (representing sports)
        '🏊', // swimmer
        '🚴', // cyclist
        '🏋️‍♀️', // weightlifter
        '🌍',  // medal
        '🌍',
        '❄️', 
        '⭐', 
        '💖', 
        '🌟', 
        '✨' 
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .snowflakes {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 9999;
  }
  
  .snowflake {
    position: absolute;
    top: -10%;
    opacity: 0.7;
    font-size: 1.5em;
    animation: fall linear infinite;
  }
  
  @keyframes fall {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100vh);
    }
  }
  
  /* Randomize snowflake properties */
  .snowflake:nth-child(1) {
    left: 10%; 
    animation-duration: 5s;
    animation-delay: 0s;
  }
  .snowflake:nth-child(2) {
    left: 20%; 
    animation-duration: 6s;
    animation-delay: 1s;
  }
  .snowflake:nth-child(3) {
    left: 30%; 
    animation-duration: 4s;
    animation-delay: 2s;
  }
  .snowflake:nth-child(4) {
    left: 40%; 
    animation-duration: 7s;
    animation-delay: 1.5s;
  }
  .snowflake:nth-child(5) {
    left: 50%; 
    animation-duration: 5.5s;
    animation-delay: 0.5s;
  }
  .snowflake:nth-child(6) {
    left: 60%; 
    animation-duration: 6.5s;
    animation-delay: 3s;
  }
  .snowflake:nth-child(7) {
    left: 70%; 
    animation-duration: 4.5s;
    animation-delay: 2.5s;
  }
  .snowflake:nth-child(8) {
    left: 80%; 
    animation-duration: 5.8s;
    animation-delay: 4s;
  }
  .snowflake:nth-child(9) {
    left: 90%; 
    animation-duration: 6.2s;
    animation-delay: 1.2s;
  }
  .snowflake:nth-child(10) {
    left: 95%; 
    animation-duration: 4.3s;
    animation-delay: 2.8s;
  }
  </style>
  