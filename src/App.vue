<template>
  <div class="flex flex-row">
    <Sidebar/>
    <div class="w-full flex flex-col">
      <Navigation/>
      <div class="flex flex-row">

        <div class="w-64 bg-white flex flex-col shadow-2xl">
          <RouterLink class="p-2 justify-center text-sm hover:bg-[#F6F6F6]" to="/">Последние новости</RouterLink>
          <RouterLink class="p-2 justify-center text-sm hover:bg-[#F6F6F6]" to="/famous">Самые просматриваемые</RouterLink>
          <RouterLink class="p-2 justify-center text-sm hover:bg-[#F6F6F6]" to="/list">Управление новостями</RouterLink>
          <RouterLink class="p-2 justify-center text-sm hover:bg-[#F6F6F6]" to="/guide">Справочник разделов</RouterLink>
          <RouterLink class="p-2 justify-center text-sm hover:bg-[#F6F6F6]" to="/add">Добавить новость</RouterLink>
          <RouterLink class="p-2 justify-center text-sm hover:bg-[#F6F6F6]" to="/edit">Редактировать новость</RouterLink>
        </div>
        
        <RouterView/>

      </div>
    </div>
  </div>
</template>


<script setup>

import { computed, ref } from "vue"

  import Sidebar from "./components/SIdebar.vue"
  import Navigation from "./components/Navigation.vue"
  

</script>


<style>
  
</style>