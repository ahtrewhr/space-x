import webpack from 'webpack-stream';
import babel from 'gulp-babel';

export const js = () => {
	return (
		app.gulp
			.src(app.path.src.js, { sourcemaps:  app.isDev })
			// Уведомления об ошибках в терминале и windows
			// .pipe(
			// 	app.plugins.plumber(
			// 		app.plugins.notify.onError({
			// 			title: 'JS',
			// 			message: 'ERROR: <%= error.message %>',
			// 		}),
			// 	),
			// )
			.pipe(
				webpack({
					mode:  app.isBuild ? 'production' : 'development',
					output: {
						filename: 'app.min.js',
					},
				}),
			)
			.pipe(
				babel({
					presets: ['@babel/preset-env'],
				}),
			)
			.pipe(app.gulp.dest(app.path.build.js))
			.pipe(app.plugins.browsersync.stream())
	);
};
