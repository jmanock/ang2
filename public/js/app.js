$(document).ready(function(){
  $.getJSON('../json/one.json', function(data){

    var results = data.results;
    $.each(results, function(i,k){
      // console.log(k);
      var name = k.name;
      var bio = k.bio;
      var distance = k.distance_mi;
      var birthday = k.birth_date;
      var job = k.jobs;
      var photos = k.photos;
      var insta = k.instagram;
      var jobTitle;
      var company;
      var url;


      if(insta !== undefined){
        console.log(insta.username, name);
        var instaUsername = insta.username;
         $('body').append('<li> UserName: '+instaUsername+'</li>');
         $('body').append('<a href=http://www.instagram.com/'+instaUsername+'>InstaGram</a>');
        // $('body').append('<img src='+rinsta+'></img>');
      }
      $('body').append('<ul>');
      $('body').append('<li> Name: '+name+'</li>');
      $('body').append('<li> Bio: '+ bio+'</li>');
      $('body').append('<li> Birthday: '+birthday+'</li>');
      $('body').append('<li> Distance: '+distance+'</li>');
      $('body').append('<li> JobTitle: '+jobTitle+'</li>');
      $('body').append('<li> Company: '+company+'</li>');
      if(job.length !== 0){
        $.each(job, function(i,k){
           jobTitle = k.title;
           company = k.company;
          if(jobTitle !== undefined){
            jobTitle = jobTitle.name;
          }
          if(company !== undefined){
            company = company.name;
          }

        });
      }
      $.each(photos, function(i,k){
        url = k.url;
        $('body').append('<img src='+url+'></img>');
      });



      // $('body').append('<li><img src='+url+'</img></li>');

    });
  });
});
