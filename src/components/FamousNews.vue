<template>
  <div class="w-full h-full">
    
    <div class="flex items-center pl-8 h-16 bg-[#F6F6F6] flex-row gap-4">
      <h1 class="text-3xl font-bold">Самые просматриваемые</h1>
      <h1 class="text-sm text-[#253A4D] hover:text-[#11487e] font-bold border-b-2"><a href="">За месяц</a></h1>
      <h1 class="text-sm text-[#253A4D] hover:text-[#11487e] font-bold border-b-2"><a href="">За всё время</a></h1>
    </div>

    <FamousNewsConent/>

  </div>
</template>

<script setup>

  import FamousNewsConent from './FamousNewsContent.vue';

</script>

<style lang="scss" scoped>

</style>