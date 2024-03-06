const quotes = [
  {
    quote: '네가 아무것도 아니라고 생각하면 아무것도 아니야',
    author: '나의 아저씨',
  },
  {
    quote: '잘 사는 사람은 좋은 사람 되기 쉬워',
    author: '나의 아저씨',
  },
  {
    quote: '순간은 편하겠지. 근데 말이야. 그 한 번들로 사람은 변하는 거야',
    author: '이태원 클라쓰',
  },
  {
    quote: '안된다고 안될거라고 미리 정해놓고 그래서 뭘하겠어요',
    author: '이태원 클라쓰',
  },
  {
    quote:
      '내 가치를 네가 정하지마. 내 인생 이제 시작이고, 난 원하는 거 다 이루면서 살거야',
    author: '이태원 클라쓰',
  },
  {
    quote: '붙잡고 있는 거보다 놓는게 더 큰 마음이 필요한 겁니다',
    author: '호텔 델루나',
  },
  {
    quote: '바다가 참 예쁘네요. 그러게, 슬프게',
    author: '호텔 델루나',
  },
  {
    quote: '꽃이 핀 건 지기 위해서야',
    author: '호텔 델루나',
  },
  {
    quote: '너의 삶은 너의 선택만이 정답이다.',
    author: '도깨비',
  },
  {
    quote: '청춘이 아름다운 이유는 다시 돌아올 수 없기 때문이다.',
    author: '응답하라 1988',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuete = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuete.quote;
author.innerText = todayQuete.author;
