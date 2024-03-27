// Define a class to handle pizza orders
class PizzaOrder {
    // Constructor method to initialize the PizzaOrder object
    constructor(startOrderButtonId, pizzaFormId, orderButtonId, pizzaSummaryId) {
        // Select relevant DOM elements and assign them to class properties
        this.startOrderButton = document.querySelector(`#${startOrderButtonId}`);
        this.pizzaForm = document.querySelector(`#${pizzaFormId}`);
        this.orderButton = document.querySelector(`#${orderButtonId}`);
        this.pizzaSummary = document.querySelector(`#${pizzaSummaryId}`);

        // Hide pizza form and order button initially
        this.pizzaForm.style.display = 'none';

        // Show the pizza form and hide the start order button when clicked
        this.startOrderButton.addEventListener('click', () => {
            this.pizzaForm.style.display = 'block';
            this.startOrderButton.style.display = 'none';
            document.querySelector('#preset-group').style.display = 'block';
        });

        // Handle the final order confirmation when the order button is clicked
        this.orderButton.addEventListener('click', () => {
            this.displayOrderSummary();
        });
    }

    // Method to display the order summary
    displayOrderSummary() {
        // Initialize a string to hold the order summary
        let summary = 'Your order summary:\n';

        // Append selected options to the summary string
        summary += 'Preset: ' + document.querySelector('#preset').value + '\n';
        summary += 'Size: ' + document.querySelector('#size').value + '\n';
        summary += 'Base Sauce: ' + document.querySelector('#baseSauce').value + '\n';
        summary += 'Cheese: ' + document.querySelector('#cheese').value + '\n';

        // Get selected ingredients and append them to the summary string
        const ingredients = document.querySelectorAll('#ingredients-group input[type="checkbox"]:checked');
        summary += 'Ingredients: ';
        if (ingredients.length > 0) {
            ingredients.forEach((ingredient, index) => {
                summary += ingredient.value;
                if (index < ingredients.length - 1) {
                    summary += ', ';
                }
            });
        } else {
            summary += 'None';
        }
        summary += '\n';

        // Append selected crust, side dips, sides, pop, and delivery to the summary string
        summary += 'Crust: ' + document.querySelector('#crust').value + '\n';
        summary += 'Side Dips: ' + document.querySelector('#sideDips').value + '\n';
        summary += 'Sides: ' + document.querySelector('#sides').value + '\n';
        summary += 'Pop: ' + document.querySelector('#pop').value + '\n';
        summary += 'Delivery: ' + document.querySelector('#delivery').value + '\n';

        // Display the order summary on the page
        this.pizzaSummary.innerText = summary;
        this.pizzaSummary.style.display = 'block'; // Show the summary
    }
}

// Create an instance of PizzaOrder
const pizzaOrder = new PizzaOrder('startOrderButton', 'pizzaForm', 'orderButton', 'pizzaSummary');

// Show the order button after all selections are made
document.querySelector('#delivery').addEventListener('change', () => {
    document.querySelector('#orderButton').style.display = 'block';
});
