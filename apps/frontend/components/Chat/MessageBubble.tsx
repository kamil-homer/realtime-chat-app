import { send } from "process";

type MessageBubbleProps = {
  id: string;
  text: string;
  sender: string;
  timestamp: string;
};

export default function MessageBubble({
  id,
  text,
  sender,
  timestamp,
}: MessageBubbleProps) {
  return (
    <div className={`flex ${sender ? "justify-start" : "justify-end"}`}>
      <div className={`flex flex-col ${sender ? "items-start" : "items-end"}`}>
        <div
          className={`flex items-center gap-2 px-5 py-2 w-fit rounded-md${
            sender ? "mr-20 bg-gray-700" : "ml-20 bg-emerald-700"
          }`}
        >
          <p>{text}</p>
        </div>
        <p className="text-xs">{timestamp}</p>
      </div>
    </div>
  );
}
