import type { BlogBlock, BlogPost } from "@/lib/blog/types";
import { BALANCED_MEAL_PLAN_LINKS } from "@/content/blogs/balanced-meal-plan-dubai-links";

export const balancedMealPlanDubai: BlogPost = {
  slug: "balanced-meal-plan-dubai",
  title: "Balanced Meal Plan in Dubai: What a Balanced Plate Really Looks Like",
  metaTitle: "Balanced Meal Plan Dubai: What a Balanced Plate Looks Like",
  description:
    "What does balanced really mean? Use WHO and UAE guidance to build a balanced plate, check any meal plan’s numbers and spot five signs of real balance.",
  publishedAt: "2026-10-25",
  readTimeMinutes: 9,
  category: "Guides",
  author: {
    name: "Chef Radhey",
    role: "Nutritionist Chef",
  },
  coverImage: {
    src: "/hm-stories/plates-teal-tray.jpg",
    alt: "Healthy Minds plates arranged on a teal tray",
  },
  linkAnchors: BALANCED_MEAL_PLAN_LINKS,
  blocks: [
    {
      type: "paragraph",
      text: "Every menu in Dubai says “balanced”. Almost none of them tell you what that means.",
    },
    {
      type: "paragraph",
      text: "This guide fixes that. You’ll learn what the World Health Organization and the UAE say a balanced diet is, how to build a plate you can trust, and how to check the numbers on any meal plan in five minutes. Chef Radhey and the Healthy Minds team wrote it for people who want a clear answer, not another slogan.",
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
      text: "A balanced meal plan fills about half your plate with vegetables, a quarter with protein and a quarter with starch, then keeps your total calories in line with how active you are. It limits salt, sugar and unhealthy fats and includes variety. Ask any plan to show its numbers so you can check the balance yourself.",
    },
    {
      type: "paragraph",
      text: "Three points to remember:",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Balanced is a range, not one magic ratio.",
        "Variety matters as much as portions.",
        "A plan that calls itself balanced should be able to show its numbers.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "What does “balanced” actually mean?",
      id: "what-balanced-means",
    },
    {
      type: "paragraph",
      text: "The World Health Organization breaks a healthy diet into four principles. You can read them in its healthy diet fact sheet.",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Adequacy: you get the nutrients you need, without going over, so nothing runs short.",
        "Balance: the energy you eat matches the energy you use, with a sensible mix of protein, fat and carbohydrate.",
        "Moderation: you limit foods and ingredients that can harm your health over time, like too much salt and sugar.",
        "Diversity: you eat a wide variety of nutritious foods across all the food groups.",
      ],
    },
    {
      type: "paragraph",
      text: "Notice what’s missing. There’s no single perfect ratio, and no banned food. Balance is about the whole pattern, not one meal.",
    },
    {
      type: "heading",
      level: 2,
      text: "What does the UAE say?",
      id: "uae",
    },
    {
      type: "paragraph",
      text: "The UAE has its own guide. The Ministry of Health and Prevention published the UAE Dietary Guidelines in 2019, and the FAO summary explains how they work.",
    },
    {
      type: "paragraph",
      text: "The food guide uses the Burj Khalifa as its picture, with six food groups: cereals, vegetables, dairy products, fruit, meat and fat. Water forms the base of the tower. The guidelines’ key messages include:",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Eat a variety of nutrient rich foods and drinks.",
        "Cut calories by cutting sugar, saturated and trans fat, and salt.",
        "Swap unhealthy foods for healthy ones.",
        "Keep food safe.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "What does a balanced plate look like?",
      id: "plate",
    },
    {
      type: "paragraph",
      text: "Dubai Health Authority gave a simple picture in a 2018 awareness campaign. A healthy meal for adults and children is a quarter protein, a quarter starch and half vegetables. You can read the Gulf News report. It’s a few years old, but the idea still works.",
    },
    {
      type: "paragraph",
      text: "You can also build it with your hand. A portion guide published by Khaleej Times uses one palm of lean protein, one or two fists of vegetables, one fist of healthy carbs and one thumb of healthy fat. See the original guide.",
    },
    {
      type: "paragraph",
      text: "Put those together and you get a plate that looks like this:",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Half the plate: vegetables or salad",
        "A quarter: lean protein like chicken, fish, eggs, beans or lentils",
        "A quarter: starch like brown rice, whole grain bread or potatoes",
        "A thumb of healthy fat, like olive oil, nuts or avocado",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "What are the numbers behind balanced?",
      id: "numbers",
    },
    {
      type: "paragraph",
      text: "WHO gives clear ranges for most healthy adults:",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Carbohydrates: about 45 to 75% of your daily energy, mostly from whole grains, vegetables, fruit and pulses",
        "Fat: 15 to 30% of your energy, with less than 10% from saturated fat",
        "Protein: 10 to 15% of your energy is generally enough for adults, though athletes and people building muscle may need more",
        "Fruit and vegetables: at least 400 grams a day",
        "Fibre: at least 25 grams a day",
        "Free sugars: under 10% of your energy, which is about 50 grams on a 2,000 calorie day",
        "Salt: under 5 grams a day",
      ],
    },
    {
      type: "paragraph",
      text: "These are guides for most healthy adults, not rules for everyone. Age, activity and health all change what’s right for you.",
    },
    {
      type: "heading",
      level: 2,
      text: "Why do two balanced plans look so different?",
      id: "why-different",
    },
    {
      type: "paragraph",
      text: "Because balanced is a range, and some brands stretch it. The Cochrane review of low carb diets defines a balanced carb diet as 150 grams or more of carbs a day, or 45 to 65% of energy. WHO says about 45 to 75%. Both are sensible, and they overlap. You can read the Cochrane summary and The Conversation’s plain language version.",
    },
    {
      type: "paragraph",
      text: "Here’s the catch. A plan can be high in protein and low in carbs and still call itself balanced. If a 1,600 calorie day contains 75 grams of carbs, those carbs make up under a fifth of your energy. On the Cochrane ladder, that’s low carb, not balanced. The label tells you less than the numbers do.",
    },
    {
      type: "heading",
      level: 2,
      text: "How can you check a plan’s balance yourself?",
      id: "check-the-numbers",
    },
    {
      type: "paragraph",
      text: "You only need three numbers from the plan: calories, carbs and protein grams, and fat grams. Then do this quick math.",
    },
    {
      type: "list",
      style: "ordered",
      items: [
        "Multiply carb grams by 4 to get carb calories.",
        "Multiply protein grams by 4 to get protein calories.",
        "Multiply fat grams by 9 to get fat calories.",
        "Divide each result by the total calories to get the percentage.",
      ],
    },
    {
      type: "paragraph",
      text: "Try it on a 2,000 calorie day with 275 grams of carbs, 75 grams of protein and 66 grams of fat:",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Carbs: 275 x 4 = 1,100 calories, about 55%",
        "Protein: 75 x 4 = 300 calories, about 15%",
        "Fat: 66 x 9 = 594 calories, about 30%",
      ],
    },
    {
      type: "paragraph",
      text: "That lines up with WHO’s ranges. If the numbers on a plan land far outside them, ask why.",
    },
    {
      type: "heading",
      level: 2,
      text: "What about salt, sugar and Dubai’s favourite foods?",
      id: "salt-sugar",
    },
    {
      type: "paragraph",
      text: "Salt is the quiet problem. WHO says most salt in many countries comes from processed foods like ready meals, processed meats, cheese, salty snacks and bread, or from things added in cooking like stock cubes, soy sauce and fish sauce. The Dubai Health Authority also called out salted fish, canned meats and table sauces.",
    },
    {
      type: "paragraph",
      text: "A few habits help:",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Taste your food before you add salt or sauce.",
        "Choose fresh or frozen fish and meat over salted or canned.",
        "Go easy on stock cubes, soy sauce and bottled dressings.",
        "Reach for fruit, nuts and plain yogurt instead of sweet snacks.",
        "Add herbs, lemon, garlic, spices and sumac for flavour.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Does balanced mean the same for everyone?",
      id: "everyone",
    },
    {
      type: "paragraph",
      text: "No. WHO says the exact make up of a healthy diet changes with age, gender, lifestyle and activity. A desk worker, a new runner and a lifter all balance their plates differently.",
    },
    {
      type: "paragraph",
      text: "If you train hard, our guide on high protein eating in Dubai shows how much protein you may need. If you’re curious about cutting carbs, read our guide to the low carb question. And if you’re joining the Dubai Fitness Challenge, see what to eat around your 30 minutes.",
    },
    {
      type: "heading",
      level: 2,
      text: "What do three balanced plates look like?",
      id: "three-plates",
    },
    {
      type: "paragraph",
      text: "Use the same hand method and shift one dial at a time. These are simple starting points, not medical advice.",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Steady everyday plate: one palm of protein, two fists of vegetables, one fist of starch, one thumb of fat.",
        "Lighter plate for weight loss: keep the palm of protein, add a third fist of vegetables, and trim the starch to about three quarters of a fist.",
        "Fuel up plate for training days: keep the vegetables, keep the protein, and add a little extra starch before or after your workout.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "What does a balanced day look like in Dubai?",
      id: "sample-day",
    },
    {
      type: "paragraph",
      text: "Here’s one idea. Swap in dishes you love.",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Breakfast: eggs with whole grain bread, tomato and cucumber",
        "Lunch: grilled fish or chicken with a big salad and a fist of rice",
        "Snack: fruit with a handful of nuts, or plain yogurt",
        "Dinner: lentil soup, grilled chicken or fish, and roasted vegetables",
      ],
    },
    {
      type: "paragraph",
      text: "Nothing here is banned or boring. It simply puts vegetables and protein first and keeps starch, sauce and salt in check.",
    },
    {
      type: "heading",
      level: 2,
      text: "What are five signs a meal plan is truly balanced?",
      id: "five-signs",
    },
    {
      type: "list",
      style: "ordered",
      items: [
        "It shows calories and macros for the whole day, not just a headline.",
        "Vegetables and fruit appear at most meals, and you can see the fibre.",
        "It shows salt and sugar, not just protein.",
        "It offers variety, so you aren’t eating the same few foods.",
        "A named expert stands behind it, and it doesn’t drop a whole food group without a reason.",
      ],
    },
    {
      type: "paragraph",
      text: "If a plan can’t show these, keep asking questions.",
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
        "Treating balanced as equal thirds of carbs, protein and fat",
        "Cutting out whole food groups with no medical reason",
        "Trusting the word balanced without checking numbers",
        "Forgetting drinks, sauces and snacks, which add salt, sugar and calories fast",
        "Expecting every single meal to be perfect",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Who should talk to a doctor or dietitian first?",
      id: "doctor",
    },
    {
      type: "paragraph",
      text: "Check with a professional before changing how you eat if you:",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Have diabetes, or take medication for blood sugar",
        "Have high blood pressure, kidney disease or heart problems",
        "Are pregnant or breastfeeding",
        "Have food allergies or intolerances",
        "Have a history of disordered eating",
      ],
    },
    {
      type: "paragraph",
      text: "Diabetes is common in the UAE. The International Diabetes Federation reports that 20.7% of UAE adults had diabetes in 2024, about 1.27 million people. See the IDF country page.",
    },
    {
      type: "heading",
      level: 2,
      text: "How can Healthy Minds help?",
      id: "healthy-minds",
    },
    {
      type: "paragraph",
      text: "Our chefs plate and weigh meals in our Business Bay kitchen. Browse the weekly menu and use the Balanced filter to see what a steady, everyday plate looks like, then compare goals and plan lengths on the plans page.",
    },
    {
      type: "paragraph",
      text: "Tell us that you want a balanced everyday plan, and our team will message you on WhatsApp to fit it to your day.",
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
      text: "What is a balanced diet?",
      id: "faq-diet",
    },
    {
      type: "paragraph",
      text: "One that follows four ideas: enough nutrients, energy that matches your needs, limits on things like salt and sugar, and a wide variety of foods.",
    },
    {
      type: "heading",
      level: 3,
      text: "What does a balanced plate look like?",
      id: "faq-plate",
    },
    {
      type: "paragraph",
      text: "About half vegetables, a quarter protein and a quarter starch, with a little healthy fat.",
    },
    {
      type: "heading",
      level: 3,
      text: "How many carbs are balanced?",
      id: "faq-carbs",
    },
    {
      type: "paragraph",
      text: "WHO says about 45 to 75% of your energy, and the Cochrane review used 45 to 65%.",
    },
    {
      type: "heading",
      level: 3,
      text: "How much protein is balanced?",
      id: "faq-protein",
    },
    {
      type: "paragraph",
      text: "WHO says 10 to 15% of energy is generally enough for adults. Athletes and people building muscle may need more.",
    },
    {
      type: "heading",
      level: 3,
      text: "Is a balanced plan good for weight loss?",
      id: "faq-weight",
    },
    {
      type: "paragraph",
      text: "It can be, when it keeps portions and calories in check. The plan has to fit you, so ask a professional if you have a health condition.",
    },
    {
      type: "heading",
      level: 3,
      text: "How much salt is too much?",
      id: "faq-salt",
    },
    {
      type: "paragraph",
      text: "WHO says under 5 grams a day for adults.",
    },
    {
      type: "heading",
      level: 3,
      text: "Do I have to eat perfectly at every meal?",
      id: "faq-perfect",
    },
    {
      type: "paragraph",
      text: "No. Balance comes from your whole pattern over days and weeks, not from one plate.",
    },
    {
      type: "heading",
      level: 2,
      text: "The bottom line",
      id: "bottom-line",
    },
    {
      type: "paragraph",
      text: "Balanced means variety, sensible portions and limits on salt, sugar and unhealthy fats. Use the plate and the quick math to check any plan, and ask to see the numbers behind the label.",
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
        "WHO: healthy diet fact sheet",
        "FAO: UAE Dietary Guidelines",
        "Gulf News: adults encouraged not to skip meals (2018)",
        "Khaleej Times: eating right is the name of the game (2017)",
        "Cochrane: low carbohydrate versus balanced carbohydrate diets",
        "The Conversation: do low carb diets help you lose weight?",
        "International Diabetes Federation: UAE",
      ],
    },
  ] satisfies BlogBlock[],
  cta: {
    heading: "A plate you can check",
    text: "Browse the weekly menu and use the Balanced filter, then compare plan lengths. Tell us you want an everyday plate, and the kitchen will message you on WhatsApp.",
    buttonLabel: "View plans",
    buttonHref: "/plans",
  },
};
