<?php $path = $_SERVER['REQUEST_URI'] ?>
<header role='banner'>
	<h1 class='logo'><a href='/'>HOME</a></h1>
  <div class='left header_link'>
    <?php if ($path != "/introduction.php") echo "<a href='/introduction.php' class='ss'>사용방법</a>"; ?>
		<?php if ($path != "/request.php") echo "<a href='/request.php' class='ss'>커미션 신청하기</a>"; ?>
  	<a href='https://github.com/spsapa/commissionmakesite' class="ss" target='_blank' >깃허브</a>
	  <a href='https://docs.google.com/forms/d/16EkTBkXL5Hy8fZ_0tJPfQueiI7jbtFwbQO8f9Jo_REk/edit?usp=sharing' class="ss" target=_blank >고객센터</a>
  </div>
  <div class='right header_link'>
    <a href='/signup.php' class='ss'>로그인</a>
  </div>
</header>