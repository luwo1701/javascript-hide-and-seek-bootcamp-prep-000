function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  const tree = document.querySelectorAll("#nested")
  //tree
  //console.log(tree[0])
  return tree[0]
}

function deepestChild(){
    const tree = document.querySelectorAll("#grand-node")
    var child=tree.children[0]
    return child
  /*
    while(child.children[0] != null){
      console.log(children[0])
      var child=tree.children[0]
    }
    return child*/
}