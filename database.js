const cookbook = [
  //begin breakfast section  
  {
      title: "Panchetta, Tomato, and Avocado Grain Bowls",
      category: "Breakfast",
      ingredients: "light brown sugar, smoked paprika, ground fennel seeds, uncured panchetta, quinoa, avocados, eggs, watercress, cherry tomatoes, olive oil, kosher salt, black pepper",
    },
    {
      title: "Pancakes",
      category: "Breakfast",
      ingredients: "flour, sugar, baking powder, baking soda, salt, milk, butter, pure vanilla extract, eggs",
    },
    {
      title: "Avocado Toast",
      category: "Breakfast",
      ingredients: "avocado, lemon juice, salt, pepper, whole grain bread, extra virgin olive oil, sea salt flakes, red pepper flakes",
    },
    //end of breakfast section

    //begin lunch section
    {
      title: "Caesar Salad",
      category: "Lunch",
      ingredients: "Add ingredients here",
    },
    //end lunch section

    //begin dinner section
    {
      title: "Spaghetti Bolognese",
      category: "Dinner",
      ingredients: "Add ingredients here",
    }
    //end dinner section

    //begin dessert section
    {
      title: "Brownies",
      category: "Dessert",
      ingredients: "Add ingredients here",
    }
    //end dessert section
  ];
  
  // Display information about each recipe
  cookbook.forEach(recipe => {
    console.log(`Title: ${recipe.title}`);
    console.log(`Category: ${recipe.category}`);
    console.log('------------------------');
    console.log(`Ingredients: ${recipe.ingredients}`);
  });