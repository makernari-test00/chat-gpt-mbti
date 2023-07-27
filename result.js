// 페이지 로드될 때 실행되는 함수
window.onload = function () {
  // 로컬스토리지에서 "mbti_result" 값을 가져오기
  const mbtiResult = localStorage.getItem('mbti_result');

  // 결과를 표시할 요소 가져오기
  const resultElement = document.getElementById('result');

  // 결과가 있을 경우 해당 결과를 텍스트로 표시
  if (mbtiResult) {
    resultElement.textContent = `당신의 MBTI는 ${mbtiResult}입니다!`;
  } else {
    // 결과가 없을 경우 "아직 테스트를 진행하지 않았습니다!" 텍스트 표시
    resultElement.textContent = '아직 테스트를 진행하지 않았습니다!';
  }

  // "테스트 하러 가기"로 버튼 텍스트 변경
  const restartButton = document.getElementById('restart-button');
  restartButton.textContent = '테스트 하러 가기';
  restartButton.onclick = function () {
    // index.html 페이지로 이동하기
    window.location.href = './index.html';
  };
};
