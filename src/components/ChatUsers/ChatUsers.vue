<template>
	<div :class="['chat-users', {
		'chat-users--white': whiteTheme
	}]">
		<div class="chat-users__searth">
			<div class="chat-users__searth-input">
				<img 
					src="@/assets/img/magnifier.svg" 
					alt="magnifier" 
					class="chat-users__searth-img"
					v-if="!whiteTheme"
				/>
				<img 
					src="@/assets/img/magnifierblack.svg" 
					alt="magnifier" 
					class="chat-users__searth-img"
					v-else
				/>
				<input 
					type="text" 
					placeholder="Поиск..." 
					class="chat-users__input" 
					v-model.trim="serth"
				/>
			</div>
			<div class="chat-users__add-chat">
				<img src="@/assets/img/add-chat.svg" alt="add-chat">
			</div>
		</div>

		<div class="chat-users__wrapper">
			<div class="chat-users__users" v-if="filteredChats.length > 0">
				<ChatCard 
					v-for="chat in filteredChats" 
					:key="chat.id" 
					:chatItem="chat"
          @click="selectedChat(chat)"
					:activeChat="active.id"
				/>
			</div>
			<p v-else class="chat-users__undefined">Чатов не найдено!</p>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	props: {
		chats: {
			type: Object,
			default: null
		},

		active: {
			type: Object
		}
	},

	data() {
		return {
			serth: ''
		}
	},

  methods: {
    selectedChat(chat) {
			this.activeChatId = chat.id
      this.$emit('activeChat', chat)
    }
  },

	computed: {
		...mapGetters({
			whiteTheme: "data/getWhiteTheme"
		}),

		filteredChats() {
			let newChats = [],
					chatsFil = this.chats

			if (this.serth.length > 0) {
				for (const key in chatsFil) {
					if (Object.hasOwnProperty.call(chatsFil, key)) {
						const chat = chatsFil[key]

						let name = chat.name.toLowerCase(),
								input = this.serth.toLowerCase()

						if (name.includes(input)) {
							newChats.push(chat)
						}
					}
				}

				return newChats

			} else {
				for (const key in chatsFil) {
					if (Object.hasOwnProperty.call(chatsFil, key)) {
						const chat = chatsFil[key]

						newChats.push(chat)
					}
				}

				return newChats
			}
		}
	}
}
</script>

<style lang="scss">
@import "./ChatUsers.scss";
</style>