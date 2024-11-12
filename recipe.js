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
            image: "/images/bowl.png"
        },
        {
            title: "Egg Wrap",
            image: "/images/egg wrap.png"
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
            title: "Chicken & Spinach Stuffed Peppers",
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
            image: "/images/sweet potato.png"  // Fixed: Use hyphens instead of spaces
        },
        {
            title: "Apple Wedges & Peanut Butter",
            image: "/images/apple with pb.png"  // Fixed: Use hyphens instead of spaces
        },
        {
            title: "Roasted Sheet-Pan Veggies",
            image: "/images/pan fry.png"  // Fixed: Use hyphen
        },
        {
            title: "Air-Fryer Zucchini Fries",
            image: "/images/z fries.png"  // Fixed: Use hyphen
        },
        {
            title: "Broccoli With Spices",
            image: "/images/spiced brocoli.png"  // Fixed: Spelling and hyphen
        },
        {
            title: "Mixed-Berry Smoothie",
            image: "/images/mixed berries.png"  // Fixed: Remove space before .png
        },
        {
            title: "Chia Seed Pudding",
            image: "/images/pudding.png"
        },
        {
            title: "Rice Cakes with Peanut Butter",
            image: "/images/rice cake.png"  // Fixed: Use hyphen
        },
        {
            title: "Fresh Fruit Salad",
            image: "/images/fruit salad.png"  // Fixed: Use hyphen
        }
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
}

// Function to refresh all recipes
function refreshAllRecipes() {
    const categories = ['breakfast', 'lunch', 'dinner', 'snacks'];
    categories.forEach(category => updateCategory(category));
}

// Initialize recipes when page loads
document.addEventListener('DOMContentLoaded', () => {
    refreshAllRecipes();
    
    // Add click listeners for individual category refresh buttons
    const categories = ['breakfast', 'lunch', 'dinner', 'snacks'];
    categories.forEach(category => {
        const refreshButton = document.querySelector(`#refresh-${category}`);
        if (refreshButton) {
            refreshButton.addEventListener('click', () => updateCategory(category));
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

// Modify your updateCategory function to add click listeners
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

    // Add click listener to title
    titleElement.style.cursor = 'pointer';
    titleElement.onclick = () => showRecipeDetails(recipe);
    // Add click listener to image
    imgElement.style.cursor = 'pointer';
    imgElement.onclick = () => showRecipeDetails(recipe);
}