/**
 * gulp 工作流脚本
 * @author xue
 * @since 2022/1/23
 */

const gulp = require("gulp");
const workbox = require("workbox-build");

const task_name = "generate-service-worker";
const public_dir = "public";            // 输出目录，要和hexo配置文件内的保持一致

gulp.task(task_name, () => {
  return workbox.injectManifest({
    swSrc: './sw-template.js',
    swDest: public_dir + '/sw.js',
    globDirectory: public_dir,
    globPatterns: [
      "**/*.{html,css,js,json,woff2,xml}"                   // 缓存类型文件
    ],
    modifyURLPrefix: {
      "": "./"
    }
  });
});

gulp.task("default", gulp.series(task_name));
