var player,tag=document.createElement("script");
tag.src="https://www.youtube.com/iframe_api";
var firstScriptTag=document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);

function onYouTubePlayerAPIReady(){
player=new YT.Player("player",{height:"380",width:"600",videoId:"KqtvA6xo4DE",events:{onReady:onPlayerReady}});
document.getElementById("resume").onclick=function(){player.playVideo()};
document.getElementById("pause").onclick=function(){player.pauseVideo()}}

function onPlayerReady(c){c.target.playVideo()}
$(document).ready(function(){var c=['<option value="none" disabled selected>Select friend</option>'];
$.getJSON("http://learn.gifi.co.il/api/users/",function(d){console.log(d);
$.each(d.users,function(a,b){c.push("<option value='"+b.video+"'>"+b.fullname+"</option>")});
$("#user-select").html(c.join("")).change(function(){var a=$(this).val().split("v=")[1],b=a.indexOf("&");
-1!=b&&(a=a.substring(0,b));
console.log(a);
player.loadVideoById(a)})})});