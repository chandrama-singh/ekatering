<template>
  <div v-if="data">
  <table class="border-collapse border w-full border-green-800">
  <tbody>
    <tr>
      <td class="border border-green-600 p-2" colspan="2"><b>User Profile Details</b></td>
    </tr>
    <tr>
      <td class="border border-green-600 p-2 w-96"><b>Name</b></td>
      <td class="border border-green-600 p-2">{{data.name}}</td>
    </tr>
    <tr>
      <td class="border border-green-600 p-2"><b>Email</b></td>
      <td class="border border-green-600 p-2">{{data.email}}</td>
    </tr>
    <tr>
      <td class="border border-green-600 p-2"><b>Username</b></td>
      <td class="border border-green-600 p-2">{{data.username}}</td>
    </tr>
    <tr>
      <td class="border border-green-600 p-2"><b>Email</b></td>
      <td class="border border-green-600 p-2">{{data.email}}</td>
    </tr>
    <tr>
      <td class="border border-green-600 p-2"><b>Bio</b></td>
      <td class="border border-green-600 p-2">{{data.bio}}</td>
    </tr>
    <tr>
      <td class="border border-green-600 p-2"><b>Facebook</b></td>
      <td class="border border-green-600 p-2">{{data.facebook}}</td>
    </tr>
    <tr>
      <td class="border border-green-600 p-2"><b>Instagram</b></td>
      <td class="border border-green-600 p-2">{{data.instagram}}</td>
    </tr>
    <tr>
      <td class="border border-green-600 p-2"><b>Twitter</b></td>
      <td class="border border-green-600 p-2">{{data.twitter}}</td>
    </tr>
  </tbody>
</table>

<table class="border-collapse border w-full border-green-800 mt-12">
  <tbody>
    <tr>
      <td class="border border-green-600 p-2" colspan="2"><b>User Payment Details</b></td>
    </tr>
    <tr>
      <td class="border border-green-600 p-2"><b>UPI {{data.upiType}}</b></td>
      <td class="border border-green-600 p-2">{{data.upi}}</td>
    </tr>
    <tr>
      <td class="border border-green-600 p-2"><b>Bank Details</b></td>
      <td class="border border-green-600 p-2">{{data.bankDetail}}</td>
    </tr>
  </tbody>
</table>
  </div>
</template>
<script>
  export default {
    props: ["data"],
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      closeDropdown() {
        this.isOpen = false
      }
    }
  }

</script>
