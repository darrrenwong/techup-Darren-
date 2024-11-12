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
        }
        
    ],
    lunch: [
        {
            title: "Grilled Chicken Salad",
            image: "/images/Chicken Salad.png"
        },
        {
            title: "Tuna Sandwich",
            image: "/images/tuna.png"
        },
        {
            title: "Vegetable Soup",
            image: "/images/soup.png"
        }
        // Add more lunch recipes here
    ],
    dinner: [
        {
            title: "Salmon with Quinoa",
            image: "/images/Salmon.png"
        },
        {
            title: "Pasta Carbonara",
            image: "/images/pasta.png"
        },
        {
            title: "Steak with Vegetables",
            image: "/images/steak.png"
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