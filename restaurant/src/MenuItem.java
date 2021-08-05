public class MenuItem {
    // Menu consist of several MenuItems and last updated
    //MenuItem includes price, description, category(appetizer, main course, dessert), is new or not

    //default everything to private until later
        private double price;
        private String description;
        private String  category;
        private boolean isNew; // boolean names should lean more towards asking a yes or no question in their name

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public boolean isNew() {

        return isNew;
    }

    public void setNew(boolean aNew) {
        isNew = aNew;
    }

    //constructor

    public MenuItem(double price, String description, String category) {
        this.price = price;
        this.description = description;
        this.category = category;
        this.isNew = true;
    }

    /*
    public void addItemToMenu(double price, String description, String category){
        MenuItem newItem = new MenuItem();
        newItem.setNew(true);
        newItem.setCategory(category);
        newItem.setDescription(description);
        newItem.setPrice(price);

    }
     */

    public void printMenuItem(){
        System.out.println("Price: " + this.price);
        System.out.println("Description: " + this.description);
        System.out.println("Category: " + this.category);

    }


}
