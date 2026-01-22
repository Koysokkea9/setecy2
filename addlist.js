function addSubject(){
    var subject = document.getElementById("subject").value;
    if(subject==""){
        alert("Please input your Subject!");
    } else{
        var li = document.createElement("li");
        // li.textContent = subject;

        li.className= "list-item";
        var span = document.createElement("span");
        span.textContent = subject;
        span.className="subjcet-text";

        var editBtn=document.createElement("button");
        // create_Name on button 
        editBtn.textContent = "Edit";
        editBtn.onclick = function(){
           var newSubject=prompt("Edit Subject: ", span.textContent)
           if(newSubject !=null && newSubject !=""){
               span.textContent = newSubject;
           }
        };
        
        //  Create element button delete 
        var deleteBtn= document.createElement("button");
        deleteBtn.textContent="Delete";
        deleteBtn.onclick=function(){
            if(confirm("Are you sure do you want to delete this subject?")){
                li.remove();
            }
        }


        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        document.getElementById("listsubject").appendChild(li);
        document.getElementById("subject").value="";
    }
}