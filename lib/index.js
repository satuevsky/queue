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

		if(this.length === 0){
			this.firstElement = elem;
		}else{
			elem.next.prev = elem;
		}

		this.lastElement = elem;
		this.length++;
	}

	enqueueMany(items){
		let elem = {value: items[0], next: this.lastElement, prev: null},
			i = 1;

		if(this.length === 0){
			this.firstElement = elem;
		}else{
			elem.next.prev = elem;
		}

		for(; i < items.length; i++){
			elem.prev = {value: items[i], next: elem, prev: null};
			elem = elem.prev;
		}

		this.lastElement = elem;
		this.length += items.length;
	}


	/**
	 * Remove and return item from queue
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

	/**
	 * Remove and return items from queue
	 * @param {Number} count - items count for return
	 * @return {[*]}
	 */
	dequeueMany(count){
		let result = [],
			elem = this.firstElement;

		while(elem && result.length < count){
			result.push(elem.value);
			elem = elem.prev;
		}

		if(!elem){
			this.lastElement = this.firstElement = null;
			this.length = 0;
		}else{
			this.firstElement = elem;
			this.length -= result.length;
		}

		return result;
	}
}

module.exports = Queue;
