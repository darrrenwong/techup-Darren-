// Recipe Database
const recipes = {
    breakfast: [
        {
            title: "Avocado Toast with Eggs",
            image: "/images/eggs.png",
            prepTime: "15 minutes",
            calories: 350,
            ingredients: [
                "2 slices whole grain bread",
                "1 ripe avocado",
                "2 eggs",
                "Salt and pepper to taste"
            ],
            steps: [
                "Toast the bread until golden brown",
                "Mash the avocado and spread on toast",
                "Fry or poach eggs to your liking",
                "Place eggs on top of avocado toast",
                "Season with salt and pepper"
            ],
            nutritionInfo: {
                protein: "14g",
                carbs: "30g",
                fats: "22g",
                fiber: "8g"
            }
        },
        {
            title: "Greek Yogurt Berry Bowl",
            image: "/images/yogurt.png",
            prepTime: "10 minutes",
            calories: 280,
            ingredients: [
                "1 cup Greek yogurt",
                "1/2 cup mixed berries (strawberries, blueberries, raspberries)",
                "2 tablespoons honey",
                "1/4 cup granola",
                "1 tablespoon chia seeds"
            ],
            steps: [
                "Add Greek yogurt to a serving bowl",
                "Top with mixed berries",
                "Drizzle with honey",
                "Sprinkle granola and chia seeds on top",
                "Serve immediately while fresh"
            ],
            nutritionInfo: {
                protein: "17g",
                carbs: "35g",
                fats: "8g",
                fiber: "5g"
            }
        },
        {
            title: "Veggie Omelette",
            image: "/images/Veggie.png",
            prepTime: "20 minutes",
            calories: 300,
            ingredients: [
                "3 large eggs",
                "1/4 cup bell peppers, diced",
                "1/4 cup mushrooms, sliced",
                "1/4 cup spinach leaves",
                "1/4 cup onions, diced",
                "1/4 cup shredded cheese",
                "2 tablespoons milk",
                "1 tablespoon butter",
                "Salt and pepper to taste"
            ],
            steps: [
                "Whisk eggs and milk together in a bowl",
                "Season with salt and pepper",
                "Sauté vegetables in butter until softened",
                "Pour egg mixture over vegetables in the pan",
                "Cook until edges start to set",
                "Add cheese on one half",
                "Fold omelette in half",
                "Cook until cheese melts and eggs are set"
            ],
            nutritionInfo: {
                protein: "21g",
                carbs: "8g",
                fats: "22g",
                fiber: "2g"
            }
        },
        {
            title: "Overnight Chia Seed Pudding",
            image: "/images/Overnight.png",
            prepTime: "5 minutes + 8 hours refrigeration",
            calories: 250,
            ingredients: [
                "1/4 cup chia seeds",
                "1 cup almond milk (or milk of choice)",
                "2 tablespoons maple syrup or honey",
                "1/2 teaspoon vanilla extract",
                "Toppings: fresh fruits, nuts, or granola",
                "Pinch of salt"
            ],
            steps: [
                "In a jar or bowl, combine chia seeds, milk, sweetener, vanilla, and salt",
                "Whisk well to combine, making sure there are no clumps",
                "Cover and refrigerate for at least 8 hours or overnight",
                "Stir well before serving",
                "Top with fresh fruits, nuts, or granola as desired",
                "Can be stored in refrigerator for up to 5 days"
            ],
            nutritionInfo: {
                protein: "7g",
                carbs: "25g",
                fats: "12g",
                fiber: "11g"
            }
        },
        {
            title: "Banana Nut Smoothie",
            image: "/images/banana.png",
            prepTime: "5 minutes",
            calories: 320,
            ingredients: [
                "2 ripe bananas",
                "1 cup almond milk",
                "2 tablespoons almond butter",
                "1/4 cup walnuts",
                "1 tablespoon honey",
                "1/2 teaspoon cinnamon",
                "1 cup ice cubes",
                "Optional: 1 scoop vanilla protein powder"
            ],
            steps: [
                "Peel and break bananas into chunks",
                "Add bananas, almond milk, almond butter, walnuts, honey, and cinnamon to blender",
                "Add ice cubes",
                "Blend until smooth and creamy",
                "Add more almond milk if needed for desired consistency",
                "Pour into glasses and garnish with banana slices and crushed walnuts if desired"
            ],
            nutritionInfo: {
                protein: "8g",
                carbs: "42g",
                fats: "16g",
                fiber: "6g"
            }
        },
        {
            title: "Avocado and Spinach Smoothie",
            image: "/images/green.png",
            prepTime: "5 minutes",
            calories: 285,
            ingredients: [
                "1/2 ripe avocado",
                "2 cups fresh spinach",
                "1 banana",
                "1 cup coconut water",
                "1/2 cup Greek yogurt",
                "1 tablespoon honey",
                "1/2 lime, juiced",
                "1 cup ice cubes",
                "Optional: 1 scoop vanilla protein powder"
            ],
            steps: [
                "Add spinach and coconut water to blender first",
                "Blend until spinach is well broken down",
                "Add avocado, banana, Greek yogurt, honey, and lime juice",
                "Add ice cubes",
                "Blend until smooth and creamy",
                "Adjust thickness with more coconut water if needed",
                "Taste and adjust sweetness if desired"
            ],
            nutritionInfo: {
                protein: "10g",
                carbs: "35g",
                fats: "15g",
                fiber: "8g"
            }
        },
        {
            title: "Breakfast Burrito Wrap",
            image: "/images/burrito.png",
            prepTime: "15 minutes",
            calories: 380,
            ingredients: [
                "2 large eggs",
                "1 large flour tortilla",
                "1/4 cup shredded cheddar cheese",
                "2 tablespoons salsa",
                "1/2 avocado, sliced",
                "Salt and pepper to taste"
            ],
            steps: [
                "Scramble eggs with salt and pepper until just set",
                "Warm tortilla in a pan or microwave",
                "Layer scrambled eggs in center of tortilla",
                "Add cheese while eggs are still warm",
                "Top with avocado slices and salsa",
                "Fold in sides of tortilla and roll tightly",
                "Optional: Return to pan to warm through"
            ],
            nutritionInfo: {
                protein: "18g",
                carbs: "28g",
                fats: "22g",
                fiber: "6g"
            }
        },
// ... existing recipes ...
{
    title: "Apple Greek Yogurt",
    image: "/images/apple.png",
    prepTime: "10 minutes",
    calories: 260,
    ingredients: [
        "1 cup plain Greek yogurt",
        "1 apple, diced",
        "1 tablespoon honey",
        "2 tablespoons granola",
        "Optional: 1 tablespoon chopped walnuts"
    ],
    steps: [
        "Add Greek yogurt to a serving bowl",
        "Dice apple into small cubes",
        "Mix honey into the yogurt",
        "Top with diced apples",
        "Sprinkle with granola",
        "Add chopped walnuts if desired",
        "Serve immediately while fresh"
    ],
    nutritionInfo: {
        protein: "15g",
        carbs: "31g",
        fats: "8g",
        fiber: "4g"
    }
},
// ... remaining recipes ...
{
    title: "Breakfast Quinoa Bowl",
    image: "/images/bowl.png",
    prepTime: "25 minutes",
    calories: 310,
    ingredients: [
        "1/2 cup quinoa",
        "1 cup milk of choice",
        "1 banana, sliced",
        "1 tablespoon honey",
        "2 tablespoons sliced almonds",
        "1/4 cup mixed berries",
        "Optional: 1 tablespoon chia seeds"
    ],
    steps: [
        "Rinse quinoa thoroughly",
        "Cook quinoa with milk until fluffy (about 15-20 minutes)",
        "Transfer to serving bowl",
        "Top with sliced banana and berries",
        "Drizzle with honey",
        "Sprinkle with sliced almonds",
        "Add chia seeds if desired",
        "Serve while warm"
    ],
    nutritionInfo: {
        protein: "12g",
        carbs: "48g",
        fats: "9g",
        fiber: "6g"
    }
},
{
    title: "Egg Wrap",
    image: "/images/egg wrap.png",
    prepTime: "10 minutes",
    calories: 260,
    ingredients: [
        "3 large eggs",
        "1/4 cup shredded cheese",
        "1 handful fresh spinach",
        "2 slices turkey breast",
        "Salt and pepper to taste"
    ],
    steps: [
        "Whisk eggs with salt and pepper",
        "Heat a non-stick pan over medium heat",
        "Pour eggs to form a thin circle (like a crepe)",
        "When eggs are almost set, add cheese",
        "Layer spinach and turkey on one half",
        "Fold edges over to form a wrap",
        "Cook for another minute until cheese melts",
        "Serve immediately while warm"
    ],
    nutritionInfo: {
        protein: "24g",
        carbs: "3g",
        fats: "16g",
        fiber: "1g"
    }
},
        // Add more breakfast recipes here
    ],
    lunch: [
        {
            title: "Chicken & Veggie Stir-Fry with Rice",
            image: "/images/brocoli.png",
            prepTime: "25 minutes",
            calories: 420,
            ingredients: [
                "2 chicken breasts, diced",
                "1 cup broccoli florets",
                "1 carrot, sliced",
                "1 bell pepper, sliced",
                "2 cups cooked rice",
                "2 tablespoons soy sauce",
                "1 tablespoon ginger, minced",
                "2 cloves garlic, minced",
                "Salt and pepper to taste"
            ],
            steps: [
                "Cook rice according to package instructions",
                "Season diced chicken with salt and pepper",
                "Cook chicken in a non-stick pan until golden",
                "Remove chicken, set aside",
                "In the same pan, stir-fry vegetables until crisp-tender",
                "Add garlic and ginger, cook for 1 minute",
                "Return chicken to pan",
                "Add soy sauce and stir to combine",
                "Serve hot over rice"
            ],
            nutritionInfo: {
                protein: "35g",
                carbs: "45g",
                fats: "10g",
                fiber: "5g"
            }
        },
        {
            title: "Salmon & Avocado Salad",
            image: "/images/saladS.png",
            prepTime: "20 minutes",
            calories: 370,
            ingredients: [
                "6 oz salmon fillet",
                "1 avocado, sliced",
                "3 cups mixed salad greens",
                "1/2 cucumber, sliced",
                "1/2 cup cherry tomatoes",
                "Dressing:",
                "1 tablespoon olive oil",
                "Salt and pepper to taste"
            ],
            steps: [
                "Season salmon with salt and pepper",
                "Cook salmon in a non-stick pan (4-5 minutes per side)",
                "Arrange salad greens on a plate",
                "Top with sliced cucumber and tomatoes",
                "Add sliced avocado",
                "Break salmon into large pieces and place on top",
                "Drizzle with olive oil and season to taste",
                "Serve immediately"
            ],
            nutritionInfo: {
                protein: "32g",
                carbs: "10g",
                fats: "27g",
                fiber: "7g"
            }
        },
        {
            title: "Ground Beef & Quinoa Bowl",
            image: "/images/bowl2.png",
            prepTime: "25 minutes",
            calories: 450,
            ingredients: [
                "1/2 cup quinoa",
                "1 cup water",
                "1/2 lb lean ground beef",
                "1 cup spinach",
                "1/2 cup cherry tomatoes, halved",
                "1/2 avocado, sliced",
                "1 tablespoon olive oil",
                "Salt and pepper to taste"
            ],
            steps: [
                "Rinse quinoa and cook with water until fluffy (about 15 minutes)",
                "Season ground beef with salt and pepper",
                "Cook beef in a pan until browned",
                "Add spinach to beef and cook until wilted",
                "Divide quinoa into bowls",
                "Top with beef and spinach mixture",
                "Add cherry tomatoes and avocado slices",
                "Drizzle with olive oil and serve"
            ],
            nutritionInfo: {
                protein: "35g",
                carbs: "32g",
                fats: "25g",
                fiber: "8g"
            }
        },
        {
            title: "Shrimp & Avocado Wrap",
            image: "/images/wrap2.png",
            prepTime: "15 minutes",
            calories: 380,
            ingredients: [
                "8 large shrimp, peeled and deveined",
                "1 large tortilla wrap",
                "1 avocado, sliced",
                "1 cup lettuce, chopped",
                "1/2 cup cherry tomatoes, halved",
                "1 tablespoon olive oil",
                "Salt and pepper to taste"
            ],
            steps: [
                "Season shrimp with salt and pepper",
                "Cook shrimp in olive oil until pink (2-3 minutes per side)",
                "Warm tortilla slightly",
                "Layer lettuce on the tortilla",
                "Add sliced avocado and tomatoes",
                "Place cooked shrimp on top",
                "Roll the wrap tightly, tucking in the sides",
                "Cut diagonally and serve"
            ],
            nutritionInfo: {
                protein: "24g",
                carbs: "28g",
                fats: "22g",
                fiber: "9g"
            }
        },
        {
            title: "Chicken & Lentil Soup",
            image: "/images/lentil.png",
            prepTime: "40 minutes",
            calories: 320,
            ingredients: [
                "2 chicken breasts, diced",
                "1 cup red lentils",
                "2 carrots, chopped",
                "2 celery stalks, chopped",
                "1 onion, diced",
                "4 cups chicken broth",
                "2 cups water",
                "2 cloves garlic, minced",
                "Salt and pepper to taste"
            ],
            steps: [
                "Rinse lentils thoroughly",
                "Cook diced chicken in the pot until no longer pink",
                "Add onion, carrots, and celery, cook until softened",
                "Add garlic and cook for 1 minute",
                "Add lentils, broth, and water",
                "Bring to a boil, then reduce heat",
                "Simmer for 20-25 minutes until lentils are tender",
                "Season with salt and pepper",
                "Serve hot"
            ],
            nutritionInfo: {
                protein: "28g",
                carbs: "35g",
                fats: "6g",
                fiber: "12g"
            }
        },
        {
            title: "Beef & Veggie Stir-Fry",
            image: "/images/beef stir.png",
            prepTime: "25 minutes",
            calories: 380,
            ingredients: [
                "1/2 lb beef strips",
                "2 cups broccoli florets",
                "1 carrot, sliced",
                "1 bell pepper, sliced",
                "1 cup snap peas",
                "2 tablespoons soy sauce",
                "2 cloves garlic, minced",
                "1 tablespoon ginger, minced",
                "Salt and pepper to taste"
            ],
            steps: [
                "Season beef strips with salt and pepper",
                "Cook beef in a hot pan until browned (2-3 minutes)",
                "Remove beef and set aside",
                "In the same pan, stir-fry vegetables until crisp-tender",
                "Add garlic and ginger, cook for 1 minute",
                "Return beef to pan",
                "Add soy sauce and stir to combine",
                "Cook for additional 2 minutes",
                "Serve hot"
            ],
            nutritionInfo: {
                protein: "32g",
                carbs: "18g",
                fats: "20g",
                fiber: "6g"
            }
        },
        {
            title: "Chicken & Potato Bake",
            image: "/images/potato.png",
            prepTime: "1 hour",
            calories: 420,
            ingredients: [
                "4 chicken thighs",
                "4 medium potatoes, quartered",
                "2 carrots, chopped",
                "1 onion, chunked",
                "3 cloves garlic, whole",
                "2 tablespoons olive oil",
                "1 teaspoon dried rosemary",
                "Salt and pepper to taste"
            ],
            steps: [
                "Preheat oven to 400°F (200°C)",
                "Place chicken thighs in a baking dish",
                "Arrange potatoes, carrots, onion, and garlic around chicken",
                "Drizzle with olive oil",
                "Season everything with rosemary, salt, and pepper",
                "Cover with foil and bake for 30 minutes",
                "Remove foil and bake for additional 20-25 minutes",
                "Check chicken is cooked through",
                "Serve hot"
            ],
            nutritionInfo: {
                protein: "32g",
                carbs: "38g",
                fats: "18g",
                fiber: "5g"
            }
        },
        {
            title: "Chicken & Veggie Wrap",
            image: "/images/veggie wrap2.png",
            prepTime: "20 minutes",
            calories: 380,
            ingredients: [
                "2 chicken breasts, sliced",
                "2 large tortilla wraps",
                "1 cup lettuce, chopped",
                "1 bell pepper, sliced",
                "1/2 avocado, sliced",
                "Salt and pepper to taste"
            ],
            steps: [
                "Season chicken with salt and pepper",
                "Cook chicken in a pan until done (6-8 minutes)",
                "Warm tortillas slightly",
                "Layer lettuce on each tortilla",
                "Add cooked chicken",
                "Top with bell peppers and avocado",
                "Roll tightly and cut diagonally",
                "Serve immediately"
            ],
            nutritionInfo: {
                protein: "28g",
                carbs: "32g",
                fats: "15g",
                fiber: "8g"
            }
        },
        {
            title: "Tomato Salmon Skillet",
            image: "/images/skillet.png",
            prepTime: "25 minutes",
            calories: 360,
            ingredients: [
                "2 salmon fillets",
                "2 cups cherry tomatoes",
                "2 cups spinach",
                "3 cloves garlic, minced",
                "1 tablespoon olive oil",
                "1/2 cup chicken broth",
                "Salt and pepper to taste"
            ],
            steps: [
                "Season salmon fillets with salt and pepper",
                "Heat olive oil in a large skillet",
                "Cook salmon skin-side up for 4 minutes",
                "Flip and cook for another 3-4 minutes",
                "Remove salmon and set aside",
                "In same skillet, add garlic and tomatoes",
                "Cook until tomatoes start to burst",
                "Add spinach and chicken broth, cook until wilted",
                "Return salmon to skillet to warm through",
                "Serve hot"
            ],
            nutritionInfo: {
                protein: "35g",
                carbs: "12g",
                fats: "22g",
                fiber: "4g"
            }
        },
        {
            title: "Shrimp & Avocado Rice Bowl",
            image: "/images/shrimp.png",
            prepTime: "20 minutes",
            calories: 410,
            ingredients: [
                "12 large shrimp, peeled and deveined",
                "1 cup cooked white rice",
                "1 avocado, sliced",
                "1 cup cucumber, diced",
                "1/2 cup cherry tomatoes, halved",
                "1 tablespoon olive oil",
                "2 cloves garlic, minced",
                "Salt and pepper to taste"
            ],
            steps: [
                "Cook rice according to package instructions",
                "Season shrimp with salt and pepper",
                "Heat olive oil in a pan",
                "Add garlic and cook for 30 seconds",
                "Add shrimp and cook until pink (2-3 minutes per side)",
                "Divide rice between bowls",
                "Top with cooked shrimp",
                "Add sliced avocado, cucumber, and tomatoes",
                "Serve immediately"
            ],
            nutritionInfo: {
                protein: "26g",
                carbs: "42g",
                fats: "20g",
                fiber: "7g"
            }
        },
        // Add more lunch recipes here
    ],
    dinner: [
        {
            title: "Chicken & Spinach Stuffed Peppers",
            image: "/images/stuffed.png",
            prepTime: "45 minutes",
            calories: 340,
            ingredients: [
                "4 large bell peppers, halved lengthwise",
                "2 chicken breasts, diced",
                "2 cups fresh spinach",
                "1 cup cooked rice",
                "1 cup shredded mozzarella",
                "2 cloves garlic, minced",
                "1 tablespoon olive oil",
                "Salt and pepper to taste"
            ],
            steps: [
                "Preheat oven to 375°F (190°C)",
                "Remove seeds from peppers",
                "Cook rice according to package instructions",
                "Heat olive oil in a pan",
                "Cook diced chicken until done",
                "Add garlic and spinach, cook until wilted",
                "Mix chicken mixture with cooked rice",
                "Fill pepper halves with mixture",
                "Top with mozzarella cheese",
                "Bake for 25-30 minutes until peppers are tender",
                "Serve hot"
            ],
            nutritionInfo: {
                protein: "29g",
                carbs: "28g",
                fats: "15g",
                fiber: "4g"
            }
        },
        {
            title: "Salmon & Edamame Stir-Fry",
            image: "/images/eda.png",
            prepTime: "20 minutes",
            calories: 360,
            ingredients: [
                "2 salmon fillets, cut into chunks",
                "1 cup shelled edamame",
                "1 bell pepper, sliced",
                "2 tablespoons soy sauce",
                "2 cloves garlic, minced",
                "1 tablespoon ginger, minced",
                "1 tablespoon olive oil",
                "Salt and pepper to taste"
            ],
            steps: [
                "Season salmon chunks with salt and pepper",
                "Heat olive oil in a large pan or wok",
                "Cook salmon until almost done (3-4 minutes)",
                "Remove salmon and set aside",
                "In same pan, stir-fry bell pepper",
                "Add garlic and ginger",
                "Add edamame and cook until heated",
                "Return salmon to pan",
                "Add soy sauce and stir to combine",
                "Serve hot"
            ],
            nutritionInfo: {
                protein: "33g",
                carbs: "15g",
                fats: "22g",
                fiber: "5g"
            }
        },
        {
        title: "Zucchini & Ground Beef Casserole",
        image: "/images/zucc.png",
        prepTime: "45 minutes",
        calories: 380,
        ingredients: [
            "1 lb ground beef",
            "3 medium zucchini, sliced",
            "1 onion, diced",
            "2 cups shredded cheese",
            "2 cloves garlic, minced",
            "2 tomatoes, diced",
            "1 tablespoon olive oil",
            "Salt and pepper to taste"
        ],
        steps: [
            "Preheat oven to 375°F (190°C)",
            "Heat olive oil in a large pan",
            "Cook onion and garlic until softened",
            "Add ground beef and cook until browned",
            "Season with salt and pepper",
            "Layer half the zucchini in a baking dish",
            "Add half the meat mixture",
            "Add half the diced tomatoes",
            "Repeat layers with remaining zucchini, meat and tomatoes",
            "Sprinkle with cheese",
            "Bake for 25-30 minutes until bubbly",
            "Let rest 5 minutes before serving"
        ],
        nutritionInfo: {
            protein: "32g",
            carbs: "10g",
            fats: "26g",
            fiber: "3g"
        }
    },
    {
        title: "Spiced Grilled Chicken",
        image: "/images/grilled.png",
        prepTime: "30 minutes",
        calories: 320,
        ingredients: [
            "4 chicken breasts",
            "2 cloves garlic, minced",
            "1 teaspoon paprika",
            "1 teaspoon cumin",
            "1 teaspoon oregano",
            "1 tablespoon olive oil",
            "Salt and pepper to taste"
        ],
        steps: [
            "Mix all spices with olive oil to create marinade",
            "Season chicken with salt and pepper",
            "Coat chicken with spice mixture",
            "Let marinate for 15 minutes",
            "Preheat grill or grill pan to medium-high",
            "Grill chicken for 6-7 minutes per side",
            "Check internal temperature reaches 165°F",
            "Let rest for 5 minutes before serving",
            "Serve hot"
        ],
        nutritionInfo: {
            protein: "38g",
            carbs: "2g",
            fats: "18g",
            fiber: "1g"
        }
    },
    {
        title: "Egg & Veggie Frittata",
        image: "/images/fritter.png",
        prepTime: "25 minutes",
        calories: 310,
        ingredients: [
            "8 large eggs",
            "1 cup spinach",
            "1 bell pepper, diced",
            "1 onion, diced",
            "1 cup shredded cheese",
            "1 tablespoon olive oil",
            "Salt and pepper to taste"
        ],
        steps: [
            "Preheat oven to 375°F (190°C)",
            "Whisk eggs with salt and pepper",
            "Heat olive oil in oven-safe skillet",
            "Sauté onion until softened",
            "Add bell pepper and cook for 2 minutes",
            "Add spinach and cook until wilted",
            "Pour beaten eggs over vegetables",
            "Top with shredded cheese",
            "Cook on stovetop for 5 minutes",
            "Transfer to oven for 10-12 minutes until set",
            "Let cool slightly before serving"
        ],
        nutritionInfo: {
            protein: "24g",
            carbs: "8g",
            fats: "22g",
            fiber: "2g"
        }
    },
    {
        title: "Grilled Salmon & Vegetables",
        image: "/images/vegesalmon.png",
        prepTime: "30 minutes",
        calories: 380,
        ingredients: [
            "2 salmon fillets",
            "2 zucchini, sliced",
            "1 bell pepper, sliced",
            "1 onion, chunked",
            "2 tablespoons olive oil",
            "2 cloves garlic, minced",
            "Salt and pepper to taste"
        ],
        steps: [
            "Preheat grill to medium-high heat",
            "Brush salmon with olive oil",
            "Season salmon with garlic, salt, and pepper",
            "Toss vegetables with remaining oil and seasonings",
            "Place salmon skin-side down on grill",
            "Add vegetables to grill in a basket",
            "Grill salmon for 4-5 minutes per side",
            "Grill vegetables until tender-crisp",
            "Check salmon is cooked through",
            "Serve hot"
        ],
        nutritionInfo: {
            protein: "34g",
            carbs: "12g",
            fats: "24g",
            fiber: "4g"
        }
    },
    {
        title: "Chicken & Carrot Soup",
        image: "/images/carrot soup.png",
        prepTime: "35 minutes",
        calories: 280,
        ingredients: [
            "2 chicken breasts, diced",
            "3 carrots, chopped",
            "1 onion, diced",
            "2 celery stalks, chopped",
            "2 cloves garlic, minced",
            "6 cups chicken broth",
            "1 tablespoon olive oil",
            "Salt and pepper to taste"
        ],
        steps: [
            "Heat olive oil in a large pot",
            "Cook diced chicken until no longer pink",
            "Remove chicken and set aside",
            "In same pot, cook onion and garlic",
            "Add carrots and celery, cook for 5 minutes",
            "Add chicken broth and bring to boil",
            "Reduce heat and simmer for 15 minutes",
            "Return chicken to pot",
            "Cook additional 5 minutes",
            "Season with salt and pepper",
            "Serve hot"
        ],
        nutritionInfo: {
            protein: "26g",
            carbs: "18g",
            fats: "12g",
            fiber: "4g"
        }
    },
    {
        title: "Spiced Potato",
        image: "/images/spiced potato.png",
        prepTime: "30 minutes",
        calories: 220,
        ingredients: [
            "4 medium potatoes, cubed",
            "1 onion, diced",
            "2 cloves garlic, minced",
            "1 teaspoon paprika",
            "1 teaspoon cumin",
            "1 tablespoon olive oil",
            "Salt and pepper to taste"
        ],
        steps: [
            "Cut potatoes into even-sized cubes",
            "Heat olive oil in a large pan",
            "Add onion and cook until softened",
            "Add garlic and cook for 1 minute",
            "Add potatoes and spices",
            "Stir to coat potatoes evenly",
            "Cover and cook on medium heat for 15-20 minutes",
            "Stir occasionally until potatoes are tender",
            "Season with salt and pepper",
            "Serve hot"
        ],
        nutritionInfo: {
            protein: "4g",
            carbs: "38g",
            fats: "7g",
            fiber: "4g"
        }
    },
    {
        title: "Baked Cod with Tomato",
        image: "/images/baked cod.png",
        prepTime: "30 minutes",
        calories: 260,
        ingredients: [
            "2 cod fillets",
            "2 tomatoes, sliced",
            "2 cloves garlic, minced",
            "1 tablespoon olive oil",
            "1 tablespoon fresh basil",
            "Salt and pepper to taste"
        ],
        steps: [
            "Preheat oven to 400°F (200°C)",
            "Season cod fillets with salt and pepper",
            "Place cod in baking dish",
            "Layer sliced tomatoes on top",
            "Sprinkle with minced garlic",
            "Drizzle with olive oil",
            "Add fresh basil",
            "Bake for 15-20 minutes",
            "Check fish flakes easily with fork",
            "Serve hot"
        ],
        nutritionInfo: {
            protein: "32g",
            carbs: "8g",
            fats: "12g",
            fiber: "2g"
        }
    },
    {
        title: "ABC Soup",
        image: "/images/ABC soup.png",
        prepTime: "45 minutes",
        calories: 220,
        ingredients: [
            "2 carrots, chopped",
            "2 potatoes, cubed",
            "2 tomatoes, quartered",
            "1 onion, chopped",
            "2 celery stalks, chopped",
            "8 cups water",
            "1/2 lb chicken, chopped",
            "Salt and pepper to taste"
        ],
        steps: [
            "Bring water to boil in a large pot",
            "Add chicken and simmer for 10 minutes",
            "Add carrots, potatoes, and onion",
            "Simmer for 15 minutes",
            "Add tomatoes and celery",
            "Continue cooking for 10-15 minutes",
            "Season with salt and pepper",
            "Check vegetables are tender",
            "Check chicken is cooked through",
            "Serve hot"
        ],
        nutritionInfo: {
            protein: "18g",
            carbs: "24g",
            fats: "6g",
            fiber: "4g"
        }
    },
        // Add more dinner recipes here
    ],
    snacks: [
        {
            title: "Avocado-Yogurt Dip",
            image: "/images/dip.png",
            prepTime: "10 minutes",
            calories: 130,
            ingredients: [
                "1 ripe avocado",
                "1/2 cup plain Greek yogurt",
                "Salt and pepper to taste"
            ],
            steps: [
                "Cut and scoop out avocado",
                "Mash avocado in a bowl",
                "Add Greek yogurt",
                "Season with salt and pepper",
                "Mix until smooth and creamy",
                "Chill for 30 minutes before serving",
                "Serve with vegetables or chips"
            ],
            nutritionInfo: {
                protein: "6g",
                carbs: "7g",
                fats: "11g",
                fiber: "4g"
            }
        },
        {
            title: "Oven Baked Sweet Potato Fries",
            image: "/images/sweet potato.png",
            prepTime: "35 minutes",
            calories: 180,
            ingredients: [
                "2 large sweet potatoes",
                "2 tablespoons olive oil",
                "1 teaspoon paprika",
                "Salt and pepper to taste"
            ],
            steps: [
                "Preheat oven to 425°F (220°C)",
                "Wash and peel sweet potatoes",
                "Cut into even-sized fries",
                "Pat dry with paper towels",
                "Toss with olive oil and seasonings",
                "Arrange in single layer on baking sheet",
                "Bake for 20-25 minutes",
                "Flip halfway through cooking",
                "Bake until crispy and golden",
                "Serve hot"
            ],
            nutritionInfo: {
                protein: "2g",
                carbs: "28g",
                fats: "7g",
                fiber: "4g"
            }
        },
        {
            title: "Apple Wedges & Peanut Butter",
            image: "/images/apple with pb.png",
            prepTime: "5 minutes",
            calories: 200,
            ingredients: [
                "1 large apple",
                "2 tablespoons peanut butter",
                "Optional: cinnamon for sprinkling"
            ],
            steps: [
                "Wash apple thoroughly",
                "Core the apple",
                "Cut apple into wedges",
                "Arrange on a plate",
                "Serve with peanut butter for dipping",
                "Sprinkle with cinnamon if desired"
            ],
            nutritionInfo: {
                protein: "5g",
                carbs: "25g",
                fats: "12g",
                fiber: "5g"
            }
        },
        {
            title: "Roasted Sheet Pan Veggies",
            image: "/images/pan fry.png",
            prepTime: "30 minutes",
            calories: 160,
            ingredients: [
                "2 cups broccoli florets",
                "2 carrots, chopped",
                "1 bell pepper, chunked",
                "1 zucchini, sliced",
                "2 tablespoons olive oil",
                "Salt and pepper to taste"
            ],
            steps: [
                "Preheat oven to 400°F (200°C)",
                "Cut all vegetables into similar sizes",
                "Place vegetables on sheet pan",
                "Drizzle with olive oil",
                "Season with salt and pepper",
                "Toss to coat evenly",
                "Spread in single layer",
                "Roast for 20-25 minutes",
                "Stir halfway through cooking",
                "Serve hot"
            ],
            nutritionInfo: {
                protein: "4g",
                carbs: "18g",
                fats: "8g",
                fiber: "6g"
            }
        },
        {
            title: "Air-Fryer Zucchini Fries",
            image: "/images/z fries.png",
            prepTime: "15 minutes",
            calories: 90,
            ingredients: [
                "2 medium zucchini",
                "1 egg",
                "1 teaspoon paprika",
                "Salt and pepper to taste",
                "Olive oil spray"
            ],
            steps: [
                "Cut zucchini into fry-shaped sticks",
                "Pat dry with paper towels",
                "Beat egg in shallow dish",
                "Season egg with paprika, salt and pepper",
                "Dip zucchini in seasoned egg",
                "Spray air fryer basket with olive oil",
                "Place zucchini in single layer",
                "Spray lightly with olive oil",
                "Air fry at 400°F for 10-12 minutes",
                "Shake basket halfway through",
                "Serve hot"
            ],
            nutritionInfo: {
                protein: "5g",
                carbs: "7g",
                fats: "5g",
                fiber: "2g"
            }
        },
        {
            title: "Broccoli With Spices",
            image: "/images/spiced brocoli.png",
            prepTime: "15 minutes",
            calories: 85,
            ingredients: [
                "2 cups broccoli florets",
                "1 tablespoon olive oil",
                "1 teaspoon paprika",
                "1 teaspoon cumin",
                "Salt and pepper to taste"
            ],
            steps: [
                "Cut broccoli into even-sized florets",
                "Heat olive oil in a large pan",
                "Add broccoli to pan",
                "Sprinkle with spices",
                "Stir to coat evenly",
                "Cook for 5-7 minutes",
                "Stir occasionally",
                "Season with salt and pepper",
                "Serve hot"
            ],
            nutritionInfo: {
                protein: "3g",
                carbs: "8g",
                fats: "5g",
                fiber: "3g"
            }
        },
        {
            title: "Mixed Berry Smoothie",
            image: "/images/mixed berries.png",
            prepTime: "5 minutes",
            calories: 210,
            ingredients: [
                "1 cup mixed berries (strawberries, blueberries, raspberries)",
                "1 banana",
                "1 cup milk",
                "1/2 cup Greek yogurt",
                "1 tablespoon honey",
                "4-5 ice cubes"
            ],
            steps: [
                "Add milk to blender",
                "Add mixed berries and banana",
                "Add Greek yogurt",
                "Add honey",
                "Add ice cubes",
                "Blend until smooth",
                "Add more milk if needed for desired consistency",
                "Serve immediately"
            ],
            nutritionInfo: {
                protein: "10g",
                carbs: "34g",
                fats: "6g",
                fiber: "6g"
            }
        },
        {
            title: "Chia Seed Pudding",
            image: "/images/pudding.png",
            prepTime: "5 minutes + 4 hours refrigeration",
            calories: 235,
            ingredients: [
                "1/4 cup chia seeds",
                "1 cup milk",
                "1 tablespoon honey",
                "Optional toppings: berries, banana slices"
            ],
            steps: [
                "In a jar or bowl, combine milk and chia seeds",
                "Add honey",
                "Stir well to combine",
                "Let sit for 5 minutes, then stir again",
                "Cover and refrigerate for at least 4 hours or overnight",
                "Stir before serving",
                "Add optional toppings",
                "Serve chilled"
            ],
            nutritionInfo: {
                protein: "8g",
                carbs: "27g",
                fats: "11g",
                fiber: "10g"
            }
        },
        {
            title: "Rice Cakes with Peanut Butter",
            image: "/images/rice cake.png",
            prepTime: "5 minutes",
            calories: 190,
            ingredients: [
                "2 plain rice cakes",
                "2 tablespoons peanut butter",
                "Optional toppings: banana slices, berries"
            ],
            steps: [
                "Spread peanut butter evenly on rice cakes",
                "Add optional toppings if desired",
                "Serve immediately"
            ],
            nutritionInfo: {
                protein: "8g",
                carbs: "18g",
                fats: "12g",
                fiber: "2g"
            }
        },
        {
            title: "Fresh Fruit Salad",
            image: "/images/fruit salad.png",
            prepTime: "15 minutes",
            calories: 120,
            ingredients: [
                "1 apple, diced",
                "1 orange, segmented",
                "1 cup strawberries, sliced",
                "1 cup grapes",
                "1 banana, sliced",
                "Optional: 1 tablespoon honey"
            ],
            steps: [
                "Wash all fruits thoroughly",
                "Peel and segment orange",
                "Core and dice apple",
                "Slice strawberries",
                "Slice banana",
                "Combine all fruits in a bowl",
                "Add honey if desired",
                "Gently toss to combine",
                "Serve immediately"
            ],
            nutritionInfo: {
                protein: "2g",
                carbs: "30g",
                fats: "0g",
                fiber: "5g"
            }
        },
        // Add more snack recipes here
    ]
};

