function shuffle(arr){
  var i=arr.length,t,j;
  while(i){
    j= Math.floor(Math.random()* i--);
    t =arr[i]
    arr[i]=arr[j];
    arr[j]=t;
  }
  
}