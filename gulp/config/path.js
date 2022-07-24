// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./build`;
const srcFolder = `./src`;

export const path = {
	build: {
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`,
	},
	src: {
		html: `${srcFolder}/html/*.pug`, // .html or pug
		scss: `${srcFolder}/scss/style.scss`,
		js: `${srcFolder}/js/app.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		png: `${srcFolder}/img/**/*.png`,
		sprite: `${srcFolder}/img/sprite/*.svg`,
		files: `${srcFolder}/files/**/*.*`,
	},
	watch: {
		html: `${srcFolder}/**/*.pug`, // .html or pug
		scss: `${srcFolder}/scss/**/*.scss`,
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
		files: `${srcFolder}/files/**/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``,
};
