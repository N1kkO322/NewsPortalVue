<template>
  <div class="p-8">
    
    <div class="flex flex-col">

      <input class="rounded-xl border-2 h-10 p-6 w-2/4" type="text" placeholder="Заголовок" name="" id="">
      <input class="rounded-xl mt-8 border-2 h-10 p-6 w-2/4" type="text" placeholder="Вводный абзац" name="" id="">
      <input class="mt-8 h-10 w-2/4 flex items-center" type="file" name="" id="">
      <textarea class="rounded-xl mt-6 border-2 p-6 w-2/4 min-h-72" placeholder="Текст новости" name="" id="" cols="" rows=""></textarea>
      <select class="rounded-xl mt-8 border-2 h-12 w-2/4 flex items-center" placeholder="j" name="" id="">
        <option value="">Спорт</option>
        <option value="">Спорт</option>
        <option value="">Спорт</option>
        <option value="">Спорт</option>
        <option value="">Спорт</option>
      </select>
      <div class="flex flex-row gap-8">
        <input class="rounded-xl mt-8 border-2 h-10 p-6 w-56" type="date" name="" id="">
        <input class="rounded-xl mt-8 border-2 h-10 p-6 w-40" type="time" name="" id="">
      </div>
      <div class="flex flex-row  gap-8">
        <button class="rounded-md mt-10 bg-[#217BD4] text-white h-10 p-6 w-56 flex items-center justify-center transition ease-in-out hover:bg-[#02255b]">Добавить</button>
        <button class="rounded-md mt-10 bg-[#217BD4] text-white h-10 p-6 w-56 flex items-center justify-center transition ease-in-out hover:bg-[#02255b]">Сохранить черновик</button>
      </div>
      
      
    </div>

  </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>