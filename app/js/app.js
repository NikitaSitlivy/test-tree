$(document).ready(function() {
	$('.folders-block_file').css("margin-top", "4px");
})


$('.folders-block__show' ).on( "click", function() {
	if($(this).children().text()=='+'){
		$(this).children().text('-')
		$(this).children().css('top','33%')
	}
	else{
		$(this).children().text('+')
		$(this).children().css('top','50%')
	}
	let parent = $(this).parent().parent().children();
	for(let i = 0; i<parent.length;i++){
		if($(parent[i]).css("display")=='block'){
			if(parent[i].className=='folders-block__item'){
				$(parent[i]).css("display", "none");
			}
			 if (parent[i].className=='folders-block__second-level'){
				$(parent[i]).css("display", "none");
			}
		}
		else{
			if(parent[i].className=='folders-block__item'){
			$(parent[i]).css("display", "block");
		}
			if (parent[i].className=='folders-block__second-level'){
				$(parent[i]).css("display", "block");
				console.log(parent[i].className)
			}
		}
	}
} ) 