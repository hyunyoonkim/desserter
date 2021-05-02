<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<html>
<head>

<script
	src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../resources/css/common.css">
    <link rel="stylesheet" href="../resources/css/register.css">
    <style>
        
    </style>
    <title>desserter.</title>
</head>
<script type="text/javascript">
	/* $(document).ready(function() {
		// 취소
		$(".cancle").on("click", function() {
			location.href = "/";
		})

		$("#submit").on("click", function() {
			if ($("#userId").val() == "") {
				alert("아이디를 입력해주세요.");
				$("#userId").focus();
				return false;
			}
			if ($("#userPass").val() == "") {
				alert("비밀번호를 입력해주세요.");
				$("#userPass").focus();
				return false;
			}
			if ($("#userName").val() == "") {
				alert("성명을 입력해주세요.");
				$("#userName").focus();
				return false;
			}
			var idChkVal = $("#idChk").val();
			if (idChkVal == "N") {
				alert("중복확인 버튼을 눌러주세요.");
			} else if (idChkVal == "Y") {
				$("#regForm").submit();
			}
		});
	}) */

	function fn_idChk() {
		$.ajax({
			url : "/member/idChk",
			type : "post",
			dataType : "json",
			data : {
				"userId" : $("#userId").val()
			},
			success : function(data) {
				if (data == 1) {
					alert("중복된 아이디입니다.");
				} else if (data == 0) {
					$("#idChk").attr("value", "Y");
					alert("사용가능한 아이디입니다.");
				}
			}
		})
	}
</script>
<body>

	<!-- header -->
	<div id="header">
		<h1 style="position: inherit;">
			<a href="/" target="_blank" class="logo">desserter</a><i
				class="main-color">.</i></a>
		</h1>
	</div>

	<!-- wrapper -->
	<div id="wrapper">

		<!-- content-->
		<div id="content">

			<form action="/member/register" method="post" id="regForm">
			
				<!-- ID -->
				<div class=" ">
					<h3 class="join_title">
                    	<label for="userId">아이디</label>
                	</h3>
                	<span class="box int_id">
                		<input class="int" type="text" id="userId" name="userId"  maxlength="20"/>
                	</span>
                	<span class="error_next_box"></span>
					<button class="idChk" type="button" id="idChk" onclick="fn_idChk();" value="N">중복확인</button>
				</div>
				
				 <!-- PW1 -->
            	<div>
                	<h3 class="join_title">
                		<label for="userPass">비밀번호</label>
                	</h3>
                	<span class="box int_pass">
						<input class="int" type="password" id="userPass" name="userPass" maxlength="20"/>
						<span id="alertTxt">사용불가</span>
					</span>
					<span class="error_next_box"></span>
				</div>
				
				<!-- PW2 -->
	            <div>
	                <h3 class="join_title">
	                	<label for="pswd2">비밀번호 재확인</label>
	                </h3>
	                <span class="box int_pass_check">
	                    <input type="password" id="pswd2" class="int" maxlength="20">
	                </span>
	                <span class="error_next_box"></span>
	            </div>
				
				<!-- NAME -->
	            <div>
	                <h3 class="join_title">
	                	<label for="userName">이름</label>
	                </h3>
	                <span class="box int_name">
	                	<input class="int" type="text" maxlength="20" id="userName" name="userName" />
	                </span>
	                <span class="error_next_box"></span>
	            </div>
				
				<!-- BIRTH -->
	            <div>
	                <h3 class="join_title"><label for="yy">생년월일</label></h3>
	
	                <div id="bir_wrap">
	                    <!-- BIRTH_YY -->
	                    <div id="bir_yy">
	                        <span class="box">
	                            <input type="text" id="yy" class="int" maxlength="4" placeholder="년(4자)">
	                        </span>
	                    </div>
	
	                    <!-- BIRTH_MM -->
	                    <div id="bir_mm">
	                        <span class="box">
	                            <select id="mm" class="sel">
	                                <option>월</option>
	                                <option value="01">1</option>
	                                <option value="02">2</option>
	                                <option value="03">3</option>
	                                <option value="04">4</option>
	                                <option value="05">5</option>
	                                <option value="06">6</option>
	                                <option value="07">7</option>
	                                <option value="08">8</option>
	                                <option value="09">9</option>
	                                <option value="10">10</option>
	                                <option value="11">11</option>
	                                <option value="12">12</option>
	                            </select>
	                        </span>
	                    </div>
	
	                    <!-- BIRTH_DD -->
	                    <div id="bir_dd">
	                        <span class="box">
	                            <input type="text" id="dd" class="int" maxlength="2" placeholder="일" value="">
	                        </span>
	                    </div>
	                    
	                    <input type="hidden" id="userBirth" name="userBirth" />
	
	                </div>
	                <span class="error_next_box"></span>
	            </div>
	            
	            <!-- GENDER -->
	            <div class="gender-box">
	                <h3 class="join_title">
	                	<label for="userGender">성별</label>
	                </h3>
	                <span class="box gender_code">
	                    <select id="userGender" class="sel" name="userGender">
	                        <option>성별</option>
	                        <option value="M">남자</option>
	                        <option value="F">여자</option>
	                    </select>
	                </span>
	                <span class="error_next_box">필수 정보입니다.</span>
	            </div>
	            
	            <!-- JOIN BTN-->
	            <div class="btn_area">
	                <button type="submit" id="btnJoin submit">
	                    <span>가입하기</span>
	                </button>
	            </div>
			</form>

		</div>
		<!-- content-->
	</div>
	<!-- wrapper -->
	<!-- script -->
    <script src="../resources/js/register.js"></script>
</body>

</html>