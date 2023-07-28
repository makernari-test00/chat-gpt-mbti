const questions = [
  {
    id: 1,
    text: "당신은 주변 사람들과 함께 시간을 보내는 것을 즐기시나요?",
    yes: "E",
    no: "I",
    img: "https://source.unsplash.com/random/200x200",
  },
  {
    id: 2,
    text: "새로운 사람들과 쉽게 친해지는 편인가요?",
    yes: "E",
    no: "I",
    img: "https://source.unsplash.com/random/200x200",
  },
  {
    id: 3,
    text: "혼자서도 지내는 것을 즐기시나요?",
    yes: "I",
    no: "E",
    img: "https://source.unsplash.com/random/200x200",
  },
  {
    id: 4,
    text: "추상적인 아이디어들에 대해 생각해볼 때 흥미를 느끼시나요?",
    yes: "N",
    no: "S",
    img: "https://source.unsplash.com/random/200x200",
  },
  {
    id: 5,
    text: "현실적이고 구체적인 사실들에 관심이 많으신가요?",
    yes: "S",
    no: "N",
    img: "https://source.unsplash.com/random/200x200",
  },
  {
    id: 6,
    text: "다른 사람들의 감정을 고려하여 의사결정을 하시나요?",
    yes: "F",
    no: "T",
    img: "https://source.unsplash.com/random/200x200",
  },
  {
    id: 7,
    text: "논리적인 사고와 분석을 중요하게 여기시나요?",
    yes: "T",
    no: "F",
    img: "https://source.unsplash.com/random/200x200",
  },
  {
    id: 8,
    text: "일정과 계획을 세우는 것을 좋아하시나요?",
    yes: "J",
    no: "P",
    img: "https://source.unsplash.com/random/200x200",
  },
  {
    id: 9,
    text: "새로운 경험을 두려워하지 않고 시도해보시나요?",
    yes: "P",
    no: "J",
    img: "https://source.unsplash.com/random/200x200",
  },
  {
    id: 10,
    text: "규칙적이고 체계적인 생활을 선호하시나요?",
    yes: "J",
    no: "P",
    img: "이미지10의 URL",
  },
  {
    id: 11,
    text: "자신의 감정에 대해 솔직하고 표현하는 편인가요?",
    yes: "F",
    no: "T",
    img: "https://source.unsplash.com/random/200x200",
  },
  {
    id: 12,
    text: "자주 사색하며 깊은 생각을 해보시나요?",
    yes: "N",
    no: "S",
    img: "https://source.unsplash.com/random/200x200",
  },
  {
    id: 7,
    text: "나는 세부적인 것을 기억하는 것을 좋아한다.",
    yes: "S",
    no: "N",
    img: "https://source.unsplash.com/random/200x200",
  },
  {
    id: 8,
    text: "나는 전체적인 그림을 보는 것을 좋아한다.",
    yes: "N",
    no: "S",
    img: "https://source.unsplash.com/random/200x200",
  },
  {
    id: 9,
    text: "나는 혼자 공부하는 것을 선호한다.",
    yes: "I",
    no: "E",
    img: "https://source.unsplash.com/random/200x200",
  },
  {
    id: 10,
    text: "나는 그룹으로 공부하는 것을 선호한다.",
    yes: "E",
    no: "I",
    img: "https://source.unsplash.com/random/200x200",
  },
  {
    id: 11,
    text: "나는 계획을 세우는 것을 좋아한다.",
    yes: "J",
    no: "P",
    img: "https://source.unsplash.com/random/200x200",
  },
  {
    id: 12,
    text: "나는 계획에 얽매이지 않는 것을 좋아한다.",
    yes: "P",
    no: "J",
    img: "https://source.unsplash.com/random/200x200",
  },
  {
    id: 13,
    text: "나는 논리적인 사고를 선호한다.",
    yes: "T",
    no: "F",
    img: "https://source.unsplash.com/random/200x200",
  },
  {
    id: 14,
    text: "나는 감정적인 사고를 선호한다.",
    yes: "F",
    no: "T",
    img: "https://source.unsplash.com/random/200x200",
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
