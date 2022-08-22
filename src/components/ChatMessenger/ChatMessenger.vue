<template>
  <div :class="['chat-messenger', {
    'chat-messenger--white': whiteTheme
  }]">
    <div class="chat-wrapper" v-if="chat && chat.id.length > 0">
      <div class="chat-wrapper__header">
        <img 
          src="@/assets/img/chat-arrow.svg" 
          alt="close" 
          class="chat-wrapper__close"
          @click="$emit('closeChat')"
        />
        <p class="chat-wrapper__name">{{chat.name }}</p>
        <img 
          src="@/assets/img/basket.svg" 
          alt="delete"
          class="chat-wrapper__delete"
          @click="questDeleteChat"
        />
      </div>

      <div class="chat-wrapper__content">
        <ChatBody 
          :chat="chat.chat"
          :whiteTheme="whiteTheme"
        />
      </div>

      <form class="chat-wrapper__footer" @submit.prevent="newMessage">
        <img src="@/assets/img/chat-smile.svg" alt="smiles" v-if="!whiteTheme" />
        <img src="@/assets/img/chat-smile-black.svg" alt="smiles" v-else />
        <textarea 
          type="text" 
          name="message" 
          id="message" 
          placeholder="Написать сообщение..."
          class="chat-wrapper__input"
          v-model.trim="textMessage"
          @keyup="textareaHeight"
        ></textarea>

        <img src="@/assets/img/chat-smile2.svg" alt="smiles2" v-if="!whiteTheme" />
        <img src="@/assets/img/chat-smile2-black.svg" alt="smiles2" v-else />
        <button type="submit" class="chat-wrapper__submit">
          <img src="@/assets/img/chat-submit.svg" alt="submit" v-if="!whiteTheme"/>
          <img src="@/assets/img/chat-submit-black.svg" alt="submit" v-else/>
        </button>
        
      </form>

      <div class="chat-wrapper__modal" v-if="showModal">
        <div class="chat-wrapper__modal-wrapper">
          <h3>Удалить чат?</h3>
          <ButtonUI @click="deleteChat" class="chat-wrapper__modal-btn">Удалить</ButtonUI>
          <ButtonUI @click="disabledModal" class="chat-wrapper__modal-btn">Отмена</ButtonUI>
        </div>
      </div>
    </div>

    <div v-else class="chat-messenger__select">
      <img src="@/assets/img/chat-select.svg" alt="chat" v-if="!whiteTheme">
      <img src="@/assets/img/chat-select-black.svg" alt="chat" v-else>
      <p class="chat-messenger__select-text">Выберите чат<br/>или <a href="#">создайте новую беседу</a></p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ChatBody from '@/components/ChatBody/ChatBody'
import ButtonUI from '../ui/ButtonUI/ButtonUI.vue'
export default {
  components: {
    ChatBody,
    ButtonUI
},
  
  props: {
    chat: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      textMessage: null,
      showModal: false
    }
  },

  methods: {
    newMessage() {
      if (this.textMessage.length > 0) {
        let date = new Date(),
            hour = date.getHours(),
            minutes
          
        if (date.getMinutes() >= 10) 
          minutes = date.getMinutes()
        else
          minutes = `0${date.getMinutes()}`

        let newMesObj = {
          type: 'me',
          text: this.textMessage,
          time: `${hour}:${minutes}`
        }

        this.$emit('newMessage', newMesObj)

        this.textMessage = null

        setTimeout(() => {
          let chatBody = document.querySelector('.chat-body')
          chatBody.scrollTop = chatBody.scrollHeight
        }, 50)


      }
    },

    textareaHeight(e) {
      let {target} = e
    
      target.style.height = "1px"
      target.style.height = (5 + target.scrollHeight) + "px"
    },

    deleteChat() {
      this.$emit('deleteChat', this.chat)
      this.showModal = false
    },

    questDeleteChat() {
      this.showModal = true
    },

    disabledModal() {
      this.showModal = false
    }
  },

  computed: {
    ...mapGetters({
      whiteTheme: 'data/getWhiteTheme'
    })
  }
}
</script>

<style lang="scss">
@import "./ChatMessenger.scss";
</style>