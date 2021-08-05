import java.time.LocalDate;
import java.util.ArrayList;

public class Menu {

    // Menu consist of several MenuItems and last updated
    //MenuItem includes price description, category(appetizer, main course, dessert), is new or not

    private ArrayList <MenuItem> menuItems = new ArrayList<>();
    private LocalDate lastUpdated;

    public ArrayList<MenuItem> getMenuItems() {
        return menuItems;
    }


    public LocalDate getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(LocalDate lastUpdated) {
        this.lastUpdated = lastUpdated;
    }

    public void removeItemFromMenu(String item){
        for(MenuItem items: menuItems){
            String product = items.getDescription();
            if(product.contains(item)){
                menuItems.remove(items);
            }
        }
    }

    public void addItem(MenuItem item){
        menuItems.add(item);
    }

    public void printMenu(){
        System.out.println("         "+ LocalDate.now() + " Menu!");
        System.out.println(" ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~");
        for(MenuItem items: menuItems){
            items.printMenuItem();
            System.out.println("*******************");
        }

        System.out.println("ENJOY!");
        System.out.println();
    }
}
