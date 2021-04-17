<template>
  <div>
    <order-list-table :order_state="order_state"></order-list-table>
  </div>
</template>

<script>
import OrderListTable from "./OrderListTable";
export default {
  name: "FinishOrder",
  components: {OrderListTable},
  data(){
    return{
      order_state: 'finish',
    }
  }
}
</script>

<style scoped>

</style>
