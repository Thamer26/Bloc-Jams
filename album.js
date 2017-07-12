var setSong = function (songNumber) {
  if (currentSoundFile) {
    currentSoundFile.stop();
}
  currentlyPlayingSongNumber= parseInt(songNumber);
  currentSongFromAlbum = currentAlbum.songs [songNumber-1];
  currentSoundFile = new buzz.sound(currentSongFromAlbum.audioUrl, {
    // #2
    formats: [ 'mp3' ],
    preload: true
});
  ]
};
var seek = function(time) {
    if (currentSoundFile) {
        currentSoundFile.setTime(time);
    }
}

     setVolume(currentVolume);
 };

 var setVolume = function(volume) {
     if (currentSoundFile) {
         currentSoundFile.setVolume(volume);
     }
 };
var setSongNumberCell= function(number)  {
    return $('song-item-number[ data-song-number="' + number +'"]') ;

var createSongRow = function(songNumber, songName, songLength) {
    var template =
       '<tr class="album-view-song-item">'
     + '  <td class="song-item-number" data-song-number="' + songNumber + '>' + songNumber + '</td>'
     + '  <td class="song-item-title">' + songName + '</td>'
     + '  <td class="song-item-duration">' + songLength + '</td>'
     + '</tr>'
     ;

     var $row = $(template);

     var clickHandler = function() {
      var songNumber = parseInt($(this).attr('data-song-number')) ;
      var updateSeekBarWhileSongPlays = function() {
          if (currentSoundFile) {

     var onHover = function(event) {
         // Placeholder for function logic
     };
     var offHover = function(event) {
         // Placeholder for function logic
     };
     // #1
       $row.find('.song-item-number').click(clickHandler);
       // #2
       $row.hover(onHover, offHover);
       // #3
       return $row;};

var setCurrentAlbum = function(album) {
    currentAlbum = album;
   var $albumTitle = $('.album-view-title');
   var $albumArtist = $('.album-view-artist');
   var $albumReleaseInfo = $('.album-view-release-info');
   var $albumImage = $('.album-cover-art');
   var $albumSongList = $('.album-view-song-list');

   var trackIndex = function(album, song) {
       return album.songs.indexOf(song);
   };
   var updateSeekPercentage = function($seekBar, seekBarFillRatio) {
      var offsetXPercent = seekBarFillRatio * 100;
      // #1
      offsetXPercent = Math.max(0, offsetXPercent);
      offsetXPercent = Math.min(100, offsetXPercent);

      // #2
      var percentageString = offsetXPercent + '%';
      $seekBar.find('.fill').width(percentageString);
      $seekBar.find('.thumb').css({left: percentageString});
   };
   var setupSeekBars = function() {
       var $seekBars = $('.player-bar .seek-bar');

       $seekBars.click(function(event) {
           // #3
           var offsetX = event.pageX - $(this).offset().left;
           var barWidth = $(this).width();
           // #4
           var seekBarFillRatio = offsetX / barWidth;

           // #5
           var updateSeekBarWhileSongPlays = function() {
                if (currentSoundFile) {
                    // #10
                    currentSoundFile.bind('timeupdate', function(event) {
                        // #11
                        var seekBarFillRatio = this.getTime() / this.getDuration();
                        var $seekBar = $('.seek-control .seek-bar');

                        updateSeekPercentage($seekBar, seekBarFillRatio);
                    });
                }
            };


           updateSeekPercentage($(this), seekBarFillRatio);
       });
       $seekBars.find('.thumb').mousedown(function(event) {
      // #8
      var $seekBar = $(this).parent();

      // #9
      $(document).bind('mousemove.thumb', function(event){
          var offsetX = event.pageX - $seekBar.offset().left;
          var barWidth = $seekBar.width();
          var seekBarFillRatio = offsetX / barWidth;

          updateSeekPercentage($seekBar, seekBarFillRatio);
      });

      // #10
      $(document).bind('mouseup.thumb', function() {
          $(document).unbind('mousemove.thumb');
          $(document).unbind('mouseup.thumb');
      });
  });
   };

    // #2
    $albumTitle.text(album.title);
 $albumArtist.text(album.artist);
 $albumReleaseInfo.text(album.year + ' ' + album.label);
 $albumImage.attr('src', album.albumArtUrl);

    // #3
    $albumSongList.empty();

    // #4
    for (var i = 0; i < album.songs.length; i++) {
      var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
      $albumSongList.append($newRow);

    }
};
var previousSong = function() {
     ...
     setSong(currentSongIndex + 1);
     currentSoundFile.play();
     var updateSeekBarWhileSongPlays = function() {
    if (currentSoundFile) {
     ...
 };

 var nextSong = function() {
     ... var updateSeekBarWhileSongPlays = function() {
     if (currentSoundFile) {
     setSong(currentSongIndex + 1);
     currentSoundFile.play();
     ...
 };
 ...




var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
var playerBarPlayButton = '<span class="ion-play"></span>';
var playerBarPauseButton = '<span class="ion-pause"></span>';

var currentAlbum = null;

if (setSong !== songNumber) {
      $(this).html(pauseButtonTemplate);
      setSongNumber = songNumber;
      currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
      var updatePlayerBarSong = function() {
  } else if (setSong === songNumber) {
      $(this).html(playButtonTemplate);
      $('.main-controls .play-pause').html(playerBarPlayButton);
var setSong = null;
var currentSongFromAlbum = null;
var currentSoundFile = null;
var currentVolume = 80;



 var $previousButton = $('.main-controls .previous');
 var $nextButton = $('.main-controls .next');



$(document).ready(function() {
            });

    // Only target individual song rows during event delegation
    if (event.target.parentElement.className === 'album-view-song-item') {
      event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;

      }
      $(document).ready(function() {
          setCurrentAlbum(albumPicasso);
          setupSeekBars();
          $previousButton.click(previousSong);
          $nextButton.click(nextSong);

console.log("songNumber type is " + typeof songNumber + "\n and currentlyPlayingSongNumber type is " + typeof currentlyPlayingSongNumber);
var songNumber = parseInt($(this).attr('data-song-number'));


 });

};
