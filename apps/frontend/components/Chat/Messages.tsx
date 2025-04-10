import MessageBubble from "./MessageBubble";

export default function Messages() {
  return (
    <div className="flex-1 overflow-y-auto gap-2 flex flex-col">
      <MessageBubble
        id="1"
        text="Hello"
        sender="user"
        timestamp="2023-10-01T12:00:00Z"
      />
      <MessageBubble
        id="1"
        text="Hello"
        sender=""
        timestamp="2023-10-01T12:00:00Z"
      />
      <MessageBubble
        id="1"
        text="Hello"
        sender=""
        timestamp="2023-10-01T12:00:00Z"
      />
      <MessageBubble
        id="1"
        text="Hello"
        sender="user"
        timestamp="2023-10-01T12:00:00Z"
      />
    </div>
  );
}
