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
    const tree = document.querySelectorAll("#grand-node")[0]
    console.log("here i am")
    var child=tree.children[0]
    console.log(`child is ${child}`)

    if (child == null){
      console.log("why doesn't it have children?")
    }
  
    while(child.children[0] != null){
      var child=child.children[0]
    }
    
    return child
}