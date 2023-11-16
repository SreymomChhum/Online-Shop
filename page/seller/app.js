/* main Data_____________________________________________________________ */
let information = [
    {
        nameProduct:"T-shirt",
        image:"/img/T-shirt1.webp",
        Price:"$49",
        Color:"orange",
        Size: "M",
        ID:"#01"
        
        
    },
    {
        nameProduct:"Suit",
        image:"/img/suit3.jpg",
        Price:"$15",
        Color:"orange",
        Size: "M",
        ID:"#02", 
    },
    {
        nameProduct:"T-shirt",
        image:"/img/T-shirt1.webp",
        Price:"$25",
        Color:"orange",
        Size: "M",
        ID:"#03",
        
        
    },
    {
        nameProduct:"Dress",
        image:"/img/dress1.webp",
        Price:"$36",
        Color:"orange",
        Size: "M",
        ID:"#04",
        
        
    },
    {
        nameProduct:"Suit",
        image:"/img/suit2.webp",
        Price:"$15",
        Color:"orange",
        Size: "M",
        ID:"#05",
        
        
    },
    {
        nameProduct:"Dress",
        image:"/img/dress2.webp",
        Price:"$15",
        Color:"orange",
        Size: "M",
        ID:"#06",
        
        
    },
    {
        nameProduct:"Suit",
        image:"/img/suit1.jpg",
        Price:"$15",
        Color:"orange",
        Size: "M",
        ID:"#07",


    },
    {
        nameProduct:"Dress",
        image:"/img/dress2.webp",
        Price:"$15",
        Color:"orange",
        Size: "M",
        ID:"#08",


    },
];
/*  variable______________________________________________________________ */
let lenIfor = information.length;
let toCreateProduct = document.querySelector("#addProduct");
let container = document.querySelector("#container");
let toEdite = document.querySelector(".edite");
let cancelBtn = document.querySelector("#cancel");
let createBtn = document.querySelector("#create");
let dialog_info = document.querySelector("#dialog-info");
let editeBtn = document.querySelector("#edite1");
let datafromCustomer = document.querySelector(".datafromCustomer");
console.log(information)
// console.log(dialog_info)

function hide(element){
    element.style.display = "none";
};    
function show(element){
    element.style.display = "block";
};    

// hide(datafromCustomer);       
function showdialogTocreate(){
    show(dialog_info);
    show(createBtn );
    hide(editeBtn);
    hide(datafromCustomer);
    clear();
}    


function clearDialog(){
    let getnamePrduct = document.querySelector("#name-Product");
    getnamePrduct.textContent = "";
    let getPrice = document.querySelector("#price");
    getPrice.textContent = "";
}    

//  LOCAL STORAGE ---------------------------------------------------------
function saveInformation() {
    localStorage.setItem("information", JSON.stringify(information));
} 
function loadInformation() {
    let infoStorage = JSON.parse(localStorage.getItem("information"));
    if (infoStorage !== null) {
        information = infoStorage;
    }
}
/*  show all product on seller Page___________________________________________________ */
function showdialogTocreate(){
    show(dialog_info);
    show(createBtn );
    hide(editeBtn);
    hide(datafromCustomer);
    clear();
}
function rederProduct (event){   
    let Data = document.querySelector("#data");
    Data.remove();
    
    Data = document.createElement("div");
    Data.id = "data";
    container.appendChild(Data);
    
    let namePro = document.createElement("div");
    namePro.id = "Tshirt";
    
    let header = document.createElement("div");
    header.id= "header";

    let btns = document.createElement("div");
    btns.textContent = "All Product" ;
    btns.style.backgroundColor = "white";
    btns.style.color = "teal";
    btns.style.fontWeight = "bold";
    btns.style.fontSize = "20px";
    btns.style.marginLeft = "30px";
    btns.style.marginTop = "30px";

    let allCard = document.createElement("div");
    allCard.id ="allCard";
    for (let index=0; index < information.length; index++){   
        let informations=information[index]
        let groupCard = document.createElement("div");
        groupCard.id = "groupCard";
        groupCard.dataset.index = index;
        groupCard.style.color = "teal";
        groupCard.style.fontWeight = "bold";
        groupCard.style.fontSize = "20px";
        groupCard.style.marginLeft = "-7px";
        

        
        let title = document.createElement("h4");
        title.textContent = informations.nameProduct
        
        let img=document.createElement("div");
        img.id = "img "   
    
        let imgs = document.createElement("img");
        imgs.style.width = "100%"
        imgs.src =  informations.image ;  

        let btn = document.createElement("button");
        btn.id = "forPrice"; 
        btn.style.width = "100%";
        btn.style.textAlign = "center";
        btn.textContent = "Price: "+informations.Price ;
        let icon = document.createElement("div");
        icon.id = "icon";
    
        let imgTrush = document.createElement("img");
        imgTrush.className = "trush";
        imgTrush.src = "/img/trash.png" ;
        imgTrush.style.width ="20%" ;
        imgTrush.style.height ="15%" ;
        imgTrush.addEventListener("click", deleteCard)
    
        let imgEdit = document.createElement("img");
        imgEdit.className = "edite";
        imgEdit.src = "/img/edite.png";
        imgEdit.style.width ="13%" ;
        imgEdit.style.height ="50%"; 
        imgEdit.style.marginTop = "10px" 
        imgEdit.addEventListener("click", toEditeProduct);
    
        icon.appendChild(imgTrush);
        icon.appendChild(imgEdit);
        img.appendChild(imgs);
        img.appendChild(btn);
        
        groupCard.appendChild(title);
        groupCard.appendChild(img);
        groupCard.appendChild(icon);
        allCard.appendChild(groupCard);
    }
    namePro.appendChild(header);
    namePro.appendChild(allCard);
    header.appendChild(btns);
    Data.appendChild(namePro);

    hide(dialog_info);
     
    // saveInformation();
}
function toCreates (event){
    let newInformation = {}
    newInformation.nameProduct = document.querySelector("#price").value;
    newInformation.image = document.querySelector("#image").value;
    newInformation.Price = document.querySelector("#name-Product").value;
    newInformation.Color = document.querySelector("#color").value;
    newInformation.Size = document.querySelector("#size").value;
    newInformation.ID = document.querySelector("#id").value;
    information.push(newInformation);
    hide(dialog_info);
    saveInformation();
    rederProduct();
}
createBtn.addEventListener("click", toCreates);

