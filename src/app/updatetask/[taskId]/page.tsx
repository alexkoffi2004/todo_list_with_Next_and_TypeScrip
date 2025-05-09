import EditTask from "./EditTask";

export default async function Page({ params }: { params: Promise<{ taskId: string }> }) {
  const {taskId } = await params; // Attendre la résolution de la promesse
  return <EditTask taskId={taskId} />;
}
