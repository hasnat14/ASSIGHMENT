function Sandwich(...items: string[]) {
    console.log("Sandwich Order:");
    for (const item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!\n");
}

Sandwich("Turkey", "Lettuce", "Tomato", "Mayo");
Sandwich("Ham", "Cheese");
Sandwich("Chicken", "Bacon", "Avocado", "Mustard");

        
        
    