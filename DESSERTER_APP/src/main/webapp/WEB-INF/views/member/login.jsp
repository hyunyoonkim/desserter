<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page language="java" pageEncoding="UTF-8"contentType="text/html; charset=UTF-8"%>

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../resources/css/common.css">
  <link rel="stylesheet" href="../resources/css/login.css">
  <title>desserter.</title>
</head>
<script type="text/javascript">
	/* $(document).ready(function() {
		$("#logoutBtn").on("click", function() {
			location.href = "member/logout";
		})
	 	$("#registerBtn").on("click", function() {
			location.href = "member/register";
		})
 
		$("#memberUpdateBtn").on("click", function() {
			location.href = "member/memberUpdateView";
		})

	}) */
</script>
<body>
	<form action="/member/login" method="post" class="loginForm">
		<c:if test="${member == null}">
		    <h2><a href="index" style="font-size: 32px;font-family: Gil;">desserter<i
		          style="font-size: 32px;font-family: Gil; color: red;">.</i></a></h2>
		    <h2>Login</h2>
		    <div class="idForm">
		      <input type="text" id="userId" name="userId" class="id" placeholder="ID">
		    </div>
		    <div class="passForm">
		      <input type="password" class="pw" placeholder="PW" id="userPass" name="userPass">
		    </div>
			<button type="submit" class="btn">LOG IN</button>
			<div class="bottomText">
				ID가 없으신가요? <a href="../member/register" style="font-size: 15px;"> 회원가입</a>
			</div>	
	    </c:if>
	    <c:if test="${member != null }">
			<div>
				<p>${member.userId}님환영 합니다.</p>
				<a href="../member/memberUpdateView" style="font-size: 15px;"> 회원정보수정</a>
				<a href="../member/logout" style="font-size: 15px;"> 로그아웃</a>
			</div>
		</c:if>
		<c:if test="${msg == false}">
			<p style="color: red;">로그인 실패! 아이디와 비밀번호 확인해주세요.</p>
		</c:if>
  	</form>
</body>
</html>