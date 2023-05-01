

class IngredientList {
    constructor() {
      this.ingredients = ['Fish', 'Chicken', 'Beef', 'Egg', 'Tomatoes', 'Vegetables', 'Burger', 'Pizza', 'Coffee', 'Salad', 'Sandwich'];
      this.table = document.getElementById('ingredients-table');
      this.populateTable();
      this.bindAddIngredientButton();
      this.displayIngredients();
      this.bindSelectIngredientButton();
      this.bindSelectIngredientButton(); // fixed duplicate method call
    }
 
      
    populateTable() {
      let rowIndex = 0;
      let colIndex = 0;
      let newRow = this.table.insertRow(rowIndex);
  
      for (let i = 0; i < this.ingredients.length; i++) {
        if (colIndex === 5) {
          colIndex = 0;
          rowIndex++;
          newRow = this.table.insertRow(rowIndex);
        }
  
        const cell = newRow.insertCell(colIndex);
        cell.innerHTML = this.formatIngredient(this.ingredients[i]);
        colIndex++;
      }
    }
  
    bindAddIngredientButton() {
      const addBtn = document.getElementById('add-ingredient-btn');
      const input = document.getElementById('ingredient-input');
  
      addBtn.addEventListener('click', () => {
        const newIngredients = input.value.trim().split(',');
        if (newIngredients.length > 0) {
          for (let i = 0; i < newIngredients.length; i++) {
            const newIngredient = newIngredients[i].trim();
            if (newIngredient.length > 0) {
              const lowerCasedIngredient = newIngredient.toLowerCase();
              const isDuplicate = this.ingredients.some((ingredient) => ingredient.toLowerCase() === lowerCasedIngredient);
              if (!isDuplicate) {
                this.ingredients.push(newIngredient);
                this.addIngredient(newIngredient);
                input.value = '';
              } else {
                alert(`"${newIngredient}" is already in the list.`);
              }
            }
          }
        }
      });
    }
  
    addIngredient(ingredient) {
      const rowIndex = Math.floor((this.ingredients.length - 1) / 5);
      const colIndex = (this.ingredients.length - 1) % 5;
  
      if (colIndex === 0) {
        const newRow = this.table.insertRow(rowIndex);
        const cell = newRow.insertCell(colIndex);
        cell.innerHTML = this.formatIngredient(ingredient);
      } else {
        const cell = this.table.rows[rowIndex].insertCell(colIndex);
        cell.innerHTML = this.formatIngredient(ingredient);
      }
    }
  
    formatIngredient(ingredient) {
      return ingredient.charAt(0).toUpperCase() + ingredient.slice(1).toLowerCase();
    }
  
    displayIngredients() {
      const availableIngredientsList = document.querySelector('#available-ingredients');
      availableIngredientsList.innerHTML = '';
      for (const ingredient of this.ingredients) {
        const li = document.createElement('li');
        li.textContent = ingredient;
        availableIngredientsList.appendChild(li);
      }
    }
  ///////////////
  
  }
  
  const ingredientList = new IngredientList();

  /////////////////////////////////////////////

  // ////////////////////////////////

