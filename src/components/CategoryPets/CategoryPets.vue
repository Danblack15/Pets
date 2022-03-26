<template>
  <div class="category-item">
    <p class="category-item-name">Desktop категория</p>
    <CategoryUI />
    <input
      type="text"
      class="category-item-tag"
      value="<CategoryUI></CategoryUI>"
      disabled
    />
  </div>

  <div class="category-item">
    <p class="category-item-name">Desktop active категория</p>
    <CategoryUI active/>
    <input
      type="text"
      class="category-item-tag"
      value="<CategoryUI active></CategoryUI>"
      disabled
    />
  </div>

	<div class="category-item">
    <p class="category-item-name">Desktop white категория</p>
    <CategoryUI white/>
    <input
      type="text"
      class="category-item-tag"
      value="<CategoryUI white></CategoryUI>"
      disabled
    />
  </div>

	<div class="category-item">
    <p class="category-item-name">Laptop категория</p>
    <CategoryUI laptop/>
    <input
      type="text"
      class="category-item-tag"
      value="<CategoryUI laptop></CategoryUI>"
      disabled
    />
  </div>

	<div class="category-item">
    <p class="category-item-name">Tablet категория</p>
    <CategoryUI tablet/>
    <input
      type="text"
      class="category-item-tag"
      value="<CategoryUI tablet></CategoryUI>"
      disabled
    />
  </div>

	<div class="category-item">
    <p class="category-item-name">Mobile категория</p>
    <CategoryUI mobile/>
    <input
      type="text"
      class="category-item-tag"
      value="<CategoryUI mobile></CategoryUI>"
      disabled
    />
  </div>
</template>

<script>
export default {};
</script>

<style src="./CategoryPets.css" scoped>
</style>