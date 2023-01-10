const ChatInput = () => {
  return <div className="m-4 pr-4 flex items-center bg-zinc-600 rounded-lg">
    <div className="text-3xl font-bold px-4 py-2 text-zinc-400 hover:text-zinc-200">+</div>
    <input className="w-4 bg-zinc-600 flex-grow focus:outline-none" placeholder="Message #Channel 1"></input>
    <div className="flex gap-3">
      <div>Gift</div>
      <div>Gif</div>
      <div>File</div>
      <div>Icon</div>
    </div>
  </div>
}

export default ChatInput;