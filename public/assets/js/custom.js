(function ($) {
	"use strict";
  // Get Device width
  let device_width = window.innerWidth;

	if ($(window).width() > 1024) {
		gsap.config({
			nullTargetWarn: false,
			trialWarn: false,
		});
	};
	$(document).on('mouseenter mouseleave mousemove', '[data-tooltip-tit]', function (e) {
		if (e.type === 'mouseenter') {
			createTooltip($(this));
		} else if (e.type === 'mouseleave') {
			removeTooltip();
		} else if (e.type === 'mousemove') {
			updateTooltipPosition(e);
		}
	});
	$(document).on({
		mouseenter: function () {
			// When mouse enters the element with the attribute 'data-tooltip-sub'
			// Create a new div with class 'div-tooltip-sub' and set its text content
			$('<div class="div-tooltip-sub"></div>').text($(this).attr('data-tooltip-sub')).appendTo('.portfolio-info-flow-section').fadeIn();
		},
		mouseleave: function () {
			// When mouse leaves the element
			// Remove the div with class 'div-tooltip-sub'
			$('.div-tooltip-sub').remove();
		},
		mousemove: function (e) {
			// When mouse moves over the element
			// Set the position of the div with class 'div-tooltip-sub' based on mouse coordinates
			$('.div-tooltip-sub').css({ top: e.pageY + (-20), left: e.pageX + 10 });
		}
	}, '[data-tooltip-sub]');
	function createTooltip(element) {
		$('<div class="div-tooltip-tit"></div>').text(element.attr('data-tooltip-tit')).appendTo('.portfolio-info-flow-section').fadeIn();
	}
	function removeTooltip() {
		$('.div-tooltip-tit').remove();
	}
	function updateTooltipPosition(e) {
		$('.div-tooltip-tit').css({ top: e.pageY + 13, left: e.pageX + 10 });
	}


	// Horizontal Scrolling
	if (device_width > 1200) {

		var workflow_section_3 = document.querySelector('.horizontal-scrolling-wrapper');
		if (workflow_section_3) {
	
		  let duration = 1,
			sections = gsap.utils.toArray(".single-scroll"),
			sectionIncrement = duration / (sections.length - 1),
			tl = gsap.timeline({
			  scrollTrigger: {
				trigger: ".horizontal-scrolling-wrapper",
				pin: true,
				scrub: 1,
				start: "-80px top",
				end: "+=5000"
			  }
			});
	
		  tl.to(sections, {
			xPercent: -100 * (sections.length - 1),
			duration: duration,
			ease: "none"
		  });
	
		  sections.forEach((section, index) => {
			let tween = gsap.from(section, {
			  opacity: 0,
			  scale:1,
			  duration: 0.5,
			  force3D: true,
			  paused: true
			});
			addSectionCallbacks(tl, {
			  start: sectionIncrement * (index - 0.99),
			  end: sectionIncrement * (index + 0.99),
			  onEnter: () => tween.play(),
			  onLeave: () => tween.reverse(),
			  onEnterBack: () => tween.play(),
			  onLeaveBack: () => tween.reverse()
			});
			index || tween.progress(1);
		  });
	
		  function addSectionCallbacks(timeline, { start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack }) {
			let trackDirection = animation => {
			  let onUpdate = animation.eventCallback("onUpdate"),
				prevTime = animation.time();
			  animation.direction = animation.reversed() ? -1 : 1;
			  animation.eventCallback("onUpdate", () => {
				let time = animation.time();
				if (prevTime !== time) {
				  animation.direction = time < prevTime ? -1 : 1;
				  prevTime = time;
				}
				onUpdate && onUpdate.call(animation);
			  });
			},
			  empty = v => v;
			timeline.direction || trackDirection(timeline);
			start >= 0 && timeline.add(() => ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(param), start);
			end <= timeline.duration() && timeline.add(() => ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(param), end);
		  }
		}
	  }

	// star-rating
	$('.star-icon').each(function() {
		 let self=$(this);
		 $(this).on('mouseenter', function(){
			$(this).prevAll().addBack().css("color", "#FBB03B");
		 });
		 
		 $(this).on('mouseout', function(){
			if (!$(this).parent().attr("data-rating")) {
				$(this).prevAll().addBack().css("color", "#787878");
			  } else {
				$(this).siblings().addBack().each(function(index) {
				  index + 1 <= $(this).parent().attr("data-rating") ? 
					$(this).css("color", "#FBB03B") : $(this).css("color", "#787878");
				});
			  }
		 });
		 $(this).on('click', function(){
			$(this).parent().attr("data-rating", $(this).prevAll().length + 1);
		 });

	});

	jQuery('.dropdown-icon2').on('click', function () {
        jQuery(this).toggleClass('active').next('.submenu-list').slideToggle();
        jQuery(this).parent().siblings().children('.submenu-list').slideUp();
        jQuery(this).parent().siblings().children('.active').removeClass('active');
    });

	  // Menu Text Animation
	  document.querySelectorAll('.main-menu > li > a').forEach(button => button.innerHTML = '<div class="menu-text"><span>' + button.textContent.split('').join('</span><span>') + '</span></div>');

	  setTimeout(() => {
		var menu_text = document.querySelectorAll(".menu-text span")
		menu_text.forEach((item) => {
		  var font_sizes = window.getComputedStyle(item, null);
		  let font_size = font_sizes.getPropertyValue("font-size");
		  let size_in_number = parseInt(font_size.replace("px", ""));
		  let new_size = parseInt(size_in_number / 3)
		  new_size = new_size + "px"
		  if (item.innerHTML == " ") {
			item.style.width = new_size
		  }
		})
	  }, 1000)

	// FancyBox Js
	$('[data-fancybox="popup-video"]').fancybox({
		buttons: [
		  "close",
		],
		loop: false,
		protect: true,
	  });
	$('[data-fancybox="gallery-01"]').fancybox({
		buttons: [
		  "close",
		],
		loop: false,
		protect: true,
	  });
	$('.video1').fancybox({
		buttons: [
		  "close",
		],
		loop: false,
		protect: true,
	  });
	  	  

	// sidebar
	$('.sidebar-btn2').on("click", function () {
		$('.header-sidebar').addClass('slide');
	});
	$('.close-btn').on("click", function () {
		$('.header-sidebar').removeClass('slide');
	});

	$('.sidebar-btn').on("click", function () {
        $('.sidebar-menu').addClass('active');
    });
	$('.sidebar-menu-close').on("click", function () {
        $('.sidebar-menu').removeClass('active');
    });

	jQuery('.dropdown-icon').on('click', function () {
		// alert()
		// $(this).next('.mob-submenu').slideToggle();
		jQuery(this).toggleClass('active').next('ul, .mega-menu').slideToggle();
		jQuery(this).parent().siblings().children('ul, .mega-menu').slideUp();
		jQuery(this).parent().siblings().children('.active').removeClass('active');
	});

	// sticky header

	window.addEventListener('scroll', function () {
		const header = document.querySelector('header.header-area');
		header.classList.toggle("sticky", window.scrollY > 200);
	});

	//Cart Menu Quantity button toggle
	$(".qty-btn").on("click", function (e) {
	e.stopPropagation();
	// Toggle "active" class for the current quantity button and its related elements
	$(this).next(".quantity-area").toggleClass("active");

	// Remove "active" class from other quantity buttons and related elements
	$(".quantity-area")
		.not($(this).next(".quantity-area"))
		.removeClass("active");
	});
	$(document).on("click", function (e) {
	if (
		!$(e.target).closest(".quantity-area")
		.length
	) {
		// Remove "active" class from all quantity buttons and related elements
		$(".quantity-area").removeClass("active");
	}
	});

	//Counter up
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	// scroll up button
	document.addEventListener("DOMContentLoaded", function(event) {
		
	let offset = 50;
	let circleContainer = document.querySelector(".circle-container");
	let circlePath = document.querySelector('.circle-container path');
	let pathLength = circlePath.getTotalLength();
	circlePath.style.transition = circlePath.style.WebkitTransition = 'none';
	circlePath.style.strokeDasharray = pathLength;
	circlePath.style.strokeDashoffset = pathLength;
	circlePath.getBoundingClientRect();
	circlePath.style.transition = circlePath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

	let updateLoader = () => {

		let scrollTop = window.scrollY;
		let docHeight = document.body.offsetHeight;
		let winHeight = window.innerHeight;
		let height = docHeight - winHeight;
		let progress = pathLength - (scrollTop * pathLength / height);
		circlePath.style.strokeDashoffset = progress;

		if (scrollTop > offset) {
		circleContainer.classList.add("active");
		} else {
		circleContainer.classList.remove("active");
		}
			
	}
	circleContainer.onclick = function(){
	window.scrollTo({ top: 0, behavior: 'smooth'});
	}

	window.onscroll = () => {
	updateLoader();
	}
	updateLoader();
	});

	//home1-banner-slider
	var swiper = new Swiper(".banner-img-slider", {
		slidesPerView: 1,
		speed: 2500,
		spaceBetween: 25,
		effect: 'fade',             // Use the fade effect
		fadeEffect: {
		  crossFade: true,           // Enable cross-fade transition
		},
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".home1-banner-next",
			prevEl: ".home1-banner-prev",
		},
	}); 
	var swiper = new Swiper(".portfolio-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		loop: true,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 3,
			},
		}
	});
	var swiper = new Swiper(".process-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		loop: true,
		navigation: {
			nextEl: ".process-slider-next",
			prevEl: ".process-slider-prev",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 3,
			},
		}
	});
	var swiper = new Swiper(".case-study-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 30,
		loop: true,
		// autoplay: {
		// 	delay: 2500, // Autoplay duration in milliseconds
		// 	disableOnInteraction: false,
		// },
		navigation: {
			nextEl: ".case-study-slider-next",
			prevEl: ".case-study-slider-prev",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 2,
			},
		}
	});
	var swiper = new Swiper(".home1-testimonial-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 30,
		loop: true,
		effect: 'fade',             // Use the fade effect
		fadeEffect: {
		  crossFade: true           // Enable cross-fade transition
		},
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".case-study-slider-next",
			prevEl: ".case-study-slider-prev",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 1,
			},
		}
	});
	var swiper = new Swiper(".home2-process-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 30,
		grabCursor: true,
		// loop: true,
		// autoplay: {
		// 	delay: 2500, // Autoplay duration in milliseconds
		// 	disableOnInteraction: false,
		// },
		navigation: {
			nextEl: ".home2-process-next",
			prevEl: ".home2-process-prev",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 4,
			},
		}
	});
	var swiper = new Swiper(".home2-case-study-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		loop: true,
		// autoplay: {
		// 	delay: 2500, // Autoplay duration in milliseconds
		// 	disableOnInteraction: false,
		// },
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 3,
			},
		}
	});
	var swiper = new Swiper(".home2-testimonial-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 25,
        loop: true,
        effect: 'fade',             // Use the fade effect
		fadeEffect: {
		  crossFade: true           // Enable cross-fade transition
		},
        autoplay: {
         delay: 4000, // Autoplay duration in milliseconds
         disableOnInteraction: false,
        },
        navigation: {
			nextEl: ".next-2",
			prevEl: ".prev-2",
		},
    });
	var swiper = new Swiper(".home3-testimonial-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 30,
		// autoplay: {
		// 	delay: 2500, // Autoplay duration in milliseconds
		// 	disableOnInteraction: false,
		// },
		pagination: {
            el: '.franctional-pagi2',
            type: "fraction",
        },
		navigation: {
			nextEl: ".home3-testimonial-next",
			prevEl: ".home3-testimonial-prev",
		},
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 3,
			},
		}
	});
	var swiper = new Swiper(".home4-teams-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 30,
		// autoplay: {
		// 	delay: 2500, // Autoplay duration in milliseconds
		// 	disableOnInteraction: false,
		// },
		navigation: {
			nextEl: ".home4-team-slider-next",
			prevEl: ".home4-team-slider-prev",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 4,
			},
		}
	});
	var swiper = new Swiper(".partnership-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 30,
		grabCursor: true,
		// autoplay: {
		// 	delay: 2500, // Autoplay duration in milliseconds
		// 	disableOnInteraction: false,
		// },

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 4,
			},
		}
	});
	//wow js 
    jQuery(window).on('load', function () {
        new WOW().init();
        window.wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            offset: 80
        })
        window.wow.init();
    });
	//Quantity Increment
	$(".quantity__minus").on("click", function (e) {
	   e.preventDefault();
	   var input = $(this).siblings(".quantity__input");
	   var value = parseInt(input.val());
	   if (value > 1) {
		 value--;
	   }
	   input.val(value.toString().padStart(2, "0"));
	 });
	 $(".quantity__plus").on("click", function (e) {
	   e.preventDefault();
	   var input = $(this).siblings(".quantity__input");
	   var value = parseInt(input.val());
	   value++;
	   input.val(value.toString().padStart(2, "0"));
	 });

	// ====================
	// Progrees Bar
	// ====================
	var skillPers = document.querySelectorAll(".experience-bar-per");

	skillPers.forEach(function(skillPer) {
	var per = parseFloat(skillPer.getAttribute("data-per"));
	skillPer.style.width = per + "%";
	
	var animatedValue = 0; 
	var startTime = null;
	
	function animate(timestamp) {
		if (!startTime) startTime = timestamp;
		var progress = timestamp - startTime;
		var stepPercentage = progress / 1000; // Dividing by duration in milliseconds (1000ms = 1s)
		
		if (stepPercentage < 1) {
		animatedValue = per * stepPercentage;
		skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
		requestAnimationFrame(animate);
		} else {
		animatedValue = per;
		skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
		}
	}
	requestAnimationFrame(animate);
	}); 

	// services Images
	const serviceImgItem = document.querySelectorAll(".sevices-wrap .single-services ");
	console.log(serviceImgItem);
	function followImageCursor(event, serviceImgItem) {
	  const contentBox = serviceImgItem.getBoundingClientRect();
	  const dx = event.clientX - contentBox.x;
	  const dy = event.clientY - contentBox.y;
	  serviceImgItem.children[2].style.transform = `translate(${dx}px, ${dy}px)`;
	}
  
	serviceImgItem.forEach((item, i) => {
	  item.addEventListener("mousemove", (event) => {
		setInterval(followImageCursor(event, item), 100);
	  });
	});

	const serviceImgItem2 = document.querySelectorAll(".sevices-wrap2 .single-services");
	console.log(serviceImgItem2);
	function followImageCursor(event, serviceImgItem2) {
	  const contentBox = serviceImgItem2.getBoundingClientRect();
	  const dx = event.clientX - contentBox.x;
	  const dy = event.clientY - contentBox.y;
	  serviceImgItem2.children[2].style.transform = `translate(${dx}px, ${dy}px) rotate(12deg)`;
	}
  
	serviceImgItem2.forEach((item, i) => {
	  item.addEventListener("mousemove", (event) => {
		setInterval(followImageCursor(event, item), 100);
	  });
	});

	// Payment Method
	$(function() {
		$('.choose-payment-method ul li').on('click', function() {
		$('.choose-payment-method ul li').removeClass('active'); // Remove active class from all list items
		if ($(this).hasClass('stripe')) {
			$('#StripePayment').show();
			$('#OfflinePayment').hide();
			$(this).addClass('active'); // Add active class to the clicked list item
		}
		else if ($(this).hasClass('paypal')) {
			$('#OfflinePayment').hide();
			$('#StripePayment').hide();
			$(this).addClass('active'); // Add active class to the clicked list item
		}
		else if ($(this).hasClass('offline')) {
			$('#OfflinePayment').show();
			$('#StripePayment').hide();
			$(this).addClass('active'); // Add active class to the clicked list item
		}
		else {
			$('#StripePayment').hide();
			$('#OfflinePayment').hide();
		}
		});
	});

	// Round Text Animation
	const element = document.querySelectorAll(".badge__char");
	const step = 360/element.length;

	

	const foo = (360 / 7);

	// for (let i = 0; i <= 7; i++) {
	// console.log((i * foo) + 'deg');
	// }

	// Button Bounce animation
	let arr1 = gsap.utils.toArray("#btn_wrapper")
	let arr2 = gsap.utils.toArray(".btn_wrapper")
	const all_buttons = arr1.concat(arr2);
	all_buttons.forEach((btn) => {
	if (!(btn.classList.contains("banner-btn"))) {
		gsap.from(btn, {
		scrollTrigger: {
			trigger: btn,
			start: "top center+=150",
			markers: false,
		},
		opacity: 0,
		y: -70,
		ease: "bounce",
		duration: 1.5,
		})
	}
	})

	// Dark Light
	const dayNight = document.querySelector(".tt-style-switch");

	const toggleDarkMode = () => {
	const body = document.body;
	const icon = dayNight.querySelector("i");
	body.classList.toggle("dark");
	
	icon.classList.toggle("bi-brightness-low-fill", body.classList.contains("dark"));
	icon.classList.toggle("bi-moon", !body.classList.contains("dark"));

	localStorage.setItem("zenfy_theme", body.classList.contains("dark") ? "dark" : "");
	};

	dayNight.addEventListener("click", toggleDarkMode);

	window.addEventListener("load", () => {
	const savedTheme = localStorage.getItem("zenfy_theme");
	if (savedTheme === "dark") {
		toggleDarkMode();
	}
	});

    // Slick Slider
	$(".slider").slick({
		infinite: true,
		centerMode: false,
		arrows: false,
		dots: false,
		autoplay: false,
		speed: 800,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,	
		slidesToShow: 1,
		slidesToScroll: 1,
		
	});
	
	//ticking machine
	var percentTime;
	var tick;
	var time = .5;
	var progressBarIndex = 0;
	
	$('.progressBarContainer .progressBar').each(function(index) {
		var progress = "<div class='inProgress inProgress" + index + "'></div>";
		$(this).html(progress);
	});
	
	function startProgressbar() {
		resetProgressbar();
		percentTime = 0;
		tick = setInterval(interval, 10);
	}
	
	function interval() {
		if (($('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
			progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data("slickIndex");
			startProgressbar();
		} else {
			percentTime += 1 / (time + 5);
			$('.inProgress' + progressBarIndex).css({
				width: percentTime + "%"
			});
			if (percentTime >= 100) {
				$('.single-item').slick('slickNext');
				progressBarIndex++;
				if (progressBarIndex > 2) {
					progressBarIndex = 0;
				}
				startProgressbar();
			}
		}
	}
	
	function resetProgressbar() {
		$('.inProgress').css({
			width: 0 + '%'
		});
		clearInterval(tick);
	}
	startProgressbar();

	/* ---------------------------------------------
		Text animation Morphext
	--------------------------------------------- */
	const text_type = document.querySelector('.text-type');
	if(text_type){
		var typing=new Typed(".text-type", {
			strings: ["Digital Marketing", "Email Marketing", "SEO Optimization"],
			typeSpeed: 120,
			backSpeed: 70,
			loop: true,
		});
	}


}(jQuery));


