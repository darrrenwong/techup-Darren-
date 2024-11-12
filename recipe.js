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
            title: "Chicken & Spinach Stuffed Bell Peppers",
            image: "/images/stuffed.png"
        },
        {
            title: "Salmon & Edamame Stir-Fry",
            image: "/images/eda.png"
        },
        {
            title: "Zucchini & Ground Beef Casserole",
            image: "/images/zucc.png"
        },
        {
            title: "Spiced Grilled Chicken",
            image: "/images/grilled.png"
        },
        {
            title: "Egg & Veggie Frittata",
            image: "/images/fritter.png"
        },
        {
            title: "Grilled Salmon & Vegetables",
            image: "/images/vegesalmon.png"
        },
        {
            title: "Chicken & Carrot Soup",
            image: "/images/carrot soup.png"
        },
        {
            title: "Spiced Potato",
            image: "/images/spiced potato.png"
        },
        {
            title: "Baked Cod with Tomato",
            image: "/images/baked cod.png"
        },
        {
            title: "ABC Soup",
            image: "/images/ABC soup.png"
        }
        // Add more dinner recipes here
    ],
    snacks: [
        {
            title: "Avocado-Yogurt Dip",
            image: "/images/dip.png"
        },
        {
            title: "Oven Baked Sweet Potato Fries",
            image: "/images/sweet-potato.png"  // Fixed: Use hyphens instead of spaces
        },
        {
            title: "Apple Wedges & Peanut Butter",
            image: "/images/apple-with-pb.png"  // Fixed: Use hyphens instead of spaces
        },
        {
            title: "Roasted Sheet-Pan Veggies",
            image: "/images/pan-fry.png"  // Fixed: Use hyphen
        },
        {
            title: "Air-Fryer Zucchini Fries",
            image: "/images/z-fries.png"  // Fixed: Use hyphen
        },
        {
            title: "Broccoli With Spices",
            image: "/images/spiced-broccoli.png"  // Fixed: Spelling and hyphen
        },
        {
            title: "Mixed-Berry Smoothie",
            image: "/images/mixed-berries.png"  // Fixed: Remove space before .png
        },
        {
            title: "Chia Seed Pudding",
            image: "/images/pudding.png"
        },
        {
            title: "Rice Cakes with Peanut Butter",
            image: "/images/rice-cake.png"  // Fixed: Use hyphen
        },
        {
            title: "Fresh Fruit Salad",
            image: "/images/fruit-salad.png"  // Fixed: Use hyphen
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