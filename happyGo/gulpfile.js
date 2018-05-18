var gulp = require('gulp');//引入gulp插件,返回gulp对象。
var jshint = require('gulp-jshint');//引入js语法检测插件
var concat = require('gulp-concat');//引入js合并插件
var uglify = require('gulp-uglify');//引入js压缩插件
var rename = require('gulp-rename');//引入js压缩插件
var html = require('gulp-minify-html');//引入html压缩插件
var mcss = require('gulp-minify-css');//引入css压缩插件
var imagemin = require('gulp-imagemin');//引入css压缩插件
var sass = require('gulp-sass');//引入sass编译插件
var connect=require('gulp-connect');


//task:gulp的方法，代表新建一个任务，有两个参数
//参1：任务名，默认是default，一般需要自定义任务名
//参2：回调函数，任务的执行过程。
/*gulp.task('default',function(){
	console.log('hello,gulp');
});*/
//任务的执行：dos--进入目录--通过任务名跑任务。(写法：gulp 任务名)  



//代码的复制
/*gulp.task('copyhtml',function(){
	gulp.src('index.html')//执行的文件的路径
	.pipe(gulp.dest('html/'));//输出的路径
});

gulp.task('copy',function(){
	gulp.src('js/*.js')
	.pipe(gulp.dest('script/'));
});


gulp.task('watchcopy',function(){
	gulp.watch('js/*.js',function(){//监听js下面的所有的js文件
		gulp.run('copy');//执行copy任务。
	});
});
*/


//1.js语法错误报告
//gulp.task('jshint',function(){
//  gulp.src('js/*.js')
//  .pipe(jshint())
//  .pipe(jshint.reporter('gulp-jshint-html-reporter', { filename: 'error.html' })); // 输出错误的结果到自定义的html文件
//});
//
////2.js代码的合并：将所有的js代码合并为一个文件
//gulp.task('alljs',function(){
//	gulp.src('js/*.js')
//	.pipe(concat('all.js'))//执行合并插件并且重新命名合并后的文件
//	.pipe(gulp.dest('script/'));
//});
//
////3.代码的压缩和合并
//gulp.task('uglifyjs',function(){
//	gulp.src('js/*.js')//引入路径
//	.pipe(concat('all.js'))//执行合并插件并且重新命名合并后的文件
//	.pipe(gulp.dest('script/'))//输出
//	.pipe(rename('all.min.js'))//重命名
//	.pipe(uglify())//压缩
//	.pipe(gulp.dest('script/'));//输出
//});
//
////监听
//gulp.task('watchjs',function(){
//	gulp.watch('js.js',function(){
//		gulp.run('uglifyjs');
//	});
//});
//
////4.html文件的压缩
//gulp.task('runhtml',function(){
//	gulp.src('index.html')
//	.pipe(html())
//	.pipe(gulp.dest('html/'));
//});
////5.压缩css文件
//gulp.task('runcss',function(){
//	gulp.src('css/index.css')
//	.pipe(mcss())
//	.pipe(gulp.dest('style/'));
//});
//
////6.压缩png图片
//gulp.task('runimg',function(){
//	gulp.src('img/*')
//	.pipe(imagemin())
//	.pipe(gulp.dest('images/'));
//});
//
////7.编译sass
gulp.task('runsass',function(){
	gulp.src('sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('css/'));
});
//gulp.task('watchsass',function(){
//	gulp.watch('sass/*.scss',function(){
//		gulp.run('runsass');
//	});
//});
//
//
////同时执行多个任务，gulp
//gulp.task('default',['jshint','alljs','runsass']);
//
//
//
////8.es6转es5
////安装如下插件
////gulp-babel
////gulp-preset-es2015
////babel-core
//gulp.task("babeljs", function () {
//  gulp.src("js/index.js")  
//  .pipe(babel({
//   	presets:['es2015']
//  }))
//  .pipe(gulp.dest("dist/"));  
// });  
//gulp.task("watchjs",function(){
//  gulp.watch('js/index.js',function(){
//  	gulp.run('babeljs');
//  });
//});
//



//9.自动刷新
//安装如下插件
//gulp-connect
gulp.task('connect',function(){//新建一个任务
	connect.server({//配置连接服务器
		port:8888,
		livereload:true//自动刷新
	});
});

gulp.task('html',function(){
	gulp.src(['shopcar.html','css/*.css','sass/*.scss'])//引入的文件路径
	.pipe(connect.reload());//自动刷新的方法
});

gulp.task('watch',function(){//监听
	gulp.watch(['shopcar.html','css/*.css','sass/*.scss'],['html','runsass']);
});


//执行的任务
gulp.task('default',['connect','watch']);






//gulp的常用方法
//gulp.task() : 执行gulp任务
//gulp.src() : 引入文件的目录
//gulp.dest() : 输出文件目录设置
//gulp.watch() : 监听
//gulp.run() : 执行 
//pipe() : 管道