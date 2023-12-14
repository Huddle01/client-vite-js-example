import { useRemotePeer } from '@huddle01/react/hooks';

function RemoteMessageBubble({ message }) {
  const { metadata } = useRemotePeer({ peerId: message.sender });

  return (
    <div className="items-start flex flex-col">
      <span className="text-blue-300 rounded-t">{metadata?.displayName}</span>
      <span className="text-white text-sm">{message.text}</span>
    </div>
  );
}

export default RemoteMessageBubble;
