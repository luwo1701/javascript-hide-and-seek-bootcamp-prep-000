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
    var current=list[i]
    console.log(current.children)
    var j
    for(j=0;j<current.children.length;j++){
      current.children[j].innerHTML = parseInt(current.children[j].innerHTML) + n
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