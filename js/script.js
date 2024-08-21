$(document).ready(function(){

	"use strict";
	
	/* =================================
	LOADER 
	=================================== */
	$(".loader").delay(400).fadeOut();
    $(".animationload").delay(400).fadeOut("fast");

    var bgi = $("[data-background]");
    bgi.length > 0 && bgi.each(function() {
    	var e = $(this),
    	t = e.attr('data-background');
    	e.css({'background-image': 'url(' + t + ')'});
    });

    var progressBar = $('.progress-bar');
    progressBar.length > 0 && progressBar.each(function() {
    	var e = $(this),
    	t = e.attr('aria-valuenow');
    	e.css({'width': t + '%'});
    });

    /* =================================
	SCROLL TO
	=================================== */
	$('a[href^="#"]').on('click', function(event) {

	    var target = $(this.getAttribute('href'));

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }

	});
	
	/* =================================
	NAVBAR 
	=================================== */
	var top = jQuery(document).scrollTop();
	var batas = 200;
	var navbar = jQuery('.navbar-main');
	var navbarnav = jQuery('.navbar-nav');
	var header = jQuery('.header');
	
	
	if ( top > batas ) {
		navbar.addClass('stiky');
		navbarnav.addClass('ml-auto');
	}
	jQuery(window).scroll(function () {
		top = jQuery(document).scrollTop();

		
		if ( top > batas ) {
			navbar.addClass('stiky');
		}else {
			navbar.removeClass('stiky'); 
			if(header.hasClass('header-2')){
				navbarnav.removeClass('ml-auto');
			}
			if(header.hasClass('header-5')){
				navbarnav.removeClass('ml-auto');
			}
		}

	});
	
	/* =================================
	BANNER ROTATOR IMAGE 
	=================================== */
	var slides = $(".full-screen"),
    b = slides.find('.item');
    b.each(function(){
        var e = $(this),
        ocImg = e.find('img').attr('src');
        e.css({'background-image': 'url(' + ocImg + ')'});
    });

    slides.owlCarousel({
	    // stagePadding: 50,
	    loop: true,
	    // margin: 10,
	    autoplay: true,
        autoplayTimeout: 5000,
	    nav: true,
	    dots: false,
	    navText: [
	        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
	        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
	    ],
	    navContainer: '.banner .custom-nav',
	    items: 1,
	});	

	/* =================================
	BACK TO TOP 
	=================================== */
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	

	var whoweare = $("#whoweare");
	whoweare.owlCarousel({
		margin: 0,
	    autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		items : 1,
		dots: true,
		loop: true
	});

	var carousel_2 = $(".testimonial-caro");
	carousel_2.owlCarousel({
		margin: 30,
	    autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		items : 3,
		dots: true,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

	var testimony = $("#testimonial");
	testimony.owlCarousel({
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		items : 1,
		dots: true,
		loop: true
	});
	
	/* =================================
	MAGNIFIC POPUP
	=================================== */
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });

	$('.grid, .popup-gallery').magnificPopup({
	  delegate: 'a',
	  type: 'image',
	  tLoading: 'Loading image #%curr%...',
	  mainClass: 'mfp-img-mobile',
	  gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1]
	  },
	  image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
		  return item.el.attr('title') + '';
		}
	  }
	});

	/* =================================
	ISOTOP
	=================================== */	

	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		isFitWidth: true,
		masonry: {
			columnWidth: '.grid-sizer'
		}
	});

	$grid.imagesLoaded().progress( function() {
		$grid.isotope('layout');
	});

	$('#filter2 a').on('click', function() {
 		$('#filter2 .active').removeClass('active');
		$(this).addClass('active');
 
		var selector = $(this).attr('data-filter');
		$grid.isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				animationEngine : "jquery"
			}
		});
		return false;
 	});

	var $gridv2 = $('.grid-v1');
	$gridv2.isotope({
		itemSelector: '.grid-item-v1',
		isFitWidth: true,
		filter: '.design',
		masonry: {
			columnWidth: '.grid-sizer-v1'
		}
	});

	$gridv2.imagesLoaded().progress( function() {
		$gridv2.isotope('layout');
	});

	$('.portfolio_filter a').on('click', function() {
 		$('.portfolio_filter .active').removeClass('active');
		$(this).addClass('active');
 
		var selector = $(this).attr('data-filter');
		$gridv2.isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				animationEngine : "jquery"
			}
		});
		return false;
 	});


	
});



//   new about circle section


	let i=2;

	
	$(document).ready(function(){
		var radius = 200;
		var fields = $('.itemDot');
		var container = $('.dotCircle');
		var width = container.width();
 radius = width/2.5;
 
		 var height = container.height();
		var angle = 0, step = (2*Math.PI) / fields.length;
		fields.each(function() {
			var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
			var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
			if(window.console) {
				console.log($(this).text(), x, y);
			}
			
			$(this).css({
				left: x + 'px',
				top: y + 'px'
			});
			angle += step;
		});
		
		
		$('.itemDot').click(function(){
			
			var dataTab= $(this).data("tab");
			$('.itemDot').removeClass('active');
			$(this).addClass('active');
			$('.CirItem').removeClass('active');
			$( '.CirItem'+ dataTab).addClass('active');
			i=dataTab;
			
			$('.dotCircle').css({
				"transform":"rotate("+(360-(i-1)*36)+"deg)",
				"transition":"2s"
			});
			$('.itemDot').css({
				"transform":"rotate("+((i-1)*36)+"deg)",
				"transition":"1s"
			});
			
			
		});
		
		setInterval(function(){
			var dataTab= $('.itemDot.active').data("tab");
			if(dataTab>6||i>6){
			dataTab=1;
			i=1;
			}
			$('.itemDot').removeClass('active');
			$('[data-tab="'+i+'"]').addClass('active');
			$('.CirItem').removeClass('active');
			$( '.CirItem'+i).addClass('active');
			i++;
			
			
			$('.dotCircle').css({
				"transform":"rotate("+(360-(i-2)*36)+"deg)",
				"transition":"2s"
			});
			$('.itemDot').css({
				"transform":"rotate("+((i-2)*36)+"deg)",
				"transition":"1s"
			});
			
			}, 5000);
		
	});

  
  
