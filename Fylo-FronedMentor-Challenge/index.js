
 let click=document.getElementById('click'); 
 let dilaog=document.getElementById('dialog');
 let pink=document.getElementById('pinkline');
  let currentSize=0
  let maxSize=1000
 pink.style.width=`${(currentSize/10)*100}%`;
 function click1(){
   dilaog.click()
 }

 function fileValidation() {
    var fileInput =document.getElementById('dialog').value;
    var filePath = fileInput.indexOf('.')+1;
    var formatFile = fileInput.substr(filePath, fileInput.length).toLowerCase();
    var filesize=document.getElementById('dialog').files[0].size/1000000;
    
    if (!(formatFile ==="jpg" || formatFile ==="jpeg" || formatFile ==="png"|| formatFile ==="gif")){
         alert("File format isn't supported");
         }
    else if(filesize<maxSize){
        var file_size=filesize
        currentSize+=file_size
        document.getElementById('pinkline').style.width=`${(currentSize/10)*100}%`;
        changeSize();
        setLeft(); 
      }
          
    }
  
  function changeSize(){
    const filesize=document.getElementById('dialog').files[0].size/1000000;
    document.getElementById('remain').innerHTML=currentSize.toFixed(2);
  }

  function setLeft(){
    var filesize=document.getElementById('dialog').files[0].size/1000000;
    document.getElementById('left-remain').innerHTML= (maxSize-currentSize).toFixed(2);
  }
















  