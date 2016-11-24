function load_posts() {
	for (i=0; i<posts.length; i++) {
        post_id = i.toString();
        $("#posts").append('<div class="post" id="post'+post_id+'"><div class="background"></div><div class="content"><h1>'+posts[i].date+'</h1></div></div><div class="blog" id="blog'+post_id+'"><div class="body"><h1>'+posts[i].title+'</h1><h2>'+posts[i].date+'</h2><p>'+posts[i].content+'</p></div><div class="media"><img src="img/'+posts[i].image+'"></div><div class="close">X</div></div>');
        $("#"+post_id+" .background").css("background", "url(img/"+posts[i].image+")");
        $("#"+post_id+" .background").css("background-size", "100% 100%");
	}
}

function main() {
	load_posts();
}

$(document).ready(function() {
    main();
});

$(document).ready(function () {
    $(".blog").on('click', function () {
        $(this).slideUp(); //close current one
    });
    $(".post").on('click', function () {
        $(".blog").slideUp();
        var $content = $(this).next(".blog");
        $content.slideToggle(); //toggle the current one
    });
});

$(document).ready(function () {
    $("#show").on('click', function () {
        $(".content").slideDown(); //open all
    });
    $("#collapse").on('click', function () {
        $(".content").slideUp(); //close all
    });
});