import DeleteTaskPage from "./DeleteTaskPage";

export default async function Page({ params }: { params: Promise<{ taskId: string }> }) {
  const { taskId } = await params;
  return <DeleteTaskPage taskId={taskId} />;
} 