// Function to get random recipe from a category
function getRandomRecipe(category) {
    const categoryRecipes = recipes[category];
    if (!categoryRecipes) {
        console.error(`Category ${category} not found`);
        return null;
    }
    return categoryRecipes[Math.floor(Math.random() * categoryRecipes.length)];
}

// Function to update a single category
function updateCategory(category) {
    const recipe = getRandomRecipe(category);
    if (!recipe) return;

    const titleElement = document.querySelector(`#${category}-title`);
    const imgElement = document.querySelector(`#${category}-img`);
    
    if (!titleElement || !imgElement) {
        console.error(`Elements for ${category} not found`);
        return;
    }

    titleElement.textContent = recipe.title;
    imgElement.src = recipe.image;
    imgElement.alt = recipe.title;

    // Add click listeners for recipe details
    titleElement.style.cursor = 'pointer';
    titleElement.onclick = () => showRecipeDetails(recipe);
    imgElement.style.cursor = 'pointer';
    imgElement.onclick = () => showRecipeDetails(recipe);
}

// Function to refresh all recipes
function refreshAllRecipes() {
    const categories = ['breakfast', 'lunch', 'dinner', 'snacks'];
    categories.forEach(category => updateCategory(category));
}

// Initialize recipes when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initial load of all recipes
    refreshAllRecipes();
    
    // Add click listeners for individual category refresh buttons
    const categories = ['breakfast', 'lunch', 'dinner', 'snacks'];
    categories.forEach(category => {
        // Add click listener for individual refresh buttons
        const refreshButton = document.querySelector(`#refresh-${category}`);
        if (refreshButton) {
            refreshButton.addEventListener('click', () => {
                updateCategory(category);
            });
        }

        // Add click listener for category containers
        const categoryContainer = document.querySelector(`#${category}-container`);
        if (categoryContainer) {
            categoryContainer.addEventListener('click', (event) => {
                // Only trigger if clicking the container itself, not its children
                if (event.target === categoryContainer) {
                    updateCategory(category);
                }
            });
        }
    });

    // Add click listener for refresh all button
    const refreshAllButton = document.querySelector('#refresh-all');
    if (refreshAllButton) {
        refreshAllButton.addEventListener('click', refreshAllRecipes);
    }
});

function showRecipeDetails(recipe) {
    // Create or get modal container
    let modal = document.getElementById('recipe-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'recipe-modal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }

    // Populate modal with recipe details
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}" style="max-width: 300px;">
            <p><strong>Preparation Time:</strong> ${recipe.prepTime}</p>
            <p><strong>Calories:</strong> ${recipe.calories}</p>
            
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            
            <h3>Steps:</h3>
            <ol>
                ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
            
            <h3>Nutrition Information:</h3>
            <p>Protein: ${recipe.nutritionInfo.protein}</p>
            <p>Carbs: ${recipe.nutritionInfo.carbs}</p>
            <p>Fats: ${recipe.nutritionInfo.fats}</p>
            <p>Fiber: ${recipe.nutritionInfo.fiber}</p>
        </div>
    `;
    // Show modal
    modal.style.display = 'block';

    // Close modal when clicking the X
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
}