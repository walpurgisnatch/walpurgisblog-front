<template>
  <div class="profile">
    <SignUp />
  </div>
</template>


<script>
//import SignIn from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'

export default {
  components: {
//    SignIn,
    SignUp
  }
}
</script>

<style scoped>
.title {
  text-align: center;
}
</style>