import { Editor } from "@tiptap/react";
import { open } from "@tauri-apps/api/dialog";
import { readTextFile } from "@tauri-apps/api/fs";
import { invoke } from "@tauri-apps/api/tauri";
import { save } from "@tauri-apps/api/dialog";

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
};

export const SaveFile = async (text: string) => {
    try {
        const savePath = await save();
        if (!savePath) return;
        await invoke("save_file", {path: savePath, contents: text});
    } catch (error) {
        alert(error);
    }
};