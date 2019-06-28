
<script>
var input = [
  {
    "name": "|L1-0",
    "children": [
      {
        "name": "|L2-0",
        "children": []
      },
      {
        "name": "|L2-1",
        "children": []
      },
      {
        "name": "|L2-2",
        "children": [
          {
            "name": "|L3-0",
            "children": []
          },
          {
            "name": "|L3-1",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "name": "|K1-0",
    "children": [
      {
        "name": "|K2-0",
        "children": [
          {
            "name": "|K3-0",
            "children": []
          },
          {
            "name": "|K3-1",
            "children": []
          }
        ]
      },
      {
        "name": "|K2-1",
        "children": []
      },
      {
        "name": "|K2-2",
        "children": [
          {
            "name": "|K3-0",
            "children": []
          },
          {
            "name": "|K3-1",
            "children": []
          }
        ]
      }
    ]
  }
]

function printPathsRecur(nodes,  path, pathLen)  {  
    
    /* Return if node is null or undefined */
    if (!nodes) {
        return ;  
    }
    
    /* Add node to the path array */
    if(nodes.name ) {
        path[pathLen] = nodes.name;  
        pathLen++; 
    } 
      
    /* Print the path array if there in no childen */
    if (nodes.children.length == 0) {  
        printPathArray(path, pathLen);  
    }  
    else {  
        for(var i=0; i<nodes.children.length;i++)
        printPathsRecur(nodes.children[i], path, pathLen);  
    }  
}  

/* This method is used to print all root to leafpath */
function printPathArray(ints, len) {  
    var str = "";
    for (var i = 0; i < len; i++) {  
        str += ints[i];
    }  
    console.log(str);  
} 

var path = [];
var pathlen = 0;
for(var i=0; i<input.length; i++) {
    printPathsRecur(input[i], path, pathlen);
}

</script>