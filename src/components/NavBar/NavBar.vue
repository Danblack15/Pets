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
        <li
          id="tab-8"
          :class="{ active: selectedTab == 'tab-8' }"
          @click="setSelectedTab"
        >
          Стрелки
        </li>
        <li
          id="tab-10"
          :class="{ active: selectedTab == 'tab-10' }"
          @click="setSelectedTab"
        >
          Карточки постов
        </li>
        <li
          id="tab-11"
          :class="{ active: selectedTab == 'tab-11' }"
          @click="setSelectedTab"
        >
          Карточка "С возвращением"
        </li>
        <li
          id="tab-12"
          :class="{ active: selectedTab == 'tab-12' }"
          @click="setSelectedTab"
        >
          Карточка Дата
        </li>
        <li
          id="tab-13"
          :class="{ active: selectedTab == 'tab-13' }"
          @click="setSelectedTab"
        >
          Карточка животного
        </li>
        <li
          id="tab-14"
          :class="{ active: selectedTab == 'tab-14' }"
          @click="setSelectedTab"
        >
          Карточка "Напиши сейчас"
        </li>
        <li
          id="tab-15"
          :class="{ active: selectedTab == 'tab-15' }"
          @click="setSelectedTab"
        >
          Карточка Ежедневного прогресса
        </li>
        <li
          id="tab-16"
          :class="{ active: selectedTab == 'tab-16' }"
          @click="setSelectedTab"
        >
          Форма входа / регистрации
        </li>
        <li
          id="tab-17"
          :class="{ active: selectedTab == 'tab-17' }"
          @click="setSelectedTab"
        >
          Карточка статистики
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

      <TabsItem name="tab-8" :class="{ show: selectedTab == 'tab-8' }">
        <ArrowsBlock />
      </TabsItem>

      <TabsItem name="tab-10" :class="{ show: selectedTab == 'tab-10' }">
        <CardsPosts />
      </TabsItem>

      <TabsItem name="tab-11" :class="{ show: selectedTab == 'tab-11' }">
        <WelcomeBackBlock />
      </TabsItem>

      <TabsItem name="tab-12" :class="{ show: selectedTab == 'tab-12' }">
        <DataBlock />
      </TabsItem>

      <TabsItem name="tab-13" :class="{ show: selectedTab == 'tab-13' }">
        <CardPetsBlock />
      </TabsItem>

      <TabsItem name="tab-14" :class="{ show: selectedTab == 'tab-14' }">
        <WriteNowBlock />
      </TabsItem>

      <TabsItem name="tab-15" :class="{ show: selectedTab == 'tab-15' }">
        <ProgressDayBlock />
      </TabsItem>

      <TabsItem name="tab-16" :class="{ show: selectedTab == 'tab-16' }">
        <FormBlock />
      </TabsItem>

      <TabsItem name="tab-17" :class="{ show: selectedTab == 'tab-17' }">
        <StatisticsBlock />
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
import ArrowsBlock from "@/components/ArrowsBlock/ArrowsBlock";
import CardsPosts from "@/components/CardsPosts/CardsPosts";
import WelcomeBackBlock from "@/components/WelcomeBackBlock/WelcomeBackBlock";
import DataBlock from "@/components/DataBlock/DataBlock";
import CardPetsBlock from "@/components/CardPetsBlock/CardPetsBlock";
import WriteNowBlock from "@/components/WriteNowBlock/WriteNowBlock";
import ProgressDayBlock from "@/components/ProgressDayBlock/ProgressDayBlock";
import FormBlock from "@/components/FormBlock/FormBlock";
import StatisticsBlock from "@/components/StatisticsBlock/StatisticsBlock";

export default {
  components: {
    TabsItem,
    ButtonsBlock,
    LeftMenuIcons,
    Themes,
    CategoryPets,
    NotificationsBlock,
    LogoBlock,
    AvatarBlock,
    ArrowsBlock,
    CardsPosts,
    WelcomeBackBlock,
    DataBlock,
    CardPetsBlock,
    WriteNowBlock,
    ProgressDayBlock,
    FormBlock,
    StatisticsBlock
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