<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>profile</title>
  <link rel="stylesheet" href="../resources/css/profile.css">
<script type="text/javascript">
function fnSubmit() {
	if(confirm("정말 수정하시겠습니까?")) {
		return true;
	}
	return false;
}
</script>
</head>
<body>
<div class="pro-box">
	<h3>회원정보 수정</h3>
	<form action="memberUpdateAction.me" method="post" onsubmit="fnSubmit()">
	<input type="hidden" name="member_id" value="" />
		<table>
			<tr>
				<th>아이디</th>
				<td>회원아이디</td>
			</tr>
			<tr>
				<th>비밀번호</th>
				<td><input type="password" name="member_pw" value="" /></td>
			</tr>
			<tr>
				<th>이름</th>
				<td><input type="text" name="member_name" value="" /></td>
			</tr>
			<tr>
				<th>생년월일</th>
				<td><input type="text" name="member_age" value="" /></td>
			</tr>
			<tr>
				<th>성별</th>
				<td>
					<input type="radio" name="member_gender" value="남" />남자
					<input type="radio" name="member_gender" value="여" />여자
				</td>
			</tr>
			<tr>
				<td colspan="2">
					<input class="btn" type="submit" value="수정하기" />
					<input class="btn" type="reset" value="초기화하기" />
				</td>
			</tr>
		</table>
	</form>
</div>
</body>
</html>