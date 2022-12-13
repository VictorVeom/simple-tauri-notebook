import { Editor } from "@tiptap/react";
import { open } from "@tauri-apps/api/dialog";
import { readTextFile } from "@tauri-apps/api/fs";

export const OpenFile = async (editor:Editor) => {
    try {
        const selectedPath = await open({
            multiple: false,
            title: "Open text file",

        });
        if (!selectedPath) return;
        const fileText = await readTextFile(selectedPath as string);
        editor.commands.setContent( fileText || "");
    } catch (error) {
        alert(error);
    }
}