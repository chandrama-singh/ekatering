<template>
  <div>
    <nav style="height: 58px;" aria-label="top bar" class="flex-none flex justify-between border-b bg-white">
      <!-- top bar left -->
      <ul aria-label="top bar left" aria-orientation="horizontal" class="flex">
        
      </ul>

      <!-- to bar right  -->
      <ul aria-label="top bar right" aria-orientation="horizontal" class="px-8 flex items-center">
        <li class="h-10 w-10 ml-3">
          <ProfileAction />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    props: {
      pageTitle: {
        type: String,
        required: false,
      },
    },
    data() {
      return {
        user:this.$store.state.user,
      }
    },
  }

</script>