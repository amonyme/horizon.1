/*----------about page-------------*/
document.getElementById('next').onclick= function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('previous').onclick= function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
/*----------------coaches--------------*/
document.getElementById('next1').onclick= function(){
    let lists1 = document.querySelectorAll('.item1');
    document.getElementById('slide-coach').appendChild(lists1[0]);
}
document.getElementById('previous1').onclick= function(){
    let lists1 = document.querySelectorAll('.item1');
    document.getElementById('slide-coach').prepend(lists1[lists1.length - 1]);
}