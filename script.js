var open_post = 0;
function load_posts() {
	for (i=0; i<posts.length; i++) {
        post_id = i.toString();
        real_id = posts[i].id.toString();
        if (posts[i].media > "") {
            $("#posts").append('<div data-realid="'+real_id+'" class="blog" id="blog'+post_id+'"><div class="body"><h1>'+posts[i].title+'</h1><h2>'+posts[i].date+'</h2><p>'+posts[i].content+'</p></div><div class="media"><img src="img/'+posts[i].media+'"></div><div class="close">X</div></div><div class="post" id="post'+post_id+'"><div class="background"></div><div class="content"><h1>'+posts[i].date+': <br>'+posts[i].title+'</h1></div></div>');
        } else {
            $("#posts").append('<div data-realid="'+real_id+'" class="blog" id="blog'+post_id+'"><div class="body"><h1>'+posts[i].title+'</h1><h2>'+posts[i].date+'</h2><p>'+posts[i].content+'</p></div><div class="media"><video width="100%" height="auto" autoplay muted loop controls><source src="img/'+posts[i].video+'"></video></div><div class="close">X</div></div><div class="post" id="post'+post_id+'"><div class="background"></div><div class="content"><h1>'+posts[i].date+': <br>'+posts[i].title+'</h1></div></div>');
        }
        $("#post"+post_id+" .background").css("background", "url(img/"+posts[i].image+")");
        $("#post"+post_id+" .background").css("background-size", "100% auto");
        $("#post"+post_id+" .background").css("background-repeat", "no-repeat");
        $("#post"+post_id+" .background").css("background-position", "center");
	}
}

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function open_this(id) {
    $(".blog").each(function(index) {
        if ($(this).attr('data-realid') == id) {
            $(this).css("display","block");
            var blogTopPosition = $(this).position().top;
            $("#posts").scrollTop(blogTopPosition);
        }
    });
}

function main() {
	load_posts();
    open_post = getParameterByName('open');
    if (open_post > 0) {
        open_this(open_post);
    }
    $(".post").on('click', function () {
        $(".blog").css("display","none");
        var $content = $(this).prev(".blog");
        $content.css("display","block"); //open the current one
    });
    $(".close").on('click', function () {
        $(".blog").css("display","none");
    });
}