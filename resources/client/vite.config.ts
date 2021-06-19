import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    publicDir: "fake_dir_so_nothing_gets_copied",
    build: {
        manifest: true,
        outDir: "../../public/build",
        rollupOptions: {
            input: "./src/main.ts",
        },
    },
    resolve: {
        alias: {
            src: resolve(__dirname, "src"),
        },
    },
    plugins: [vue()],
});
