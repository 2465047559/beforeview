<template>
  <div>
    <order-list-table :order_state="order_state"></order-list-table>
  </div>
</template>

<script>
import OrderListTable from "./OrderListTable";
export default {
  name: "WaitingOrder",
  components: {OrderListTable},
  data(){
    return{
      order_state: 'waiting',
    }
  }
}
</script>

<style scoped>

</style>
