var menu=[{name:"Noodles",price:50},
{name:"Biriyani",price:100},
{name:"Nuggets",price:70}]
class MenuList{
    static getData(){
        return menu
    }
    static searchName(item){
        return menu.filter(e =>e.name.includes(item))
    }
    static searchPrice(item){
        return menu.filter(e =>e.price==item)
    }
}
export default MenuList