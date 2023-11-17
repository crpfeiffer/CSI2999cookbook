const cookbook = [
    {
      title: "Panchetta, Tomato, and Avocado Grain Bowls",
      category: "Breakfast",
      ingredients: "light brown sugar, smoked paprika, ground fennel seeds, uncured panchetta, quinoa, avocados, eggs, watercress, cherry tomatoes, olive oil, kosher salt, black pepper",
    },
    {
      title: "Caesar Salad",
      category: "Lunch",
      ingredients: "Add ingredients here",
    },
    {
      title: "Spaghetti Bolognese",
      category: "Dinner",
      ingredients: "Add ingredients here",
    }
    {
      title: "Brownies",
      category: "Dessert",
      ingredients: "Add ingredients here",
    }
  ];
  
  // Display information about each recipe
  cookbook.forEach(recipe => {
    console.log(`Title: ${recipe.title}`);
    console.log(`Category: ${recipe.category}`);
    console.log('------------------------');
    console.log(`Ingredients: ${recipe.ingredients}`);
  });