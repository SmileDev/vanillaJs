const quotes = [

    {
        quote: "큰 목표를 이루고 싶으면 허락을 구하지 마라.",
        author: "미상",
    },
    {
        quote: "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.",
        author: "윈스턴 처칠",
    },    
    {
        quote: "상황을 가장 잘 활용하는 사람이 가장 좋은 상황을 맞는다.",
        author: "존 우든",
    },
    {
        quote: "조금도 도전하지 않으려고 하는 것이 인생에서 가장 위험한 일이다.",
        author: "오프라 윈프리",
    },
    {
        quote: "위대한 성과는 작은 일의 연속으로 이루어진다.",
        author: "빈센트 반 고흐",
    },
    {
        quote: "추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다.",
        author: "월트 디즈니",
    },    
    {
        quote: "행동은 모든 성공의 가장 기초적인 핵심이다.",
        author: "파블로 피카소",
    },
    {
        quote: "노력하는 사람에게 불가능이란 없다.",
        author: "알렉산더 대왕",
    },
    {
        quote: "네 자신의 생활을 즐기라. 자신의 생활을 남과 견주어 보지 마라.",
        author: "꽁 도르세",
    },
    {
        quote: "행운은 100퍼센트 노력한 뒤에 남는 것이다.",
        author: "랭스터 콜만",
    },
    {
        quote: "성공을 하려면 실패를 두려워하는 마음보다 성공을 원하는 마음이 더 커야 한다.",
        author: "빌 코스비",
    },
    {
        quote: "항상 갈구하라. 바보짓을 두려워마라.",
        author: "스티브 잡스",
    },
    {
        quote: "실수를 해보지 않은 사람은 한번도 새로운 일을 시도해보지 않았던 사람이다.",
        author: "아이슈타인",
    },
    {
        quote: "시작하라! 그 자체가 천재성이고 힘이며, 마력이다.",
        author: "괴테",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function gettodaysQuote() {
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];    
    quote.innerText = todaysQuote.quote;
    author.innerText = `- ${todaysQuote.author}`;
}

gettodaysQuote() //사이트가 열리자 마자 함수 실행 하게 한 뒤에
setInterval(gettodaysQuote, 10000); //일정 간격으로 함수 실행