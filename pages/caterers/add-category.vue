<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 w-11/12 max-w-xl sm:mx-auto">
    <div class="relative p-8 bg-white shadow-sm sm:rounded-xl">
      <form class="w-full">
        <div class="mb-5 relative">
          <input type="text" id="caterogy-name" placeholder="Enter Category Name" class="peer border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 " />
          
        </div>
        
        <button onclick="javascript:void(0);" class="w-full bg-purple-800 text-white p-3 rounded-md">Submit</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
layout:'user'
}
</script>

<style>

</style>