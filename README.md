# Tauri + React + Typescript + Tiptap

### Features
- Write Text
- Format Text
- Import Text
- Save Text

![alt text](https://i.imgur.com/IrjMmDl.png)
## Installation And Usage

```bash
# using yarn
yarn add 

# using npm
npm install
```

## Principal Commands

```bash
# using yarn
yarn tauri dev
yarn tauri build

# using npm 
npm run tauri dev 
npm run tauri build
```

## Files
### React:

Principal page react > src/components/MainPage.tsx

Components menu bar > src/components/MenuBar.tsx

Functions to import and save file > src/utils/File.tsx
### Rust: 

Config tauri(build, windows, icon) > src-tauri/tauri.conf.json

Main file and functions > /src-tauri/src/main.rs

## Docs

[Rust](https://www.rust-lang.org/)

[Tauri](https://tauri.app/)

[React](https://reactjs.org/)

[TipTap](https://tiptap.dev/)
