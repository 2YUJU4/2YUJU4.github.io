const quotes = [
  {
    quote: "힘들여 배운 지식을 삶으로 옮겨내라",
    author: "[독신호학 篤信好學]",
  },
  {
    quote: "자신을 닦고 준비할 때  기회가 온다",
    author: "[학간록 學干祿]",
  },
  {
    quote: "자신과의 만남을 게을리하지 않는다",
    author: "[반구저신 反求諸身]",
  },
  {
    quote: "하늘은 스스로 돕는자를 돕는다",
    author: "[자천우지 自天祐之]",
  },
  {
    quote: "잘못된 일을 남 탓으로 돌리지 않는다",
    author: "[불천원불우인 不天怨不尤人]",
  },
  {
    quote: "근면이야말로 최고의 재산이다",
    author: "[일근천하무난사 一勤天下無難事]",
  },
  {
    quote: "한 번 생각하고 한 번 걸러서 말한다",
    author: "[언유삼법 言有三法]",
  },
  {
    quote: "배우는 것을 삶의 기쁨으로 삼는다",
    author: "[학이시습지 불역열호 學而時習之 不亦說乎]",
  },
  {
    quote: "천 리 길도 한 걸음부터 시작이다",
    author: "[등고자비 登高自卑]",
  },
  {
    quote: "마음을 다하면 꿈은 이루어진다",
    author: "[심]성구지 心誠求之]",
  },
];

const quote = document.querySelector(".quote p:first-child");
const author = document.querySelector(".quote p:last-child");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
