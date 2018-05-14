function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  const tree = document.getElementById("nested").querySelector(".target")
  //tree
  //console.log(tree[0])
  return tree
}

function increaseRankBy(n){
  const list = document.querySelectorAll(".ranked-list")
  var i
  for (i=0;i<list.length;i++){
    var child=list.children
    var j
    for(j=0;j<children.length;j++){
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