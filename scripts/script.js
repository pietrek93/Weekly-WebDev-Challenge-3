$(document).ready(function(e){
	var topMenu = e("#navbar-menu"),
		offset = 40,
		topMenuHeight = topMenu.outerHeight()+offset,
		menuItems =  topMenu.find('a[href*="#"]'),

		scrollItems = menuItems.map(function(){
			var href = e(this).attr("href"),
			id = href.substring(href.indexOf('#')),
			item = e(id);
			if (item.length) { return item; }
	});
		
	menuItems.click(function(event){
		var href = $(this).attr("href"),
		id = href.substring(href.indexOf('#'));
		offsetTop = href === "#" ? 0 : $(id).offset().top-topMenuHeight+5;
		$('html, body').stop().animate({ 
			scrollTop: offsetTop
		}, 1100);
		event.preventDefault();
	});

	$(window).scroll(function(){
		var fromTop = $(this).scrollTop()+topMenuHeight;
	
		var cur = scrollItems.map(function(){
			if ($(this).offset().top < fromTop)
			return this;
		});

		cur = cur[cur.length-1];
		var id = cur && cur.length ? cur[0].id : "";               
		
		menuItems.removeClass("navbar-menu-active");
		if(id){
				menuItems.filter("[href*='#"+id+"']").addClass("navbar-menu-active");
		}
		
	})
});

$(document).on("scroll",function(){
    if($(document).scrollTop()>50){ 
      $("#nav").removeClass("navbar-large").addClass("navbar-small");
      }
    else{
      $("#nav").removeClass("navbar-small").addClass("navbar-large");
      }
  });
  
  
  
  $('.button-toggle-nav').on('click', function(){
      $('.navbar-menu').toggleClass('navbar-menu-show');
  });
  
  $('.navbar-menu>li>a').on('click', function(){
      $('.navbar-menu').removeClass('navbar-menu-show');
  });
