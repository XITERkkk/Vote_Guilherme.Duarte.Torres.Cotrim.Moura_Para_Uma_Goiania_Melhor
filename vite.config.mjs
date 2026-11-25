import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  server: { allowedHosts: true },
  build: { chunkSizeWarningLimit: 650 },
  plugins: [
    {
      name: "imagem-social-do-projeto",
      transformIndexHtml(html) {
        const repository = process.env.GITHUB_REPOSITORY;
        if (!process.env.GITHUB_ACTIONS || !repository) return html;
        const [owner, project] = repository.split("/");
        const path =
          project.toLowerCase() === owner.toLowerCase() + ".github.io"
            ? ""
            : project + "/";
        return html.replace(
          "https://goiania-2030-plano-urbano.bryan-torres.chatgpt.site/assets/images/hero.webp",
          "https://" +
            owner.toLowerCase() +
            ".github.io/" +
            path +
            "assets/images/hero.webp",
        );
      },
    },
  ],
});
