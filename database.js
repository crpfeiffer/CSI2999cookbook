const cookbook = [
    {
      title: "Pancakes",
      instructions: "1. Mix flour, sugar, baking powder. 2. Add milk and eggs. 3. Cook on a griddle.",
      category: "Breakfast",
      prepTime: 10, // in minutes
      cookTime: 15, // in minutes
      servings: 4
    },
    {
      title: "Caesar Salad",
      instructions: "1. Toss lettuce, croutons, and Parmesan. 2. Add Caesar dressing. 3. Enjoy!",
      category: "Lunch",
      prepTime: 15, // in minutes
      cookTime: 0, // in minutes (assuming no cooking time)
      servings: 2
    },
    {
      title: "Spaghetti Bolognese",
      instructions: "1. Brown ground beef. 2. Add tomatoes, garlic, and herbs. 3. Simmer and serve over spaghetti.",
      category: "Dinner",
      prepTime: 20, // in minutes
      cookTime: 30, // in minutes
      servings: 6
    }
  ];
  
  // Display information about each recipe
  cookbook.forEach(recipe => {
    console.log(`Title: ${recipe.title}`);
    console.log(`Instructions: ${recipe.instructions}`);
    console.log(`Category: ${recipe.category}`);
    console.log(`Prep Time: ${recipe.prepTime} minutes`);
    console.log(`Cook Time: ${recipe.cookTime} minutes`);
    console.log(`Servings: ${recipe.servings}`);
    console.log('------------------------');
  });