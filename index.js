const questions = [
  {
    id: 1,
    text: "탐험을 즐기며 모험가로서의 삶을 간직하고 싶다고 느낀다면, 알라딘과 함께 트레져 헌트를 떠날까요?",
    yes: "E",
    no: "I",
    img: "https://source.unsplash.com/1600x900/?aladdin",
  },
  {
    id: 2,
    text: "자신만의 고유한 마법력과 특별한 능력을 발견하고 싶다고 느낀다면, 할로윈 날의 잭 스켈링턴을 만나러 갈까요?",
    yes: "I",
    no: "E",
    img: "https://source.unsplash.com/1600x900/?halloween",
  },
  {
    id: 3,
    text: "자연과 동물들과 함께 평온한 시간을 보내고 싶다고 느낀다면, 멀라나와 함께 숲속으로 모험을 떠날까요?",
    yes: "E",
    no: "I",
    img: "https://source.unsplash.com/1600x900/?mulan",
  },
  {
    id: 4,
    text: "마법과 희망의 나라에서 황홀한 시간을 보내고 싶다고 느낀다면, 오즈의 마법사와 함께 찾아갈까요?",
    yes: "I",
    no: "E",
    img: "https://source.unsplash.com/1600x900/?wizard",
  },
  {
    id: 5,
    text: "마법의 숲과 신비로운 동화 세계에 빠져들고 싶다고 느낀다면, 팅커벨과 함께 Neverland로 떠날까요?",
    yes: "E",
    no: "I",
    img: "https://source.unsplash.com/1600x900/?tinkerbell",
  },
  {
    id: 6,
    text: "순수하고 아름다운 사랑을 꿈꾸며 로맨틱한 이야기를 만들고 싶다고 느낀다면, 신데렐라의 공주가 될 수 있다고 믿을까요?",
    yes: "I",
    no: "E",
    img: "https://source.unsplash.com/1600x900/?cinderella",
  },
  {
    id: 7,
    text: "영원한 젊음과 아름다움을 원한다면, 동화 속의 슬리핀 뷰티와 함께 할 수 있는 기회를 찾아갈까요?",
    yes: "F",
    no: "T",
    img: "https://source.unsplash.com/1600x900/?sleeping-beauty",
  },
  {
    id: 8,
    text: "높은 산꼭대기에서 흥겨운 음악과 노래를 즐기고 싶다면, 라이온 킹의 신선한 바람을 만나러 갈까요?",
    yes: "F",
    no: "T",
    img: "https://source.unsplash.com/1600x900/?lion-king",
  },
  {
    id: 9,
    text: "자신의 목표를 위해 열정적으로 노력하고 성공하고 싶다면, 미녀와 야수의 로맨틱한 이야기에 참여할까요?",
    yes: "J",
    no: "P",
    img: "https://source.unsplash.com/1600x900/?beauty-and-the-beast",
  },
  {
    id: 10,
    text: "판단 없이 자유롭게 즐길 줄 아는 라이프 스타일을 즐기고 싶다고 느낀다면, 앨리스의 이상한 나라로 떠날까요?",
    yes: "P",
    no: "J",
    img: "https://source.unsplash.com/1600x900/?alice-in-wonderland",
  },
  {
    id: 11,
    text: "낯선 사람들과 친구가 되는 것보다 가족과 가까운 친구들과 함께 시간을 보내는 것이 더 행복하다고 느낀다면, 라푼젤과 함께 탑으로 오르실까요?",
    yes: "I",
    no: "E",
    img: "https://source.unsplash.com/1600x900/?rapunzel",
  },
  {
    id: 12,
    text: "이상적인 사랑과 로맨스를 꿈꾸며 무뎌진 일상에서 벗어나고 싶다면, 인어공주와 함께 바다로 떠날까요?",
    yes: "F",
    no: "T",
    img: "https://source.unsplash.com/1600x900/?ariel",
  },
  {
    id: 13,
    text: "창의적인 아이디어와 신기한 모험을 즐기고 싶다고 느낀다면, 니모와 함께 아기상어를 찾아 떠날까요?",
    yes: "E",
    no: "I",
    img: "https://source.unsplash.com/1600x900/?finding-nemo",
  },
  {
    id: 14,
    text: "공주님처럼 우아하고 아름다운 모습으로 모든 이들의 호감을 얻고 싶다면, 신데렐라의 유리구두를 찾으러 갈까요?",
    yes: "I",
    no: "E",
    img: "https://source.unsplash.com/1600x900/?glass-slipper",
  },
  {
    id: 15,
    text: "자유롭고 모험적인 정신으로 살며느니, 피터 팬과 함께 네버랜드에서 행복한 유년 시절을 보낼까요?",
    yes: "P",
    no: "J",
    img: "https://source.unsplash.com/1600x900/?peter-pan",
  },
  {
    id: 16,
    text: "영원한 아이처럼 마음 속으로 항상 어린아이가 되고 싶다면, 백설공주의 사과를 먹으러 가실까요?",
    yes: "P",
    no: "J",
    img: "https://source.unsplash.com/1600x900/?snow-white",
  },
  {
    id: 17,
    text: "좋아하는 것을 즐기며 여유로운 시간을 보내고 싶다고 느낀다면, 달마시안과 함께 놀이공원에 놀러갈까요?",
    yes: "E",
    no: "I",
    img: "https://source.unsplash.com/1600x900/?dalmatians",
  },
  {
    id: 18,
    text: "자연과 동물들과 친밀하게 소통하고 싶다면, 라이온 킹의 심바와 함께 사바나로 떠날까요?",
    yes: "E",
    no: "I",
    img: "https://source.unsplash.com/1600x900/?simba",
  },
  {
    id: 19,
    text: "자신의 꿈과 열정을 발견하고 싶다고 느낀다면, 라푼젤의 머리카락으로 새로운 모험을 시작할까요?",
    yes: "I",
    no: "E",
    img: "https://source.unsplash.com/1600x900/?rapunzel",
  },
  {
    id: 20,
    text: "자신의 목표와 가치를 지켜나가고 싶다면, 명석한 지성을 지닌 벨과 함께 서점으로 떠날까요?",
    yes: "J",
    no: "P",
    img: "https://source.unsplash.com/1600x900/?belle",
  },
];

