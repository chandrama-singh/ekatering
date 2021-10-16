<template>
  <section class="relative pt-10 pb-5 2xl:pb-40 overflow-hidden ">
    <p></p>
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap mb-16 lg:mb-28">
        <div class="w-full lg:w-3/5 mb-16 lg:mb-0">
          <div class="max-w-8xl ">
            <div class="relative min-h-screen flex flex-wrap justify-center  py-8 px-4 sm:px-6 lg:px-8  ">
	<div class="absolute opacity-60 inset-0 z-0"></div>
  	<div class="max-w-md w-full space-y-8  p-10 bg-white rounded-xl z-10">
		<div class="text-center mb-10">
			<h2 class="mt-4 pb-2 text-xl font-semibold text-purple-800  fontpoppin">
				Register Your Business
			</h2>
			<hr/>
		</div>
	
		<div class="flex-wrap items-center justify-between space-x-2">
            <h2 class="mt-6 pb-4 text-xl font-semibold text-gray-900 fontpoppin">
				Payment
			</h2><br/>
             <div>
			<div class="flex justify-between">
                <label class=" text-sm font-bold text-gray-700 tracking-wide">Product Title : </label>
                <label class="text-sm font-bold text-gray-700 tracking-wide">Name</label>
            </div>
            <div class="flex justify-between">
                <label class="text-sm font-bold text-gray-700 tracking-wide">Price : </label>
                <label class="text-sm font-bold text-gray-700 tracking-wide">Name</label>
            </div>
            <div class="flex justify-between">
                <label class="text-sm font-bold text-gray-700 tracking-wide">Total : </label>
                <label class="text-sm font-bold text-gray-700 tracking-wide">Name</label>
            </div>
           </div>
		</div>
		<form class="mt-8 space-y-6" action="#" method="POST">
			<input type="hidden" name="remember" value="true">
			<div class="relative">
				<!-- <div class="absolute right-0 mt-10 pr-2"><svg xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
                </div> -->
				<label class="text-sm font-bold text-gray-700 tracking-wide">Card Holder Name</label>
				<input class=" w-full text-base py-2 px-2 border border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="Enter Your Name" >
            </div>
            <div class="mt-8 content-center">
				<label class="text-sm font-bold text-gray-700 tracking-wide">
					Card Details
				</label>
				<input class="w-full content-center text-base py-2 px-2 border border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="" >
            </div>
			
            <div class="mt-8 content-center">
                <input type="checkbox" name="terms_and_conditions" value="1"  />
				<label class="text-sm font-bold text-gray-700 tracking-wide">
					I have read, understood and agree to the Terms and Conditions
				</label>
				
            </div>
			<!-- <div class="flex items-center justify-between">
					<div class="flex items-center">
						<input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded">
						<label for="remember_me" class="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
					</div>
				<div class="text-sm">
					<a href="#" class="font-medium text-indigo-500 hover:text-indigo-500">
								Forgot your password?
					</a>
				</div>
			</div> -->
			<div>
				<button type="submit" class="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-lg tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300">
                   Make payment and submit application
                </button>
			</div>
			
      	
		</form>
     
	</div>
        
</div>
          </div>
          
        </div>
        <img
          class="lg:absolute top-0 right-5 lg:w-2/5 pr-22 pl-4  lg:h-100 object-cover "
          src="@/assets/why-img.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>