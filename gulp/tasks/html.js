import fileInclude from 'gulp-file-include';
import webpHtmlNoSvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';
import pug from 'gulp-pug';

export const html = () => {
	return (
		app.gulp
			.src(app.path.src.html)
			// Уведомления об ошибках в терминале и windows
			// .pipe(
			// 	app.plugins.plumber(
			// 		app.plugins.notify.onError({
			// 			title: 'HTML',
			// 			message: 'ERROR: <%= error.message %>',
			// 		}),
			// 	),
			// )
			.pipe(fileInclude()) // Include для чистого HTML
			// Pipe for PUG
			.pipe(
				pug({
					// Сжатие HTML файла
					pretty: true,
					// Показывать в терминале какой файл обработан
					verbose: true,
				}),
			)
			.pipe(app.plugins.replace(/@img\//g, 'img/'))
			.pipe(app.plugins.ifPlugin(
				app.isBuild, webpHtmlNoSvg())
			)
			.pipe(app.plugins.ifPlugin(
				app.isBuild, versionNumber({
					value: '%DT%',
					append: {
						key: '_v',
						cover: 0,
						to: ['css', 'js'],
					},
					output: {
						file: 'gulp/version.json',
					},
				}),
			)

			)
			.pipe(app.gulp.dest(app.path.build.html))
			.pipe(app.plugins.browsersync.stream())
	);
};
