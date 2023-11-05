class PaginationHelper{

    constructor(items, page_capacity) {
        this.items = items;
        this.page_capacity = page_capacity;
    }

    pageCount(){
        return Math.ceil(this.items.length/this.page_capacity);
    }

    itemCount(){
        return this.items.length;
    }

    pageItemCount(page_number){
        if(page_number >= this.pageCount() || page_number < 0)
            return -1;
        else if(page_number < this.pageCount() - 1)
            return this.page_capacity;
        return this.itemCount() - this.page_capacity * (this.pageCount() - 1);
    }

    pageIndex(item_number){
        if(item_number >= this.itemCount() || item_number < 0)
            return -1;
        return Math.floor((item_number)/this.page_capacity);
    }
}
