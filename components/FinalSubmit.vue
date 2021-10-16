<template>
  <section class="pb-20">
      <div class=" min-h-screen flex justify-center bg-center py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover relative items-center"
	>
	<div class="absolute opacity-60 inset-0 z-0"></div>
	<div class="max-w-xl w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
<div class="grid  gap-8 grid-cols-1">
	<div class="flex flex-col ">
			<div class="flex flex-col sm:flex-row items-center">
				<h2 class="font-semibold text-lg mr-auto">Business Info</h2>
				<div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
			</div>
			<div class="mt-5">
				<div class="form">
					<div class="md:space-y-2 mb-3">
						<label class="text-xs font-semibold text-gray-600 py-2">Business Logo<abbr class="hidden" title="required">*</abbr></label>
						<div class="flex items-center py-6">
							<div class="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
								<img class="w-12 h-12 mr-4 object-cover" src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80" alt="Avatar Upload">
                </div>
								<label class="cursor-pointer ">
                  <span class="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">Browse</span>
                  <input type="file" class="hidden" :multiple="multiple" :accept="accept">
                </label>
							</div>
						</div>
						<div class="md:flex flex-row md:space-x-4 w-full text-xs">
							<div class="mb-3 space-y-2 w-full text-xs">
								<label class="font-semibold text-gray-600 py-2">Business  Name <abbr title="required">*</abbr></label>
								<input placeholder="Business Name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="integration[shop_name]" id="integration_shop_name">
								<p class="text-red text-xs hidden">Please fill out this field.</p>
							</div>
							<div class="mb-3 space-y-2 w-full text-xs">
								<label class="font-semibold text-gray-600 py-2">Business  Mail <abbr title="required">*</abbr></label>
								<input placeholder="Email ID" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="integration[shop_name]" id="integration_shop_name">
								<p class="text-red text-xs hidden">Please fill out this field.</p>
							</div>
						</div>
						<!-- <div class="mb-3 space-y-2 w-full text-xs">
							<label class=" font-semibold text-gray-600 py-2">Business  Website</label>
							<div class="flex flex-wrap items-stretch w-full mb-4 relative">
								<div class="flex">
									<span class="flex  leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                   </span>
								</div>
								<input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://">
                  </div>
							</div> -->
                            <!------------------------------------------------->
                            <!-- <div class="mb-3 space-y-2 w-full text-xs">
							<label class=" font-semibold text-gray-600 py-2">Business  Website</label>
								<div class="w-full flex flex-col mb-3">
										<label class="font-semibold text-gray-600 py-2">Location<abbr title="required">*</abbr></label>
										<select class="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " required="required" name="integration[city_id]" id="integration_city_id">
                  <option value="">Seleted location</option>
                  <option value="">Cochin,KL</option>
                  <option value="">Mumbai,MH</option>
                  <option value="">Bangalore,KA</option>
                </select>
										<p class="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
									</div>
							</div> -->
                            <!------------------------------------------------>
							<div class="flex-auto w-full mb-1 text-xs space-y-2">
									<label class="font-semibold text-gray-600 py-2">Business Address 1</label>
									<textarea required="" name="message" id="" class="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4" placeholder="Enter business address line 1" spellcheck="false"></textarea>
									<p class="text-xs text-gray-400 text-left my-3">You inserted 0 characters</p>
								</div>
                                <div class="flex-auto w-full mb-1 text-xs space-y-2">
									<label class="font-semibold text-gray-600 py-2">Business Address 1</label>
									<textarea required="" name="message" id="" class="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4" placeholder="Enter business address line 2" spellcheck="false"></textarea>
									<p class="text-xs text-gray-400 text-left my-3">You inserted 0 characters</p>
								</div>

                            <div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
								<div class="w-full flex flex-col mb-3">
									<label class="font-semibold text-gray-600 py-2">Business Town<abbr title="required">*</abbr></label>
									<input placeholder="Business Town" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" name="integration[street_address]" id="integration_street_address1">
                                    
              </div>
									<div class="w-full flex flex-col mb-3">
										<label class="font-semibold text-gray-600 py-2">Business Country<abbr title="required">*</abbr></label>
										<input placeholder="Business Country" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" name="integration[street_address]" id="integration_street_address2">
										<p class="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
									</div>
								</div>

                                <div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
								<div class="w-full flex flex-col mb-3">
									<label class="font-semibold text-gray-600 py-2">Business PostCode<abbr title="required">*</abbr></label>
									<input placeholder="Business Postcode" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" name="integration[street_address]" id="integration_street_address1">
                                    
              </div>
									<div class="w-full flex flex-col mb-3">
										<label class="font-semibold text-gray-600 py-2">Business Contact No.<abbr title="required">*</abbr></label>
										<input placeholder="Business Contact Number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" name="integration[street_address]" id="integration_street_address2">
										<p class="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
									</div>
								</div>

                                <div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
                                    <div class="w-full flex flex-col mb-3">
                                    <label class="text-xs font-semibold text-gray-600 pt-2 pb-2">Proof of address<abbr class="hidden" title="required">*</abbr></label>
						<div class="flex items-center py-6">
							<div class="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
								<img class="w-12 h-12 mr-4 object-cover" src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80" alt="Avatar Upload">
                </div>
								<label class="cursor-pointer ">
                  <span class="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">Browse</span>
                  <input type="file" class="hidden" :multiple="multiple" :accept="accept">
                </label>
							</div>
                                    </div>
                                    <div class="w-full flex flex-col mb-3">
                                        <label class="text-xs font-semibold text-gray-600 pt-2">Local Authority Food Registration Letter<abbr class="hidden" title="required">*</abbr></label>
						<div class="flex items-center py-6">
							<div class="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
								<img class="w-12 h-12 mr-4 object-cover" src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80" alt="Avatar Upload">
                </div>
								<label class="cursor-pointer ">
                  <span class="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">Browse</span>
                  <input type="file" class="hidden" :multiple="multiple" :accept="accept">
                </label>
							</div>
                                    </div>
                                </div>

                                 <div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
                                    <div class="w-full flex flex-col mb-3">
                                    <label class="text-xs font-semibold text-gray-600 pt-2">Food Hygiene Rating Scheme (FHRS) award letter<abbr class="hidden" title="required">*</abbr></label>
						<div class="flex items-center py-6">
							<div class="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
								<img class="w-12 h-12 mr-4 object-cover" src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80" alt="Avatar Upload">
                </div>
								<label class="cursor-pointer ">
                  <span class="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">Browse</span>
                  <input type="file" class="hidden" :multiple="multiple" :accept="accept">
                </label>
							</div>
                                    </div>
                                    <div class="w-full flex flex-col mb-3">
                                        <label class="text-xs font-semibold text-gray-600 pt-2">FHRS Next Inspection Due Date (call your local authority to get this date):<abbr class="hidden" title="required">*</abbr></label>
						<div class="flex items-center py-6">
							<div class="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
								<img class="w-12 h-12 mr-4 object-cover" src="https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80" alt="Avatar Upload">
                </div>
								<label class="cursor-pointer ">
                  <span class="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">Browse</span>
                  <input type="date" class="hidden" :multiple="multiple" :accept="accept">
                </label>
							</div>
                                    </div>
                                </div>

                            <div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
								<div class="w-full flex flex-col mb-3">
									<label class="font-semibold text-gray-600 py-2">Contact Number<abbr title="required">*</abbr></label>
									<input placeholder="Contact Number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" name="integration[street_address]" id="integration_street_address1">
                                    
              </div>
									<div class="w-full flex flex-col mb-3">
										<label class="font-semibold text-gray-600 py-2">Contact Email<abbr title="required">*</abbr></label>
										<input placeholder="Contact Email" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" name="integration[street_address]" id="integration_street_address2">
										<p class="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
									</div>
								</div>

                                <div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
								<div class="w-full flex flex-col mb-3">
									<label class="font-semibold text-gray-600 py-2">Contact First Name<abbr title="required">*</abbr></label>
									<input placeholder="First Name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" name="integration[street_address]" id="integration_street_address1">
                                    
              </div>
									<div class="w-full flex flex-col mb-3">
										<label class="font-semibold text-gray-600 py-2">Contact Last Name<abbr title="required">*</abbr></label>
										<input placeholder="Last Name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" name="integration[street_address]" id="integration_street_address2">
										<p class="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
									</div>
								</div>

								
								<p class="text-xs text-red-500 text-right my-3">Required fields are marked with an
									asterisk <abbr title="Required field">*</abbr></p>
								<div class="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
									<button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"> Cancel </button>
									<button class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">Save</button>
								</div>
							</div>
						</div>
					</div>
				</div>
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