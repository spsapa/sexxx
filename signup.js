const username = document.getElementById('form__username'); // 닉네임 오브젝트
const email = document.getElementById('form__email'); // 이메일 오브젝트
const passwd = document.getElementById('form__passwd'); // 비밀번호 오브젝트
const button = document.querySelector('.btn'); // 버튼 오브젝트
const form   = document.querySelector('.form'); // 폼 오브젝트

function checkInformations() {
  // 이메일 정규 표현식
  const email_regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g
  // ` 이 줄은 인식되지 않ㅅㅂ니다.
  let username_ok = false;
  let email_ok = false;
  let passwd_ok = false;

  if (username.value.length >= 10) username_ok = true; // 닉네임 확인
  if (email.value.match(email_regex)) email_ok = true; // 이메일 확인
  if (passwd.value.length >= 8 && passwd.value.length <= 20) passwd_ok = true; // 비밀번호 확인

  if (username_ok && email_ok && passwd_ok) button.classList.remove('disabled'); // 버튼 활성화
  else button.classList.add('disabled'); // 버튼 비활성화
}

setTimeout(() => {
  form.classList.remove('form--start'); // 시작 애니메이션 시작
}, 1900); // 1900 밀리초, 1.9초

button_event = button.addEventListener('click', function() { // 버튼 클릭 시
  if (button.classList.contains('disabled')) {
    if (!form.classList.contains('form--no')) {
      form.classList.add('form--no'); // 애니메이션 실행
   
      setTimeout(() => {
        form.classList.remove('form--no'); // 애니메이션 끝
      }, 1000); // 1000 밀리초, 1초
    }
  } else {
    alert("이제 가입 만들자");
  }
});

username_event = username.addEventListener('change', checkInformations); // 닉네임이 바뀔 시
email_event = email.addEventListener('change', checkInformations); // 이메일이 바뀔 시
passwd_event = passwd.addEventListener('change', checkInformations); // 비밀번호가 바뀔 시