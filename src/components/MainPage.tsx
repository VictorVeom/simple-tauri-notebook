import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";

export default function MainPage() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: (
      `<h2>
          Hello World
      </h2>`
    )
  });
  return (
    <>
      {editor && <MenuBar editor={editor} />}
      <EditorContent editor={editor} />
      <footer>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/VictorVeom">By Victor Veom</a>
      </footer>
    </>
  )
}