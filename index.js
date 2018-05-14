function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  const tree = document.getElementById("nested").querySelector(".target")
  return tree
}

function increaseRankBy(n){
  const list = document.querySelectorAll(".ranked-list")
      console.log(list)
    console.log(list.children)

  var i
  for (i=0;i<list.length;i++){
    var child=list.children
    console.log(child)
    var j
    for(j=0;j<child.length;j++){
      children[j].innerHTML = parseInt(children[j].innerHTML) + 1
    }
  }
}
function deepestChild(){
    const tree = document.querySelectorAll("#grand-node")[0]
    var child=tree.children[0]
    if (child == null){
      return tree
    }
  
    while(child.children[0] != null){
      var child=child.children[0]
    }
    
    return child
}