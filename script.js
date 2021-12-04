

//     $(document).ready(function(){


   var API_KEY='AIzaSyBmc_GDSmyt8GzWNqvXxp4gY62m5WQxvMk'
   var video=''
    

    $('#form').submit(function(e){
    e.preventDefault();
  // getting the search term
    var search=$('#search').val()
    videoSearch(API_KEY,search,10);
})
// function to search for the video
function videoSearch(key,search,maxResults){
    $('#videos').empty();
      $.get('https://www.googleapis.com/youtube/v3/search?key='+key+"&part=snippet&maxResults="
      +maxResults +"&q="+search,function(data){
          console.log(data);

          data.items.forEach(item=>{
            //   var text=`${item.snippet.channelTitle}`
                video=`
                <iframe width="420" height="315" src="https://www.youtube.com/embed/${item.id.videoId}" 
                frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                 `
                  var title=`<h5>${item.snippet.title}</h5>`
                  var channlTitle=`<a href=${item.snippet.channelTitle}>${item.snippet.channelTitle}</h6>`
                  var desc=`<p>${item.snippet.description}</p>`
                  var thumbImg=`<img class="channelLogo"src=${item.snippet.thumbnails.medium.url} alt=""/>`
                //   var button=`<button class="btn btn-info>${text}</button>`
                 $('#videos').append(video)
                  $('#videos').append(title)
                //  $('#videos').append(thumbImg)
               
                 $('#videos').append(channlTitle)
                 $('#videos').append(desc);
            //    channlTitle.addEventListener('click', `channelInfo(${item.});`)
                
                

            })
      })
}

// items[0].contentDetails.relatedPlaylists.uploads: "UU_x5XG1OV2P6uZZ5FSM9Ttw"
// items[0].contentDetails.id='UC_x5XG1OV2P6uZZ5FSM9Ttw'
function channelInfo(forUsername){
    //this is for retrieving channel info
    $.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&maxResults=7&forUsername=${forUsername}&key=`
    +API_KEY,function (data){
        console.log(data);
        // data.items.forEach(item=>{
        //     var chnlInfo=`<table><tr><td>${item.channelTitle}</td></tr></table>`;
        //     $('.info').append(chnlInfo)
        // })
    })
}
channelInfo('Google Developers');

// this is for uploaded videos and system-generated playlist items
function playlistInfo(){
$.get('https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=20&playlistId=UU_x5XG1OV2P6uZZ5FSM9Ttw&key='
+API_KEY,function(res){
    console.log(res);
})}
playlistInfo();


// for next page token working but it is optional

// function nextPageToken(){
//     $.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=18&pageToken=CBQQAA&playlistId=UU_x5XG1OV2P6uZZ5FSM9Ttw&key='
// +API_KEY,function(res){
//     console.log(res);
// })}
// nextPageToken();

//for retrieving subscriptions


// function subscriptionDetails(){
//     $.get('https://www.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=5&key='+API_KEY,
//     function(subsData){
//         console.log(subsData);
//     })
// }
// subscriptionDetails();
//GET https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json


//create a playlist
//POST {base_URL}/playlists?part=snippet
//  Request body:
//  {
//    'snippet': {
//      'title': 'New playlist', 
//      'description': 'Sample playlist for Data API',
//     }
//  }


// creating a playlist 

// function createPlayList(){
//     $.get('https://youtube.googleapis.com/youtube/v3/playlist?part=snippet%2Cstatus&maxResults=8&playlistId=UU_x5XG1OV2P6uZZ5FSM9Ttw&key='+API_KEY,
//     function(data){
//         console.log(data);
//     })
// }
// createPlayList();

// subscription info

// function subsInfo(){
//     $.get('https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet&mySubscribers=true&key='+API_KEY ,
//     { header :'Authorization: Bearer [YOUR_ACCESS_TOKEN]' ,
//     header :'Accept: application/json' ,
//     compressed},function(x){
//         console.log(x);
//     })
// }

//retrieving user activity
 function userActivity(){
    // 
    $.get(  'https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key='
    +API_KEY, function(data){
        console.log(data);
    })
 }
 userActivity();

 // to delete the playlist

//  function deletePlayList(){
//      $.get('DELETE https://youtube.googleapis.com/youtube/v3/playlists?key='+API_KEY ,

//      {Authorization: 'Bearer 3081373582-g2ethv8m2mgn8uvdshsmprl5c8a68etg.apps.googleusercontent.com',
//      Accept: 'application/json'},function(data){
//          console.log(data);
//      })
//  }
//  deletePlayList();