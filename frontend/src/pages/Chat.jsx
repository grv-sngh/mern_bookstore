import React from 'react'
import VideoPlaceholder from '../components/VideoPlaceholder'
import ChatBubble from '../components/ChatBubble'
const Chat = () => {
  return (
    <div class="flex flex-col h-screen">
    <div class="flex items-start justify-center w-20vw flex-grow">
        <VideoPlaceholder />
    </div>
    <div class="flex items-end justify-center">
        <ChatBubble />
    </div>
</div>


  )
}

export default Chat