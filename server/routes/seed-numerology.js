const express = require("express");
const router = express.Router();
const lifePathModel = require("../models/LifePathSchema");

router.post("/", async (_, res) => {
  const lifePaths = [
    new lifePathModel({
      pathNumber: 1,
      title: "The Natural Born Leader",
      description:
        "The Life Path 1 is one of leadership and trailblazing. With a strong sense of independence, you do not like relying on other people, especially if you feel they are holding you back. Often, you may feel like it is better to go it alone.",
    }),
    new lifePathModel({
      pathNumber: 2,
      title: "The Diplomat",
      description:
        "As a Life Path 2 you will find yourself attracted to a life of building and nurturing relationships. You bring unity and compassion to the world with your big heart and have a tendency to bring out the good in people in your life.",
    }),
    new lifePathModel({
      pathNumber: 3,
      title: "The Creative",
      description:
        "People with a Life Path 3 are the most artistic in the bunch. You find ways of creating the most beautiful things in this world such as art, music, literature, etc. You breathe life into culture, and make it seem so simple because of your natural gift for expression.",
    }),
    new lifePathModel({
      pathNumber: 4,
      title: "The Worker",
      description:
        "The life of a Life Path 4 is one of work and discipline to feel stable. You do not like taking short-cuts and often feel that the best way to do anything is through dedications and perseverance. You can see through “Get Rich Quick” schemes and consider them to be a waste of time, you see that time as being better spent working towards the solid goal.",
    }),
    new lifePathModel({
      pathNumber: 5,
      title: "The Flexible Five",
      description:
        "The Life Path 5 loves to have variety in life. Anything new is exciting. Whether it is traveling to a place you’ve never been, or meeting new people, you are always looking for that next experience and adventure.",
    }),
    new lifePathModel({
      pathNumber: 6,
      title: "The Harmonizer",
      description:
        "The Life Path 6 looks for ways to make harmony with everything you encounter. Whether it is art, music, or relationships, no other Life Path can make things coalesce as naturally as you can. Your magnetic personality draws people in and can lead to you being the center of attention.",
    }),
    new lifePathModel({
      pathNumber: 7,
      title: "Seeker of Knowledge",
      description:
        "As a Life Path 7 you are always looking for the answers. Whether the question is big or small, doesn’t matter, it’s the glory of finding the answer that drives you. This can lead to some interesting journeys during your life since you tend to seek spiritual or inner self understanding.",
    }),
    new lifePathModel({
      pathNumber: 8,
      title: "The Powerhouse",
      description:
        "As a Life Path 8 you are alive to make an impact on the world through your drive and ambition. You are a person of authority, and material wealth. You will often master the art of being successful in the career of your choosing.",
    }),
    new lifePathModel({
      pathNumber: 9,
      title: "The Humanitarian",
      description:
        "You have great compassion and idealism. You are a utopian, and will spend your life trying to realize some aspect of your utopian dream, sacrificing money, time, and energy for a better world. It is in giving that you will find much satisfaction. You have a broad outlook on life. You tend to see the big picture, rather than the minute details.",
    }),
    new lifePathModel({
      pathNumber: 11,
      title: "The Healer",
      description:
        "You know you’re different, you don’t need other people to tell you that. As a Life Path 11, life is filled with mysterious connections and experiences that just seem to “Pop Up”. You’re more intuitive, or sensitive, than other people you know.",
    }),
    new lifePathModel({
      pathNumber: 22,
      title: "The Master Builder",
      description:
        "The Life Path 22 is one of the most powerful and influential paths in numerology. Your own abilities may seem overwhelming at times, and difficult to manage, but learning to harness your gifts will allow you greater control over your destiny, and in some cases, the destiny of others. This may cause you to feel as though a heavy burden rests on your shoulders. Be careful not to take on too much at once. And at the same time, don’t be afraid to challenge yourself.",
    }),
    new lifePathModel({
      pathNumber: 33,
      title: "The Master Teacher",
      description:
        "This individual's focus is on reaching the world and uplifting the loving energy of mankind. They are not concerned with personal ambition, and have great devotion to their cause. A birth date that reduces down to 33 is very rare. When it does happen you may be looking at a great and significant spiritual leader along the lines of the Dalai Lama (Life Path 22) or Gandhi (Life Path 9). Remember that 33 is the higher, double digit vibration of Life Path Number 6, a very nurturing and responsible number.",
    }),
  ];

  for await (const index of lifePaths) index.save();
  res.json({ status: "ok" });
 
});

module.exports = router;