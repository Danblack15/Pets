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
          Элементы переключения темы
        </li>
        <li
          id="tab-4"
          :class="{ active: selectedTab == 'tab-4' }"
          @click="setSelectedTab"
        >
          Категории животных
        </li>
        <li
          id="tab-5"
          :class="{ active: selectedTab == 'tab-5' }"
          @click="setSelectedTab"
        >
          Блок Уведомлений
        </li>
        <li
          id="tab-6"
          :class="{ active: selectedTab == 'tab-6' }"
          @click="setSelectedTab"
        >
          Логотип
        </li>
        <li
          id="tab-7"
          :class="{ active: selectedTab == 'tab-7' }"
          @click="setSelectedTab"
        >
          Аватар
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
        <Themes />
      </TabsItem>

      <TabsItem name="tab-4" :class="{ show: selectedTab == 'tab-4' }">
        <CategoryPets />
      </TabsItem>

      <TabsItem name="tab-5" :class="{ show: selectedTab == 'tab-5' }">
        <NotificationsBlock />
      </TabsItem>

      <TabsItem name="tab-6" :class="{ show: selectedTab == 'tab-6' }">
        <LogoBlock />
      </TabsItem>

      <TabsItem name="tab-7" :class="{ show: selectedTab == 'tab-7' }">
        <AvatarBlock />
      </TabsItem>
    </section>
  </section>
</template>

<script>
import TabsItem from "@/components/TabsItem/TabsItem";
import ButtonsBlock from "@/components/ButtonsBlock/ButtonsBlock";
import LeftMenuIcons from "@/components/LeftMenuIcons/LeftMenuIcons";
import Themes from "@/components/Themes/Themes";
import CategoryPets from "@/components/CategoryPets/CategoryPets";
import NotificationsBlock from "@/components/NotificationsBlock/NotificationsBlock";
import LogoBlock from "@/components/LogoBlock/LogoBlock";
import AvatarBlock from "@/components/AvatarBlock/AvatarBlock";

export default {
  components: {
    TabsItem,
    ButtonsBlock,
    LeftMenuIcons,
    Themes,
    CategoryPets,
    NotificationsBlock,
    LogoBlock,
    AvatarBlock
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