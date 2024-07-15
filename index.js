let form=document.getElementById("form")
let arr=JSON.parse(localStorage.getItem("user")) ||[]
 let btn=document.getElementById("btn")
 btn.addEventListener("click",getvalue)
 function getvalue(ele){
    ele.preventDefault()
    let obj={
        name:document.getElementById("name").value,
        mobile:document.getElementById("mobile").value,
        email:document.getElementById("email").value,
        password:document.getElementById("passward").value,
        father_name:document.getElementById("father_name").value,
        dob:document.getElementById("date_of_birth").value,
        Course:document.getElementById("select").value

    }

    arr.push(obj)
    localStorage.setItem("user",JSON.stringify(arr));
    console.log(arr)
    displaydata(arr);
    alert("Thanks for Submit")
    form.reset();

 }

 function displaydata(user){
    let disply_table =document.getElementById("disply_table")
    let h2=document.createElement("h2")
    h2.innerText="Student information"
    // disply_table.append(h1)
    let table =document.createElement("table")
    let thead=document.createElement("thead")
    let tbody=document.createElement("tbody")
    let table_row =document.createElement("tr")
    let th1=document.createElement("th")
    th1.innerHTML=("S.no")
    let th2=document.createElement("th")
    th2.innerHTML=("name")
    let th3=document.createElement("th")
    th3.innerHTML=("mobile")
    let th4=document.createElement("th")
    th4.innerHTML=("email")
  
    let th6=document.createElement("th")
    th6.innerHTML=("Father name")
    let th7=document.createElement("th")
    th7.innerHTML=("Date of birth")
    let th8=document.createElement("th")
    th8.innerHTML=("Course")

    table_row.append(th1,th2,th3,th4,th6,th7,th8)
    thead.append(table_row)
    disply_table.innerHTML=null
    user.forEach((element,index)=> {
        
        let tr1=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerHTML=index+1
        let td2=document.createElement("td")
        td2.innerText=element.name
        let td3=document.createElement("td")
        td3.innerText=element.mobile
        let td4=document.createElement("td")
        td4.innerText=element.email
    
        let td6=document.createElement("td")
        td6.innerText=element.father_name
        let td7=document.createElement("td")
        td7.innerText=element.dob
        let td8=document.createElement("td")
        td8.innerText=element.Course
        tr1.append(td1,td2,td3,td4,td6,td7,td8)
        tbody.append(tr1)
        table.append(thead,tbody);
        disply_table.append(h2,table)

    })

 }




 displaydata(arr)
