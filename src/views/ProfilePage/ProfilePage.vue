<template>
  <section :class="['profile', {
    'profile--white': whiteTheme
  }]">
    <div class="profile__tabs">
      <ProfileTabUI 
        :class="['profile__tabs-item', 
          { activeTab: selectedTab == 'account-tab' }
        ]" 
        id="account-tab"
        @click="setSelectTab"
        :whiteTheme="whiteTheme"
      >
        <img src="@/assets/img/profile.svg" alt="img" />
        <h4>Аккаунт</h4>
      </ProfileTabUI>

      <ProfileTabUI 
        :class="['profile__tabs-item', 
          { activeTab: selectedTab == 'settings-tab' }
        ]" 
        id="settings-tab"
        @click="setSelectTab"
        :whiteTheme="whiteTheme"
      >
        <img src="@/assets/img/settings.svg" alt="img" />
        <h4>Настройки</h4>
      </ProfileTabUI>

      <ProfileTabUI class="profile__tabs-item"
        :class="['profile__tabs-item', 
          { activeTab: selectedTab == 'your-pets' }
        ]" 
        id="your-pets"
        @click="setSelectTab"
        :whiteTheme="whiteTheme"
      >
        <img src="@/assets/img/your-pets.svg" alt="img" />
        <h4>Ваши питомцы</h4>
      </ProfileTabUI>
    </div>

    <div class="profile__tab-list">
      <AccountTab 
        name="account-tab" 
        :class="['profile__tab-list__item', 
          { show: selectedTab == 'account-tab' }
        ]" 
        :whiteTheme="whiteTheme"
      />

      <SettingsTab 
        name="settings-tab" 
        :class="['profile__tab-list__item', 
          { show: selectedTab == 'settings-tab' }
        ]" 
        :whiteTheme="whiteTheme"
      />

      <YourPets
        name="your-pets"
        :class="['profile__tab-list__item', 
          { show: selectedTab == 'your-pets' }
        ]" 
        :whiteTheme="whiteTheme"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import AccountTab from "@/components/AccountTab/AccountTab";
import SettingsTab from "@/components/SettingsTab/SettingsTab";
import YourPets from "@/components/YourPets/YourPets";

export default {
  components: {
    AccountTab,
    SettingsTab,
    YourPets
  },

  data() {
    return {
      selectedTab: "account-tab",
    };
  },

  methods: {
    setSelectTab(e) {
      if (e.target.classList.contains('profile__tabs-item'))
        this.selectedTab = e.target.getAttribute("id")
      else
        this.selectedTab = e.target.parentElement.getAttribute("id")

    },
  },

  computed: {
    ...mapGetters({
      whiteTheme: "data/getWhiteTheme"
    })
  }
};
</script>

<style lang="scss">
@import "./ProfilePage.scss";
</style>