//  line chart
// $(document).ready(function() {
//   barChart();
//   lineChart();
//   areaChart();
//   donutChart();

//   $(window).resize(function() {
//     window.barChart.redraw();
//     window.lineChart.redraw();
//     window.areaChart.redraw();
//     window.donutChart.redraw();
//   });
// });

// function barChart() {
//   window.barChart = Morris.Bar({
//     element: 'bar-chart',
//     data: [
//       { y: '2006', a: 100, b: 90 },
//       { y: '2007', a: 75,  b: 65 },
//       { y: '2008', a: 50,  b: 40 },
//       { y: '2009', a: 75,  b: 65 },
//       { y: '2010', a: 50,  b: 40 },
//       { y: '2011', a: 75,  b: 65 },
//       { y: '2012', a: 100, b: 90 }
//     ],
//     xkey: 'y',
//     ykeys: ['a', 'b'],
//     labels: ['Series A', 'Series B'],
//     lineColors: ['#1e88e5','#ff3321'],
//     lineWidth: '3px',
//     resize: true,
//     redraw: true
//   });
// }

// function lineChart() {
//   window.lineChart = Morris.Line({
//     element: 'line-chart',
//     data: [
//       { y: '2006', a: 100, b: 90 },
//       { y: '2007', a: 75,  b: 65 },
//       { y: '2008', a: 50,  b: 40 },
//       { y: '2009', a: 75,  b: 65 },
//       { y: '2010', a: 50,  b: 40 },
//       { y: '2011', a: 75,  b: 65 },
//       { y: '2012', a: 100, b: 90 }
//     ],
//     xkey: 'y',
//     ykeys: ['a', 'b'],
//     labels: ['Series A', 'Series B'],
//     lineColors: ['#1e88e5','#ff3321'],
//     lineWidth: '3px',
//     resize: true,
//     redraw: true
//   });
// }

// function areaChart() {
//   window.areaChart = Morris.Area({
//     element: 'area-chart',
//     data: [
//       { y: '2006', a: 100, b: 90 },
//       { y: '2007', a: 75,  b: 65 },
//       { y: '2008', a: 50,  b: 40 },
//       { y: '2009', a: 75,  b: 65 },
//       { y: '2010', a: 50,  b: 40 },
//       { y: '2011', a: 75,  b: 65 },
//       { y: '2012', a: 100, b: 90 }
//     ],
//     xkey: 'y',
//     ykeys: ['a', 'b'],
//     labels: ['Series A', 'Series B'],
//     lineColors: ['#1e88e5','#ff3321'],
//     lineWidth: '3px',
//     resize: true,
//     redraw: true
//   });
// }

// function donutChart() {
//   window.donutChart = Morris.Donut({
//   element: 'donut-chart',
//   data: [
//     {label: "Download Sales", value: 50},
//     {label: "In-Store Sales", value: 25},
   
//   ],
//   resize: true,
//   redraw: true
// });
// }

// function pieChart() {
//   var paper = Raphael("pie-chart");
// paper.piechart(
//   100, // pie center x coordinate
//   100, // pie center y coordinate
//   90,  // pie radius
//   [18.373, 18.686, 2.867, 23.991, 9.592, 0.213], // values
//   {
//   legend: ["Windows/Windows Live", "Server/Tools", "Online Services", "Business", "Entertainment/Devices", "Unallocated/Other"]
//   }
//  );
// }
// ---------------------------------------
// Morris.Line({
// 	element: 'line-chart',
// 	data: [
// 		{ y: '2012', a: 0, b: 0, c: 0 },
// 		{ y: '2013', a: 150,  b: 30, c: 50 },
// 		{ y: '2014', a: 20,  b: 50, c: 150 },
// 		{ y: '2015', a: 150,  b: 80, c: 40 },
// 		{ y: '2016', a: 20,  b: 110, c: 150 },
// 		{ y: '2017', a: 50,  b: 150, c: 40 },
// 		{ y: '2018', a: 160, b: 30, c: 100 }
// 	],
// 	xkey: 'y',
// 	ykeys: ['a', 'b', 'c'],
// 	labels: ['Series A', 'Series B', 'Series C'],
// 	hideHover: 'auto',
// 	gridLineColor: '#eef0f2',
// 	resize: true,
// 	lineColors: ['#22BCBE', '#3D91FF', '#D57074']
// });
// ---------------------------------------
$(document).ready(function() {
  
  lineChart();
  

  $(window).resize(function() {
   
    window.lineChart.redraw();
    
  });
});



function lineChart() {
  window.lineChart = Morris.Line({
    element: 'line-chart',
    data: [
      { y: '2006', a: 20 },
      { y: '2007', a: 30 },
      { y: '2008', a: 40 },
      { y: '2009', a: 50 },
      { y: '2010', a: 60 },
      { y: '2011', a: 70 },
      { y: '2012', a: 80 }
    ],
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Series A'],
    lineColors: ['#FFA500'],
    lineWidth: '3px',
    resize: true,
    redraw: true
  });
}
  