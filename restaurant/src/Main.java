public class Main {

    public static void main(String[] args){

        // Menu consist of several MenuItems and last updated
        //MenuItem includes price description, category(appetizer, main course, dessert), is new or not

        /* A way to add and remove menu items from the menu.
            A way to tell if a menu item is new.
            A way to tell when the menu was last updated.
            A way to print out both a single menu item as well as the entire menu.
            A way to determine whether or not two menu items are equal.
         */

            Menu menu = new Menu();

            MenuItem allAmerican = new MenuItem(12.99,"Eggs, Bacon, Toast", "breakfast");
            MenuItem british = new MenuItem(15.99,"Beans, Toast, Eggs", "breakfast");
            MenuItem steakDinner = new MenuItem(24.99, "Steak and potatoes", "dinner");

            menu.addItem(allAmerican);
            menu.addItem(british);
            menu.addItem(steakDinner);

            menu.printMenu();

            allAmerican.printMenuItem();
             System.out.println();

            menu.removeItemFromMenu("Beans");

            menu.printMenu();

    }
}
