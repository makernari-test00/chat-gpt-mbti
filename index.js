const questions = [
  {
    id: 1,
    text: "알라딘과 함께 마법의 램프로 세상을 탐험하고 싶다고 할 때, 당신은 그에게 갈까요? 예 아니오로 답해봐.",
    yes: "E",
    no: "I",
  },
  {
    id: 2,
    text: "자신이 동물들과 대화할 수 있다면, 숲 속 친구들과 어울리고 싶다고 느껴진다면, 그런 마법이 있었다면 좋겠어요. 예 아니오로 답해봐.",
    yes: "I",
    no: "E",
  },
  {
    id: 3,
    text: "신데렐라처럼 왕자와 함께 춤추는 신세를 누리는 것에 동경하시나요? 예 아니오로 답해봐.",
    yes: "E",
    no: "I",
  },
  {
    id: 4,
    text: "지혜로운 멀라나와 함께 세상의 불평과 불만을 해결하고 싶다고 느낀다면, 그녀에게 동참하러 갈까요? 예 아니오로 답해봐.",
    yes: "I",
    no: "E",
  },
  {
    id: 5,
    text: "모든 것을 확실하게 계획하고 진행하는 라푼젤처럼 일상을 살아가는 것이 매력적이라고 생각하시나요? 예 아니오로 답해봐.",
    yes: "I",
    no: "E",
  },
  {
    id: 6,
    text: "말로 할 수 없는 강한 욕망과 열정으로 인생을 누리고 싶다고 느껴지면, 알로하에 온도로 데려다 줄 만한 사람이 있다면, 동참하러 갈까요? 예 아니오로 답해봐.",
    yes: "E",
    no: "I",
  },
  {
    id: 7,
    text: "자신의 감정과 논리적인 사고를 균형 있게 조화시키고 싶다면, 아이스크림 공주처럼 마음의 평온을 찾으러 갈까요? 예 아니오로 답해봐.",
    yes: "F",
    no: "T",
  },
  {
    id: 8,
    text: "자신의 행동이나 결정을 다른 사람들의 감정에 기반해서 내리는 것을 중요시하는 마법사 마렐라와 함께 하고 싶다고 느껴진다면, 그녀를 찾아갈까요? 예 아니오로 답해봐.",
    yes: "F",
    no: "T",
  },
  {
    id: 9,
    text: "집중적으로 계획을 세우고 조직적으로 사람들과 함께 시간을 보내는 것을 중요하게 생각한다면, 캐릭터 레미를 만나러 갈까요? 예 아니오로 답해봐.",
    yes: "J",
    no: "P",
  },
  {
    id: 10,
    text: "즉흥적으로 일을 처리하고 융통성 있게 상황에 적응하는 것을 좋아하는 피그렛과 함께라면 행복할 것 같다고 느낀다면, 그녀와 어울리러 갈까요? 예 아니오로 답해봐.",
    yes: "P",
    no: "J",
  },
  {
    id: 11,
    text: "바다 속에서 아름다운 보라색 꼬리를 가진 인어공주와 함께 수중 세계를 탐험하고 싶다고 느낀다면, 그녀를 만나러 갈까요? 예 아니오로 답해봐.",
    yes: "E",
    no: "I",
  },
  {
    id: 12,
    text: "새로운 사랑에 빠져들고 싶은 욕망이 있다면, 인생의 마법이 그에게 찾아올 것이라고 믿는 마법사 드루이드를 만나러 갈까요? 예 아니오로 답해봐.",
    yes: "I",
    no: "E",
  },
  {
    id: 13,
    text: "모험과 재미가 있는 사파리 여행을 떠나고 싶다고 느낀다면, 사자의 왕으로 알려진 시머원과 함께 하루를 보내러 갈까요? 예 아니오로 답해봐.",
    yes: "E",
    no: "I",
  },
  {
    id: 14,
    text: "자신만의 비밀 정원을 갖고 싶은 욕망이 있다면, 재스민 공주의 정원을 찾아가서 함께하러 갈까요? 예 아니오로 답해봐.",
    yes: "I",
    no: "E",
  },
  {
    id: 15,
    text: "일상 속에서 마법의 순간들을 즐기고 싶다고 느낀다면, 마법사 머피와 함께 눈길이 멀어지는 순간을 만들러 갈까요? 예 아니오로 답해봐.",
    yes: "E",
    no: "I",
  },
  {
    id: 16,
    text: "정해진 운명이 아닌 자유롭게 선택하는 것이 중요하다고 생각한다면, 장미와 함께하는 발렌타인 데이를 보내러 갈까요? 예 아니오로 답해봐.",
    yes: "I",
    no: "E",
  },
  {
    id: 17,
    text: "다른 사람들을 도우며 봉사하는 것이 큰 가치라고 생각한다면, 노틸러스 선장과 함께 바다에서 모험을 떠나러 갈까요? 예 아니오로 답해봐.",
    yes: "F",
    no: "T",
  },
  {
    id: 18,
    text: "자신의 이야기를 창작하고 그것을 다른 사람들과 나누는 것이 좋다고 생각한다면, 개구리 왕자와 함께 노래를 부르러 갈까요? 예 아니오로 답해봐.",
    yes: "F",
    no: "T",
  },
  {
    id: 19,
    text: "목표를 향해 노력하고 성취하는 것을 중요하게 생각한다면, 닌자와 함께 영웅이 될 수 있는 기회를 찾아갈까요? 예 아니오로 답해봐.",
    yes: "J",
    no: "P",
  },
  {
    id: 20,
    text: "자유로운 사고와 즉흥적인 행동을 중요하게 생각한다면, 착한 요정 페어리와 함께 마법의 숲을 탐험할까요? 예 아니오로 답해봐.",
    yes: "P",
    no: "J",
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
