function each(coll, callback){
	if(Array.isArray(coll)){
		for(var i=0; i<coll.length; i++){
			callback(coll[i],i,coll);
		}
	}else{
		for(var key in coll){
			callback(coll[key],key,coll);
		}
	}
}

function map(coll, callback){
	var acc = [];
	if(!Array.isArray(coll)){
		acc = {};
	}
	for(var key in coll){
		each(coll, function(value, key){
			acc[key]=callback(value, key);
		});
		return acc; 
	}
}

function filter(collection,callback){
	if(Array.isArray(collection)){
    var arr = [];
		each(collection,function(x,i){
			if(callback(x,i)){
                arr.push(x);
			}
			
		});
		return arr;
	}else{
		 arr = {};
		each(collection,function(value,key){
			if(callback(value,key)){
				arr[key] = value;
			}
		});
		return arr;
	}
}

function reject(collection, callback){
	return filter(collection, function(x){
		return !callback(x);
	});

}

function reduce(collection, iterator, accumulator) {
    if (accumulator === undefined){
      accumulator = collection[0];
      collection = collection.slice(1);

    }
    each(collection, function(element,i){
      accumulator=  iterator(accumulator, element,i);

    });
    return accumulator; 
}



