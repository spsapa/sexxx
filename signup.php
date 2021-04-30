<!DOCTYPE html>
<html lang='ko'>
  <head>
    <meta charset="utf-8">
	  <link rel="preconnect" href="https://fonts.gstatic.com">
	  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
	  <meta name="viewport" content="width=750px">
     <link href="signup.css" rel="stylesheet" type="text/css">
	  <title>로그인</title>
  </head>
  <body>
    <div class="user">
    <header class="user__header">
      <h1 class="user__title">창작의 마당에서 열정적으로 작업해 보세요.</h1>
    </header>
    
    <form class="form form--start" action="signup_action.php">
        <div class="form__group"> <!-- 닉네임 입력란 -->
          <input type="text" placeholder="Username" class="form__input" id="form__username" />
        </div>
        
        <div class="form__group"> <!-- 이메일 입력란 -->
          <input type="email" placeholder="Email" class="form__input" id="form__email" />
        </div>
        
        <div class="form__group"> <!-- 비밀번호 입력란 -->
          <input type="password" placeholder="Password" class="form__input" id="form__passwd" />
        </div>
        
        <button class="btn disabled" type="button">시작하기</button>
      </form>
    </div>
    <script src="signup.js"></script> <!-- 스크립트 -->
  </body>
</html>