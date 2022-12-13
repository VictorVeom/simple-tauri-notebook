import { Editor } from "@tiptap/react";
import { OpenFile, SaveFile } from "../utils/File";

interface IMenuProp {
    editor: Editor
}
export default function MenuBar({ editor }: IMenuProp) {
    const getFocus = () => editor.chain().focus()
    const isActived = (type: string, options?: any) => {
        return editor.isActive(type, options ?? {}) ? 'is-active' : ''
    }

    const menus = [
        [
            { icon: 'bold', onClick: () => getFocus().toggleBold().run(), isActive: isActived('bold') },
            { icon: 'italic', onClick: () => getFocus().toggleItalic().run(), isActive: isActived('italic') },
            { icon: 'strikethrough', onClick: () => getFocus().toggleStrike().run(), isActive: isActived('strike') },
            { icon: 'code-line', onClick: () => getFocus().toggleCode().run(), isActive: isActived('code') },
        ],
        [
            { icon: 'h-1', onClick: () => getFocus().toggleHeading({ level: 1 }).run(), isActive: isActived('heading', { level: 1 }) },
            { icon: 'h-2', onClick: () => getFocus().toggleHeading({ level: 2 }).run(), isActive: isActived('heading', { level: 2 }) },
            { icon: 'list-unordered', onClick: () => getFocus().toggleBulletList().run(), isActive: isActived('bulletList') },
            { icon: 'list-ordered', onClick: () => getFocus().toggleOrderedList().run(), isActive: isActived('orderedList') },
            { icon: 'code-box-line', onClick: () => getFocus().toggleCodeBlock().run(), isActive: isActived('codeBlock') },
        ],
        [
            { icon: 'double-quotes-l', onClick: () => getFocus().toggleBlockquote().run(), isActive: isActived('blockquote') },
            { icon: 'separator', onClick: () => getFocus().setHorizontalRule().run() },

        ]
    ]
    return (
        <>
            <div className="group-menu">
                <button className="menu-button" onClick={() => OpenFile(editor)}>
                    <i className={`ri-file-fill`}></i>
                </button>
                <button className="menu-button" onClick={() => SaveFile(editor.getHTML())}>
                    <i className={`ri-save-fill`}></i>
                </button>
            </div>
            <div className="group-menu">
                {menus.map(group => {
                    return <div className="group-buttons">
                        {group.map((menu) => {
                            return (
                                <button className="menu-button" onClick={menu.onClick}>
                                    <i className={`ri-${menu.icon} ${menu.isActive}`}></i>
                                </button>)

                        })}
                    </div>
                })}
            </div>
        </>
    )
}