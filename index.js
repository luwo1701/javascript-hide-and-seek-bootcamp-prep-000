function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  const tree = document.querySelectorAll("#nested")
  //tree
  //console.log(tree[0])
  return tree.querySelector(".target")
}