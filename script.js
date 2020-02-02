const controller = document.querySelector('ion-alert-controller');
    sumSalaire = 0;
    nbemployee = 0;
    let name;
    let salaire;
    let age;
    function processForm(event) {
      event.preventDefault();
      sumSalaire= sumSalaire + parseInt(salaire);
      nbemployee =nbemployee+1;
      controller.create({
        header: 'Employee added',
        message: `Employee information: <b>${name} ${age} ${salaire}</b>`,
        buttons: [{
          text: 'OK'
        }]
      }).then(alert => alert.present());
     var text = document.createTextNode(name)
     var newitem = document.createElement("p")
     newitem.appendChild(text)
     document.getElementById("colname").appendChild(newitem)

     var text1 = document.createTextNode(age)
     var newitem1 = document.createElement("p")
     newitem1.appendChild(text1)
     document.getElementById("agecol").appendChild(newitem1)

     var text2 = document.createTextNode(salaire)
     var newitem2 = document.createElement("p")
     newitem2.appendChild(text2)
     document.getElementById("salcol").appendChild(newitem2)
     
     document.getElementById("ts").innerHTML = sumSalaire

     document.getElementById("numb").innerHTML = nbemployee

     document.getElementById("option").innerHTML = " <div class='item-note' item-end>  <ion-icon name='create'></ion-icon> </button>"



     

    }
    
    function handleNameValue(event) {
      name = event.target.value;
    }
    function handleAgeValue(event) {
      age = event.target.value;
    }
    function handleSalaryValue(event) {
        salaire = event.target.value;
      } 
 