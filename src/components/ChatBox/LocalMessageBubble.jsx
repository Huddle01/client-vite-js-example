function LocalMessageBubble({ message }) {
  return (
    <div className="w-full items-end flex flex-col rounded-lg">
      <span className="text-white text-sm">{message.text}</span>
    </div>
  );
}

export default LocalMessageBubble;
