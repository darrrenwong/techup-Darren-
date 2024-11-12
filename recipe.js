// Recipe Database
const recipes = {
    breakfast: [
        {
            title: "Avocado Toast with Eggs",
            image: "/images/eggs.png"
        },
        {
            title: "Greek Yogurt Berry Bowl",
            image: "/images/yogurt.png"
        },
        {
            title: "Veggie Omelette",
            image: "/images/Veggie.png"
        },
        {
            title: "Overnight Chia Seed Pudding",
            image: "/images/Overnight.png"
        },
        {
            title: "Banana Nut Smoothie",
            image: "/images/banana.png"
        },
        {
            title: "Avocado and Spinach Smoothie",
            image: "/images/green.png"
        },
        {
            title: "Breakfast Burrito Wrap",
            image: "/images/burrito.png"
        },
        {
            title: "Apple Cinnamon Greek Yogurt",
            image: "/images/apple.png"
        },
        {
            title: "Breakfast Quinoa Bowl",
            image: "/images/bowl.png"
        },
        {
            title: "Toasted Bread with Eggs and Avocado",
            image: "/images/eggsss.png"
        }
        // Add more breakfast recipes here
    ],
    lunch: [
        {
            title: "Chicken & Veggie Stir-Fry with Rice",
            image: "/images/brocoli.png"
        },
        {
            title: "Salmon & Avocado Salad",
            image: "/images/saladS.png"
        },
        {
            title: "Ground Beef & Quinoa Bowl",
            image: "/images/bowl2.png"
        },
        {
            title: "Shrimp & Avocado Wrap",
            image: "/images/wrap2.png"
        },
        {
            title: "Chicken & Lentil Soup",
            image: "/images/lentil.png"
        },
        {
            title: "Beef & Veggie Stir-Fry",
            image: "/images/beef stir.png"
        },
        {
            title: "Chicken & Potato Bake",
            image: "/images/potato.png"
        },
        {
            title: "Spicy Chicken & Veggie Wrap",
            image: "/images/veggie wrap2.png"
        },
        {
            title: "Tomato Salmon Skillet",
            image: "/images/skillet.png"
        },
        {
            title: "Shrimp & Avocado Rice Bow",
            image: "/images/shrimp.png"
        }
        // Add more lunch recipes here
    ],
    dinner: [
        {
            title: "Salmon with Quinoa",
            image: "/images/salmon.png"
        },
        {
            title: "Pasta Carbonara",
            image: "/images/pasta.png"
        },
        {
            title: "Steak with Vegetables",
            image: "/images/steak.png"
        },
        {
            title: "Grilled Chicken Breast",
            image: "/images/grilled-chicken.png"
        },
        {
            title: "Shrimp Scampi",
            image: "/images/shrimp-scampi.png"
        },
        {
            title: "Vegetarian Curry",
            image: "/images/curry.png"
        },
        {
            title: "Beef Stir Fry",
            image: "/images/stir-fry.png"
        },
        {
            title: "Baked Cod",
            image: "/images/baked-cod.png"
        },
        {
            title: "Eggplant Parmesan",
            image: "/images/eggplant-parm.png"
        },
        {
            title: "Turkey Meatballs",
            image: "/images/meatballs.png"
        }
        // Add more dinner recipes here
    ],
    snacks: [
        {
            title: "Greek Yogurt with Honey",
            image: "/images/yogurt.png"
        },
        {
            title: "Mixed Nuts",
            image: "/images/nuts.png"
        },
        {
            title: "Apple with Peanut Butter",
            image: "/images/apple.png"
        },
        {
            title: "Hummus with Carrots",
            image: "/images/hummus.png"
        },
        {
            title: "Trail Mix",
            image: "/images/trail-mix.png"
        },
        {
            title: "Cheese and Crackers",
            image: "/images/cheese-crackers.png"
        },
        {
            title: "Smoothie",
            image: "/images/smoothie.png"
        },
        {
            title: "Popcorn",
            image: "/images/popcorn.png"
        },
        {
            title: "Energy Balls",
            image: "/images/energy-balls.png"
        },
        {
            title: "Fruit Salad",
            image: "/images/fruit-salad.png"
        }
        // Add more snack recipes here
    ]
};

// Function to get random recipe from a category
function getRandomRecipe(category) {
    const categoryRecipes = recipes[category];
    return categoryRecipes[Math.floor(Math.random() * categoryRecipes.length)];
}

// Function to update a single category
function updateCategory(category) {
    const recipe = getRandomRecipe(category);
    document.getElementById(`${category}-title`).textContent = recipe.title;
    const img = document.getElementById(`${category}-img`);
    img.src = recipe.image;
    img.alt = recipe.title;
}

// Function to refresh all recipes
function refreshAllRecipes() {
    updateCategory('breakfast');
    updateCategory('lunch');
    updateCategory('dinner');
    updateCategory('snacks');
}

// Initialize recipes when page loads
window.onload = refreshAllRecipes;