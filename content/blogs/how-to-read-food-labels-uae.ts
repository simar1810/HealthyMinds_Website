import type { BlogBlock, BlogPost } from "@/lib/blog/types";
import { HOW_TO_READ_FOOD_LABELS_UAE_LINKS } from "@/content/blogs/how-to-read-food-labels-uae-links";

export const howToReadFoodLabelsUae: BlogPost = {
  slug: "how-to-read-food-labels-uae",
  title:
    "How to Read Food Labels in the UAE: Nutri-Mark, Dubai’s A to E Label and Hidden Salt Explained",
  metaTitle: "How to Read Food Labels in the UAE: Nutri-Mark Explained",
  description:
    "Confused by Nutri-Mark and the new A to E labels? Learn what each one means, what’s still unclear and a 60 second routine to read any food label.",
  publishedAt: "2026-10-28",
  readTimeMinutes: 11,
  category: "Guides",
  author: {
    name: "Chef Radhey",
    role: "Nutritionist Chef",
  },
  coverImage: {
    src: "/hm-stories/plates-black-bag.jpg",
    alt: "Healthy Minds meal boxes ready for delivery",
  },
  linkAnchors: HOW_TO_READ_FOOD_LABELS_UAE_LINKS,
  blocks: [
    {
      type: "paragraph",
      text: "You pick up a packet in the supermarket and see a big letter A on the front. Great, right? Maybe. In the UAE right now, there are two very different A to E labels, and mixing them up can send you home with the wrong food.",
    },
    {
      type: "paragraph",
      text: "This guide sorts it out. You’ll learn what Nutri-Mark really measures, what Dubai’s new grade really checks, which parts are still unclear, and a simple routine for reading any label in about a minute. Chef Radhey and the Healthy Minds team wrote it so you can shop, and order meals, with confidence.",
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
      text: "Check serving size, calories, sugar, salt, saturated fat and fibre on any pack, and compare products using the per 100 g column. Nutri-Mark grades nutritional quality from A to E. Dubai’s new A to E grade only rates whether the label is accurate. Neither replaces reading the numbers.",
    },
    {
      type: "paragraph",
      text: "Three points to remember:",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "A letter grade is a shortcut, not the whole story.",
        "Per 100 g lets you compare fairly, and per serving shows what you’d actually eat.",
        "Always ask what a label is measuring before you trust it.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Why are there two A to E labels in the UAE?",
      id: "two-labels",
    },
    {
      type: "paragraph",
      text: "Because two different authorities built two different tools.",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Nutri-Mark comes from Abu Dhabi. It grades a food’s nutritional quality.",
        "Dubai’s A to E grade comes from Dubai Central Laboratory. It grades how accurately a label matches what’s in the food.",
      ],
    },
    {
      type: "paragraph",
      text: "Some headlines blur the two. One report describes Dubai’s version as a traffic light style label that helps shoppers pick products that suit their diet. Another explains plainly that the grade is not a health rating, and an A is not necessarily healthier than another grade. The second reading is the one that matches what the laboratory actually does.",
    },
    {
      type: "heading",
      level: 2,
      text: "What is Nutri-Mark?",
      id: "nutri-mark",
    },
    {
      type: "paragraph",
      text: "Nutri-Mark is a front of pack label created by the Abu Dhabi Quality and Conformity Council. It gives a food a grade from A (dark green) to E (dark orange), which sits on the front so you can compare products at a glance. The official Nutri-Mark Q and A explains the rules.",
    },
    {
      type: "paragraph",
      text: "Here’s how it works:",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "It builds on the 2023 revision of Nutri-Score, a system first used in France in 2017.",
        "It calculates the grade per 100 g or 100 mL of the product as sold.",
        "Points against a food: energy, sugars, salt and saturated fat (plus sweeteners in drinks).",
        "Points in its favour: protein, fibre, fruit, vegetables, legumes, nuts and some oils like olive.",
        "Officials say it isn’t meant to split foods into good and bad. It helps you compare similar products and see which is healthier from a nutrition point of view.",
        "Companies must certify products and get a licence, and certified products face testing in the market to check the declared values.",
      ],
    },
    {
      type: "paragraph",
      text: "You can also scan a Nutri-Mark QR code through the TAMM app at participating retailers, and a June 2026 report says four major retail chains took part. The official Q and A adds that the mark itself must still appear on the pack, and a QR code can’t replace it.",
    },
    {
      type: "heading",
      level: 2,
      text: "Is Nutri-Mark mandatory? What we know today",
      id: "mandatory",
    },
    {
      type: "paragraph",
      text: "Status as of 27 October 2026. Sources disagree, so here is what the ones I checked say.",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Some trade sites said Abu Dhabi would make Nutri-Mark mandatory for five product categories from 1 June 2025. Those categories were oils, dairy, beverages, baked goods and children’s food.",
        "A later review says the start was delayed to the last quarter of 2025, and that in February 2026 Abu Dhabi described the label as launched, without stating a mandatory date.",
        "A June 2026 FoodNavigator report says Nutri-Mark has not yet been made mandatory in the country, though some of the region’s largest food brands have reformulated products to earn better grades.",
        "The official Q and A says Nutri-Mark is currently an Abu Dhabi initiative, with nothing stopping its use on products sold in other emirates. Abu Dhabi is pushing for adoption across the UAE and the GCC.",
      ],
    },
    {
      type: "paragraph",
      text: "The honest answer is that this is changing, so check with the Abu Dhabi Quality and Conformity Council before you rely on any date. We’ll update this post when the rules move. You can also read the regulatory review from Food Research Lab, which lists these dates and warns that Dubai, Sharjah and federal positions aren’t established.",
    },
    {
      type: "heading",
      level: 2,
      text: "Are brands changing their recipes?",
      id: "reformulation",
    },
    {
      type: "paragraph",
      text: "Yes. One of the UAE’s largest dairy firms, Al Ain Farms, said it would reduce added sugars by 10% to 20% in flavoured milk, yoghurt and laban, with the updated products due on shelves by September 2026. When a label can raise or lower a product’s grade, brands tend to adjust the recipe.",
    },
    {
      type: "heading",
      level: 2,
      text: "What does Nutri-Mark leave out?",
      id: "exclusions",
    },
    {
      type: "paragraph",
      text: "It doesn’t grade everything. According to the official Q and A, these are excluded or exempt:",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Infant food, sports nutrition products and food supplements",
        "Foods for special medical purposes and total diet replacement foods",
        "Alcoholic drinks above 0.5% alcohol",
        "Single ingredient fresh foods, like fruit, vegetables, cut raw meat and honey",
        "Herbs, spices, salt, tea and coffee",
        "Very small packs, and small quantities of handcrafted food sold directly to customers",
      ],
    },
    {
      type: "paragraph",
      text: "So a fresh salad and a fresh steak won’t carry a grade. That doesn’t mean they’re bad, only that Nutri-Mark isn’t designed for them.",
    },
    {
      type: "heading",
      level: 2,
      text: "What is Dubai’s A to E label?",
      id: "dubai-grade",
    },
    {
      type: "paragraph",
      text: "Dubai Central Laboratory launched a testing service in September 2026. It examines a food product, checks whether the numbers on the pack match what’s really inside, and gives the label an accuracy grade from A to E. It covers sugar, fat, calories, protein, carbohydrates, fibre and sodium.",
    },
    {
      type: "paragraph",
      text: "Think of it like a trust score for the numbers. An A means the label is accurate. It doesn’t mean the food is low in sugar or high in fibre. The service lets businesses check their labels before or after products reach shelves. You can read the Khaleej Times report and the TravelsDubai explainer, which spells out that the grade isn’t a health rating.",
    },
    {
      type: "heading",
      level: 2,
      text: "Is there a third label I might see?",
      id: "sehhi",
    },
    {
      type: "paragraph",
      text: "Possibly. In Abu Dhabi, the Public Health Centre runs a “Sehhi” label that marks products meeting set nutritional criteria. You may spot it in supermarkets, cafes, restaurants and workplace canteens, as reported by Gulf News. It’s a separate scheme from Nutri-Mark.",
    },
    {
      type: "heading",
      level: 2,
      text: "What’s the 60 second routine for any label?",
      id: "sixty-seconds",
    },
    {
      type: "paragraph",
      text: "UAE dietitians quoted by Gulf News suggest a simple order:",
    },
    {
      type: "list",
      style: "ordered",
      items: [
        "Serving size. How much is one serving, and how many servings are in the pack?",
        "Calories. How much energy does one serving give you?",
        "Sugar. Check how much is in a serving.",
        "Saturated fat. Lower is better.",
        "Salt or sodium. Lower is better.",
        "Fibre. Higher is better.",
        "Ingredient list. The first few items make up most of the product.",
      ],
    },
    {
      type: "paragraph",
      text: "If the label shows %NRV (percentage of nutrient reference value), a dietitian quoted there says 5% or below per serving is low and 15 to 20% or more is high. That helps you spot high sodium or sugar and low fibre at a glance.",
    },
    {
      type: "heading",
      level: 2,
      text: "Should you compare per 100 g or per serving?",
      id: "per-100g",
    },
    {
      type: "paragraph",
      text: "Use per 100 g to compare two products, because it puts them on the same footing. Use per serving to see what you’d actually eat. Nutri-Mark itself uses the per 100 g figures.",
    },
    {
      type: "paragraph",
      text: "Here’s a made up example to show why it matters:",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Snack A: a 30 g serving has 6 g of sugar. That’s 20 g of sugar per 100 g.",
        "Snack B: a 50 g serving has 8 g of sugar. That’s 16 g of sugar per 100 g.",
      ],
    },
    {
      type: "paragraph",
      text: "Snack B looks sweeter per serving, but Snack A is sweeter by weight. The quick maths is sugar per serving, divided by serving size, times 100.",
    },
    {
      type: "heading",
      level: 2,
      text: "How do you compare salt and sodium?",
      id: "salt-sodium",
    },
    {
      type: "paragraph",
      text: "Labels use both, which gets confusing. The conversion is simple. Sodium equals salt divided by 2.5, so salt equals sodium times 2.5.",
    },
    {
      type: "paragraph",
      text: "WHO says adults should keep salt under 5 grams a day, which is about 2 grams of sodium. See WHO’s healthy diet fact sheet. Here’s an example: a ready meal with 800 mg of sodium holds 2 g of salt, which is 40% of WHO’s daily limit in one meal.",
    },
    {
      type: "paragraph",
      text: "WHO also notes that much of our salt comes from processed foods like ready meals, processed meats, cheese, salty snacks and bread, plus cooking additions like stock cubes, soy sauce and fish sauce.",
    },
    {
      type: "heading",
      level: 2,
      text: "What about sugar and fibre?",
      id: "sugar-fibre",
    },
    {
      type: "paragraph",
      text: "WHO says to keep free sugars under 10% of your daily energy, about 50 grams on a 2,000 calorie day, and to aim for at least 25 grams of fibre. Labels often list total sugars, which can include sugars that occur naturally in milk and fruit. Check the ingredient list for added forms, like syrup or juice concentrate, and look for fibre as a plus.",
    },
    {
      type: "heading",
      level: 2,
      text: "How do you decode health claims?",
      id: "claims",
    },
    {
      type: "paragraph",
      text: "Front of pack words sell products, so read them carefully.",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "“Natural”, “low fat”, “no added sugar”: each describes one thing. Check the full numbers.",
        "“Cholesterol free”: a chef quoted by Gulf News points out that an olive oil can say this even though plant oils never contain cholesterol. It sounds like a benefit but tells you nothing about the oil’s overall quality.",
        "A big letter on the front: ask what it measures. Is it nutrition quality (Nutri-Mark) or label accuracy (Dubai’s grade)?",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Are restaurant calorie counts exact?",
      id: "menu-calories",
    },
    {
      type: "paragraph",
      text: "No. A Gulf News report from August 2026 says Dubai Municipality’s programme asks food establishments to calculate calories from the quantity of ingredients and the serving size. It says the maximum permitted variance for declared calories is 20%.",
    },
    {
      type: "paragraph",
      text: "That means a dish listed at 500 calories could be anywhere from about 400 to 600. Treat menu calories as a helpful guide, not a lab result. Rules on menu calories have changed over the years, so it’s fair to ask a restaurant whether its numbers are calculated or tested.",
    },
    {
      type: "heading",
      level: 2,
      text: "Does cooking change a label?",
      id: "cooking",
    },
    {
      type: "paragraph",
      text: "It can. The official Nutri-Mark Q and A says recipes are scored using the nutritional values of the cooked ingredients. For pre packaged fried products designed for a deep fryer, it says deep frying can worsen the grade by one or two letters. The lesson is simple: grilled, roasted and baked food usually keeps your numbers better than deep fried food.",
    },
    {
      type: "heading",
      level: 2,
      text: "How do you read a meal plan like a label?",
      id: "meal-plan",
    },
    {
      type: "paragraph",
      text: "Packaged food has rules about labels, but meal plans often leave you guessing. Ask any plan for these numbers:",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Calories per meal, and per day",
        "Protein, carbs and fat",
        "Fibre",
        "Salt or sodium",
        "Sugar",
        "Portion weight",
        "Whether the numbers are tested or calculated, and how much they can vary",
        "Who checked them",
      ],
    },
    {
      type: "paragraph",
      text: "Then compare them with the standards in our guide to a balanced plate. If a plan can’t answer, keep looking.",
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
        "Trusting the front of the pack instead of the numbers",
        "Comparing products per serving when the serving sizes differ",
        "Mixing up salt and sodium",
        "Treating an A grade as proof that a food is healthy",
        "Forgetting that sauces, drinks and snacks add up",
        "Expecting menu calories to be exact",
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
      text: "Get professional advice before you change how you eat if you have:",
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "Diabetes or high blood sugar. The International Diabetes Federation reports that 20.7% of UAE adults had diabetes in 2024. See the IDF country page.",
        "High blood pressure or kidney problems, where salt matters",
        "Food allergies or intolerances",
        "A pregnancy",
        "A history of disordered eating, or if counting numbers makes you anxious",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "How can Healthy Minds help?",
      id: "healthy-minds",
    },
    {
      type: "paragraph",
      text: "Our chefs cook and portion meals in our Business Bay kitchen. Browse the weekly menu to see what a plate looks like, then compare goals and plan lengths on the plans page.",
    },
    {
      type: "paragraph",
      text: "Tell us which numbers matter most to you, such as calories, protein or salt, and our team will message you on WhatsApp to talk it through.",
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
      text: "What is Nutri-Mark?",
      id: "faq-nutri-mark",
    },
    {
      type: "paragraph",
      text: "A front of pack label from Abu Dhabi that grades a food’s nutritional quality from A to E, based on Nutri-Score.",
    },
    {
      type: "heading",
      level: 3,
      text: "Is Nutri-Mark mandatory?",
      id: "faq-mandatory",
    },
    {
      type: "paragraph",
      text: "It isn’t clear. Sources disagree, and a June 2026 report says it isn’t mandatory nationally. Check with the Quality and Conformity Council.",
    },
    {
      type: "heading",
      level: 3,
      text: "What does Dubai’s A to E label mean?",
      id: "faq-dubai",
    },
    {
      type: "paragraph",
      text: "It rates whether the numbers on a label are accurate, based on laboratory tests. It isn’t a health rating.",
    },
    {
      type: "heading",
      level: 3,
      text: "Is an A grade always healthier?",
      id: "faq-a-grade",
    },
    {
      type: "paragraph",
      text: "Not necessarily. Under Nutri-Mark, an A means better nutritional quality within its category. Under Dubai’s system, an A means an accurate label.",
    },
    {
      type: "heading",
      level: 3,
      text: "What should I check first on a food label?",
      id: "faq-first",
    },
    {
      type: "paragraph",
      text: "Serving size, then calories, sugar, saturated fat, salt and fibre.",
    },
    {
      type: "heading",
      level: 3,
      text: "How do I convert sodium to salt?",
      id: "faq-convert",
    },
    {
      type: "paragraph",
      text: "Multiply sodium by 2.5. WHO’s limit is under 5 g of salt a day, about 2 g of sodium.",
    },
    {
      type: "heading",
      level: 3,
      text: "Are restaurant calorie counts exact?",
      id: "faq-calories",
    },
    {
      type: "paragraph",
      text: "No. The reported allowable variance is 20%, so treat them as a guide.",
    },
    {
      type: "heading",
      level: 2,
      text: "The bottom line",
      id: "bottom-line",
    },
    {
      type: "paragraph",
      text: "Two A to E labels don’t mean the same thing, and neither replaces reading the numbers. Learn what each one measures, compare per 100 g, watch salt and sugar, and ask any meal plan to show its numbers too.",
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
        "Gulf News: before you buy, what UAE food labels are really telling you",
        "Abu Dhabi QCC: Nutri-Mark Q and A",
        "FoodNavigator: UAE’s Nutri-Mark nutrition labelling system goes digital",
        "Khaleej Times: Dubai to get traffic light style indicators on food product labels",
        "TravelsDubai: Dubai’s new A to E food labels explained",
        "Food Research Lab: UAE Nutri-Mark reformulation timelines",
        "WHO: healthy diet fact sheet",
        "International Diabetes Federation: UAE",
      ],
    },
  ] satisfies BlogBlock[],
  cta: {
    heading: "Numbers you can check",
    text: "Browse the weekly menu, then compare goals and plan lengths. Tell us which numbers matter most, and the kitchen will message you on WhatsApp.",
    buttonLabel: "View plans",
    buttonHref: "/plans",
  },
};
