"use client";

import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";


const Tiptap = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
    editorProps: {
      attributes: {
        class: "ProseMirror focus:outline-none",
      },
    },
    immediatelyRender: false, // Avoid SSR hydration mismatch
  });

  if (!mounted) {
    return null; // Prevent SSR issues
  }

  if (!editor) {
    return <p>Loading editor...</p>;
  }

  return <EditorContent editor={editor} />;
};

export default Tiptap;
