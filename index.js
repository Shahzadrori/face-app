var btn = document.getElementById('button');
var act = btn.addEventListener('click',function(){
    const val = document.getElementById('nameid').value;
    // alert(val);
    var imge= document.getElementById("imgcha").setAttribute('src',`https://joeschmoe.io/api/v1/${val}`);
    return imge;
})
