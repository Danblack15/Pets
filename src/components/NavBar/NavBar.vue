<template>
  <section class="tabs">
    <section class="tabs__nav">
      <ul class="tabs__nav-list">
        <li
          id="tab-1"
          :class="{ active: selectedTab == 'tab-1' }"
          @click="setSelectedTab"
        >
          Кнопки
        </li>
        <li
          id="tab-2"
          :class="{ active: selectedTab == 'tab-2' }"
          @click="setSelectedTab"
        >
          Элементы меню
        </li>
        <li
          id="tab-3"
          :class="{ active: selectedTab == 'tab-3' }"
          @click="setSelectedTab"
        >
          Табы
        </li>
        <li
          id="tab-4"
          :class="{ active: selectedTab == 'tab-4' }"
          @click="setSelectedTab"
        >
          Состовляющие формы
        </li>
      </ul>
    </section>
    <section class="tabs__items">
      <TabsItem name="tab-1" :class="{ show: selectedTab == 'tab-1' }">
        <ButtonsBlock />
      </TabsItem>

      <TabsItem name="tab-2" :class="{ show: selectedTab == 'tab-2' }">
        <LeftMenuIcons />
      </TabsItem>

      <TabsItem name="tab-3" :class="{ show: selectedTab == 'tab-3' }">
        <p>Табы</p>
      </TabsItem>

      <TabsItem name="tab-4" :class="{ show: selectedTab == 'tab-4' }">
        <p>Состовляющие формы</p>
      </TabsItem>
    </section>
  </section>
</template>

<script>
import TabsItem from "@/components/TabsItem/TabsItem";
import ButtonsBlock from "@/components/ButtonsBlock/ButtonsBlock";
import LeftMenuIcons from "@/components/LeftMenuIcons/LeftMenuIcons";

export default {
  components: {
    TabsItem,
    ButtonsBlock,
	LeftMenuIcons
  },

  data() {
    return {
      selectedTab: "tab-1",
    };
  },

  methods: {
    setSelectedTab(e) {
      this.selectedTab = e.target.getAttribute("id");
    },
  },
};
</script>

<style src="./NavBar.css" scoped>
</style>