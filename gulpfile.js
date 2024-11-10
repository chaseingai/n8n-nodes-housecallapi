const path = require('path');
const { task, src, dest } = require('gulp');

task('build:icons', copyIcons);

function copyIcons() {
	const nodeSource = path.resolve('src', 'HousecallPro', '*.{png,svg}');
	const nodeDestination = path.resolve('dist', 'nodes');

	src(nodeSource).pipe(dest(nodeDestination));

	const logoSource = path.resolve('src', 'HousecallPro', 'logo.svg');
	const logoDestination = path.resolve('dist');

	return src(logoSource).pipe(dest(logoDestination));
}
