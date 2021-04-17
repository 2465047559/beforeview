<template>
  <div>
    <order-list-table :order_state="order_state"></order-list-table>
  </div>
</template>

<script>
import OrderListTable from "./OrderListTable";
export default {
  name: "ShowAllOrderList",
  components: {OrderListTable},
  data(){
    return{
      order_state: 'show_all',
    }
  }
}
</script>

<style scoped>

</style>
