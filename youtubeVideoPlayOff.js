<!DOCTYPE html>
<html>
    <head>
        <title>Ha</title>
        <style>
        .button {
            width: 48px;
            height: 48px;
            cursor: pointer;
          }
          .button:hover {
            fill: white;
          }
          
          .defs {
            position: absolute;
            top: -9999px;
            left: -9999px;
          }
          
          iframe {
            float: left;
            width: 300px;
            height: 200px;
          }
          
          .buttons {
            padding: 1rem;
            background: #f06d06;
            float: left;
          }
          
          body {
            padding: 1rem;
          }</style>
    </head>

   <body>
    <h1>Pause / Play Buttons for YouTube Videos</h1> 
    <iframe id="video"  src="https://www.youtube.com/embed/exn7QTKvuug?enablejsapi=1&html5=1&mute=1"  frameborder="0"  allowfullscreen></iframe> 
    
    <div class="buttons"> 
      <button  id="play-button" >Open</button>
      <button  id="pause-button" >Pause</button> 
    </div>
    <script>
        // https://developers.google.com/youtube/iframe_api_reference

        // global variable for the player
        var player;

        // this function gets called when API is ready to use
        function onYouTubePlayerAPIReady() {
        // create the global player from the specific iframe (#video)
        player = new YT.Player("video", {
            events: {
            // call this function when player is ready to use
            onReady: onPlayerReady
            }
        });
        }

        function onPlayerReady(event) {
        // bind events
        var playButton = document.getElementById("play-button");
        playButton.addEventListener("click", function () {
            player.playVideo();
        });

        var pauseButton = document.getElementById("pause-button");
        pauseButton.addEventListener("click", function () {
            player.pauseVideo();
        });
        }

        // Inject YouTube API script
        var tag = document.createElement("script");
        tag.src = "//www.youtube.com/player_api";
        var firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    </script>
   </body>
</html>
