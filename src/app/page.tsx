import TodoList from "@/components/TodoList/TodoList";
import CreateTAsk from "@/app/createtask/page";
import Page from "./tasks/page";

export default function HomePage() {
  return (
    <div className="bg-[#0d1c3d] flex flex-col items-center justify-center">
      <Page/>
    </div>
  );
}
