export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

  const quotes = [
      // --- Ram Dass ---
      {
        text: "Be here now.",
        author: "Ram Dass",
        context: "Be Here Now, 1971"
      },
      {
        text: "The quieter you become, the more you can hear.",
        author: "Ram Dass",
        context: "Spiritual teacher"
      },
      {
        text: "We're all just walking each other home.",
        author: "Ram Dass",
        context: "Spiritual teacher"
      },
      {
        text: "The most important moment of your life is now. The most important person in your life is the one you're with now.",
        author: "Ram Dass",
        context: "Spiritual teacher"
      },
      {
        text: "Everything is unfolding perfectly. You just don't know it yet.",
        author: "Ram Dass",
        context: "Spiritual teacher"
      },
      {
        text: "There is nothing noble in being superior to your fellow man. True nobility is being superior to your former self.",
        author: "Ernest Hemingway",
        context: "Author"
      },
      {
        text: "The world breaks everyone and afterward many are strong at the broken places.",
        author: "Ernest Hemingway",
        context: "A Farewell to Arms, 1929"
      },
      {
        text: "Every day is a new day. It is better to be lucky. But I would rather be exact. Then when luck comes you are ready.",
        author: "Ernest Hemingway",
        context: "The Old Man and the Sea, 1952"
      },
      {
        text: "Courage is grace under pressure.",
        author: "Ernest Hemingway",
        context: "Author"
      },
      {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain",
        context: "Author & humorist"
      },
      {
        text: "Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did. Explore. Dream. Discover.",
        author: "Mark Twain",
        context: "Author & humorist"
      },
      {
        text: "The two most important days in your life are the day you are born and the day you find out why.",
        author: "Mark Twain",
        context: "Author & humorist"
      },
      {
        text: "It ain't what you don't know that gets you into trouble. It's what you know for sure that just ain't so.",
        author: "Mark Twain",
        context: "Author & humorist"
      },
      {
        text: "Kindness is the language which the deaf can hear and the blind can see.",
        author: "Mark Twain",
        context: "Author & humorist"
      },
      {
        text: "The best version of yourself is already inside you. Your only job is to allow it to emerge.",
        author: "Bashar",
        context: "Channeled by Darryl Anka"
      },
      {
        text: "Follow your highest excitement in every moment. That is the path of least resistance to who you truly are.",
        author: "Bashar",
        context: "Channeled by Darryl Anka"
      },
      {
        text: "You are always in the perfect place at the perfect time for your own growth.",
        author: "Bashar",
        context: "Channeled by Darryl Anka"
      },
      {
        text: "The circumstances do not matter. Only your state of being matters.",
        author: "Bashar",
        context: "Channeled by Darryl Anka"
      },
      {
        text: "When you change the way you look at things, the things you look at change.",
        author: "Bashar",
        context: "Channeled by Darryl Anka"
      },
      {
        text: "Out beyond ideas of wrongdoing and rightdoing, there is a field. I'll meet you there.",
        author: "Rumi",
        context: "13th century poet"
      },
      {
        text: "You were born with wings. Why prefer to crawl through life?",
        author: "Rumi",
        context: "13th century poet"
      },
      {
        text: "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
        author: "Rumi",
        context: "13th century poet"
      },
      {
        text: "The wound is the place where the light enters you.",
        author: "Rumi",
        context: "13th century poet"
      },
      {
        text: "Knowing others is intelligence. Knowing yourself is true wisdom. Mastering others is strength. Mastering yourself is true power.",
        author: "Lao Tzu",
        context: "Tao Te Ching"
      },
      {
        text: "A journey of a thousand miles begins with a single step.",
        author: "Lao Tzu",
        context: "Tao Te Ching"
      },
      {
        text: "Nature does not hurry, yet everything is accomplished.",
        author: "Lao Tzu",
        context: "Tao Te Ching"
      },
      {
        text: "Realize deeply that the present moment is all you ever have.",
        author: "Eckhart Tolle",
        context: "The Power of Now, 1997"
      },
      {
        text: "Life will give you whatever experience is most helpful for the evolution of your consciousness.",
        author: "Eckhart Tolle",
        context: "A New Earth, 2005"
      },
      {
        text: "You are not your thoughts. You are the awareness behind the thoughts.",
        author: "Eckhart Tolle",
        context: "Spiritual teacher"
      },
      {
        text: "What you seek is seeking you.",
        author: "Rumi",
        context: "13th century poet"
      },
      {
        text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson",
        context: "Self-Reliance, 1841"
      },
      {
        text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson",
        context: "Self-Reliance, 1841"
      },
      {
        text: "Whatever you are, be a good one.",
        author: "Abraham Lincoln",
        context: "16th U.S. President"
      },
      {
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein",
        context: "Physicist"
      },
      {
        text: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi",
        context: "Nonviolence leader"
      },
      {
        text: "The mind is everything. What you think, you become.",
        author: "Buddha",
        context: "The Dhammapada"
      },
      {
        text: "Peace comes from within. Do not seek it without.",
        author: "Buddha",
        context: "The Dhammapada"
      },
      {
        text: "If you want to lift yourself up, lift up someone else.",
        author: "Booker T. Washington",
        context: "Up From Slavery, 1901"
      },
      {
        text: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson",
        context: "Self-Reliance, 1841"
      },
      {
        text: "We accept the love we think we deserve.",
        author: "Stephen Chbosky",
        context: "The Perks of Being a Wallflower, 1999"
      },
      {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
        context: "Chinese philosopher"
      },
      {
        text: "The cave you fear to enter holds the treasure you seek.",
        author: "Joseph Campbell",
        context: "The Hero with a Thousand Faces, 1949"
      },
      {
        text: "We are all made of star-stuff, connected by the same breath that moves the world.",
        author: "Carl Sagan",
        context: "Cosmos, 1980"
      },
      {
        text: "Act as if what you do makes a difference. It does.",
        author: "William James",
        context: "Philosopher & psychologist"
      },
      {
        text: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.",
        author: "Eleanor Roosevelt",
        context: "You Learn by Living, 1960"
      },
      {
        text: "With everything that has happened to you, you can either feel sorry for yourself or treat what has happened as a gift.",
        author: "Wayne Dyer",
        context: "Spiritual author"
      },
      {
        text: "When you are content to be simply yourself and don't compare or compete, everyone will respect you.",
        author: "Lao Tzu",
        context: "Tao Te Ching"
      },
      {
        text: "Everything you want is on the other side of fear.",
        author: "Jack Canfield",
        context: "The Success Principles, 2005"
      },
      {
        text: "Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.",
        author: "Oprah Winfrey",
        context: "What I Know For Sure, 2014"
      },
      {
        text: "You yourself, as much as anybody in the entire universe, deserve your love and affection.",
        author: "Buddha",
        context: "The Dhammapada"
      },
      {
        text: "The secret of change is to focus all of your energy not on fighting the old, but on building the new.",
        author: "Socrates",
        context: "Via Dan Millman, Way of the Peaceful Warrior"
      },

      // --- Ram Dass (continued) ---
      {
        text: "The spiritual journey is individual, highly personal. It can't be organized or regulated. It isn't true that everyone should follow one path. Listen to your own truth.",
        author: "Ram Dass",
        context: "Spiritual teacher"
      },
      {
        text: "Suffering is the sandpaper of our incarnation. It does its work of shaping us.",
        author: "Ram Dass",
        context: "Spiritual teacher"
      },
      {
        text: "The most exquisite paradox — as soon as you give it all up, you can have it all.",
        author: "Ram Dass",
        context: "Spiritual teacher"
      },
      {
        text: "A feeling of aversion or attachment toward something is your clue that there's work to be done.",
        author: "Ram Dass",
        context: "Spiritual teacher"
      },
      {
        text: "Turn your melodrama into a mellow-drama.",
        author: "Ram Dass",
        context: "Spiritual teacher"
      },
      {
        text: "You are loved just for being who you are, just for existing.",
        author: "Ram Dass",
        context: "Spiritual teacher"
      },
      {
        text: "Treat everyone you meet like God in drag.",
        author: "Ram Dass",
        context: "Spiritual teacher"
      },
      {
        text: "If you think you're enlightened, go spend a week with your family.",
        author: "Ram Dass",
        context: "Spiritual teacher"
      },
      {
        text: "I would say that the thrust of my life has been initially about getting free, and then realizing that my freedom is not independent of everybody else's freedom.",
        author: "Ram Dass",
        context: "Spiritual teacher"
      },
      {
        text: "Your problem is you're too busy holding on to your unworthiness.",
        author: "Ram Dass",
        context: "Spiritual teacher"
      },
      {
        text: "The heart surrenders everything to the moment. The mind judges and holds back.",
        author: "Ram Dass",
        context: "Spiritual teacher"
      },
      {
        text: "When you know how to listen, everybody is the guru.",
        author: "Ram Dass",
        context: "Spiritual teacher"
      },

      // --- Ernest Hemingway (continued) ---
      {
        text: "There is no friend as loyal as a book.",
        author: "Ernest Hemingway",
        context: "Author"
      },
      {
        text: "I love sleep. My life has the tendency to fall apart when I'm awake, you know?",
        author: "Ernest Hemingway",
        context: "Author"
      },
      {
        text: "The best way to find out if you can trust somebody is to trust them.",
        author: "Ernest Hemingway",
        context: "Author"
      },
      {
        text: "We are all broken — that's how the light gets in.",
        author: "Ernest Hemingway",
        context: "Author"
      },
      {
        text: "Every day is a new day. It is better to be lucky. But I would rather be exact.",
        author: "Ernest Hemingway",
        context: "The Old Man and the Sea, 1952"
      },
      {
        text: "All you have to do is write one true sentence. Write the truest sentence you know.",
        author: "Ernest Hemingway",
        context: "A Moveable Feast, 1964"
      },
      {
        text: "The most painful thing is losing yourself in the process of loving someone too much, and forgetting that you are special too.",
        author: "Ernest Hemingway",
        context: "Author"
      },
      {
        text: "Happiness in intelligent people is the rarest thing I know.",
        author: "Ernest Hemingway",
        context: "The Garden of Eden, 1986"
      },
      {
        text: "The first draft of anything is garbage.",
        author: "Ernest Hemingway",
        context: "Author"
      },
      {
        text: "Never mistake motion for action.",
        author: "Ernest Hemingway",
        context: "Author"
      },
      {
        text: "Now is no time to think of what you do not have. Think of what you can do with what there is.",
        author: "Ernest Hemingway",
        context: "The Old Man and the Sea, 1952"
      },
      {
        text: "Always do sober what you said you'd do drunk. That will teach you to keep your mouth shut.",
        author: "Ernest Hemingway",
        context: "Author"
      },

      // --- Mark Twain (continued) ---
      {
        text: "The man who does not read has no advantage over the man who cannot read.",
        author: "Mark Twain",
        context: "Author & humorist"
      },
      {
        text: "Age is an issue of mind over matter. If you don't mind, it doesn't matter.",
        author: "Mark Twain",
        context: "Author & humorist"
      },
      {
        text: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain",
        context: "Author & humorist"
      },
      {
        text: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
        author: "Mark Twain",
        context: "Author & humorist"
      },
      {
        text: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
        author: "Mark Twain",
        context: "Author & humorist"
      },
      {
        text: "Do the right thing. It will gratify some people and astonish the rest.",
        author: "Mark Twain",
        context: "Author & humorist"
      },
      {
        text: "Don't go around saying the world owes you a living. The world owes you nothing. It was here first.",
        author: "Mark Twain",
        context: "Author & humorist"
      },
      {
        text: "The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.",
        author: "Mark Twain",
        context: "Author & humorist"
      },
      {
        text: "Courage is resistance to fear, mastery of fear — not absence of fear.",
        author: "Mark Twain",
        context: "Pudd'nhead Wilson, 1894"
      },
      {
        text: "A person who won't read has no advantage over one who can't.",
        author: "Mark Twain",
        context: "Author & humorist"
      },
      {
        text: "The secret of getting ahead is getting started. The secret of getting started is breaking complex overwhelming tasks into small manageable tasks, and starting on the first one.",
        author: "Mark Twain",
        context: "Author & humorist"
      },
      {
        text: "Forgiveness is the fragrance that the violet sheds on the heel that has crushed it.",
        author: "Mark Twain",
        context: "Author & humorist"
      },

      // --- Bashar (continued) ---
      {
        text: "Act on your highest excitement with integrity and to the best of your ability, with no insistence on a particular outcome.",
        author: "Bashar",
        context: "Channeled by Darryl Anka"
      },
      {
        text: "You cannot be in a place you do not belong. Trust where you are.",
        author: "Bashar",
        context: "Channeled by Darryl Anka"
      },
      {
        text: "Fear is excitement without breath.",
        author: "Bashar",
        context: "Channeled by Darryl Anka"
      },
      {
        text: "You are not separate from the whole. You are one thread woven into the fabric of everything.",
        author: "Bashar",
        context: "Channeled by Darryl Anka"
      },
      {
        text: "Define yourself from the inside out, not the outside in.",
        author: "Bashar",
        context: "Channeled by Darryl Anka"
      },
      {
        text: "Your imagination is your preview of life's coming attractions.",
        author: "Bashar",
        context: "Channeled by Darryl Anka"
      },
      {
        text: "You don't need to figure out how your dream will come true. You only need to know that it will.",
        author: "Bashar",
        context: "Channeled by Darryl Anka"
      },
      {
        text: "When you give yourself permission to be who you are, you inspire others to do the same.",
        author: "Bashar",
        context: "Channeled by Darryl Anka"
      },
      {
        text: "Your outer world is a reflection of your inner world. Change within, and the without changes.",
        author: "Bashar",
        context: "Channeled by Darryl Anka"
      },
      {
        text: "Abundance is not something you acquire. It is something you tune into.",
        author: "Bashar",
        context: "Channeled by Darryl Anka"
      },
      {
        text: "Every moment is a fresh beginning. Every breath is a new choice.",
        author: "Bashar",
        context: "Channeled by Darryl Anka"
      },
      {
        text: "Integrity means living true to your core values in every moment.",
        author: "Bashar",
        context: "Channeled by Darryl Anka"
      },

      // --- Rumi (continued) ---
      {
        text: "Don't be satisfied with stories, how things have gone with others. Unfold your own myth.",
        author: "Rumi",
        context: "13th century poet"
      },
      {
        text: "Wherever you are, and whatever you do, be in love.",
        author: "Rumi",
        context: "13th century poet"
      },
      {
        text: "When you do things from your soul, you feel a river moving in you, a joy.",
        author: "Rumi",
        context: "13th century poet"
      },
      {
        text: "Ignore those that make you fearful and sad, that degrade you back towards disease and death.",
        author: "Rumi",
        context: "13th century poet"
      },
      {
        text: "Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.",
        author: "Rumi",
        context: "13th century poet"
      },
      {
        text: "Raise your words, not your voice. It is rain that grows flowers, not thunder.",
        author: "Rumi",
        context: "13th century poet"
      },
      {
        text: "Set your life on fire. Seek those who fan your flames.",
        author: "Rumi",
        context: "13th century poet"
      },
      {
        text: "Sell your cleverness and buy bewilderment.",
        author: "Rumi",
        context: "13th century poet"
      },
      {
        text: "The garden of the world has no limits, except in your mind.",
        author: "Rumi",
        context: "13th century poet"
      },
      {
        text: "Respond to every call that excites your spirit.",
        author: "Rumi",
        context: "13th century poet"
      },
      {
        text: "Be a lamp, a lifeboat, a ladder. Help someone's soul heal.",
        author: "Rumi",
        context: "13th century poet"
      },
      {
        text: "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us. We taste only sacredness.",
        author: "Rumi",
        context: "13th century poet"
      },
      {
        text: "You were born with potential. You were born with goodness and trust. You were born with ideals and dreams. You are not meant for crawling, so don't.",
        author: "Rumi",
        context: "13th century poet"
      },

      // --- Lao Tzu (continued) ---
      {
        text: "When I let go of what I am, I become what I might be.",
        author: "Lao Tzu",
        context: "Tao Te Ching"
      },
      {
        text: "Be careful what you water your dreams with. Water them with worry and fear and you will produce weeds that choke the life from your dream. Water them with optimism and solutions and you will cultivate success.",
        author: "Lao Tzu",
        context: "Tao Te Ching"
      },
      {
        text: "To the mind that is still, the whole universe surrenders.",
        author: "Lao Tzu",
        context: "Tao Te Ching"
      },
      {
        text: "If you realize that all things change, there is nothing you will try to hold on to.",
        author: "Lao Tzu",
        context: "Tao Te Ching"
      },
      {
        text: "Act without expectation.",
        author: "Lao Tzu",
        context: "Tao Te Ching"
      },
      {
        text: "The key to growth is the introduction of higher dimensions of consciousness into our awareness.",
        author: "Lao Tzu",
        context: "Tao Te Ching"
      },
      {
        text: "Silence is a source of great strength.",
        author: "Lao Tzu",
        context: "Tao Te Ching"
      },
      {
        text: "Loss is not as bad as wanting more.",
        author: "Lao Tzu",
        context: "Tao Te Ching"
      },
      {
        text: "Do you have the patience to wait until your mud settles and the water is clear?",
        author: "Lao Tzu",
        context: "Tao Te Ching"
      },
      {
        text: "If you correct your mind, the rest of your life will fall into place.",
        author: "Lao Tzu",
        context: "Tao Te Ching"
      },
      {
        text: "Great acts are made up of small deeds.",
        author: "Lao Tzu",
        context: "Tao Te Ching"
      },
      {
        text: "He who knows others is wise; he who knows himself is enlightened.",
        author: "Lao Tzu",
        context: "Tao Te Ching"
      },

      // --- Eckhart Tolle (continued) ---
      {
        text: "Whatever the present moment contains, accept it as if you had chosen it.",
        author: "Eckhart Tolle",
        context: "The Power of Now, 1997"
      },
      {
        text: "The primary cause of unhappiness is never the situation but your thoughts about it.",
        author: "Eckhart Tolle",
        context: "A New Earth, 2005"
      },
      {
        text: "You find peace not by rearranging the circumstances of your life, but by realizing who you are at the deepest level.",
        author: "Eckhart Tolle",
        context: "Spiritual teacher"
      },
      {
        text: "Awareness is the greatest agent for change.",
        author: "Eckhart Tolle",
        context: "A New Earth, 2005"
      },
      {
        text: "The power for creating a better future is contained in the present moment: you create a good future by creating a good present.",
        author: "Eckhart Tolle",
        context: "Spiritual teacher"
      },
      {
        text: "Whenever you become anxious or stressed, outer purpose has taken over and you lost sight of your inner purpose.",
        author: "Eckhart Tolle",
        context: "A New Earth, 2005"
      },
      {
        text: "Nothing ever happened in the past that can prevent you from being present now.",
        author: "Eckhart Tolle",
        context: "The Power of Now, 1997"
      },
      {
        text: "With stillness comes the benediction of peace.",
        author: "Eckhart Tolle",
        context: "Stillness Speaks, 2003"
      },
      {
        text: "Is there a difference between happiness and inner peace? Yes. Happiness depends on conditions being perceived as positive; inner peace does not.",
        author: "Eckhart Tolle",
        context: "A New Earth, 2005"
      },
      {
        text: "Some changes look negative on the surface but you will soon realize that space is being created in your life for something new to emerge.",
        author: "Eckhart Tolle",
        context: "Spiritual teacher"
      },
      {
        text: "The moment you become aware of the ego in you, it is strictly speaking no longer the ego, but just an old, conditioned mind-pattern.",
        author: "Eckhart Tolle",
        context: "A New Earth, 2005"
      },
      {
        text: "Transforming yourself is transforming the world.",
        author: "Eckhart Tolle",
        context: "Spiritual teacher"
      },

      // --- Marcus Aurelius ---
      {
        text: "You have power over your mind — not outside events. Realize this, and you will find strength.",
        author: "Marcus Aurelius",
        context: "Meditations, 2nd century AD"
      },
      {
        text: "The happiness of your life depends upon the quality of your thoughts.",
        author: "Marcus Aurelius",
        context: "Meditations, 2nd century AD"
      },
      {
        text: "If it is not right, do not do it; if it is not true, do not say it.",
        author: "Marcus Aurelius",
        context: "Meditations, 2nd century AD"
      },
      {
        text: "When you wake up in the morning, tell yourself: the people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous and surly. I am not surprised or disturbed.",
        author: "Marcus Aurelius",
        context: "Meditations, 2nd century AD"
      },
      {
        text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
        author: "Marcus Aurelius",
        context: "Meditations, 2nd century AD"
      },
      {
        text: "Waste no more time arguing about what a good man should be. Be one.",
        author: "Marcus Aurelius",
        context: "Meditations, 2nd century AD"
      },
      {
        text: "Accept the things to which fate binds you, and love the people with whom fate brings you together.",
        author: "Marcus Aurelius",
        context: "Meditations, 2nd century AD"
      },
      {
        text: "Never esteem anything as of advantage to you that will make you break your word or lose your self-respect.",
        author: "Marcus Aurelius",
        context: "Meditations, 2nd century AD"
      },
      {
        text: "The object of life is not to be on the side of the majority, but to escape finding oneself in the ranks of the insane.",
        author: "Marcus Aurelius",
        context: "Meditations, 2nd century AD"
      },
      {
        text: "Confine yourself to the present.",
        author: "Marcus Aurelius",
        context: "Meditations, 2nd century AD"
      },
      {
        text: "Do not indulge in dreams of what you have not, but count the blessings you actually possess.",
        author: "Marcus Aurelius",
        context: "Meditations, 2nd century AD"
      },
      {
        text: "Begin the morning by saying to yourself: I shall meet with meddling, ungrateful, violent, treacherous, envious, uncharitable men. All these things happen to them by reason of their ignorance of good and evil.",
        author: "Marcus Aurelius",
        context: "Meditations, 2nd century AD"
      },

      // --- Epictetus ---
      {
        text: "Make the best use of what is in your power, and take the rest as it happens.",
        author: "Epictetus",
        context: "Enchiridion, 2nd century AD"
      },
      {
        text: "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
        author: "Epictetus",
        context: "Enchiridion, 2nd century AD"
      },
      {
        text: "First, say to yourself what you would be; and then do what you have to do.",
        author: "Epictetus",
        context: "Discourses, 2nd century AD"
      },
      {
        text: "Seek not that the things which happen should happen as you wish; but wish the things which happen to be as they are, and you will have a tranquil flow of life.",
        author: "Epictetus",
        context: "Enchiridion, 2nd century AD"
      },
      {
        text: "No man is free who is not master of himself.",
        author: "Epictetus",
        context: "Discourses, 2nd century AD"
      },
      {
        text: "It is not what happens to you, but how you react to it that matters.",
        author: "Epictetus",
        context: "Enchiridion, 2nd century AD"
      },
      {
        text: "Men are disturbed not by the things which happen, but by the opinions about the things.",
        author: "Epictetus",
        context: "Enchiridion, 2nd century AD"
      },
      {
        text: "If you want to improve, be content to be thought foolish and stupid.",
        author: "Epictetus",
        context: "Enchiridion, 2nd century AD"
      },
      {
        text: "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.",
        author: "Epictetus",
        context: "Enchiridion, 2nd century AD"
      },
      {
        text: "The more we value things outside our control, the less control we have.",
        author: "Epictetus",
        context: "Enchiridion, 2nd century AD"
      },

      // --- Seneca ---
      {
        text: "It is not that I'm so smart, it's just that I stay with problems longer.",
        author: "Seneca",
        context: "Letters from a Stoic, 65 AD"
      },
      {
        text: "We suffer more often in imagination than in reality.",
        author: "Seneca",
        context: "Letters from a Stoic, 65 AD"
      },
      {
        text: "Luck is what happens when preparation meets opportunity.",
        author: "Seneca",
        context: "Letters from a Stoic, 65 AD"
      },
      {
        text: "Begin at once to live, and count each separate day as a separate life.",
        author: "Seneca",
        context: "Letters from a Stoic, 65 AD"
      },
      {
        text: "If a man knows not to which port he sails, no wind is favorable.",
        author: "Seneca",
        context: "Letters from a Stoic, 65 AD"
      },
      {
        text: "Omnia aliena sunt, tempus tantum nostrum est. All things are foreign; time alone is ours.",
        author: "Seneca",
        context: "Letters from a Stoic, 65 AD"
      },
      {
        text: "Nusquam est qui ubique est. He who is everywhere is nowhere.",
        author: "Seneca",
        context: "Letters from a Stoic, 65 AD"
      },
      {
        text: "Associate with people who are likely to improve you.",
        author: "Seneca",
        context: "Letters from a Stoic, 65 AD"
      },
      {
        text: "The whole future lies in uncertainty: live immediately.",
        author: "Seneca",
        context: "On the Shortness of Life, 49 AD"
      },
      {
        text: "Retire into yourself as much as you can. Associate with those who will make a better man of you.",
        author: "Seneca",
        context: "Letters from a Stoic, 65 AD"
      },

      // --- Khalil Gibran ---
      {
        text: "Your children are not your children. They are the sons and daughters of life's longing for itself.",
        author: "Khalil Gibran",
        context: "The Prophet, 1923"
      },
      {
        text: "And forget not that the earth delights to feel your bare feet and the winds long to play with your hair.",
        author: "Khalil Gibran",
        context: "The Prophet, 1923"
      },
      {
        text: "You give but little when you give of your possessions. It is when you give of yourself that you truly give.",
        author: "Khalil Gibran",
        context: "The Prophet, 1923"
      },
      {
        text: "Your pain is the breaking of the shell that encloses your understanding.",
        author: "Khalil Gibran",
        context: "The Prophet, 1923"
      },
      {
        text: "Let there be spaces in your togetherness, and let the winds of the heavens dance between you.",
        author: "Khalil Gibran",
        context: "The Prophet, 1923"
      },
      {
        text: "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.",
        author: "Khalil Gibran",
        context: "The Prophet, 1923"
      },
      {
        text: "The appearance of things changes according to the emotions, and thus we see magic and beauty in them, while the magic and beauty are really in ourselves.",
        author: "Khalil Gibran",
        context: "The Broken Wings, 1912"
      },
      {
        text: "We choose our joys and sorrows long before we experience them.",
        author: "Khalil Gibran",
        context: "The Prophet, 1923"
      },
      {
        text: "I have learned silence from the talkative, toleration from the intolerant, and kindness from the unkind.",
        author: "Khalil Gibran",
        context: "Sand and Foam, 1926"
      },
      {
        text: "Trees are poems the earth writes upon the sky.",
        author: "Khalil Gibran",
        context: "Sand and Foam, 1926"
      },

      // --- Viktor Frankl ---
      {
        text: "When we are no longer able to change a situation, we are challenged to change ourselves.",
        author: "Viktor Frankl",
        context: "Man's Search for Meaning, 1946"
      },
      {
        text: "Everything can be taken from a man but one thing: the last of the human freedoms — to choose one's attitude in any given set of circumstances.",
        author: "Viktor Frankl",
        context: "Man's Search for Meaning, 1946"
      },
      {
        text: "Those who have a 'why' to live, can bear with almost any 'how'.",
        author: "Viktor Frankl",
        context: "Man's Search for Meaning, 1946"
      },
      {
        text: "Between stimulus and response there is a space. In that space is our power to choose our response.",
        author: "Viktor Frankl",
        context: "Man's Search for Meaning, 1946"
      },
      {
        text: "Don't aim at success. The more you aim at it and make it a target, the more you are going to miss it.",
        author: "Viktor Frankl",
        context: "Man's Search for Meaning, 1946"
      },
      {
        text: "Life is never made unbearable by circumstances, but only by lack of meaning and purpose.",
        author: "Viktor Frankl",
        context: "Man's Search for Meaning, 1946"
      },
      {
        text: "For success, like happiness, cannot be pursued; it must ensue.",
        author: "Viktor Frankl",
        context: "Man's Search for Meaning, 1946"
      },
      {
        text: "Each man is questioned by life; and he can only answer to life by answering for his own life.",
        author: "Viktor Frankl",
        context: "Man's Search for Meaning, 1946"
      },
      {
        text: "An abnormal reaction to an abnormal situation is normal behavior.",
        author: "Viktor Frankl",
        context: "Man's Search for Meaning, 1946"
      },
      {
        text: "Ultimately, man should not ask what the meaning of his life is, but rather must recognize that it is he who is asked.",
        author: "Viktor Frankl",
        context: "Man's Search for Meaning, 1946"
      },

      // --- Carl Jung ---
      {
        text: "Until you make the unconscious conscious, it will direct your life and you will call it fate.",
        author: "Carl Jung",
        context: "Psychologist & philosopher"
      },
      {
        text: "The greatest burden a child must bear is the unlived life of its parents.",
        author: "Carl Jung",
        context: "Psychologist & philosopher"
      },
      {
        text: "Who looks outside, dreams. Who looks inside, awakes.",
        author: "Carl Jung",
        context: "Psychologist & philosopher"
      },
      {
        text: "Your visions will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.",
        author: "Carl Jung",
        context: "Psychologist & philosopher"
      },
      {
        text: "The privilege of a lifetime is to become who you truly are.",
        author: "Carl Jung",
        context: "Psychologist & philosopher"
      },
      {
        text: "Everything that irritates us about others can lead us to an understanding of ourselves.",
        author: "Carl Jung",
        context: "Psychologist & philosopher"
      },
      {
        text: "I am not what happened to me; I am what I choose to become.",
        author: "Carl Jung",
        context: "Psychologist & philosopher"
      },
      {
        text: "Knowing your own darkness is the best method for dealing with the darknesses of other people.",
        author: "Carl Jung",
        context: "Psychologist & philosopher"
      },
      {
        text: "The most terrifying thing is to accept oneself completely.",
        author: "Carl Jung",
        context: "Psychologist & philosopher"
      },
      {
        text: "In each of us there is another whom we do not know.",
        author: "Carl Jung",
        context: "Psychologist & philosopher"
      },

      // --- Alan Watts ---
      {
        text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
        author: "Alan Watts",
        context: "The Wisdom of Insecurity, 1951"
      },
      {
        text: "No valid plans for the future can be made by those who have no capacity for living now.",
        author: "Alan Watts",
        context: "The Wisdom of Insecurity, 1951"
      },
      {
        text: "You are under no obligation to be the same person you were five minutes ago.",
        author: "Alan Watts",
        context: "Philosopher"
      },
      {
        text: "Muddy water is best cleared by leaving it alone.",
        author: "Alan Watts",
        context: "The Way of Zen, 1957"
      },
      {
        text: "The art of living is neither careless drifting on the one hand nor fearful clinging on the other.",
        author: "Alan Watts",
        context: "The Wisdom of Insecurity, 1951"
      },
      {
        text: "Problems that remain persistently insoluble should always be suspected as questions asked in the wrong way.",
        author: "Alan Watts",
        context: "Philosopher"
      },
      {
        text: "You are a function of what the whole universe is doing in the same way that a wave is a function of what the whole ocean is doing.",
        author: "Alan Watts",
        context: "Philosopher"
      },
      {
        text: "The more a thing tends to be permanent, the more it tends to be lifeless.",
        author: "Alan Watts",
        context: "The Wisdom of Insecurity, 1951"
      },
      {
        text: "Trying to define yourself is like trying to bite your own teeth.",
        author: "Alan Watts",
        context: "Philosopher"
      },
      {
        text: "This is the real secret of life — to be completely engaged with what you are doing in the here and now.",
        author: "Alan Watts",
        context: "Philosopher"
      },

      // --- Thich Nhat Hanh ---
      {
        text: "Because you are alive, everything is possible.",
        author: "Thich Nhat Hanh",
        context: "Buddhist monk & peace activist"
      },
      {
        text: "The present moment is the only moment available to us, and it is the door to all moments.",
        author: "Thich Nhat Hanh",
        context: "Buddhist monk & peace activist"
      },
      {
        text: "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
        author: "Thich Nhat Hanh",
        context: "Buddhist monk & peace activist"
      },
      {
        text: "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.",
        author: "Thich Nhat Hanh",
        context: "Buddhist monk & peace activist"
      },
      {
        text: "The most precious gift we can offer anyone is our attention.",
        author: "Thich Nhat Hanh",
        context: "Buddhist monk & peace activist"
      },
      {
        text: "Walk as if you are kissing the Earth with your feet.",
        author: "Thich Nhat Hanh",
        context: "Peace Is Every Step, 1991"
      },
      {
        text: "If you love someone but rarely make yourself available to him or her, that is not true love.",
        author: "Thich Nhat Hanh",
        context: "Buddhist monk & peace activist"
      },
      {
        text: "In the moment you feel despair, look into your hands. They are here and alive. Life is in your hands.",
        author: "Thich Nhat Hanh",
        context: "Buddhist monk & peace activist"
      },
      {
        text: "Hope is important because it can make the present moment less difficult to bear.",
        author: "Thich Nhat Hanh",
        context: "Buddhist monk & peace activist"
      },
      {
        text: "Smile, breathe and go slowly.",
        author: "Thich Nhat Hanh",
        context: "Buddhist monk & peace activist"
      },

      // --- Neville Goddard ---
      {
        text: "Assume the feeling of your wish fulfilled and observe the route that your attention follows.",
        author: "Neville Goddard",
        context: "The Power of Awareness, 1952"
      },
      {
        text: "Change your conception of yourself and you will automatically change the world in which you live.",
        author: "Neville Goddard",
        context: "The Power of Awareness, 1952"
      },
      {
        text: "You are already that which you want to be, and your refusal to believe this is the only reason you do not see it.",
        author: "Neville Goddard",
        context: "The Power of Awareness, 1952"
      },
      {
        text: "Imagination is the beginning of creation. You imagine what you desire; you will what you imagine; and at last you create what you will.",
        author: "Neville Goddard",
        context: "Manifestation teacher"
      },
      {
        text: "The world is yourself pushed out. Ask yourself what you want and then give it to yourself.",
        author: "Neville Goddard",
        context: "Manifestation teacher"
      },
      {
        text: "Sleep is the door into the next day. Enter it as the person you want to be.",
        author: "Neville Goddard",
        context: "Manifestation teacher"
      },
      {
        text: "Do not try to change people; they are only messengers telling you who you are. Revalue yourself and they will confirm the change.",
        author: "Neville Goddard",
        context: "Manifestation teacher"
      },
      {
        text: "Man's chief delusion is his conviction that there are causes other than his own state of consciousness.",
        author: "Neville Goddard",
        context: "The Power of Awareness, 1952"
      },
      {
        text: "You must first have a clear mental picture of what you want before you can hope to achieve it.",
        author: "Neville Goddard",
        context: "Manifestation teacher"
      },
      {
        text: "Every moment of time you are choosing either to affirm or to deny your ideal.",
        author: "Neville Goddard",
        context: "Manifestation teacher"
      },

      // --- James Allen ---
      {
        text: "As a man thinketh in his heart, so is he.",
        author: "James Allen",
        context: "As a Man Thinketh, 1903"
      },
      {
        text: "A man is literally what he thinks, his character being the complete sum of all his thoughts.",
        author: "James Allen",
        context: "As a Man Thinketh, 1903"
      },
      {
        text: "You are today where your thoughts have brought you; you will be tomorrow where your thoughts take you.",
        author: "James Allen",
        context: "As a Man Thinketh, 1903"
      },
      {
        text: "The man who does not shrink from self-crucifixion can never fail to accomplish the object upon which his heart is set.",
        author: "James Allen",
        context: "As a Man Thinketh, 1903"
      },
      {
        text: "The outer conditions of a person's life will always be found to reflect their inner beliefs.",
        author: "James Allen",
        context: "As a Man Thinketh, 1903"
      },
      {
        text: "Dream lofty dreams, and as you dream, so shall you become. Your vision is the promise of what you shall at last unveil.",
        author: "James Allen",
        context: "As a Man Thinketh, 1903"
      },
      {
        text: "Good thoughts and actions can never produce bad results; bad thoughts and actions can never produce good results.",
        author: "James Allen",
        context: "As a Man Thinketh, 1903"
      },
      {
        text: "The soul attracts that which it secretly harbors — that which it loves, and also that which it fears.",
        author: "James Allen",
        context: "As a Man Thinketh, 1903"
      },
      {
        text: "Men do not attract that which they want, but that which they are.",
        author: "James Allen",
        context: "As a Man Thinketh, 1903"
      },
      {
        text: "He who would accomplish little must sacrifice little; he who would achieve much must sacrifice much.",
        author: "James Allen",
        context: "As a Man Thinketh, 1903"
      },

      // --- Maya Angelou ---
      {
        text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "Maya Angelou",
        context: "Poet & author"
      },
      {
        text: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",
        context: "Poet & author"
      },
      {
        text: "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.",
        author: "Maya Angelou",
        context: "Poet & author"
      },
      {
        text: "If you don't like something, change it. If you can't change it, change your attitude.",
        author: "Maya Angelou",
        context: "Poet & author"
      },
      {
        text: "Nothing will work unless you do.",
        author: "Maya Angelou",
        context: "Poet & author"
      },
      {
        text: "We may encounter many defeats but we must not be defeated.",
        author: "Maya Angelou",
        context: "Poet & author"
      },
      {
        text: "Try to be a rainbow in someone's cloud.",
        author: "Maya Angelou",
        context: "Poet & author"
      },
      {
        text: "You can't use up creativity. The more you use, the more you have.",
        author: "Maya Angelou",
        context: "Poet & author"
      },
      {
        text: "Do the best you can until you know better. Then when you know better, do better.",
        author: "Maya Angelou",
        context: "Poet & author"
      },
      {
        text: "I can be changed by what happens to me. But I refuse to be reduced by it.",
        author: "Maya Angelou",
        context: "Poet & author"
      },

      // --- Wayne Dyer ---
      {
        text: "You'll see it when you believe it.",
        author: "Wayne Dyer",
        context: "You'll See It When You Believe It, 1989"
      },
      {
        text: "Change the way you look at things and the things you look at change.",
        author: "Wayne Dyer",
        context: "Spiritual author"
      },
      {
        text: "Begin to see yourself as a soul with a body rather than a body with a soul.",
        author: "Wayne Dyer",
        context: "Spiritual author"
      },
      {
        text: "How people treat you is their karma; how you react is yours.",
        author: "Wayne Dyer",
        context: "Spiritual author"
      },
      {
        text: "You cannot be lonely if you like the person you're alone with.",
        author: "Wayne Dyer",
        context: "Spiritual author"
      },
      {
        text: "The highest form of ignorance is when you reject something you don't know anything about.",
        author: "Wayne Dyer",
        context: "Spiritual author"
      },
      {
        text: "It's never crowded along the extra mile.",
        author: "Wayne Dyer",
        context: "Spiritual author"
      },
      {
        text: "Go for it now. The future is promised to no one.",
        author: "Wayne Dyer",
        context: "Spiritual author"
      },
      {
        text: "When you dance, your purpose is not to get to a certain place on the floor. It's to enjoy each step along the way.",
        author: "Wayne Dyer",
        context: "Spiritual author"
      },
      {
        text: "Abundance is not something we acquire. It is something we tune into.",
        author: "Wayne Dyer",
        context: "Spiritual author"
      },

      // --- Brené Brown ---
      {
        text: "Vulnerability is not winning or losing; it's having the courage to show up and be seen when we have no control over the outcome.",
        author: "Brené Brown",
        context: "Daring Greatly, 2012"
      },
      {
        text: "You are imperfect, you are wired for struggle, but you are also worthy of love and belonging.",
        author: "Brené Brown",
        context: "The Gifts of Imperfection, 2010"
      },
      {
        text: "Owning our story can be hard but not nearly as difficult as spending our lives running from it.",
        author: "Brené Brown",
        context: "The Gifts of Imperfection, 2010"
      },
      {
        text: "Courage starts with showing up and letting ourselves be seen.",
        author: "Brené Brown",
        context: "Daring Greatly, 2012"
      },
      {
        text: "Connection is why we're here. It is what gives purpose and meaning to our lives.",
        author: "Brené Brown",
        context: "The Gifts of Imperfection, 2010"
      },
      {
        text: "Authenticity is the daily practice of letting go of who we think we're supposed to be and embracing who we are.",
        author: "Brené Brown",
        context: "The Gifts of Imperfection, 2010"
      },
      {
        text: "There is no innovation and creativity without failure. Period.",
        author: "Brené Brown",
        context: "Researcher & storyteller"
      },
      {
        text: "Talk to yourself like you would to someone you love.",
        author: "Brené Brown",
        context: "Researcher & storyteller"
      },
      {
        text: "Imperfections are not inadequacies; they are reminders that we're all in this together.",
        author: "Brené Brown",
        context: "The Gifts of Imperfection, 2010"
      },
      {
        text: "If we share our story with someone who responds with empathy and understanding, shame can't survive.",
        author: "Brené Brown",
        context: "Daring Greatly, 2012"
      },

      // --- Deepak Chopra ---
      {
        text: "In the midst of movement and chaos, keep stillness inside of you.",
        author: "Deepak Chopra",
        context: "Physician & spiritual author"
      },
      {
        text: "You must find the place inside yourself where nothing is impossible.",
        author: "Deepak Chopra",
        context: "Physician & spiritual author"
      },
      {
        text: "Every time you are tempted to react in the same old way, ask if you want to be a prisoner of the past or a pioneer of the future.",
        author: "Deepak Chopra",
        context: "Physician & spiritual author"
      },
      {
        text: "The less you open your heart to others, the more your heart suffers.",
        author: "Deepak Chopra",
        context: "Physician & spiritual author"
      },
      {
        text: "Within every desire is the mechanics of its fulfillment.",
        author: "Deepak Chopra",
        context: "Physician & spiritual author"
      },
      {
        text: "Nothing is more important than reconnecting with your bliss. Nothing is as rich. Nothing is more real.",
        author: "Deepak Chopra",
        context: "Physician & spiritual author"
      },
      {
        text: "The intention to live as long as possible isn't one of the mind's best intentions, because quantity isn't the same as quality.",
        author: "Deepak Chopra",
        context: "Physician & spiritual author"
      },
      {
        text: "Happiness is a continuation of happenings which are not resisted.",
        author: "Deepak Chopra",
        context: "Physician & spiritual author"
      },
      {
        text: "Every person is a God in embryo. Its only desire is to be born.",
        author: "Deepak Chopra",
        context: "Physician & spiritual author"
      },
      {
        text: "The way you think, the way you behave, the way you eat, can influence your life by 30 to 50 years.",
        author: "Deepak Chopra",
        context: "Physician & spiritual author"
      },

      // --- Paramahansa Yogananda ---
      {
        text: "The season of failure is the best time for sowing the seeds of success.",
        author: "Paramahansa Yogananda",
        context: "Autobiography of a Yogi, 1946"
      },
      {
        text: "Live quietly in the moment and see the beauty of all before you. The future will take care of itself.",
        author: "Paramahansa Yogananda",
        context: "Yogi & spiritual teacher"
      },
      {
        text: "Be as simple as you can be; you will be astonished to see how uncomplicated and happy your life can become.",
        author: "Paramahansa Yogananda",
        context: "Yogi & spiritual teacher"
      },
      {
        text: "You do not need to leave your room. Remain sitting at your table and listen. Do not even listen, simply wait. Do not even wait, be quite still and solitary.",
        author: "Paramahansa Yogananda",
        context: "Yogi & spiritual teacher"
      },
      {
        text: "Change yourself and you have done your part in changing the world.",
        author: "Paramahansa Yogananda",
        context: "Yogi & spiritual teacher"
      },
      {
        text: "You have come to earth to entertain and to be entertained.",
        author: "Paramahansa Yogananda",
        context: "Yogi & spiritual teacher"
      },
      {
        text: "Remain calm, serene, always in command of yourself. You will then find out how easy it is to get along.",
        author: "Paramahansa Yogananda",
        context: "Yogi & spiritual teacher"
      },
      {
        text: "Forget the past, for it is gone from your domain. Forget the future, for it is beyond your reach. Control the present! Live supremely well now.",
        author: "Paramahansa Yogananda",
        context: "Yogi & spiritual teacher"
      },

      // --- Abraham-Hicks / Esther Hicks ---
      {
        text: "The entire universe is conspiring to give you everything that you want.",
        author: "Abraham-Hicks",
        context: "Esther Hicks, The Law of Attraction, 2006"
      },
      {
        text: "The greatest gift you can ever give another person is your own happiness.",
        author: "Abraham-Hicks",
        context: "Esther Hicks, The Law of Attraction, 2006"
      },
      {
        text: "You are the vibrational writers of the script of your life, and everyone else in the universe is playing the part that you have assigned to them.",
        author: "Abraham-Hicks",
        context: "Esther Hicks, The Law of Attraction, 2006"
      },
      {
        text: "Everything you want is downstream.",
        author: "Abraham-Hicks",
        context: "Esther Hicks, The Vortex, 2009"
      },
      {
        text: "A belief is only a thought you continue to think.",
        author: "Abraham-Hicks",
        context: "Esther Hicks, The Law of Attraction, 2006"
      },
      {
        text: "You are not here to prove yourself worthy. You are worthy.",
        author: "Abraham-Hicks",
        context: "Esther Hicks, The Law of Attraction, 2006"
      },
      {
        text: "Look for good things about where you are and in your state of appreciation, you lift all self-imposed limitations.",
        author: "Abraham-Hicks",
        context: "Esther Hicks, manifestation teacher"
      },
      {
        text: "The basis of your life is absolute freedom, the goal is joy, and the result of that perfect combination is motion forward.",
        author: "Abraham-Hicks",
        context: "Esther Hicks, The Law of Attraction, 2006"
      },

      // --- Swami Vivekananda ---
      {
        text: "Arise, awake, and stop not till the goal is reached.",
        author: "Swami Vivekananda",
        context: "Hindu monk & philosopher"
      },
      {
        text: "Take up one idea. Make that one idea your life — think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone.",
        author: "Swami Vivekananda",
        context: "Hindu monk & philosopher"
      },
      {
        text: "The world is the great gymnasium where we come to make ourselves strong.",
        author: "Swami Vivekananda",
        context: "Hindu monk & philosopher"
      },
      {
        text: "We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.",
        author: "Swami Vivekananda",
        context: "Hindu monk & philosopher"
      },
      {
        text: "All power is within you. You can do anything and everything. Believe in that.",
        author: "Swami Vivekananda",
        context: "Hindu monk & philosopher"
      },
      {
        text: "In a conflict between the heart and the brain, follow your heart.",
        author: "Swami Vivekananda",
        context: "Hindu monk & philosopher"
      },
      {
        text: "You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul.",
        author: "Swami Vivekananda",
        context: "Hindu monk & philosopher"
      },
      {
        text: "Neither seek nor avoid, take what comes.",
        author: "Swami Vivekananda",
        context: "Hindu monk & philosopher"
      },

      // --- Florence Scovel Shinn ---
      {
        text: "Your word is your wand. The words you speak create your own destiny.",
        author: "Florence Scovel Shinn",
        context: "The Game of Life and How to Play It, 1925"
      },
      {
        text: "The divine plan of my life now takes shape in definite, concrete, and perfect ways.",
        author: "Florence Scovel Shinn",
        context: "The Game of Life and How to Play It, 1925"
      },
      {
        text: "Faith knows it has already received and acts accordingly.",
        author: "Florence Scovel Shinn",
        context: "The Game of Life and How to Play It, 1925"
      },
      {
        text: "Every great work, every big accomplishment, has been brought into manifestation through holding to the vision.",
        author: "Florence Scovel Shinn",
        context: "The Game of Life and How to Play It, 1925"
      },
      {
        text: "No man is your enemy, no man is your friend, every man is your teacher.",
        author: "Florence Scovel Shinn",
        context: "The Game of Life and How to Play It, 1925"
      },
      {
        text: "The game of life is a game of boomerangs. Our thoughts, deeds, and words return to us sooner or later with astounding accuracy.",
        author: "Florence Scovel Shinn",
        context: "The Game of Life and How to Play It, 1925"
      },
      {
        text: "There is a place that you are to fill and no one else can fill, something you are to do that no one else can do.",
        author: "Florence Scovel Shinn",
        context: "The Game of Life and How to Play It, 1925"
      },
      {
        text: "Infinite Spirit, open the way for great abundance for me. I am an irresistible magnet for all that belongs to me by divine right.",
        author: "Florence Scovel Shinn",
        context: "The Game of Life and How to Play It, 1925"
      },

      // --- Mary Oliver ---
      {
        text: "Tell me, what is it you plan to do with your one wild and precious life?",
        author: "Mary Oliver",
        context: "The Summer Day, 1990"
      },
      {
        text: "You do not have to be good. You do not have to walk on your knees for a hundred miles through the desert repenting.",
        author: "Mary Oliver",
        context: "Wild Geese, 1986"
      },
      {
        text: "Instructions for living a life: Pay attention. Be astonished. Tell about it.",
        author: "Mary Oliver",
        context: "Sometimes, 2004"
      },
      {
        text: "Someone I loved once gave me a box full of darkness. It took me years to understand that this, too, was a gift.",
        author: "Mary Oliver",
        context: "Poet"
      },
      {
        text: "I don't want to end up simply having visited this world.",
        author: "Mary Oliver",
        context: "Poet"
      },
      {
        text: "Keep some room in your heart for the unimaginable.",
        author: "Mary Oliver",
        context: "Poet"
      },
      {
        text: "Let me keep my mind on what matters, which is my work, which is mostly standing still and learning to be astonished.",
        author: "Mary Oliver",
        context: "Messenger, 2004"
      },
      {
        text: "Attention is the beginning of devotion.",
        author: "Mary Oliver",
        context: "Upstream, 2016"
      },

      // --- Joseph Campbell ---
      {
        text: "Follow your bliss and the universe will open doors where there were only walls.",
        author: "Joseph Campbell",
        context: "Mythologist"
      },
      {
        text: "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
        author: "Joseph Campbell",
        context: "Mythologist"
      },
      {
        text: "The privilege of a lifetime is being who you are.",
        author: "Joseph Campbell",
        context: "Mythologist"
      },
      {
        text: "Find a place inside where there's joy, and the joy will burn out the pain.",
        author: "Joseph Campbell",
        context: "Mythologist"
      },
      {
        text: "You must give up the life you planned in order to have the life that is waiting for you.",
        author: "Joseph Campbell",
        context: "Mythologist"
      },
      {
        text: "The goal of life is to make your heartbeat match the beat of the universe.",
        author: "Joseph Campbell",
        context: "Mythologist"
      },
      {
        text: "Your sacred space is where you can find yourself again and again.",
        author: "Joseph Campbell",
        context: "Mythologist"
      },
      {
        text: "Opportunities to find deeper powers within ourselves come when life seems most challenging.",
        author: "Joseph Campbell",
        context: "The Hero with a Thousand Faces, 1949"
      },

      // --- Hafiz ---
      {
        text: "Even after all this time, the sun never says to the earth, 'You owe me.' Look what happens with a love like that — it lights the whole world.",
        author: "Hafiz",
        context: "14th century Persian poet"
      },
      {
        text: "I wish I could show you when you are lonely or in darkness the astonishing light of your own being.",
        author: "Hafiz",
        context: "14th century Persian poet"
      },
      {
        text: "Fear is the cheapest room in the house. I would like to see you living in better conditions.",
        author: "Hafiz",
        context: "14th century Persian poet"
      },
      {
        text: "The heart is a thousand-stringed instrument that can only be tuned with love.",
        author: "Hafiz",
        context: "14th century Persian poet"
      },
      {
        text: "Now is the time to know that all that you do is sacred.",
        author: "Hafiz",
        context: "14th century Persian poet"
      },
      {
        text: "Your love should never be offered to the mouth of a stranger, only to someone who has the valor and daring to cut pieces of their soul off with a knife then weave them into a blanket to protect you.",
        author: "Hafiz",
        context: "14th century Persian poet"
      },
      {
        text: "Run my dear, from anything that may not strengthen your precious budding wings.",
        author: "Hafiz",
        context: "14th century Persian poet"
      },
      {
        text: "God wants to mantle the earth with collapsed beings. Nothing will ever touch a true saint that does not first pass through the mind and heart of God.",
        author: "Hafiz",
        context: "14th century Persian poet"
      },

      // --- Pema Chödrön ---
      {
        text: "You are the sky. Everything else — it's just the weather.",
        author: "Pema Chödrön",
        context: "Comfortable with Uncertainty, 2002"
      },
      {
        text: "We think that the point is to pass the test or overcome the problem, but the truth is that things don't really get solved. They come together and they fall apart.",
        author: "Pema Chödrön",
        context: "Buddhist teacher"
      },
      {
        text: "The most fundamental aggression to ourselves, the most fundamental harm we can do to ourselves, is to remain ignorant by not having the courage and the respect to look at ourselves honestly and gently.",
        author: "Pema Chödrön",
        context: "Buddhist teacher"
      },
      {
        text: "Nothing ever goes away until it has taught us what we need to know.",
        author: "Pema Chödrön",
        context: "Buddhist teacher"
      },
      {
        text: "Compassion is not a relationship between the healer and the wounded. It's a relationship between equals.",
        author: "Pema Chödrön",
        context: "The Places That Scare You, 2001"
      },
      {
        text: "We are all addicted to hope — hope that the doubt and mystery will go away.",
        author: "Pema Chödrön",
        context: "Buddhist teacher"
      },
      {
        text: "Letting there be room for not knowing is the most important thing of all.",
        author: "Pema Chödrön",
        context: "Buddhist teacher"
      },
      {
        text: "When things fall apart and we're on the verge of we know not what, the test for each of us is to stay on that brink and not concretize.",
        author: "Pema Chödrön",
        context: "Buddhist teacher"
      },

      // --- Henry David Thoreau ---
      {
        text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
        author: "Henry David Thoreau",
        context: "Walden, 1854"
      },
      {
        text: "Not what you look at that matters, it's what you see.",
        author: "Henry David Thoreau",
        context: "Walden, 1854"
      },
      {
        text: "I went to the woods because I wished to live deliberately, to front only the essential facts of life.",
        author: "Henry David Thoreau",
        context: "Walden, 1854"
      },
      {
        text: "Our life is frittered away by detail. Simplify, simplify.",
        author: "Henry David Thoreau",
        context: "Walden, 1854"
      },
      {
        text: "If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.",
        author: "Henry David Thoreau",
        context: "Walden, 1854"
      },
      {
        text: "The mass of men lead lives of quiet desperation. What is called resignation is confirmed desperation.",
        author: "Henry David Thoreau",
        context: "Walden, 1854"
      },
      {
        text: "You must live in the present, launch yourself on every wave, find your eternity in each moment.",
        author: "Henry David Thoreau",
        context: "Journal, 1859"
      },
      {
        text: "If one advances confidently in the direction of his dreams, and endeavors to live the life he has imagined, he will meet with a success unexpected in common hours.",
        author: "Henry David Thoreau",
        context: "Walden, 1854"
      },

      // --- Ralph Waldo Emerson (continued) ---
      {
        text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Ralph Waldo Emerson",
        context: "Essayist & philosopher"
      },
      {
        text: "For every minute you are angry you lose sixty seconds of happiness.",
        author: "Ralph Waldo Emerson",
        context: "Essayist & philosopher"
      },
      {
        text: "Write it on your heart that every day is the best day in the year.",
        author: "Ralph Waldo Emerson",
        context: "Essayist & philosopher"
      },
      {
        text: "Nothing great was ever achieved without enthusiasm.",
        author: "Ralph Waldo Emerson",
        context: "Circles, 1841"
      },
      {
        text: "Be yourself; no base imitator of another, but your best self.",
        author: "Ralph Waldo Emerson",
        context: "Self-Reliance, 1841"
      },
      {
        text: "Life is a journey, not a destination.",
        author: "Ralph Waldo Emerson",
        context: "Essayist & philosopher"
      },
      {
        text: "It is not the length of life, but the depth of life.",
        author: "Ralph Waldo Emerson",
        context: "Essayist & philosopher"
      },
      {
        text: "Cultivate the habit of being grateful for every good thing that comes to you, and to give thanks continuously.",
        author: "Ralph Waldo Emerson",
        context: "Essayist & philosopher"
      },

      // --- Buddha (continued) ---
      {
        text: "There is no path to happiness. Happiness is the path.",
        author: "Buddha",
        context: "The Dhammapada"
      },
      {
        text: "Three things cannot be long hidden: the sun, the moon, and the truth.",
        author: "Buddha",
        context: "The Dhammapada"
      },
      {
        text: "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
        author: "Buddha",
        context: "The Dhammapada"
      },
      {
        text: "If you knew what I know about the power of giving, you would not let a single meal pass without sharing it in some way.",
        author: "Buddha",
        context: "The Dhammapada"
      },
      {
        text: "It is a man's own mind, not his enemy or foe, that lures him to evil ways.",
        author: "Buddha",
        context: "The Dhammapada"
      },
      {
        text: "Work out your own salvation. Do not depend on others.",
        author: "Buddha",
        context: "The Dhammapada"
      },
      {
        text: "You only lose what you cling to.",
        author: "Buddha",
        context: "The Dhammapada"
      },
      {
        text: "Better than a thousand hollow words is one word that brings peace.",
        author: "Buddha",
        context: "The Dhammapada"
      },
      {
        text: "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
        author: "Buddha",
        context: "The Dhammapada"
      },
      {
        text: "Just as a candle cannot burn without fire, man cannot live without a spiritual life.",
        author: "Buddha",
        context: "The Dhammapada"
      },

      // --- Aristotle ---
      {
        text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        author: "Aristotle",
        context: "Nicomachean Ethics, 350 BC"
      },
      {
        text: "Knowing yourself is the beginning of all wisdom.",
        author: "Aristotle",
        context: "Nicomachean Ethics, 350 BC"
      },
      {
        text: "The whole is more than the sum of its parts.",
        author: "Aristotle",
        context: "Metaphysics, 350 BC"
      },
      {
        text: "Happiness depends upon ourselves.",
        author: "Aristotle",
        context: "Nicomachean Ethics, 350 BC"
      },
      {
        text: "The educated differ from the uneducated as much as the living differ from the dead.",
        author: "Aristotle",
        context: "Greek philosopher"
      },
      {
        text: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle",
        context: "Greek philosopher"
      },
      {
        text: "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution.",
        author: "Aristotle",
        context: "Greek philosopher"
      },
      {
        text: "In all things of nature there is something of the marvelous.",
        author: "Aristotle",
        context: "Parts of Animals, 350 BC"
      },

      // --- Krishnamurti ---
      {
        text: "It is no measure of health to be well adjusted to a profoundly sick society.",
        author: "Jiddu Krishnamurti",
        context: "Philosopher & spiritual teacher"
      },
      {
        text: "The moment you follow someone you cease to follow Truth.",
        author: "Jiddu Krishnamurti",
        context: "Philosopher & spiritual teacher"
      },
      {
        text: "In the space of not-knowing, the miracle of understanding comes.",
        author: "Jiddu Krishnamurti",
        context: "Philosopher & spiritual teacher"
      },
      {
        text: "The first step in meditation is to be aware of your own thoughts without judging them.",
        author: "Jiddu Krishnamurti",
        context: "Philosopher & spiritual teacher"
      },
      {
        text: "To understand the immeasurable, the mind must be extraordinarily quiet, still.",
        author: "Jiddu Krishnamurti",
        context: "Philosopher & spiritual teacher"
      },
      {
        text: "Real learning comes about when the competitive spirit has ceased.",
        author: "Jiddu Krishnamurti",
        context: "Philosopher & spiritual teacher"
      },
      {
        text: "If you begin to understand what you are without trying to change it, then what you are undergoes a transformation.",
        author: "Jiddu Krishnamurti",
        context: "Philosopher & spiritual teacher"
      },
      {
        text: "Truth is a pathless land.",
        author: "Jiddu Krishnamurti",
        context: "Philosopher & spiritual teacher"
      },

      // --- Louise Hay ---
      {
        text: "Every thought you think and every word you speak is an affirmation. All of our self-talk, our internal dialogue, is a stream of affirmations.",
        author: "Louise Hay",
        context: "You Can Heal Your Life, 1984"
      },
      {
        text: "You've been criticizing yourself for years and it hasn't worked. Try approving of yourself and see what happens.",
        author: "Louise Hay",
        context: "You Can Heal Your Life, 1984"
      },
      {
        text: "I am in the right place, at the right time, doing the right thing.",
        author: "Louise Hay",
        context: "You Can Heal Your Life, 1984"
      },
      {
        text: "Deep at the center of my being there is an infinite well of love.",
        author: "Louise Hay",
        context: "You Can Heal Your Life, 1984"
      },
      {
        text: "Love is the great miracle cure. Loving ourselves works miracles in our lives.",
        author: "Louise Hay",
        context: "You Can Heal Your Life, 1984"
      },
      {
        text: "How you start your day is how you live your day. How you live your day is how you live your life.",
        author: "Louise Hay",
        context: "Self-help author"
      },
      {
        text: "The point of power is always in the present moment.",
        author: "Louise Hay",
        context: "You Can Heal Your Life, 1984"
      },
      {
        text: "I am willing to release the need to be unworthy. I am worthy of the very best in life, and I now lovingly allow myself to accept it.",
        author: "Louise Hay",
        context: "You Can Heal Your Life, 1984"
      },

      // --- Toni Morrison ---
      {
        text: "If you have some power, then your job is to empower somebody else.",
        author: "Toni Morrison",
        context: "Novelist & Nobel laureate"
      },
      {
        text: "If you want to fly, you have to give up what weighs you down.",
        author: "Toni Morrison",
        context: "Novelist & Nobel laureate"
      },
      {
        text: "You wanna fly, you got to give up the shit that weighs you down.",
        author: "Toni Morrison",
        context: "Song of Solomon, 1977"
      },
      {
        text: "If you have some power, then your job is to empower somebody else. This is not just a grab-bag candy game.",
        author: "Toni Morrison",
        context: "Novelist & Nobel laureate"
      },
      {
        text: "At some point in life the world's beauty becomes enough. You don't need to photograph, paint or even remember it. It is enough.",
        author: "Toni Morrison",
        context: "Tar Baby, 1981"
      },
      {
        text: "Definitions belong to the definers, not the defined.",
        author: "Toni Morrison",
        context: "Beloved, 1987"
      },

      // --- Wendell Berry ---
      {
        text: "It may be that when we no longer know what to do, we have come to our real work, and when we no longer know which way to go, we have begun our real journey.",
        author: "Wendell Berry",
        context: "Poet & environmental activist"
      },
      {
        text: "The mind that is not baffled is not employed. The impeded stream is the one that sings.",
        author: "Wendell Berry",
        context: "Poet & environmental activist"
      },
      {
        text: "The Earth is what we all have in common.",
        author: "Wendell Berry",
        context: "Poet & environmental activist"
      },
      {
        text: "Eating with the fullest pleasure — pleasure, that is, that does not depend on ignorance — is perhaps the profoundest enactment of our connection with the world.",
        author: "Wendell Berry",
        context: "Poet & environmental activist"
      },

      // --- David Whyte ---
      {
        text: "The antidote to exhaustion is not rest. It is wholeheartedness.",
        author: "David Whyte",
        context: "Poet"
      },
      {
        text: "To feel abandoned is to deny the intimacy of your surroundings.",
        author: "David Whyte",
        context: "Poet"
      },
      {
        text: "Start close in, don't take the second step or the third, start with the first thing close in, the step you don't want to take.",
        author: "David Whyte",
        context: "River Flow, 2012"
      },
      {
        text: "You must learn one thing: the world was made to be free in.",
        author: "David Whyte",
        context: "Poet"
      },

      // --- John O'Donohue ---
      {
        text: "May you recognize in your life the presence, power, and light of your soul.",
        author: "John O'Donohue",
        context: "Anam Cara, 1997"
      },
      {
        text: "May you experience each day as a sacred gift woven around the heart of wonder.",
        author: "John O'Donohue",
        context: "Anam Cara, 1997"
      },
      {
        text: "The human soul is hungry for beauty; we seek it everywhere — in landscape, music, art, clothes, furniture, gardening, companionship, love, religion and in ourselves.",
        author: "John O'Donohue",
        context: "Beauty: The Invisible Embrace, 2004"
      },
      {
        text: "May you have the courage to listen to the voice of desire that disturbs you when you have settled for something safe.",
        author: "John O'Donohue",
        context: "Irish poet & philosopher"
      },
      {
        text: "When you come to the edge of all the light you have, and you must take a step into the darkness of the unknown, believe that one of two things will happen: there will be something solid to stand on, or you will be taught to fly.",
        author: "John O'Donohue",
        context: "Irish poet & philosopher"
      },

      // --- Confucius (continued) ---
      {
        text: "The man who moves a mountain begins by carrying away small stones.",
        author: "Confucius",
        context: "Chinese philosopher"
      },
      {
        text: "Life is really simple, but we insist on making it complicated.",
        author: "Confucius",
        context: "Chinese philosopher"
      },
      {
        text: "Wherever you go, go with all your heart.",
        author: "Confucius",
        context: "Chinese philosopher"
      },
      {
        text: "He who learns but does not think is lost. He who thinks but does not learn is in great danger.",
        author: "Confucius",
        context: "The Analects, 5th century BC"
      },
      {
        text: "Before you embark on a journey of revenge, dig two graves.",
        author: "Confucius",
        context: "Chinese philosopher"
      },
      {
        text: "Choose a job you love, and you will never have to work a day in your life.",
        author: "Confucius",
        context: "Chinese philosopher"
      },

      // --- Napoleon Hill ---
      {
        text: "Whatever the mind can conceive and believe, it can achieve.",
        author: "Napoleon Hill",
        context: "Think and Grow Rich, 1937"
      },
      {
        text: "A goal is a dream with a deadline.",
        author: "Napoleon Hill",
        context: "Think and Grow Rich, 1937"
      },
      {
        text: "The starting point of all achievement is desire.",
        author: "Napoleon Hill",
        context: "Think and Grow Rich, 1937"
      },
      {
        text: "Every adversity, every failure, every heartbreak carries with it the seed of an equal or greater benefit.",
        author: "Napoleon Hill",
        context: "Think and Grow Rich, 1937"
      },
      {
        text: "Don't wait. The time will never be just right.",
        author: "Napoleon Hill",
        context: "Think and Grow Rich, 1937"
      },
      {
        text: "Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements.",
        author: "Napoleon Hill",
        context: "Think and Grow Rich, 1937"
      },

      // --- Walt Whitman ---
      {
        text: "I am large, I contain multitudes.",
        author: "Walt Whitman",
        context: "Song of Myself, 1855"
      },
      {
        text: "I exist as I am, that is enough.",
        author: "Walt Whitman",
        context: "Song of Myself, 1855"
      },
      {
        text: "Keep your face always toward the sunshine, and shadows will fall behind you.",
        author: "Walt Whitman",
        context: "Poet"
      },
      {
        text: "Do I contradict myself? Very well then I contradict myself. I am large, I contain multitudes.",
        author: "Walt Whitman",
        context: "Song of Myself, 1855"
      },
      {
        text: "Be curious, not judgmental.",
        author: "Walt Whitman",
        context: "Poet"
      },

      // --- Albert Einstein (continued) ---
      {
        text: "Imagination is more important than knowledge.",
        author: "Albert Einstein",
        context: "Physicist"
      },
      {
        text: "A person who never made a mistake never tried anything new.",
        author: "Albert Einstein",
        context: "Physicist"
      },
      {
        text: "The measure of intelligence is the ability to change.",
        author: "Albert Einstein",
        context: "Physicist"
      },
      {
        text: "Logic will get you from A to B. Imagination will take you everywhere.",
        author: "Albert Einstein",
        context: "Physicist"
      },
      {
        text: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein",
        context: "Physicist"
      },
      {
        text: "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
        author: "Albert Einstein",
        context: "Physicist"
      },

      // --- Mahatma Gandhi (continued) ---
      {
        text: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
        context: "Nonviolence leader"
      },
      {
        text: "The weak can never forgive. Forgiveness is the attribute of the strong.",
        author: "Mahatma Gandhi",
        context: "Nonviolence leader"
      },
      {
        text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi",
        context: "Nonviolence leader"
      },
      {
        text: "Strength does not come from physical capacity. It comes from an indomitable will.",
        author: "Mahatma Gandhi",
        context: "Nonviolence leader"
      },
      {
        text: "First they ignore you, then they laugh at you, then they fight you, then you win.",
        author: "Mahatma Gandhi",
        context: "Nonviolence leader"
      },
      {
        text: "A man is but the product of his thoughts; what he thinks, he becomes.",
        author: "Mahatma Gandhi",
        context: "Nonviolence leader"
      },

      // --- Tara Brach ---
      {
        text: "The boundary to what we can accept is the boundary to our freedom.",
        author: "Tara Brach",
        context: "Radical Acceptance, 2003"
      },
      {
        text: "Radical acceptance is the willingness to experience ourselves and our lives as it is.",
        author: "Tara Brach",
        context: "Radical Acceptance, 2003"
      },
      {
        text: "The gift of self-compassion is that it allows us to be with ourselves in an honorable way.",
        author: "Tara Brach",
        context: "Psychologist & Buddhist teacher"
      },
      {
        text: "Pause, breathe, and remember: you are enough.",
        author: "Tara Brach",
        context: "Psychologist & Buddhist teacher"
      },
      {
        text: "When you meet yourself with kindness, you create the space to meet others with kindness.",
        author: "Tara Brach",
        context: "Psychologist & Buddhist teacher"
      },

      // --- Mooji ---
      {
        text: "Don't seek, don't search, don't ask, don't knock, don't demand — relax. If you relax, it comes. If you relax, it is there.",
        author: "Mooji",
        context: "Spiritual teacher"
      },
      {
        text: "You were never the body. You are the light in which the body appears.",
        author: "Mooji",
        context: "Spiritual teacher"
      },
      {
        text: "Allow yourself to be quiet. Allow yourself to listen.",
        author: "Mooji",
        context: "Spiritual teacher"
      },
      {
        text: "You are not a human being in search of a spiritual experience. You are a spiritual being immersed in a human experience.",
        author: "Mooji",
        context: "Spiritual teacher"
      },
      {
        text: "Stay as awareness. Let thoughts come and go like clouds in the sky.",
        author: "Mooji",
        context: "Spiritual teacher"
      },

      // --- Adyashanti ---
      {
        text: "True meditation has no direction or goal. It is pure wordless surrender.",
        author: "Adyashanti",
        context: "Spiritual teacher"
      },
      {
        text: "Enlightenment is a destructive process. It has nothing to do with becoming better or being happier. Enlightenment is the crumbling away of untruth.",
        author: "Adyashanti",
        context: "Spiritual teacher"
      },
      {
        text: "The greatest illusion of all is the illusion of separation.",
        author: "Adyashanti",
        context: "Spiritual teacher"
      },
      {
        text: "If you're too identified with your thoughts, you're going to suffer. If you're too identified with your feelings, you're going to suffer. Rest as awareness itself.",
        author: "Adyashanti",
        context: "Spiritual teacher"
      },

      // --- Oprah Winfrey (continued) ---
      {
        text: "The biggest adventure you can ever take is to live the life of your dreams.",
        author: "Oprah Winfrey",
        context: "Media leader"
      },
      {
        text: "You get in life what you have the courage to ask for.",
        author: "Oprah Winfrey",
        context: "Media leader"
      },
      {
        text: "Surround yourself with only people who are going to lift you higher.",
        author: "Oprah Winfrey",
        context: "Media leader"
      },
      {
        text: "The more you praise and celebrate your life, the more there is in life to celebrate.",
        author: "Oprah Winfrey",
        context: "Media leader"
      },
      {
        text: "Turn your wounds into wisdom.",
        author: "Oprah Winfrey",
        context: "Media leader"
      },
      {
        text: "You don't become what you want, you become what you believe.",
        author: "Oprah Winfrey",
        context: "Media leader"
      },

      // --- Eleanor Roosevelt (continued) ---
      {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        context: "First Lady & humanitarian"
      },
      {
        text: "Do one thing every day that scares you.",
        author: "Eleanor Roosevelt",
        context: "First Lady & humanitarian"
      },
      {
        text: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt",
        context: "This Is My Story, 1937"
      },
      {
        text: "With the new day comes new strength and new thoughts.",
        author: "Eleanor Roosevelt",
        context: "First Lady & humanitarian"
      },
      {
        text: "Beautiful young people are accidents of nature, but beautiful old people are works of art.",
        author: "Eleanor Roosevelt",
        context: "First Lady & humanitarian"
      },

      // --- Kabir ---
      {
        text: "I have been thinking of the difference between water and the waves on it. Rising, water's still water, falling back, it is water, will you give me a hint how to tell them apart?",
        author: "Kabir",
        context: "15th century mystic poet"
      },
      {
        text: "Don't go outside your house to see the flowers. My friend, don't bother with that excursion. Inside your body there are flowers.",
        author: "Kabir",
        context: "15th century mystic poet"
      },
      {
        text: "If you have not experienced love, it is as if you have never lived.",
        author: "Kabir",
        context: "15th century mystic poet"
      },
      {
        text: "The river that flows in you also flows in me.",
        author: "Kabir",
        context: "15th century mystic poet"
      },

      // --- Zen proverbs & traditional wisdom ---
      {
        text: "Before enlightenment, chop wood, carry water. After enlightenment, chop wood, carry water.",
        author: "Zen proverb",
        context: "Traditional"
      },
      {
        text: "The obstacle is the path.",
        author: "Zen proverb",
        context: "Traditional"
      },
      {
        text: "When the student is ready, the teacher will appear.",
        author: "Zen proverb",
        context: "Traditional"
      },
      {
        text: "Fall seven times, stand up eight.",
        author: "Japanese proverb",
        context: "Traditional"
      },
      {
        text: "The bamboo that bends is stronger than the oak that resists.",
        author: "Japanese proverb",
        context: "Traditional"
      },
      {
        text: "Not all those who wander are lost.",
        author: "J.R.R. Tolkien",
        context: "The Fellowship of the Ring, 1954"
      },
      {
        text: "All that is gold does not glitter.",
        author: "J.R.R. Tolkien",
        context: "The Fellowship of the Ring, 1954"
      },
      {
        text: "Even the smallest person can change the course of the future.",
        author: "J.R.R. Tolkien",
        context: "The Fellowship of the Ring, 1954"
      },

      // --- Carl Sagan (continued) ---
      {
        text: "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.",
        author: "Carl Sagan",
        context: "Cosmos, 1980"
      },
      {
        text: "Somewhere, something incredible is waiting to be known.",
        author: "Carl Sagan",
        context: "Astronomer & author"
      },
      {
        text: "We are like butterflies who flutter for a day and think it is forever.",
        author: "Carl Sagan",
        context: "Astronomer & author"
      },

      // --- Nikola Tesla ---
      {
        text: "The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence.",
        author: "Nikola Tesla",
        context: "Inventor & physicist"
      },
      {
        text: "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.",
        author: "Nikola Tesla",
        context: "Inventor & physicist"
      },
      {
        text: "Be alone, that is the secret of invention; be alone, that is when ideas are born.",
        author: "Nikola Tesla",
        context: "Inventor & physicist"
      },

      // --- Tao / nature wisdom ---
      {
        text: "Water is fluid, soft, and yielding. But water will wear away rock, which is rigid and cannot yield. As a rule, whatever is fluid, soft, and yielding will overcome whatever is rigid and hard.",
        author: "Lao Tzu",
        context: "Tao Te Ching"
      },
      {
        text: "To the mind that is still, the whole universe surrenders.",
        author: "Chuang Tzu",
        context: "Zhuangzi, 4th century BC"
      },
      {
        text: "Flow with whatever may happen, and let your mind be free. Stay centered by accepting whatever you are doing. This is the ultimate.",
        author: "Chuang Tzu",
        context: "Zhuangzi, 4th century BC"
      },
      {
        text: "I dreamed I was a butterfly, flitting around in the sky; then I awoke. Now I wonder: am I a man who dreamt of being a butterfly, or am I a butterfly dreaming that I am a man?",
        author: "Chuang Tzu",
        context: "Zhuangzi, 4th century BC"
      },

      // --- Plato ---
      {
        text: "The greatest wealth is to live content with little.",
        author: "Plato",
        context: "Greek philosopher"
      },
      {
        text: "Be kind, for everyone you meet is fighting a harder battle.",
        author: "Plato",
        context: "Greek philosopher"
      },
      {
        text: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
        author: "Plato",
        context: "Greek philosopher"
      },
      {
        text: "At the touch of love, everyone becomes a poet.",
        author: "Plato",
        context: "Greek philosopher"
      },

      // --- William Blake ---
      {
        text: "No bird soars too high if he soars with his own wings.",
        author: "William Blake",
        context: "Proverbs of Hell, 1793"
      },
      {
        text: "The road of excess leads to the palace of wisdom.",
        author: "William Blake",
        context: "Proverbs of Hell, 1793"
      },
      {
        text: "To see a world in a grain of sand and a heaven in a wild flower, hold infinity in the palm of your hand and eternity in an hour.",
        author: "William Blake",
        context: "Auguries of Innocence, 1803"
      },
      {
        text: "If the doors of perception were cleansed every thing would appear to man as it is — infinite.",
        author: "William Blake",
        context: "The Marriage of Heaven and Hell, 1793"
      },

      // --- Elizabeth Gilbert ---
      {
        text: "You need to learn how to select your thoughts just the same way you select your clothes every day.",
        author: "Elizabeth Gilbert",
        context: "Eat Pray Love, 2006"
      },
      {
        text: "Happiness is the consequence of personal effort. You fight for it, insist upon it, and sometimes even travel around the world looking for it.",
        author: "Elizabeth Gilbert",
        context: "Eat Pray Love, 2006"
      },
      {
        text: "This is a good sign, having a broken heart. It means we have tried for something.",
        author: "Elizabeth Gilbert",
        context: "Eat Pray Love, 2006"
      },
      {
        text: "Do not apologize for crying. Without this emotion, we are only robots.",
        author: "Elizabeth Gilbert",
        context: "Eat Pray Love, 2006"
      },

      // --- Glennon Doyle ---
      {
        text: "You are not here to be perfect; you are here to be real.",
        author: "Glennon Doyle",
        context: "Untamed, 2020"
      },
      {
        text: "We can do hard things.",
        author: "Glennon Doyle",
        context: "Untamed, 2020"
      },
      {
        text: "The braver I am, the luckier I get.",
        author: "Glennon Doyle",
        context: "Untamed, 2020"
      },

      // --- Audre Lorde ---
      {
        text: "It is not our differences that divide us. It is our inability to recognize, accept, and celebrate those differences.",
        author: "Audre Lorde",
        context: "Our Dead Behind Us, 1986"
      },
      {
        text: "When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
        author: "Audre Lorde",
        context: "The Cancer Journals, 1980"
      },
      {
        text: "It is not difference which immobilizes us, but silence.",
        author: "Audre Lorde",
        context: "Poet & activist"
      },

      // --- Frederick Douglass ---
      {
        text: "If there is no struggle, there is no progress.",
        author: "Frederick Douglass",
        context: "West India Emancipation speech, 1857"
      },
      {
        text: "Once you learn to read, you will be forever free.",
        author: "Frederick Douglass",
        context: "Abolitionist & statesman"
      },
      {
        text: "It is easier to build strong children than to repair broken men.",
        author: "Frederick Douglass",
        context: "Abolitionist & statesman"
      },

      // --- William James ---
      {
        text: "The greatest revolution of our generation is the discovery that human beings, by changing the inner attitudes of their minds, can change the outer aspects of their lives.",
        author: "William James",
        context: "Philosopher & psychologist"
      },
      {
        text: "Believe that life is worth living and your belief will help create the fact.",
        author: "William James",
        context: "Philosopher & psychologist"
      },
      {
        text: "The greatest use of a life is to spend it on something that will outlast it.",
        author: "William James",
        context: "Philosopher & psychologist"
      },

      // --- Booker T. Washington (continued) ---
      {
        text: "Success always leaves footprints.",
        author: "Booker T. Washington",
        context: "Up From Slavery, 1901"
      },
      {
        text: "Excellence is to do a common thing in an uncommon way.",
        author: "Booker T. Washington",
        context: "Educator & reformer"
      },

      // --- Charles Dickens ---
      {
        text: "Have a heart that never hardens, and a temper that never tires, and a touch that never hurts.",
        author: "Charles Dickens",
        context: "Our Mutual Friend, 1865"
      },
      {
        text: "We need never be ashamed of our tears.",
        author: "Charles Dickens",
        context: "Great Expectations, 1861"
      },
      {
        text: "It was the best of times, it was the worst of times... it was the epoch of belief, it was the epoch of incredulity.",
        author: "Charles Dickens",
        context: "A Tale of Two Cities, 1859"
      },

      // --- Fyodor Dostoevsky ---
      {
        text: "Pain and suffering are always inevitable for a large intelligence and a deep heart.",
        author: "Fyodor Dostoevsky",
        context: "Crime and Punishment, 1866"
      },
      {
        text: "The mystery of human existence lies not in just staying alive, but in finding something to live for.",
        author: "Fyodor Dostoevsky",
        context: "The Brothers Karamazov, 1880"
      },
      {
        text: "Man only likes to count his troubles; he doesn't calculate his happiness.",
        author: "Fyodor Dostoevsky",
        context: "Notes from Underground, 1864"
      },

      // --- Leo Tolstoy ---
      {
        text: "If you want to be happy, be.",
        author: "Leo Tolstoy",
        context: "Russian novelist"
      },
      {
        text: "Everyone thinks of changing the world, but no one thinks of changing himself.",
        author: "Leo Tolstoy",
        context: "Russian novelist"
      },
      {
        text: "The two most powerful warriors are patience and time.",
        author: "Leo Tolstoy",
        context: "War and Peace, 1869"
      },
      {
        text: "All great literature is one of two stories; a man goes on a journey or a stranger comes to town.",
        author: "Leo Tolstoy",
        context: "Russian novelist"
      },

      // --- Kahlil Gibran (more) ---
      {
        text: "Your joy is your sorrow unmasked. The selfsame well from which your laughter rises was often times filled with your tears.",
        author: "Khalil Gibran",
        context: "The Prophet, 1923"
      },
      {
        text: "Love one another but make not a bond of love: let it rather be a moving sea between the shores of your souls.",
        author: "Khalil Gibran",
        context: "The Prophet, 1923"
      },

      // --- Octavia Butler ---
      {
        text: "You don't start out writing good stuff. You start out writing crap and thinking it's good stuff, and then gradually you get better at it. That's why I say one of the most valuable traits is persistence.",
        author: "Octavia Butler",
        context: "Science fiction author"
      },
      {
        text: "In order to rise from its own ashes, a phoenix first must burn.",
        author: "Octavia Butler",
        context: "Parable of the Talents, 1998"
      },

      // --- Jack Kornfield ---
      {
        text: "The trouble is, you think you have time.",
        author: "Jack Kornfield",
        context: "Buddhist teacher"
      },
      {
        text: "If your compassion does not include yourself, it is incomplete.",
        author: "Jack Kornfield",
        context: "Buddhist teacher"
      },
      {
        text: "In the end, just three things matter: how well we have lived, how well we have loved, how well we have learned to let go.",
        author: "Jack Kornfield",
        context: "Buddhist teacher"
      },
      {
        text: "Rest and self-care are so important. When you take time to replenish your spirit, it allows you to serve others from the overflow.",
        author: "Jack Kornfield",
        context: "Buddhist teacher"
      },

      // --- Krishnamurti (more) ---
      {
        text: "The flowering of love is meditation.",
        author: "Jiddu Krishnamurti",
        context: "Philosopher & spiritual teacher"
      },

      // --- Nature & grounding ---
      {
        text: "Look deep into nature, and then you will understand everything better.",
        author: "Albert Einstein",
        context: "Physicist"
      },
      {
        text: "In every walk with nature, one receives far more than one seeks.",
        author: "John Muir",
        context: "Naturalist & author"
      },
      {
        text: "The mountains are calling and I must go.",
        author: "John Muir",
        context: "Naturalist & author"
      },
      {
        text: "The clearest way into the Universe is through a forest wilderness.",
        author: "John Muir",
        context: "Naturalist & author"
      },
      {
        text: "Adopt the pace of nature: her secret is patience.",
        author: "Ralph Waldo Emerson",
        context: "Essayist & philosopher"
      },

      // --- Nelson Mandela ---
      {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
        context: "South African leader"
      },
      {
        text: "Education is the most powerful weapon which you can use to change the world.",
        author: "Nelson Mandela",
        context: "South African leader"
      },
      {
        text: "Do not judge me by my successes; judge me by how many times I fell down and got back up again.",
        author: "Nelson Mandela",
        context: "South African leader"
      },
      {
        text: "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
        author: "Nelson Mandela",
        context: "Long Walk to Freedom, 1994"
      },

      // --- Martin Luther King Jr. ---
      {
        text: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
        author: "Martin Luther King Jr.",
        context: "Strength to Love, 1963"
      },
      {
        text: "Faith is taking the first step even when you don't see the whole staircase.",
        author: "Martin Luther King Jr.",
        context: "Civil rights leader"
      },
      {
        text: "The time is always right to do what is right.",
        author: "Martin Luther King Jr.",
        context: "Civil rights leader"
      },
      {
        text: "We must accept finite disappointment, but never lose infinite hope.",
        author: "Martin Luther King Jr.",
        context: "Civil rights leader"
      },

      // --- Harriet Tubman ---
      {
        text: "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars.",
        author: "Harriet Tubman",
        context: "Abolitionist & activist"
      },
      {
        text: "I freed a thousand slaves. I could have freed a thousand more if only they knew they were slaves.",
        author: "Harriet Tubman",
        context: "Abolitionist & activist"
      },

      // --- Rainer Maria Rilke ---
      {
        text: "Have patience with everything that remains unsolved in your heart. Try to love the questions themselves.",
        author: "Rainer Maria Rilke",
        context: "Letters to a Young Poet, 1929"
      },
      {
        text: "Once the realization is accepted that even between the closest human beings infinite distances continue, a wonderful living side by side can grow.",
        author: "Rainer Maria Rilke",
        context: "Letters to a Young Poet, 1929"
      },
      {
        text: "Perhaps all the dragons in our lives are princesses who are only waiting to see us act, just once, with beauty and courage.",
        author: "Rainer Maria Rilke",
        context: "Letters to a Young Poet, 1929"
      },
      {
        text: "Live the questions now. Perhaps then, someday far in the future, you will gradually, without even noticing it, live your way into the answer.",
        author: "Rainer Maria Rilke",
        context: "Letters to a Young Poet, 1929"
      },

      // --- Pablo Neruda ---
      {
        text: "You can cut all the flowers but you cannot keep spring from coming.",
        author: "Pablo Neruda",
        context: "Chilean poet"
      },
      {
        text: "I want to do with you what spring does with the cherry trees.",
        author: "Pablo Neruda",
        context: "Chilean poet"
      },

      // --- Jorge Luis Borges ---
      {
        text: "Time forks perpetually toward innumerable futures.",
        author: "Jorge Luis Borges",
        context: "The Garden of Forking Paths, 1941"
      },

      // --- Oliver Wendell Holmes ---
      {
        text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Oliver Wendell Holmes Sr.",
        context: "Physician & poet"
      },

      // --- Paramahansa Yogananda (more) ---
      {
        text: "Stillness is the altar of spirit.",
        author: "Paramahansa Yogananda",
        context: "Yogi & spiritual teacher"
      },

      // --- Neale Donald Walsch ---
      {
        text: "Life begins at the end of your comfort zone.",
        author: "Neale Donald Walsch",
        context: "Conversations with God, 1995"
      },
      {
        text: "The deepest secret is that life is not a process of discovery, but a process of creation.",
        author: "Neale Donald Walsch",
        context: "Conversations with God, 1995"
      },
      {
        text: "Every decision you make — every decision — is not a decision about what to do. It's a decision about who you are.",
        author: "Neale Donald Walsch",
        context: "Conversations with God, 1995"
      },
      {
        text: "The universe always says yes.",
        author: "Neale Donald Walsch",
        context: "Conversations with God, 1995"
      },

      // --- Dōgen ---
      {
        text: "To study the self is to forget the self.",
        author: "Dōgen",
        context: "Zen master, 13th century"
      },
      {
        text: "Being is time. Time is being.",
        author: "Dōgen",
        context: "Shōbōgenzō, 13th century"
      },
      {
        text: "A flower falls, even though we love it; and a weed grows, even though we do not love it.",
        author: "Dōgen",
        context: "Zen master, 13th century"
      },

      // --- Shunryu Suzuki ---
      {
        text: "In the beginner's mind there are many possibilities, but in the expert's mind there are few.",
        author: "Shunryu Suzuki",
        context: "Zen Mind, Beginner's Mind, 1970"
      },
      {
        text: "Each of you is perfect the way you are — and you can use a little improvement.",
        author: "Shunryu Suzuki",
        context: "Zen teacher"
      },
      {
        text: "The most important thing is to find out what is the most important thing.",
        author: "Shunryu Suzuki",
        context: "Zen Mind, Beginner's Mind, 1970"
      },

      // --- Tagore ---
      {
        text: "You can't cross the sea merely by standing and staring at the water.",
        author: "Rabindranath Tagore",
        context: "Poet & Nobel laureate"
      },
      {
        text: "If you cry because the sun has gone out of your life, your tears will prevent you from seeing the stars.",
        author: "Rabindranath Tagore",
        context: "Poet & Nobel laureate"
      },
      {
        text: "The flower that blooms in adversity is the most rare and beautiful of all.",
        author: "Rabindranath Tagore",
        context: "Poet & Nobel laureate"
      },
      {
        text: "Love is not a mere impulse; it must contain truth, which is law.",
        author: "Rabindranath Tagore",
        context: "Poet & Nobel laureate"
      },

      // --- Simone de Beauvoir ---
      {
        text: "I am awfully greedy; I want everything from life. I want to be a woman and to be a man, to have many friends and to have loneliness, to work much and write good books.",
        author: "Simone de Beauvoir",
        context: "Philosopher & author"
      },
      {
        text: "Change your life today. Don't gamble on the future, act now, without delay.",
        author: "Simone de Beauvoir",
        context: "Philosopher & author"
      },

      // --- Viktor Frankl (more) ---
      {
        text: "Happiness cannot be pursued; it must ensue.",
        author: "Viktor Frankl",
        context: "Man's Search for Meaning, 1946"
      },

      // --- Anais Nin ---
      {
        text: "You cannot save people, you can only love them.",
        author: "Anaïs Nin",
        context: "Author & diarist"
      },
      {
        text: "Life is a process of becoming, a combination of states we have to go through. Where people fail is that they wish to elect a state and remain in it. This is a kind of death.",
        author: "Anaïs Nin",
        context: "Author & diarist"
      },
      {
        text: "I, with a deeper instinct, choose a man who compels my strength, who makes enormous demands on me, who does not doubt my courage or my toughness, who does not believe me naïve or innocent.",
        author: "Anaïs Nin",
        context: "Author & diarist"
      },
      {
        text: "And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom.",
        author: "Anaïs Nin",
        context: "Author & diarist"
      },

      // --- Hermann Hesse ---
      {
        text: "I have been and still am a seeker, but I have ceased to question stars and books; I have begun to listen to the teaching my blood whispers to me.",
        author: "Hermann Hesse",
        context: "Demian, 1919"
      },
      {
        text: "One never reaches home, but wherever friendly paths intersect the whole world looks like home for a time.",
        author: "Hermann Hesse",
        context: "Demian, 1919"
      },
      {
        text: "Everything becomes a little different as soon as it is spoken out loud.",
        author: "Hermann Hesse",
        context: "Siddhartha, 1922"
      },
      {
        text: "Within you there is a stillness and sanctuary to which you can retreat at any time and be yourself.",
        author: "Hermann Hesse",
        context: "Siddhartha, 1922"
      },

      // --- Native American wisdom ---
      {
        text: "We do not inherit the earth from our ancestors, we borrow it from our children.",
        author: "Native American proverb",
        context: "Traditional"
      },
      {
        text: "The soul would have no rainbow had the eyes no tears.",
        author: "Native American proverb",
        context: "Traditional"
      },
      {
        text: "Treat the earth well: it was not given to you by your parents, it was loaned to you by your children.",
        author: "Native American proverb",
        context: "Traditional"
      },

      // --- Sri Aurobindo ---
      {
        text: "All life is yoga.",
        author: "Sri Aurobindo",
        context: "Philosopher & yogi"
      },
      {
        text: "The soul that can speak through the eyes can also kiss with a gaze.",
        author: "Sri Aurobindo",
        context: "Philosopher & yogi"
      },
      {
        text: "The sign of growing spiritual consciousness is that you begin to see the extraordinary in the ordinary.",
        author: "Sri Aurobindo",
        context: "Philosopher & yogi"
      },

      // --- Nisargadatta Maharaj ---
      {
        text: "Love says: I am everything. Wisdom says: I am nothing. Between the two, my life flows.",
        author: "Nisargadatta Maharaj",
        context: "I Am That, 1973"
      },
      {
        text: "Whatever you think you are, you are not. You are awareness itself.",
        author: "Nisargadatta Maharaj",
        context: "I Am That, 1973"
      },
      {
        text: "The real does not die, the unreal never lived.",
        author: "Nisargadatta Maharaj",
        context: "I Am That, 1973"
      },

      // --- closing additions ---
      {
        text: "What you think, you become. What you feel, you attract. What you imagine, you create.",
        author: "Buddha",
        context: "The Dhammapada"
      },
      {
        text: "Speak only if it improves upon the silence.",
        author: "Mahatma Gandhi",
        context: "Nonviolence leader"
      },
      {
        text: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",
        context: "The Soul of Man under Socialism, 1891"
      },
      {
        text: "We are all connected; to each other, biologically. To the earth, chemically. To the rest of the universe, atomically.",
        author: "Neil deGrasse Tyson",
        context: "Astrophysicist"
      },
      {
        text: "The privilege of a lifetime is being who you truly are.",
        author: "e.e. cummings",
        context: "Poet"
      },
      {
        text: "To be nobody but yourself in a world which is doing its best, night and day, to make you everybody else — means to fight the hardest battle which any human being can fight.",
        author: "e.e. cummings",
        context: "Poet"
      },
      {
        text: "You are enough. You have enough. You do enough.",
        author: "Brené Brown",
        context: "Researcher & storyteller"
      },
      {
        text: "Rest is not idleness, and to lie sometimes on the grass under trees on a summer's day, listening to the murmur of the water, is by no means a waste of time.",
        author: "John Lubbock",
        context: "The Use of Life, 1894"
      },
      {
        text: "Not all those who wander are lost.",
        author: "J.R.R. Tolkien",
        context: "The Fellowship of the Ring, 1954"
      },
      {
        text: "The wound is the place where the light enters you.",
        author: "Rumi",
        context: "13th century poet"
      },
      {
        text: "There is no greater agony than bearing an untold story inside you.",
        author: "Maya Angelou",
        context: "I Know Why the Caged Bird Sings, 1969"
      },
      {
        text: "Vulnerability sounds like truth and feels like courage. Truth and courage aren't always comfortable, but they're never weakness.",
        author: "Brené Brown",
        context: "Daring Greatly, 2012"
      },
      {
        text: "The practice of gratitude as a tool for happiness has been in the mainstream for years. Long before, gratitude was considered a virtue — the greatest of all.",
        author: "Marcus Tullius Cicero",
        context: "Roman statesman"
      },
      {
        text: "Gratitude turns what we have into enough.",
        author: "Aesop",
        context: "Ancient storyteller"
      },
      {
        text: "This too shall pass.",
        author: "Persian adage",
        context: "Traditional"
      },
      {
        text: "You are not a drop in the ocean. You are the entire ocean in a drop.",
        author: "Rumi",
        context: "13th century poet"
      },
      {
        text: "The most common form of despair is not being who you are.",
        author: "Søren Kierkegaard",
        context: "The Sickness unto Death, 1849"
      },
      {
        text: "Life can only be understood backwards; but it must be lived forwards.",
        author: "Søren Kierkegaard",
        context: "Journals, 1843"
      },
      {
        text: "Anxiety is the dizziness of freedom.",
        author: "Søren Kierkegaard",
        context: "The Concept of Anxiety, 1844"
      },
      {
        text: "To venture causes anxiety, but not to venture is to lose oneself.",
        author: "Søren Kierkegaard",
        context: "The Sickness unto Death, 1849"
      },
      {
        text: "The greatest thing a human soul ever does in this world is to see something and tell what it saw in a plain way.",
        author: "John Ruskin",
        context: "Modern Painters, 1843"
      },
      {
        text: "The best time to plant a tree was twenty years ago. The second best time is now.",
        author: "Chinese proverb",
        context: "Traditional"
      },
      {
        text: "He who has a why to live can bear almost any how.",
        author: "Friedrich Nietzsche",
        context: "Twilight of the Idols, 1889"
      },
      {
        text: "Without music, life would be a mistake.",
        author: "Friedrich Nietzsche",
        context: "Twilight of the Idols, 1889"
      },
      {
        text: "Become who you are.",
        author: "Friedrich Nietzsche",
        context: "Thus Spoke Zarathustra, 1883"
      },
      {
        text: "In individuals, insanity is rare; but in groups, parties, nations, and epochs, it is the rule.",
        author: "Friedrich Nietzsche",
        context: "Philosopher"
      },
      {
        text: "Silence is the language of God; all else is poor translation.",
        author: "Rumi",
        context: "13th century poet"
      },
      {
        text: "The quieter you become, the more you can hear.",
        author: "Baba Ram Dass",
        context: "Be Here Now, 1971"
      },
      {
        text: "Trust yourself. You know more than you think you do.",
        author: "Benjamin Spock",
        context: "Baby and Child Care, 1946"
      },
      {
        text: "The cave you fear to enter holds the treasure you seek.",
        author: "Joseph Campbell",
        context: "The Hero with a Thousand Faces, 1949"
      },
      {
        text: "When I let go of what I am, I become what I might be.",
        author: "Lao Tzu",
        context: "Tao Te Ching"
      }
  ];

  function getDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  const index = getDayOfYear() % quotes.length;
  res.status(200).json({ ...quotes[index], index });
}
