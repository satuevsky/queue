/**
 * Created by Islam on 12.07.2017.
 */

class Queue{
	/**
	 * Queue constructor
	 * @param {[*]} [items] - initial queue items
	 */
	constructor(items){
		this.lastElement = null;
		this.firstElement = null;
		this.length = 0;

		if(items && items.length){
			let i = 0;
			for(; i < items.length; i++)
				this.enqueue(items[i]);
		}
	}

	/**
	 * Adds item to queue
	 * @param {*} item
	 */
	enqueue(item){
		let elem = {value: item, next: this.lastElement, prev: null};

		this.lastElement = elem;

		if(this.length === 0){
			this.firstElement = elem;
		}else{
			elem.next.prev = elem;
		}

		this.length++;
	}

	/**
	 * Remove and return items from queue
	 * @return {*}
	 */
	dequeue(){
		if(!this.length)return;

		let firstElem = this.firstElement;
		this.firstElement = firstElem.prev;

		if(this.length === 1){
			this.lastElement = null;
		}else{
			this.firstElement.next = null;
		}

		this.length--;
		return firstElem.value;
	}
}

module.exports = Queue;
