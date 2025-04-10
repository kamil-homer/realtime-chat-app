type MessageBubbleProps = {
  id: string;
  text: string;
  sender: string;
  timestamp: string;
  // wasRead: boolean;
};

export default function MessageBubble({
  id,
  text,
  sender,
  timestamp,
}: MessageBubbleProps) {
  return (
    <div
      className={`flex items-center gap-2 p-2 ${
        sender ? "mr-20 bg-gray-700" : "ml-20 bg-emerald-700"
      } rounded-md`}
    >
      <p>
        message buble {id}, {timestamp}
      </p>
    </div>
  );
}
