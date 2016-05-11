var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {
  var spriteData = gulp.src('public/images/*.png').pipe(spritesmith({
    imgName: 'sprite_chat.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('public/images/sprite'));
});

gulp.task('default',['sprite'], function() {
  // place code for your default task here
});