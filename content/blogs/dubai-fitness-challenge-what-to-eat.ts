import type { BlogBlock, BlogPost } from "@/lib/blog/types";
import { DUBAI_FITNESS_CHALLENGE_LINKS } from "@/content/blogs/dubai-fitness-challenge-what-to-eat-links";

export const dubaiFitnessChallengeWhatToEat: BlogPost = {
  slug: "dubai-fitness-challenge-what-to-eat",
  title: "What to Eat During the Dubai Fitness Challenge: A Simple Food Guide for Your 30 Minutes a Day",
  metaTitle: "What to Eat During the Dubai Fitness Challenge 2026",
  description:
    "Not sure what to eat for your daily 30 minutes? Get a simple guide to what to eat before and after your workout, plus a four week plan.",
  publishedAt: "2026-10-19",
  readTimeMinutes: 8,
  category: "Guides",
  author: {
    name: "Chef Radhey",
    role: "Nutritionist Chef",
  },
  coverImage: {
    src: "/hm-stories/plates-salad-pizza.jpg",
    alt: "Healthy Minds salad and pizza plates",
  },
  linkAnchors: DUBAI_FITNESS_CHALLENGE_LINKS,
  blocks: [
    {
      type: "paragraph",
      text: "The Dubai Fitness Challenge starts on 31 October. You’ll move for 30 minutes a day, for 30 days. The harder question is what to put on your plate around all that movement.",
    },
    {
      type: "paragraph",
      text: "Search for answers and you’ll find advice written for marathon runners, weightlifters and everyone in between. This guide sorts it out. You’ll learn what to eat before and after your workout, how to match your food to how hard you train, and how to build a four week routine that lasts. Chef Radhey and the Healthy Minds team wrote it for normal people with normal schedules.",
    },
    {
      type: "heading",
      level: 2,
      text: "What’s the short answer?",
      id: "short-answer",
    },
    {
      type: "callout",
      variant: "highlight",
      text: "Eat a balanced meal two to four hours before your workout, or a small snack 30 to 60 minutes before. Afterwards, have a protein snack within about an hour, then a full meal a few hours later. Easy walks need very little. Hard sessions need more.",
    },
    {
      type: "paragraph",
      text: "Three rules cover most people:",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "You don’t need a special diet for the challenge.",
        "Match your food to the size of your workout.",
        "Your daily eating pattern matters more than perfect timing.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Why does workout food advice feel so confusing?",
      id: "why-confusing",
    },
    {
      type: "paragraph",
      text: "Because most of it is written for different people.",
    },
    {
      type: "paragraph",
      text: "Cleveland Clinic’s sports dietitian, Kate Patton, gives different ratios for different workouts. For endurance training like running, she suggests about 4 grams of carbohydrates for every gram of protein per meal. For strength training, she suggests about 2 grams of carbs for every gram of protein. After a light workout when you ate little beforehand, she suggests about 3 grams of carbs for every gram of protein. You can read her full advice on the Cleveland Clinic site.",
    },
    {
      type: "paragraph",
      text: "Those are three different plates for three different goals. When one website tells you to load up on carbs and another says to pile on protein, they may both be right for their own reader.",
    },
    {
      type: "paragraph",
      text: "A Dubai nutritionist said something simpler to first time challenge participants. In a 2017 Khaleej Times piece, Lovely Ranganath of the Dubai World Trade Centre said first timers needn’t fret over the details. She suggested eating mostly plants, getting ample protein, and adjusting carbs and fats to your activity level. The article is a few years old, but the advice still holds up.",
    },
    {
      type: "heading",
      level: 2,
      text: "How big is your 30 minutes?",
      id: "how-big",
    },
    {
      type: "paragraph",
      text: "Here’s a simple way to think about it. This grouping is ours, built on the sources above, so adjust it to how you feel.",
    },
    {
      type: "paragraph",
      text: "An easy 30 is a brisk walk, gentle yoga or light cycling. Cleveland Clinic says you may be able to skip a pre workout snack before an easy 30 minute walk. Have your next normal meal afterwards, and drink water.",
    },
    {
      type: "paragraph",
      text: "A moderate 30 is a jog, a class, a swim or a steady ride. Eat a balanced meal a few hours ahead, or a small carb snack before. Have a protein and carb snack within an hour after.",
    },
    {
      type: "paragraph",
      text: "A hard 30 is lifting, intervals or a tough class. Eat a proper meal two to four hours before, and add 20 to 40 grams of protein afterwards.",
    },
    {
      type: "heading",
      level: 2,
      text: "What should you eat before your workout?",
      id: "before",
    },
    {
      type: "paragraph",
      text: "UNMC’s Center for Healthy Living suggests a higher carbohydrate meal or snack two to four hours before exercise, paired with a little protein. Cleveland Clinic suggests a balanced meal three to four hours ahead, and a snack 30 to 60 minutes before if you’re short on time. Keep fat and fibre low close to your workout, since they digest slowly and can upset your stomach.",
    },
    {
      type: "paragraph",
      text: "Easy pre workout snacks:",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Greek yogurt with fruit",
        "Whole grain toast with nut butter",
        "A banana, or a banana with a protein shake",
        "Fruit, a granola bar or crackers",
      ],
    },
    {
      type: "paragraph",
      text: "Drinking water matters too. Cleveland Clinic suggests 16 to 20 ounces, about half a litre, an hour before you start.",
    },
    {
      type: "heading",
      level: 2,
      text: "What if you train first thing in the morning?",
      id: "morning",
    },
    {
      type: "paragraph",
      text: "You probably won’t want a big breakfast at 6 am, and you don’t need one. Cleveland Clinic points out that your blood sugar runs low after sleep, and a piece of fruit or a granola bar can give you the boost you need. Then eat a proper breakfast after your session.",
    },
    {
      type: "heading",
      level: 2,
      text: "What should you eat after your workout?",
      id: "after",
    },
    {
      type: "paragraph",
      text: "Cleveland Clinic suggests a protein packed snack 15 minutes to an hour after you finish, followed by a full meal of carbs and protein a few hours later. If you’re not hungry, a protein shake works.",
    },
    {
      type: "paragraph",
      text: "After strength training, UNMC suggests 20 to 40 grams of high quality protein. That matches the range in the International Society of Sports Nutrition’s position stand on protein.",
    },
    {
      type: "paragraph",
      text: "Easy recovery ideas:",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Grilled chicken with rice",
        "Cottage cheese and fruit",
        "Hummus with whole grain crackers",
        "Greek yogurt with granola and blueberries",
        "Avocado toast with an egg",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Do you need to eat right after an easy walk?",
      id: "easy-walk",
    },
    {
      type: "paragraph",
      text: "Usually not. After a light session, your next regular meal does the job. Drink water and eat when you’re hungry.",
    },
    {
      type: "paragraph",
      text: "UNMC makes a point worth remembering. Meeting your daily protein needs matters more than eating protein at an exact moment after your workout. So don’t stress over a missed window.",
    },
    {
      type: "heading",
      level: 2,
      text: "How much protein do you need during the challenge?",
      id: "protein",
    },
    {
      type: "paragraph",
      text: "Your daily total matters more than any single snack. Most people who train do well on 1.4 to 2.0 grams of protein per kilogram of body weight. We break down the math, sample days and common mistakes in our guide to high protein eating in Dubai, so check your number there first.",
    },
    {
      type: "heading",
      level: 2,
      text: "What does a day of eating look like?",
      id: "sample-day",
    },
    {
      type: "paragraph",
      text: "These samples use everyday foods, so swap in whatever you enjoy.",
    },
    {
      type: "heading",
      level: 3,
      text: "Morning exerciser",
      id: "morning-exerciser",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Before: a banana, or a small piece of fruit",
        "After: eggs with whole grain toast and fruit",
        "Lunch and dinner: balanced plates with protein, vegetables and carbs",
      ],
    },
    {
      type: "heading",
      level: 3,
      text: "Lunchtime exerciser",
      id: "lunchtime-exerciser",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Breakfast: yogurt with fruit and oats, about three hours before",
        "After: a protein snack, then a full lunch",
        "Dinner: a lighter plate with protein and vegetables",
      ],
    },
    {
      type: "heading",
      level: 3,
      text: "Evening exerciser",
      id: "evening-exerciser",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Lunch: a balanced meal with carbs and protein",
        "Before: a small snack 30 to 60 minutes ahead",
        "After: a protein snack, then dinner with protein and carbs",
      ],
    },
    {
      type: "paragraph",
      text: "If you’d like meals planned around these timings, browse our menu and use the high protein filter.",
    },
    {
      type: "heading",
      level: 2,
      text: "How do you eat for the bigger challenge days?",
      id: "event-days",
    },
    {
      type: "paragraph",
      text: "The official programme includes four major public events. According to Gulf News, they are Dubai Ride on 1 November, Dubai Stand Up Paddle on 7 and 8 November, Dubai Run on 22 November, and Dubai Yoga on 29 November. You can check the schedule on the Dubai Fitness Challenge site.",
    },
    {
      type: "paragraph",
      text: "Here’s how to fuel for them.",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Dubai Ride, Stand Up Paddle and Dubai Run: these last longer than your usual 30. Cleveland Clinic says that if you’re exercising for an hour or more, you should eat something first. Eat a balanced meal three to four hours ahead, add a small carb snack close to the start, and take water with you.",
        "Dubai Yoga: Cleveland Clinic suggests avoiding heavy, high fat foods and gassy vegetables like cabbage and broccoli before yoga. A small snack with carbs and protein, like apple slices with peanut butter, works better.",
      ],
    },
    {
      type: "paragraph",
      text: "Practise your plan on a normal training day first. Race morning is the wrong time to try something new.",
    },
    {
      type: "heading",
      level: 2,
      text: "What’s your four week plan?",
      id: "four-week-plan",
    },
    {
      type: "paragraph",
      text: "Copy this into your notes.",
    },
    {
      type: "heading",
      level: 3,
      text: "Week one: build the habit.",
      id: "week-one",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Pick your workout time and set your meal times around it.",
        "Choose two go to pre workout snacks.",
        "Drink water before every session.",
      ],
    },
    {
      type: "heading",
      level: 3,
      text: "Week two: check your protein.",
      id: "week-two",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Count your protein for three days.",
        "Add a protein snack after workouts if you’re falling short.",
      ],
    },
    {
      type: "heading",
      level: 3,
      text: "Week three: fix what’s not working.",
      id: "week-three",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Feeling tired mid workout? Move your snack earlier or add carbs.",
        "Feeling bloated? Cut fat and fibre before training.",
        "Hungry at night? Check your dinner portions.",
      ],
    },
    {
      type: "heading",
      level: 3,
      text: "Week four: lock it in.",
      id: "week-four",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Keep the three habits that worked best.",
        "Plan your meals for the week after the challenge, so the routine keeps going.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "What mistakes should you avoid?",
      id: "mistakes",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Skipping food before a hard session",
        "Copying a runner’s carb heavy plan on easy days",
        "Treating every workout as a reason to eat a huge meal",
        "Forgetting your daily protein total",
        "Trying new foods on event day",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Who should talk to a doctor first?",
      id: "doctor",
    },
    {
      type: "paragraph",
      text: "If you’re new to exercise, pregnant, managing a medical condition, or taking regular medication, ask your doctor before you change your training or eating. This guide is general information, not medical advice.",
    },
    {
      type: "heading",
      level: 2,
      text: "How can Healthy Minds help?",
      id: "healthy-minds",
    },
    {
      type: "paragraph",
      text: "Our chefs cook and portion meals in our Business Bay kitchen. Browse the weekly menu to find high protein and balanced dishes, then compare goals and plan lengths on the plans page.",
    },
    {
      type: "paragraph",
      text: "Tell us your workout time and goal there, and our team will message you on WhatsApp with a plan that fits your day.",
    },
    {
      type: "heading",
      level: 2,
      text: "Quick answers",
      id: "quick-answers",
    },
    {
      type: "heading",
      level: 3,
      text: "Should I eat before a 30 minute workout?",
      id: "faq-before",
    },
    {
      type: "paragraph",
      text: "It depends on the workout. For an easy walk, you may be fine without a snack. For anything harder, eat a small carb snack 30 to 60 minutes ahead, or a balanced meal a few hours before.",
    },
    {
      type: "heading",
      level: 3,
      text: "What should I eat after a 30 minute workout?",
      id: "faq-after",
    },
    {
      type: "paragraph",
      text: "A protein snack within about an hour, then a full meal a few hours later. After a light session, your next regular meal is enough.",
    },
    {
      type: "heading",
      level: 3,
      text: "Do I need extra protein for the challenge?",
      id: "faq-protein",
    },
    {
      type: "paragraph",
      text: "Not extra, but enough. Aim for your daily range, and add 20 to 40 grams after strength sessions.",
    },
    {
      type: "heading",
      level: 3,
      text: "Is it okay to work out in the morning without breakfast?",
      id: "faq-morning",
    },
    {
      type: "paragraph",
      text: "Many people do. A piece of fruit or a granola bar gives your blood sugar a lift, and you can eat a full breakfast afterwards.",
    },
    {
      type: "heading",
      level: 3,
      text: "What if I only walk?",
      id: "faq-walk",
    },
    {
      type: "paragraph",
      text: "Keep your normal meals, drink water, and don’t overthink it.",
    },
    {
      type: "heading",
      level: 3,
      text: "Can I follow this as a vegetarian?",
      id: "faq-vegetarian",
    },
    {
      type: "paragraph",
      text: "Yes. Use yogurt, eggs, cottage cheese, tofu, lentils and hummus for protein.",
    },
    {
      type: "heading",
      level: 3,
      text: "When does the Dubai Fitness Challenge 2026 start and end?",
      id: "faq-dates",
    },
    {
      type: "paragraph",
      text: "It runs from 31 October to 29 November, according to Gulf News and the official site.",
    },
    {
      type: "heading",
      level: 2,
      text: "The bottom line",
      id: "bottom-line",
    },
    {
      type: "paragraph",
      text: "Size your food to your workout. Eat before harder sessions, refuel afterwards, and drink water throughout. Keep your daily protein steady, and build habits you can hold on to after 29 November.",
    },
    {
      type: "heading",
      level: 2,
      text: "Sources",
      id: "sources",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Cleveland Clinic: Should you eat before or after a workout?",
        "UNMC: Get Moving, simple nutrition tips to fuel your fitness",
        "International Society of Sports Nutrition position stand: protein and exercise",
        "Gulf News: Dubai Fitness Challenge 2026",
        "Khaleej Times: Eating right is the name of the game (2017)",
        "Dubai Fitness Challenge",
      ],
    },
  ] satisfies BlogBlock[],
  cta: {
    heading: "Meals timed around the 30 minutes",
    text: "Browse the weekly menu, then compare plan lengths. Tell us your workout time and goal, and the kitchen will message you on WhatsApp.",
    buttonLabel: "View plans",
    buttonHref: "/plans",
  },
};
