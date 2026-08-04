fetch("https://jsonplaceholder.typicode.come/users")
.then((resp)=>resp.json())
.then((users)=> 
    users.map((user,index)=> {
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  cardDiv.innerHTML ='
         <h2>Lenne Graham</h2> 
            <p><strong>Username:</strong> Bret</p>
            <p><strong>Email:</strong> Sincere@april.biz</p>
            <p><strong>City:</strong> Gwenborough</p>
            <p><strong>ZipCode:</strong>  92998-3874</p> 
            ';

    }),
);