import{resolve} from "path";
import { defineConfig } from "vite";

const root=resolve(__dirname,"src")
const outDir= resolve(__dirname,"dist")

export default defineConfig({
    base:"/tabajara-pokedesx/",
    root:root,
    build:{
      outDir:outDir,
      emptyOutDir:true,
      rollupOptions:{
        imput:{
            index: resolve(root, "index.html")
        }
      }
    },
    publicDir:"../public"
})