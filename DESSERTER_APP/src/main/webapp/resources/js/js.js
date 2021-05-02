$(function () {

	//페이드인 아웃 애니메이션
	var $chBtn = $('.ch-btn'),
		$csBtn = $('.cs-btn'),
		$come = $('.come'),
		$chmainBox = $('.chocolate-main-box'),
		$csmainBox = $('.cheese-main-box'),
		$chgoBtn = $('.ch-go-btn'),
		$csgoBtn = $('.cs-go-btn'),
		$chocolatecakeBox = $('.chocolate-cake-box'),
		$cheesecakeBox = $('.cheese-cake-box'),
		$chocoList = $('.choco-list'),
		$cheeseList = $('.cheese-list'),
		$infoText = $('.info-text'),
		$main = $('.main-inner'),
		$chbackBtn = $('.ch-back-btn'),
		$csbackBtn = $('.cs-back-btn'),
		$chlistbackBtn = $('.ch-list-back-btn'),
		$cslistbackBtn = $('.cs-list-back-btn'),
		$yesBtn = $('.yes'),
		$noBtn = $('.no'),
		$endBtn = $('.end'),
		$ratingStar = $('.rating-star-box'),
		$reviewModal = $('.star-modal-wrap'),
		$reviewEnd = $('.review-end'),
		$choiceEnd = $('.choice-end'),
		$choiceModal = $('.choice-modal-wrap');



	//메뉴클릭->조건창
	$chBtn.click(function () {

		$come.fadeOut(300);
		$cheesecakeBox.fadeOut(100);
		$chocolatecakeBox.fadeOut(100);
		$csmainBox.fadeOut(300);

		$chmainBox.delay(350).fadeIn(300);

		$chocoList.fadeOut(300).removeClass('on')
		$infoText.removeClass('on')
		$cheeseList.fadeOut(300).removeClass('on')
		$infoText.removeClass('on')

		//리셋
		$csmainBox.find('.cp-1').find('.fa-dot-circle').removeClass('on');
		$csmainBox.find('.cp-1').find('.fa-circle').removeClass('on');
		$csmainBox.find('.cp-2').find('.fa-dot-circle').removeClass('on');
		$csmainBox.find('.cp-2').find('.fa-circle').removeClass('on');
		$csmainBox.find('.cp-3').find('.fa-dot-circle').removeClass('on');
		$csmainBox.find('.cp-3').find('.fa-circle').removeClass('on');
		$csmainBox.find('.cp-4').find('.fa-dot-circle').removeClass('on');
		$csmainBox.find('.cp-4').find('.fa-circle').removeClass('on');
		$csmainBox.find('.cp-5').find('.fa-dot-circle').removeClass('on');
		$csmainBox.find('.cp-5').find('.fa-circle').removeClass('on');
		$csmainBox.find('.cp-6').find('.fa-dot-circle').removeClass('on');
		$csmainBox.find('.cp-6').find('.fa-circle').removeClass('on');
		$cheesecakeBox.find('.sw').removeClass('on1')
		$cheesecakeBox.find('.nsw').removeClass('on2')
		$cheesecakeBox.find('.sf').removeClass('on3')
		$cheesecakeBox.find('.nsf').removeClass('on4')
		$cheesecakeBox.find('.cl').removeClass('on5')
		$cheesecakeBox.find('.ncl').removeClass('on6')

		//리셋
		$chmainBox.find('.cp-1').find('.fa-dot-circle').removeClass('on');
		$chmainBox.find('.cp-1').find('.fa-circle').removeClass('on');
		$chmainBox.find('.cp-2').find('.fa-dot-circle').removeClass('on');
		$chmainBox.find('.cp-2').find('.fa-circle').removeClass('on');
		$chmainBox.find('.cp-3').find('.fa-dot-circle').removeClass('on');
		$chmainBox.find('.cp-3').find('.fa-circle').removeClass('on');
		$chmainBox.find('.cp-4').find('.fa-dot-circle').removeClass('on');
		$chmainBox.find('.cp-4').find('.fa-circle').removeClass('on');
		$chmainBox.find('.cp-5').find('.fa-dot-circle').removeClass('on');
		$chmainBox.find('.cp-5').find('.fa-circle').removeClass('on');
		$chmainBox.find('.cp-6').find('.fa-dot-circle').removeClass('on');
		$chmainBox.find('.cp-6').find('.fa-circle').removeClass('on');
		$chocolatecakeBox.find('.sw').removeClass('on1')
		$chocolatecakeBox.find('.nsw').removeClass('on2')
		$chocolatecakeBox.find('.sf').removeClass('on3')
		$chocolatecakeBox.find('.nsf').removeClass('on4')
		$chocolatecakeBox.find('.cl').removeClass('on5')
		$chocolatecakeBox.find('.ncl').removeClass('on6')

		$chocoList.find('.info-text').fadeOut(100)
	});

	$csBtn.click(function () {

		$come.fadeOut(300);
		$chocolatecakeBox.fadeOut(100);
		$cheesecakeBox.fadeOut(100);
		$chmainBox.fadeOut(300);

		$csmainBox.delay(350).fadeIn(300);

		$chocoList.fadeOut(300).removeClass('on')
		$infoText.removeClass('on')
		$cheeseList.fadeOut(300).removeClass('on')
		$infoText.removeClass('on')

		$cheeseList.find('.info-text').fadeOut(100)

		//리셋
		$chmainBox.find('.cp-1').find('.fa-dot-circle').removeClass('on');
		$chmainBox.find('.cp-1').find('.fa-circle').removeClass('on');
		$chmainBox.find('.cp-2').find('.fa-dot-circle').removeClass('on');
		$chmainBox.find('.cp-2').find('.fa-circle').removeClass('on');
		$chmainBox.find('.cp-3').find('.fa-dot-circle').removeClass('on');
		$chmainBox.find('.cp-3').find('.fa-circle').removeClass('on');
		$chmainBox.find('.cp-4').find('.fa-dot-circle').removeClass('on');
		$chmainBox.find('.cp-4').find('.fa-circle').removeClass('on');
		$chmainBox.find('.cp-5').find('.fa-dot-circle').removeClass('on');
		$chmainBox.find('.cp-5').find('.fa-circle').removeClass('on');
		$chmainBox.find('.cp-6').find('.fa-dot-circle').removeClass('on');
		$chmainBox.find('.cp-6').find('.fa-circle').removeClass('on');
		$chocolatecakeBox.find('.sw').removeClass('on1')
		$chocolatecakeBox.find('.nsw').removeClass('on2')
		$chocolatecakeBox.find('.sf').removeClass('on3')
		$chocolatecakeBox.find('.nsf').removeClass('on4')
		$chocolatecakeBox.find('.cl').removeClass('on5')
		$chocolatecakeBox.find('.ncl').removeClass('on6')

		//리셋
		$csmainBox.find('.cp-1').find('.fa-dot-circle').removeClass('on');
		$csmainBox.find('.cp-1').find('.fa-circle').removeClass('on');
		$csmainBox.find('.cp-2').find('.fa-dot-circle').removeClass('on');
		$csmainBox.find('.cp-2').find('.fa-circle').removeClass('on');
		$csmainBox.find('.cp-3').find('.fa-dot-circle').removeClass('on');
		$csmainBox.find('.cp-3').find('.fa-circle').removeClass('on');
		$csmainBox.find('.cp-4').find('.fa-dot-circle').removeClass('on');
		$csmainBox.find('.cp-4').find('.fa-circle').removeClass('on');
		$csmainBox.find('.cp-5').find('.fa-dot-circle').removeClass('on');
		$csmainBox.find('.cp-5').find('.fa-circle').removeClass('on');
		$csmainBox.find('.cp-6').find('.fa-dot-circle').removeClass('on');
		$csmainBox.find('.cp-6').find('.fa-circle').removeClass('on');
		$cheesecakeBox.find('.sw').removeClass('on1')
		$cheesecakeBox.find('.nsw').removeClass('on2')
		$cheesecakeBox.find('.sf').removeClass('on3')
		$cheesecakeBox.find('.nsf').removeClass('on4')
		$cheesecakeBox.find('.cl').removeClass('on5')
		$cheesecakeBox.find('.ncl').removeClass('on6')
	});

	//조건창->케이크 선택창
	$chgoBtn.click(function () {

		$chmainBox.fadeOut(300);

		$chocolatecakeBox.delay(350).fadeIn(300);

	});

	$csgoBtn.click(function () {

		$csmainBox.fadeOut(300);

		$cheesecakeBox.delay(350).fadeIn(300);

	});

	//백버튼 클릭시 케이크선택창 -> 조건창 리셋추가
	$chbackBtn.click(function () {

		$chmainBox.delay(350).fadeIn(300);

		$chocolatecakeBox.fadeOut(300);
		$chocoList.find('.info-text').fadeOut(100)
		//리셋
		$chmainBox.find('.cp-1').find('.fa-dot-circle').removeClass('on');
		$chmainBox.find('.cp-1').find('.fa-circle').removeClass('on');
		$chmainBox.find('.cp-2').find('.fa-dot-circle').removeClass('on');
		$chmainBox.find('.cp-2').find('.fa-circle').removeClass('on');
		$chmainBox.find('.cp-3').find('.fa-dot-circle').removeClass('on');
		$chmainBox.find('.cp-3').find('.fa-circle').removeClass('on');
		$chmainBox.find('.cp-4').find('.fa-dot-circle').removeClass('on');
		$chmainBox.find('.cp-4').find('.fa-circle').removeClass('on');
		$chmainBox.find('.cp-5').find('.fa-dot-circle').removeClass('on');
		$chmainBox.find('.cp-5').find('.fa-circle').removeClass('on');
		$chmainBox.find('.cp-6').find('.fa-dot-circle').removeClass('on');
		$chmainBox.find('.cp-6').find('.fa-circle').removeClass('on');
		$chocolatecakeBox.find('.sw').removeClass('on1')
		$chocolatecakeBox.find('.nsw').removeClass('on2')
		$chocolatecakeBox.find('.sf').removeClass('on3')
		$chocolatecakeBox.find('.nsf').removeClass('on4')
		$chocolatecakeBox.find('.cl').removeClass('on5')
		$chocolatecakeBox.find('.ncl').removeClass('on6')
	});

	$csbackBtn.click(function () {

		$csmainBox.delay(350).fadeIn(300);

		$cheesecakeBox.fadeOut(300);
		$cheeseList.find('.info-text').fadeOut(100)
		//리셋
		$csmainBox.find('.cp-1').find('.fa-dot-circle').removeClass('on');
		$csmainBox.find('.cp-1').find('.fa-circle').removeClass('on');
		$csmainBox.find('.cp-2').find('.fa-dot-circle').removeClass('on');
		$csmainBox.find('.cp-2').find('.fa-circle').removeClass('on');
		$csmainBox.find('.cp-3').find('.fa-dot-circle').removeClass('on');
		$csmainBox.find('.cp-3').find('.fa-circle').removeClass('on');
		$csmainBox.find('.cp-4').find('.fa-dot-circle').removeClass('on');
		$csmainBox.find('.cp-4').find('.fa-circle').removeClass('on');
		$csmainBox.find('.cp-5').find('.fa-dot-circle').removeClass('on');
		$csmainBox.find('.cp-5').find('.fa-circle').removeClass('on');
		$csmainBox.find('.cp-6').find('.fa-dot-circle').removeClass('on');
		$csmainBox.find('.cp-6').find('.fa-circle').removeClass('on');
		$cheesecakeBox.find('.sw').removeClass('on1')
		$cheesecakeBox.find('.nsw').removeClass('on2')
		$cheesecakeBox.find('.sf').removeClass('on3')
		$cheesecakeBox.find('.nsf').removeClass('on4')
		$cheesecakeBox.find('.cl').removeClass('on5')
		$cheesecakeBox.find('.ncl').removeClass('on6')
	});

	//케이크 인포에서 백버튼
	$chlistbackBtn.click(function () {
		$chocoList.fadeOut(300).removeClass('on')
		$infoText.fadeOut(300)

		$chocolatecakeBox.delay(350).fadeIn(300);
	})

	$cslistbackBtn.click(function () {
		$cheeseList.fadeOut(300).removeClass('on')
		$infoText.fadeOut(300)

		$cheesecakeBox.delay(350).fadeIn(300);
	})

	//초코케이크 선택창
	$chmainBox.find('.cp-1').click(function () {
		$chmainBox.find('.cp-1').find('.fa-dot-circle').toggleClass('on')
		$chmainBox.find('.cp-1').find('.fa-circle').toggleClass('on')

		$chmainBox.find('.cp-2').find('.fa-dot-circle').removeClass('on')
		$chmainBox.find('.cp-2').find('.fa-circle').removeClass('on')
	})

	$chmainBox.find('.cp-2').click(function () {
		$chmainBox.find('.cp-2').find('.fa-dot-circle').toggleClass('on')
		$chmainBox.find('.cp-2').find('.fa-circle').toggleClass('on')

		$chmainBox.find('.cp-1').find('.fa-dot-circle').removeClass('on')
		$chmainBox.find('.cp-1').find('.fa-circle').removeClass('on')
	})

	$chmainBox.find('.cp-3').click(function () {
		$chmainBox.find('.cp-3').find('.fa-dot-circle').toggleClass('on')
		$chmainBox.find('.cp-3').find('.fa-circle').toggleClass('on')

		$chmainBox.find('.cp-4').find('.fa-dot-circle').removeClass('on')
		$chmainBox.find('.cp-4').find('.fa-circle').removeClass('on')
	})

	$chmainBox.find('.cp-4').click(function () {
		$chmainBox.find('.cp-4').find('.fa-dot-circle').toggleClass('on')
		$chmainBox.find('.cp-4').find('.fa-circle').toggleClass('on')

		$chmainBox.find('.cp-3').find('.fa-dot-circle').removeClass('on')
		$chmainBox.find('.cp-3').find('.fa-circle').removeClass('on')
	})

	$chmainBox.find('.cp-5').click(function () {
		$chmainBox.find('.cp-5').find('.fa-dot-circle').toggleClass('on')
		$chmainBox.find('.cp-5').find('.fa-circle').toggleClass('on')

		$chmainBox.find('.cp-6').find('.fa-dot-circle').removeClass('on')
		$chmainBox.find('.cp-6').find('.fa-circle').removeClass('on')
	})

	$chmainBox.find('.cp-6').click(function () {
		$chmainBox.find('.cp-6').find('.fa-dot-circle').toggleClass('on')
		$chmainBox.find('.cp-6').find('.fa-circle').toggleClass('on')

		$chmainBox.find('.cp-5').find('.fa-dot-circle').removeClass('on')
		$chmainBox.find('.cp-5').find('.fa-circle').removeClass('on')
	})

	//치즈케이크 선택창
	$csmainBox.find('.cp-1').click(function () {
		$csmainBox.find('.cp-1').find('.fa-dot-circle').toggleClass('on')
		$csmainBox.find('.cp-1').find('.fa-circle').toggleClass('on')

		$csmainBox.find('.cp-2').find('.fa-dot-circle').removeClass('on')
		$csmainBox.find('.cp-2').find('.fa-circle').removeClass('on')
	})

	$csmainBox.find('.cp-2').click(function () {
		$csmainBox.find('.cp-2').find('.fa-dot-circle').toggleClass('on')
		$csmainBox.find('.cp-2').find('.fa-circle').toggleClass('on')

		$csmainBox.find('.cp-1').find('.fa-dot-circle').removeClass('on')
		$csmainBox.find('.cp-1').find('.fa-circle').removeClass('on')
	})

	$csmainBox.find('.cp-3').click(function () {
		$csmainBox.find('.cp-3').find('.fa-dot-circle').toggleClass('on')
		$csmainBox.find('.cp-3').find('.fa-circle').toggleClass('on')

		$csmainBox.find('.cp-4').find('.fa-dot-circle').removeClass('on')
		$csmainBox.find('.cp-4').find('.fa-circle').removeClass('on')
	})

	$csmainBox.find('.cp-4').click(function () {
		$csmainBox.find('.cp-4').find('.fa-dot-circle').toggleClass('on')
		$csmainBox.find('.cp-4').find('.fa-circle').toggleClass('on')

		$csmainBox.find('.cp-3').find('.fa-dot-circle').removeClass('on')
		$csmainBox.find('.cp-3').find('.fa-circle').removeClass('on')
	})

	$csmainBox.find('.cp-5').click(function () {
		$csmainBox.find('.cp-5').find('.fa-dot-circle').toggleClass('on')
		$csmainBox.find('.cp-5').find('.fa-circle').toggleClass('on')

		$csmainBox.find('.cp-6').find('.fa-dot-circle').removeClass('on')
		$csmainBox.find('.cp-6').find('.fa-circle').removeClass('on')
	})

	$csmainBox.find('.cp-6').click(function () {
		$csmainBox.find('.cp-6').find('.fa-dot-circle').toggleClass('on')
		$csmainBox.find('.cp-6').find('.fa-circle').toggleClass('on')

		$csmainBox.find('.cp-5').find('.fa-dot-circle').removeClass('on')
		$csmainBox.find('.cp-5').find('.fa-circle').removeClass('on')
	})











	//초코케이크 선택 에니메이션
	$chmainBox.find('.cp-1').click(function () {
		$chocolatecakeBox.find('.sw').toggleClass('on1')
		$chocolatecakeBox.find('.nsw').removeClass('on2')
	})

	$chmainBox.find('.cp-2').click(function () {
		$chocolatecakeBox.find('.nsw').toggleClass('on2')
		$chocolatecakeBox.find('.sw').removeClass('on1')
	})

	$chmainBox.find('.cp-3').click(function () {
		$chocolatecakeBox.find('.sf').toggleClass('on3')
		$chocolatecakeBox.find('.nsf').removeClass('on4')
	})

	$chmainBox.find('.cp-4').click(function () {
		$chocolatecakeBox.find('.nsf').toggleClass('on4')
		$chocolatecakeBox.find('.sf').removeClass('on3')
	})

	$chmainBox.find('.cp-5').click(function () {
		$chocolatecakeBox.find('.cl').toggleClass('on5')
		$chocolatecakeBox.find('.ncl').removeClass('on6')
	})

	$chmainBox.find('.cp-6').click(function () {
		$chocolatecakeBox.find('.ncl').toggleClass('on6')
		$chocolatecakeBox.find('.cl').removeClass('on5')
	})

	//치즈케이크 선택 에니메이션
	$csmainBox.find('.cp-1').click(function () {
		$cheesecakeBox.find('.sw').toggleClass('on1')
		$cheesecakeBox.find('.nsw').removeClass('on2')
	})

	$csmainBox.find('.cp-2').click(function () {
		$cheesecakeBox.find('.nsw').toggleClass('on2')
		$cheesecakeBox.find('.sw').removeClass('on1')
	})

	$csmainBox.find('.cp-3').click(function () {
		$cheesecakeBox.find('.sf').toggleClass('on3')
		$cheesecakeBox.find('.nsf').removeClass('on4')
	})

	$csmainBox.find('.cp-4').click(function () {
		$cheesecakeBox.find('.nsf').toggleClass('on4')
		$cheesecakeBox.find('.sf').removeClass('on3')
	})

	$csmainBox.find('.cp-5').click(function () {
		$cheesecakeBox.find('.cl').toggleClass('on5')
		$cheesecakeBox.find('.ncl').removeClass('on6')
	})

	$csmainBox.find('.cp-6').click(function () {
		$cheesecakeBox.find('.ncl').toggleClass('on6')
		$cheesecakeBox.find('.cl').removeClass('on5')
	})



	// 초코케이크 -> 상세내용
	$chocolatecakeBox.find('.cake').eq(0).click(function () {
		$chocolatecakeBox.fadeOut(100)

		$chocoList.delay(300).fadeIn(300)
		$chocoList.find('.info-text').eq(0).delay(300).fadeIn(300)
	})

	$chocolatecakeBox.find('.cake').eq(1).click(function () {
		$chocolatecakeBox.fadeOut(100)

		$chocoList.delay(300).fadeIn(300)
		$chocoList.find('.info-text').eq(1).delay(300).fadeIn(300)
	})

	$chocolatecakeBox.find('.cake').eq(2).click(function () {
		$chocolatecakeBox.fadeOut(100)

		$chocoList.delay(300).fadeIn(300)
		$chocoList.find('.info-text').eq(2).delay(300).fadeIn(300)
	})

	$chocolatecakeBox.find('.cake').eq(3).click(function () {
		$chocolatecakeBox.fadeOut(100)

		$chocoList.delay(300).fadeIn(300)
		$chocoList.find('.info-text').eq(3).delay(300).fadeIn(300)
	})

	$chocolatecakeBox.find('.cake').eq(4).click(function () {
		$chocolatecakeBox.fadeOut(100)

		$chocoList.delay(300).fadeIn(300)
		$chocoList.find('.info-text').eq(4).delay(300).fadeIn(300)
	})

	$chocolatecakeBox.find('.cake').eq(5).click(function () {
		$chocolatecakeBox.fadeOut(100)

		$chocoList.delay(300).fadeIn(300)
		$chocoList.find('.info-text').eq(5).delay(300).fadeIn(300)
	})

	$chocolatecakeBox.find('.cake').eq(6).click(function () {
		$chocolatecakeBox.fadeOut(100)

		$chocoList.delay(300).fadeIn(300)
		$chocoList.find('.info-text').eq(6).delay(300).fadeIn(300)
	})

	$chocolatecakeBox.find('.cake').eq(7).click(function () {
		$chocolatecakeBox.fadeOut(100)

		$chocoList.delay(300).fadeIn(300)
		$chocoList.find('.info-text').eq(7).delay(300).fadeIn(300)
	})

	$chocolatecakeBox.find('.cake').eq(8).click(function () {
		$chocolatecakeBox.fadeOut(100)

		$chocoList.delay(300).fadeIn(300)
		$chocoList.find('.info-text').eq(8).delay(300).fadeIn(300)
	})

	$chocolatecakeBox.find('.cake').eq(9).click(function () {
		$chocolatecakeBox.fadeOut(100)

		$chocoList.delay(300).fadeIn(300)
		$chocoList.find('.info-text').eq(9).delay(300).fadeIn(300)
	})

	$chocolatecakeBox.find('.cake').eq(10).click(function () {
		$chocolatecakeBox.fadeOut(100)

		$chocoList.delay(300).fadeIn(300)
		$chocoList.find('.info-text').eq(10).delay(300).fadeIn(300)
	})

	$chocolatecakeBox.find('.cake').eq(11).click(function () {
		$chocolatecakeBox.fadeOut(100)

		$chocoList.delay(300).fadeIn(300)
		$chocoList.find('.info-text').eq(11).delay(300).fadeIn(300)
	})

	$chocolatecakeBox.find('.cake').eq(12).click(function () {
		$chocolatecakeBox.fadeOut(100)

		$chocoList.delay(300).fadeIn(300)
		$chocoList.find('.info-text').eq(12).delay(300).fadeIn(300)
	})

	$chocolatecakeBox.find('.cake').eq(13).click(function () {
		$chocolatecakeBox.fadeOut(100)

		$chocoList.delay(300).fadeIn(300)
		$chocoList.find('.info-text').eq(13).delay(300).fadeIn(300)
	})
	// 치즈케이크 -> 상세내용
	$cheesecakeBox.find('.cake').eq(0).click(function () {
		$cheesecakeBox.fadeOut(100)

		$cheeseList.delay(300).fadeIn(300)
		$cheeseList.find('.info-text').eq(0).delay(300).fadeIn(300)
	})

	$cheesecakeBox.find('.cake').eq(1).click(function () {
		$cheesecakeBox.fadeOut(100)

		$cheeseList.delay(300).fadeIn(300)
		$cheeseList.find('.info-text').eq(1).delay(300).fadeIn(300)
	})

	$cheesecakeBox.find('.cake').eq(2).click(function () {
		$cheesecakeBox.fadeOut(100)

		$cheeseList.delay(300).fadeIn(300)
		$cheeseList.find('.info-text').eq(2).delay(300).fadeIn(300)
	})

	$cheesecakeBox.find('.cake').eq(3).click(function () {
		$cheesecakeBox.fadeOut(100)

		$cheeseList.delay(300).fadeIn(300)
		$cheeseList.find('.info-text').eq(3).delay(300).fadeIn(300)
	})

	$cheesecakeBox.find('.cake').eq(4).click(function () {
		$cheesecakeBox.fadeOut(100)

		$cheeseList.delay(300).fadeIn(300)
		$cheeseList.find('.info-text').eq(4).delay(300).fadeIn(300)
	})

	$cheesecakeBox.find('.cake').eq(5).click(function () {
		$cheesecakeBox.fadeOut(100)

		$cheeseList.delay(300).fadeIn(300)
		$cheeseList.find('.info-text').eq(5).delay(300).fadeIn(300)
	})

	$cheesecakeBox.find('.cake').eq(6).click(function () {
		$cheesecakeBox.fadeOut(100)

		$cheeseList.delay(300).fadeIn(300)
		$cheeseList.find('.info-text').eq(6).delay(300).fadeIn(300)
	})

	$cheesecakeBox.find('.cake').eq(7).click(function () {
		$cheesecakeBox.fadeOut(100)

		$cheeseList.delay(300).fadeIn(300)
		$cheeseList.find('.info-text').eq(7).delay(300).fadeIn(300)
	})

	$cheesecakeBox.find('.cake').eq(8).click(function () {
		$cheesecakeBox.fadeOut(100)

		$cheeseList.delay(300).fadeIn(300)
		$cheeseList.find('.info-text').eq(8).delay(300).fadeIn(300)
	})

	$cheesecakeBox.find('.cake').eq(9).click(function () {
		$cheesecakeBox.fadeOut(100)

		$cheeseList.delay(300).fadeIn(300)
		$cheeseList.find('.info-text').eq(9).delay(300).fadeIn(300)
	})

	$cheesecakeBox.find('.cake').eq(10).click(function () {
		$cheesecakeBox.fadeOut(100)

		$cheeseList.delay(300).fadeIn(300)
		$cheeseList.find('.info-text').eq(10).delay(300).fadeIn(300)
	})

	$cheesecakeBox.find('.cake').eq(11).click(function () {
		$cheesecakeBox.fadeOut(100)

		$cheeseList.delay(300).fadeIn(300)
		$cheeseList.find('.info-text').eq(11).delay(300).fadeIn(300)
	})

	$cheesecakeBox.find('.cake').eq(12).click(function () {
		$cheesecakeBox.fadeOut(100)

		$cheeseList.delay(300).fadeIn(300)
		$cheeseList.find('.info-text').eq(12).delay(300).fadeIn(300)
	})

	$cheesecakeBox.find('.cake').eq(13).click(function () {
		$cheesecakeBox.fadeOut(100)

		$cheeseList.delay(300).fadeIn(300)
		$cheeseList.find('.info-text').eq(13).delay(300).fadeIn(300)
	})

	$cheesecakeBox.find('.cake').eq(14).click(function () {
		$cheesecakeBox.fadeOut(100)

		$cheeseList.delay(300).fadeIn(300)
		$cheeseList.find('.info-text').eq(14).delay(300).fadeIn(300)
	})

	$cheesecakeBox.find('.cake').eq(15).click(function () {
		$cheesecakeBox.fadeOut(100)

		$cheeseList.delay(300).fadeIn(300)
		$cheeseList.find('.info-text').eq(15).delay(300).fadeIn(300)
	})

	$cheesecakeBox.find('.cake').eq(16).click(function () {
		$cheesecakeBox.fadeOut(100)

		$cheeseList.delay(300).fadeIn(300)
		$cheeseList.find('.info-text').eq(16).delay(300).fadeIn(300)
	})


	/*리뷰 모달창*/
	$yesBtn.click(function () {
		$yesBtn.addClass('on');
		$endBtn.eq(0).addClass('on');

		$noBtn.removeClass('on');
		$endBtn.eq(1).removeClass('on');
	})

	$noBtn.click(function () {
		$noBtn.addClass('on');
		$endBtn.eq(1).addClass('on');
		$choiceModal.fadeIn();

		$yesBtn.removeClass('on');
		$endBtn.eq(0).removeClass('on');
	})

	$ratingStar.click(function () {
		$reviewModal.fadeIn()
	})

	$reviewEnd.click(function () {
		$reviewModal.fadeOut();
	})

	$choiceEnd.click(function () {
		$choiceModal.fadeOut();
	})


	//초코케이크 선택창
	$choiceModal.find('.cp-1').click(function () {
		$choiceModal.find('.cp-1').find('.fa-dot-circle').toggleClass('on')
		$choiceModal.find('.cp-1').find('.fa-circle').toggleClass('on')

		$choiceModal.find('.cp-2').find('.fa-dot-circle').removeClass('on')
		$choiceModal.find('.cp-2').find('.fa-circle').removeClass('on')
	})

	$choiceModal.find('.cp-2').click(function () {
		$choiceModal.find('.cp-2').find('.fa-dot-circle').toggleClass('on')
		$choiceModal.find('.cp-2').find('.fa-circle').toggleClass('on')

		$choiceModal.find('.cp-1').find('.fa-dot-circle').removeClass('on')
		$choiceModal.find('.cp-1').find('.fa-circle').removeClass('on')
	})

	$choiceModal.find('.cp-3').click(function () {
		$choiceModal.find('.cp-3').find('.fa-dot-circle').toggleClass('on')
		$choiceModal.find('.cp-3').find('.fa-circle').toggleClass('on')

		$choiceModal.find('.cp-4').find('.fa-dot-circle').removeClass('on')
		$choiceModal.find('.cp-4').find('.fa-circle').removeClass('on')
	})

	$choiceModal.find('.cp-4').click(function () {
		$choiceModal.find('.cp-4').find('.fa-dot-circle').toggleClass('on')
		$choiceModal.find('.cp-4').find('.fa-circle').toggleClass('on')

		$choiceModal.find('.cp-3').find('.fa-dot-circle').removeClass('on')
		$choiceModal.find('.cp-3').find('.fa-circle').removeClass('on')
	})

	$choiceModal.find('.cp-5').click(function () {
		$choiceModal.find('.cp-5').find('.fa-dot-circle').toggleClass('on')
		$choiceModal.find('.cp-5').find('.fa-circle').toggleClass('on')

		$choiceModal.find('.cp-6').find('.fa-dot-circle').removeClass('on')
		$choiceModal.find('.cp-6').find('.fa-circle').removeClass('on')
	})

	$choiceModal.find('.cp-6').click(function () {
		$choiceModal.find('.cp-6').find('.fa-dot-circle').toggleClass('on')
		$choiceModal.find('.cp-6').find('.fa-circle').toggleClass('on')

		$choiceModal.find('.cp-5').find('.fa-dot-circle').removeClass('on')
		$choiceModal.find('.cp-5').find('.fa-circle').removeClass('on')
	})
});