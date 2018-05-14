function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  const tree = document.querySelectorAll("#nested")
  var i=0
  for (i=0;i<tree.length;i++){
    
  }
  console.log(tree[0])
  return tree
}