// 현재 보여지는 질문의 인덱스
let currentQuestionIndex = 0;

// 각 질문에 대한 답변을 저장하는 배열
const answers = [];

// "예" 버튼 클릭 시 실행되는 함수
function onYesButtonClick() {
  // 현재 질문에 대한 답변을 answers 배열에 저장
  answers[currentQuestionIndex] = questions[currentQuestionIndex].yes;

  // 다음 질문으로 이동
  currentQuestionIndex++;

  // 마지막 질문일 경우 결과 페이지로 이동
  if (currentQuestionIndex === questions.length) {
    calculateResult();
    return;
  }

  // 다음 질문으로 이동한 후, 해당 질문을 보여줌
  const nextQuestion = questions[currentQuestionIndex];
  const questionElement = document.getElementById('question');
  const questionNumberElement = document.getElementById('question-number');
  const questionImageElement = document.getElementById('question-img');

  questionElement.textContent = nextQuestion.text;
  questionNumberElement.textContent = `질문 ${currentQuestionIndex + 1}`;
  questionImageElement.setAttribute('src', nextQuestion.img);
}

// "아니오" 버튼 클릭 시 실행되는 함수
function onNoButtonClick() {
  // 현재 질문에 대한 답변을 answers 배열에 저장
  answers[currentQuestionIndex] = questions[currentQuestionIndex].no;

  // 다음 질문으로 이동
  currentQuestionIndex++;

  // 마지막 질문일 경우 결과 페이지로 이동
  if (currentQuestionIndex === questions.length) {
    calculateResult();
    return;
  }

  // 다음 질문으로 이동한 후, 해당 질문을 보여줌
  const nextQuestion = questions[currentQuestionIndex];
  const questionElement = document.getElementById('question');
  const questionNumberElement = document.getElementById('question-number');
  const questionImageElement = document.getElementById('question-img');

  questionElement.textContent = nextQuestion.text;
  questionNumberElement.textContent = `질문 ${currentQuestionIndex + 1}`;
  questionImageElement.setAttribute('src', nextQuestion.img);
}

// 페이지 로드 시, 첫 번째 질문을 보여줌
const firstQuestion = questions[0];
const questionElement = document.getElementById('question');
const questionNumberElement = document.getElementById('question-number');
const questionImageElement = document.getElementById('question-img');

questionElement.textContent = firstQuestion.text;
questionNumberElement.textContent = `질문 ${currentQuestionIndex + 1}`;
questionImageElement.setAttribute('src', firstQuestion.img);

// "예" 버튼과 "아니오" 버튼에 이벤트 부여
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

yesButton.addEventListener('click', onYesButtonClick);
noButton.addEventListener('click', onNoButtonClick);

function calculateResult() {
  // MBTI 지표별 응답 개수를 저장할 객체 생성
  const result = {
    E: 0,
    I: 0,
    N: 0,
    S: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
  };

  // 각 질문의 응답에 따라 결과 객체에 값을 추가
  for (let i = 0; i < questions.length; i++) {
    const userAnswer = answers[i];
    result[userAnswer]++;
  }

  // MBTI 지표 중에서 더 많이 선택된 알파벳을 찾아서 결과 문자열 생성
  let mbtiResult = '';
  mbtiResult += result.E > result.I ? 'E' : 'I';
  mbtiResult += result.N > result.S ? 'N' : 'S';
  mbtiResult += result.F > result.T ? 'F' : 'T';
  mbtiResult += result.P > result.J ? 'P' : 'J';

  // 결과 값을 로컬 스토리지에 저장하고 result.html로 이동
  localStorage.setItem('mbti_result', mbtiResult);
  location.href = 'result.html';
}
