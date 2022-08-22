<template>
	<div class="chat">
		<div 
			:class="['chat__users', {
				'chat__users--disabled': closeUsersMobile
			}]"
		>
			<ChatUsers 
				:chats="allChats"
				:active="activeChat"
				@activeChat="activeChatFun"
			/>
		</div>

		<div 
			v-if="allChats"
			:class="['chat__messages', {
				'chat__messages--active': showChatMobile
			}]" 
		>
			<ChatMessenger 
				:chat="activeChat"
				@closeChat="closeChatFun"
				@newMessage="addNewMessage"
				@deleteChat="deleteChat"
			/>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

import ChatUsers from '@/components/ChatUsers/ChatUsers'
import ChatMessenger from '@/components/ChatMessenger/ChatMessenger'

export default {
	components: {
		ChatUsers,
		ChatMessenger
	},

	data() {
		return {
			activeChat: {
				id: ''
			},
			showChatMobile: false,
			closeUsersMobile: false
		}
	},

	methods: {
		activeChatFun(chat) {
			this.activeChat = chat

			if (window.innerWidth <= 1000) {
				this.showChatMobile = true
				this.closeUsersMobile = true
			}
		},

		closeChatFun() {
			this.showChatMobile = false
			this.closeUsersMobile = false
		},

		addNewMessage(message) {
			this.activeChat.chat.push(message)
		},
		
		deleteChat(chat) {
			let chats = this.allChats
			for (const key in chats) {
				if (Object.hasOwnProperty.call(chats, key)) {
					const chatOld = chats[key];
					
					if (chatOld.id == chat.id) {
						delete this.allChats[`${key}`]

						let keys = Object.keys(this.allChats)
						this.activeChat = this.allChats[keys[0]]
					}
				}
			}
		}
	},

	computed: {
		...mapGetters({
			allChats: "data/getAllChats"
		})
	}
}
</script>

<style lang="scss">
@import "./ChatPage.scss";
</style>