/*  Edite product_____________________________________________________________________ */
function toEditeProduct(event){
    hide(createBtn )
    show(editeBtn)
    let index = event.target.parentElement.parentElement.dataset.index;
    let informations=information[index]
    document.querySelector("#name-Product").value = informations.nameProduct;
    document.querySelector("#price").value = informations.Price;
    document.querySelector("#image").value = informations.image;
    lenIfor=index
    show(dialog_info);
    saveInformation();
    editeBtn.addEventListener("click",function(){
        changedata(index);
        index = null;
    })
}
function changedata(index){
    let editeInformation ={}
    editeInformation.nameProduct = document.querySelector("#name-Product").value;
    editeInformation.Price = document.querySelector("#price").value;
    editeInformation.image = document.querySelector("#image").value;
    information[index] = editeInformation
    console.log(information)
    hide(dialog_info)
    saveInformation()
    loadInformation()
    rederProduct()
}
/*  Clear data________________________________________________________________________ */
function clear(){
    let getPrice = document.querySelector("#price").value ="";
    let getImg = document.querySelector("#image").value = "";
    let getnamePrduct = document.querySelector("#name-Product").value= "";
    let getColors= document.querySelector("#color").valu="";
    let getSize = document.querySelector("#size").value ="";
    let getID = document.querySelector("#id").value = "";


}

function deleteCard(event) {
    let index = event.target.parentElement.parentElement.dataset.index;
    information.splice(index, 1)
    saveInformation();
    rederProduct();
}


function toCancels(event){
    hide(dialog_info);
}

let cusDataStorage = JSON.parse(localStorage.getItem("dicInforCus"));
function cutomerData(event){
    let ddata = document.querySelector("#data");
    console.log(ddata)
    hide(ddata);
    show(datafromCustomer);
    let aboutCustomer = document.querySelector(".aboutCustomer");
    aboutCustomer.remove();
    aboutCustomer = document.createElement("div");
    aboutCustomer.className = "aboutCustomer";
    console.log(aboutCustomer);
    for (let index=0; index < cusDataStorage.length; index++){   
        let cusDataStorages=cusDataStorage[index];

        let storeData1 = document.createElement("div");
        storeData1.className = "storeData1";
        
        let pNameCust = document.createElement("p");
        pNameCust.id = '#getNameCust';
        pNameCust.textContent = "Name Product: " + cusDataStorages.NameProduct;
        
        let pEmailCus = document.createElement("p");
        pEmailCus.id = '#getEamilCus';
        pEmailCus.textContent = "Email: "+cusDataStorages.Email;
        
        let pPhoneCus = document.createElement("p");
        pPhoneCus.id = '#getPhoneCus';
        pPhoneCus.textContent = "Phone Number: "+cusDataStorages.Phone;
        
        let pLocationCus = document.createElement("p");
        pLocationCus.id = '#getlocationCus';
        pLocationCus.textContent = "Location"+cusDataStorages.Location; 
        
        let pPurchesCus = document.createElement("p");
        pPurchesCus.id = '#getpurchesCus';
        pPurchesCus.textContent = "order: "+ cusDataStorages.Purches;

        storeData1.appendChild(pNameCust);
        storeData1.appendChild(pEmailCus);
        storeData1.appendChild(pPhoneCus);
        storeData1.appendChild(pLocationCus);
        storeData1.appendChild(pPurchesCus);
        aboutCustomer.appendChild(storeData1);

    }
    let btnBack = document.createElement("button");
    btnBack.id = "toback";
    btnBack.textContent = "Back";
    btnBack.addEventListener("click", function(){
        hide(datafromCustomer);
        let data = document.querySelector("#data")
        show(data);
    })
    datafromCustomer.appendChild(aboutCustomer);
    console.log(datafromCustomer);
    aboutCustomer.appendChild(btnBack)

}
let customerData = document.querySelector("#customerData");
console.log(customerData)
customerData.addEventListener("click",cutomerData)

loadInformation()
saveInformation()
rederProduct();


