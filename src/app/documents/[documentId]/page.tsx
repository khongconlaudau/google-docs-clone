import Editor from "./editor";
import { Toolar } from "./toolbar";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}
const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;
  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <Toolar />
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
