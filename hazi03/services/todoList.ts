import { LogAddItem } from "../decorators/LogAddItem";
import { TodoItem } from "../models/todoItems";


export class TodoList<T> {
    private items: Map<number, TodoItem<T>> = new Map();

    @LogAddItem
    addItem(item: TodoItem<T>) : void {
        this.items.set(item.id, item);
        console.log(`Item added: ${item.id} - ${item.content}`);
    }

    removeItem (item: TodoItem<T>) : void {
        if (this.items.has(item.id)) {
            this.items.delete(item.id);
            console.log(`Item delete: ${item.id}`);
        } else {
            console.log("Nem található teendő ezzel az ID-val" +item.id);
            
        }
    }

    listItems (item: TodoItem<T>) : void {
        if (this.items.size === 0) {
            console.log("Nincsenek teendők.");
            
        } else {
            this.items.forEach((item, id) => {
                console.log(`ID: ${item.id} - ${item.content}`);
            })
        }
    }


}

