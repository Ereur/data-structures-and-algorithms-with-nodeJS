class node {
    constructor(data, next = null)
    {
        this.data = data;
        this.next = next;
    }
}

class linkedlist {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }

    insertfirst(data)
    {
        this.head = new node(data, this.head);
        this.size += 1; 
    }
    
    insertlast(data)
    {
        let current = this.head;
        while(current.next)
            current = current.next;
        current.next = new node(data,null);
        this.size += 1;
    }

    insert_at_nnode(data, n)
    {
        let temp = this.head;
        let next_node;
        let i = 0;
        while(i < n - 1 && temp)
        {
            temp = temp.next;
            i++;
        }
        if (!temp)
            console.log("n dose not exist");
        next_node = temp.next;
        temp.next = new node(data, null);
        temp.next.next = next_node;
    }

    printlist()
    {
        let current = this.head;
        while(current)
        {
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new linkedlist();
list.insertfirst(100);
list.insertfirst(200);
list.insertlast(300);
list.insert_at_nnode(400, 2);
list.printlist();