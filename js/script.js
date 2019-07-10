(function() {
  const quotes = [
    {
      quote:
        "A hunter who has only one arrow does not shoot with careless aim.",
      author: "Nigerian Proverb"
    },
    {
      quote: "Before shooting, one must aim.",
      author: "African Proverb"
    },
    {
      quote: "Wisdom is wealth.",
      author: "Swahili Proverb"
    },
    {
      quote: "Wisdom is like a baobab tree; no one individual can embrace it.",
      author: "Akan Proverb"
    },
    {
      quote:
        "If you close your eyes to facts, you will learn through accidents.",
      author: "African Proverb"
    },
    {
      quote: "Wisdom is like fire. People take it from others.",
      author: "Hema (DRC) proverb"
    },
    {
      quote:
        "Wealth, if you use it, comes to an end; learning, if you use it, increases.",
      author: "Swahili Proverb"
    },
    {
      quote: "There is no fool who is disowned by his family.",
      author: "African Proverb"
    },
    {
      quote: "Dine with a stranger but save your love for your family.",
      author: "Ethiopian Proverb"
    },
    {
      quote:
        "The old woman looks after the child to grow its teeth and the young one in turn looks after the old woman when she loses her teeth.",
      author: "Akan (Ghana, Ivory Coast) proverb"
    },
    {
      quote: "Bad friends will prevent you from having good friends.",
      author: "Gabon Proverb"
    },
    {
      quote:
        "If you want to go quickly, go alone. If you want to go far, go together.",
      author: "African Proverb"
    },
    {
      quote:
        "Milk and honey have different colors, but they share the same house peacefully.",
      author: "African proverb"
    },
    {
      quote: "There can be no peace without understanding.",
      author: "Senegalese proverb"
    },
    {
      quote: "A fight between grasshoppers is a joy to the crow.",
      author: "Lesotho proverb"
    },
    {
      quote: "You always learn a lot more when you lose than when you win.",
      author: "African proverb"
    },
    {
      quote: "The wealth which enslaves the owner isn’t wealth.",
      author: "Yoruba proverb"
    },
    {
      quote: "There can be no peace without understanding.",
      author: "Senegalese proverb"
    },
    {
      quote:
        "Lack of money is lack of friends; if you have money at your disposal, every dog and goat will claim to be related to you. ",
      author: "Yoruba proverb"
    },
    {
      quote: "You become wise when you begin to run out of money.",
      author: "Ghanaian proverb"
    },
    {
      quote:
        "One who plants grapes by the road side, and one who marries a pretty woman, share the same problem.",
      author: "~Ethiopian proverb"
    },
    {
      quote:
        "The surface of the water is beautiful, but it is no good to sleep on.",
      author: "Ghanaian proverb"
    },
    {
      quote:
        "If there is character, ugliness becomes beauty; if there is none, beauty becomes ugliness.",
      author: "Nigerian proverb"
    },
    {
      quote: "There's no bad bush where you can throw away a bad child.",
      author: "Krio proverb"
    },
    {
      quote:
        "Do not blame God for creating the tiger. Be thankful he didn't give him wings.",
      author: "Ethiopian proverb"
    },
    {
      quote:
        "Do not expect to be offered a chair when you are visiting a place where the chief sits on the floor.",
      author: "South African proverb"
    },
    {
      quote:
        "A family is like a forest, when you are outside it is dense, when you are inside you see that each tree has its place.",
      author: "African proverb"
    },
    {
      quote: "Home affairs are not talked about on the public square.",
      author: "African proverb"
    },
    {
      quote: "Do not let what you cannot do tear from your hands what you can.",
      author: "Ashanti proverb"
    },
    {
      quote: "Beautiful from behind, ugly in front.",
      author: "Ugandan proverb"
    },
    {
      quote: "The cook does not have to be a beautiful woman.",
      author: "Shona proverb"
    },
    {
      quote: "Beautiful words don’t put porridge in the pot.",
      author: "Botswana proverb"
    },
    {
      quote:
        "She is beautiful; she has love, understands; she respects herself and others; everyone likes, loves and honors her; she is a goddess.",
      author: "African proverb"
    },
    {
      quote: "He who marries a beauty marries trouble.",
      author: "African proverb"
    },
    {
      quote: "It’s much easier to fall in love than to stay in love.",
      author: "African proverb"
    },
    {
      quote: "Pretend you are dead and you will see who really loves you.",
      author: "African proverb"
    }
  ];

  const btn = document.getElementById("generate-btn");
  btn.addEventListener("click", function() {
    const random = Math.floor(Math.random() * quotes.length);
    console.log(random);
    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();
