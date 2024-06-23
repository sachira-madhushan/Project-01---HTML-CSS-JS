let students=[];

function add_student(){
    var name=document.getElementById('name-input').value;
    var address=document.getElementById('address-input').value;
    var dob=document.getElementById('dob-input').value;
    var phone=document.getElementById('phone-input').value;

    var gender="";
    if(document.getElementById('male-input').checked){
        gender="male";
    }else{
        gender="female";
    }


    students.push({
        "id":students.length,
        "name":name,
        "gender":gender,
        "dob":dob,
        "address":address,
        "phone":phone});
    
    
    displayStudents();
}

function removeStudent(studentId) {
    students = students.filter(student => student.id !== studentId);
    displayStudents();
}

function displayStudents(){
    var cardsElement=document.getElementById('cards');
    cardsElement.innerHTML=null;
    students.forEach((element)=>{
        const cardView = document.createElement('div');
        cardView.className = 'card-view';
        var image="";
        if(element.gender=="male"){
            image="boy.png";
        }else{
            image="girl.png";
        }

        let card=`
                <div class="image">
                    <img src="./src/${image}" alt="" width="100px">
                </div>
                <div class="card-body">
                    <table>
                        <tr>
                            <td>Student Name</td>
                            <td>-</td>
                            <td>${element.name}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>-</td>
                            <td>${element.gender}</td>
                        </tr>
                        <tr>
                            <td>DOB</td>
                            <td>-</td>
                            <td>${element.dob}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>-</td>
                            <td>${element.address}</td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>-</td>
                            <td>${element.phone}</td>
                        </tr>
                    </table>
                    <button type="button" class="btn btn-danger " id="delete-button" onclick="removeStudent(${element.id})">Delete</button>
                </div>
        `;
        cardView.innerHTML=card;
        cardsElement.appendChild(cardView);
    }
    );
}