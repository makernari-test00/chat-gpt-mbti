const questions = [
  {
    id: 1,
    text: '주로 사람들과 함께 시간을 보내는 것이 힘이 난다.',
    yes: 'I',
    no: 'E',
  },
  {
    id: 2,
    text: '새로운 사람들과의 소셜 이벤트에 참가하는 것은 나에게 흥미로운 일이다.',
    yes: 'E',
    no: 'I',
  },
  {
    id: 3,
    text: '내 주변에 있는 것들을 꼼꼼하게 관찰하며 느끼는 편이다.',
    yes: 'S',
    no: 'N',
  },
  {
    id: 4,
    text: '나는 세부적인 계획보다는 유연한 계획을 선호한다.',
    yes: 'P',
    no: 'J',
  },
  {
    id: 5,
    text: '결정을 내릴 때 주로 감정보다는 논리를 더 따르는 편이다.',
    yes: 'T',
    no: 'F',
  },
  {
    id: 6,
    text: '남들에게 말하기 전에 내 생각을 깊이 생각하는 편이다.',
    yes: 'I',
    no: 'E',
  },
  {
    id: 7,
    text: '나는 새로운 경험보다는 익숙한 경험을 선호한다.',
    yes: 'S',
    no: 'N',
  },
  {
    id: 8,
    text: '여행 계획을 세울 때 미리 구체적인 일정을 만드는 편이다.',
    yes: 'J',
    no: 'P',
  },
  {
    id: 9,
    text: '나의 감정을 솔직하게 표현하는 것이 어렵다.',
    yes: 'T',
    no: 'F',
  },
  {
    id: 10,
    text: '평소에 나는 사람들과의 대화보다는 혼자 있는 것을 선호한다.',
    yes: 'I',
    no: 'E',
  },
  {
    id: 11,
    text: '나는 상상보다는 현실적인 것을 중시한다.',
    yes: 'S',
    no: 'N',
  },
  {
    id: 12,
    text: '나의 진로나 계획은 상대적으로 변화하는 편이다.',
    yes: 'P',
    no: 'J',
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

  questionElement.textContent = nextQuestion.text;
  questionNumberElement.textContent = `질문 ${currentQuestionIndex + 1}`;
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

  questionElement.textContent = nextQuestion.text;
  questionNumberElement.textContent = `질문 ${currentQuestionIndex + 1}`;
}

// 페이지 로드 시, 첫 번째 질문을 보여줌
const firstQuestion = questions[0];
const questionElement = document.getElementById('question');
const questionNumberElement = document.getElementById('question-number');

questionElement.textContent = firstQuestion.text;
questionNumberElement.textContent = `질문 ${currentQuestionIndex + 1}`;

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
