import Input from "@/components/Chat/Input";
import Messages from "@/components/Chat/Messages";

type ChatPageProps = {
  params: {
    id: string;
  };
};
export default async function ChatPage({ params }: ChatPageProps) {
  return (
    <div className="flex flex-col justify-between gap-3 h-full ">
      <h1>Chat name: {params?.id}</h1>
      <Messages />
      <Input />
    </div>
  );
}
