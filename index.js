function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  const tree = document.getElementById("#nested")
  //tree
  //console.log(tree[0])
  return tree[0]
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