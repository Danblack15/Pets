<template>
  <div class="category-item">
    <p class="category-item-name">Категория</p>
    <CategoryUI/>
    <input
      type="text"
      class="category-item-tag"
      value="<CategoryUI></CategoryUI>"
      disabled
    />
  </div>

  <div class="category-item">
    <p class="category-item-name">Категория белая</p>
    <CategoryUI white/>
    <input
      type="text"
      class="category-item-tag"
      value="<CategoryUI white></CategoryUI>"
      disabled
    />
  </div>

  <div class="category-item">
    <p class="category-item-name">Категория активная</p>
    <CategoryUI active/>
    <input
      type="text"
      class="category-item-tag"
      value="<CategoryUI active></CategoryUI>"
      disabled
    />
  </div>
</template>

<script>
export default {};
</script>

<style src="./CategoryPets.css" scoped>
</style>