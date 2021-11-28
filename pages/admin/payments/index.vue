<template>
  <div>Payments</div>
</template>

<script>
export default {
   layout:"admin",

    data(){
        return{

        }
    },
    methods:{
        ViewPayment(){
            this.$router.push('/admin/viewpayments');
        }
    }
}
</script>

<style>

</style>
