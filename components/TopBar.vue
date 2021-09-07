<template>
  <div class="bg-white  h-full flex flex-col text-sm">
  <header class="text-white flex flex-col">
    <section class="flex space-x-1 headbg p-1 pr-0 ">
      
        <button class="text-purple-300 p-1 rounded-md hover:bg-white hover:bg-opacity-20"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></button>
      <button class="text-purple-300 p-1 rounded-md hover:bg-white hover:bg-opacity-20"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg></button>
      <button class="text-purple-300 p-1 rounded-md hover:bg-white hover:bg-opacity-20"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg></button>
      <button class="text-purple-300 p-1 rounded-md hover:bg-white hover:bg-opacity-20"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg></button>
      
      <div class="flex-grow"></div>
      <div class="hidden lg:block ">
          <nuxt-link to="" class="mr-2 inline-block px-4 py-3 text-xs text-purple-600 hover:text-purple-700 font-semibold leading-none border border-purple-200 hover:border-purple-300 rounded" >Log In</nuxt-link>
          <nuxt-link to="" class="mr-2 inline-block px-4 py-3 text-xs font-semibold leading-none bg-purple-600 hover:bg-purple-700 text-white rounded" >Sign Up</nuxt-link>
          </div>
    </section>
  
  </header>
  
</div>
</template>

<script>
export default {

}
</script>

<style>
.headbg{
    background-color: #34174A;
}
</style>