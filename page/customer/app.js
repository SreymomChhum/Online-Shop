let homePage = document.querySelector(".homePage");
let toBuy = document.querySelector("#buy");

let toCancel = document.querySelector("#cancels");
let order = document.querySelector("#order");
let dialog_buy = document.querySelector("#dialog-buy");
let customerInfo = [];

let home = document.querySelector("#home");
let view = document.querySelector("#view");

let page = document.querySelector(".page");
let dataShow = document.querySelector("#data-show");
let viewBtn = document.querySelector("#viewBtn");

let searchBtn = document.querySelector("#searchBtn");

function hide(element){
    element.style.display = "none";
};
function show(element){
    element.style.display = "block";
};

hide(dialog_buy);
// hide(viewBtn);

home.addEventListener("click", function(){
    hide(searchBtn);
    hide(viewBtn);
    show(page);
})
view.addEventListener("click", function(){
    hide(page);
    show(searchBtn);
    show(viewBtn);
})

// toBuy.addEventListener("click", function(){
//     show(dialog_buy);
// })
toCancel.addEventListener("click", function(){
    hide(dialog_buy);
})
order.addEventListener("click", orderProduct)

//  LOCAL STORAGE ---------------------------------------------------------
let dicInforCus = []
// function saveCustomerInformation() {
    //     localStorage.setItem("dicInforCus", JSON.stringify(dicInforCus));
    // } 
    // function loadCustomerInformation() {
    //     let cusDataStorage = JSON.parse(localStorage.getItem("dicInforCus"));
    //     if (cusDataStorage !== null) {
        //         dicInforCus = cusDataStorage;
        //     }
        // }
        /* get information customer when they order product ___________________ */
            
function orderProduct(event){
    let NameProducts= document.querySelector("#name-Product").value;
    let Phones =document.querySelector("#email").value ;
    let Emails =document.querySelector("#p-number").value;
    let Locations =document.querySelector("#location").value;
    let Purchess =document.querySelector("#purches").value;
    getInfor ={
        NameProduct: NameProducts,
        Phone : Phones,
        Email : Emails,
        Location :Locations,
        Purches :Purchess,
    }
    dicInforCus.push(getInfor);
    if (getInfor.NameProduct !="" && getInfor.NameProduct !="" && getInfor.Phone !="" && getInfor.Location !="" && getInfor.Purches !=""){
        hide(dialog_buy);
        console.log(dicInforCus);
        saveCustomerInformation()
    }else{
        window.alert("Please fill all information!👏")
    }

    // let dialogCard = document.querySelector("#dialogCard");
    // show(dialogCard)
};
// orderProduct()
// saveCustomerInformation()

/*  get local storage to ues___________________________________________ */
let information = JSON.parse(localStorage.getItem("information"));
/*  reder all product to show in view page__________________________________________ */
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

    let btns = document.createElement("button");
    btns.id = "btna";
    btns.textContent = "All Product";
    btns.style.background = "teal";
    btns.style.marginRight = "20px"
    btns.style.borderRadius = "10px"
    
  
    let allCard = document.createElement("div");
    allCard.id ="allCard";

    for (let index=0; index < information.length; index++){   
        let informations=information[index]
        let groupCard = document.createElement("div");
        groupCard.className = "groupCard";
        groupCard.dataset.index = index;
        // groupCard.textContent = informations.nameProduct ;
        let title = document.createElement("h4");
        title.textContent = informations.nameProduct
        title.style.color = "teal"
 
        let img=document.createElement("div");
        img.id = "img ";
        
        let imgs = document.createElement("img");
        // imgs.style.height = "350px"
        imgs.style.width = "100%"
        
        imgs.src =  informations.image ;
        imgs.style.cursor = "pointer";
        imgs.addEventListener("click", detailInformation)


        let btn = document.createElement("button");
        btn.id = "forPrice"; 
        btn.style.width = "100%";
        btn.style.marginLeft = "-0.5%";
        btn.style.textAlign = "center";

        btn.textContent +="Price: " +informations.Price ;
        let icon = document.createElement("div");
        icon.id = "icon";
    
        let imgStar = document.createElement("img");
        imgStar.className = "star";
        imgStar.src = "/img/star.png" ;
        imgStar.style.width = "15%"
        imgStar.style.cursor = "pointer";

    
    
        let imgShop = document.createElement("img");
        imgShop.className = "shop";
        imgShop.src = "/img/shop.png";
        imgShop.style.width ="30px" ;
        imgShop.style.height ="35px" ;
        imgShop.style.cursor = "pointer";
        imgShop.addEventListener("click", function(){
            show(dialog_buy);
        })
    
        icon.appendChild(imgStar);
        icon.appendChild(imgShop);

        img.appendChild(imgs);
        img.appendChild(btn);
        groupCard.append(title);
        groupCard.appendChild(img);
        groupCard.appendChild(icon);
        allCard.appendChild(groupCard);
    }
    namePro.appendChild(header);
    namePro.appendChild(allCard);
    header.appendChild(btns);


    Data.appendChild(namePro);
    // container.appendChild(Data);
    // saveInformation();
    // loadInformation();

}
rederProduct();

/* to search title ______________________________________________________*/


let btnSearch = document.querySelector("#search-input");
btnSearch.addEventListener("keyup", searchBar);

function searchBar(){
    let wordSearch = (btnSearch.value.toLocaleLowerCase());
    let myCard = document.querySelectorAll(".groupCard");
    for (let i = 0; i < myCard.length; i++){
        let valueCard = myCard[i];
        let text = valueCard.firstElementChild.textContent.toLocaleLowerCase();
        if (text.includes(wordSearch)){
            valueCard.style.display = "block";
        }else {
            valueCard.style.display = "none";
        }  
    }
}


/* All Data to show on home page_______________________________________ */
function createDatatoshow(){
    let page = document.querySelector(".page");
    let gethomePage = document.querySelector(".homePage");
    gethomePage.remove();
    gethomePage =document.createElement("div");
    gethomePage.className = "homePage";

    for (let index=0; index < information.length; index++){   
        let informations=information[index]


        let showImg = document.createElement("div")
        showImg.className = "img";
        let myImg = document.createElement("img");
        myImg.src = informations.image;
        myImg.style.width = "400px";
        // myImg.style.height = "200px";

        showImg.appendChild(myImg);

        let formInfor = document.createElement("div");
        formInfor.className = "form-info";

        let product_name = document.createElement("p");
        product_name.textContent = "Product Name: ";
        let createSpanPN = document.createElement("span");
        createSpanPN.id = "product-nameGet";
        createSpanPN.textContent = informations.nameProduct;
        product_name.appendChild(createSpanPN);

        let createPrices = document.createElement("p");
        createPrices.textContent = "Price: ";
        let createSpanP = document.createElement("span");
        createSpanP.id = "priceGet";
        createSpanP.textContent = informations.Price;
        createPrices.appendChild(createSpanP);

        let createColor= document.createElement("p");
        createColor.textContent = "Color: ";
        let createSpanC = document.createElement("span");
        createSpanC.id ="colorGet";
        createSpanC.textContent = informations.Color;
        createColor.appendChild(createSpanC);
        // console.log(createColor)
        // console.log()

        let createSize = document.createElement("p");
        createSize.textContent = "Size: ";
        let createSpanS = document.createElement("span");
        createSpanS.id = "sizeGet";
        createSpanS.textContent = informations.Size;
        createSize.appendChild(createSpanS);

        let createID = document.createElement("p");
        createID.textContent = "ID product: ";
        let createSpanID = document.createElement("span");
        createSpanID.id = "idGet";
        createSpanID.textContent = informations.ID;
        createID.appendChild(createSpanID);

        let gStar = document.createElement("div");
        gStar.className = "gStar";
        let createStar1 = document.createElement("img");
        createStar1.src = "/img/star.png";
        createStar1.style.width = "10%"
        let createStar2 = document.createElement("img");
        createStar2.src = "/img/star.png"
        createStar2.style.width = "10%"
        let createStar3 = document.createElement("img");
        createStar3.src = "/img/star.png";
        createStar3.style.width = "10%"
        gStar.appendChild(createStar1);
        gStar.appendChild(createStar2);
        gStar.appendChild(createStar3);

        let createBtnBuy = document.createElement("button");
        createBtnBuy.id = "buy";
        createBtnBuy.textContent = "Buy";
        createBtnBuy.addEventListener("click",  function(){
            show(dialog_buy);
        })

        formInfor.appendChild(product_name);
        formInfor.appendChild(createPrices);
        formInfor.appendChild(createColor);
        formInfor.appendChild(createSize);
        formInfor.appendChild(createID);
        formInfor.appendChild(gStar);

        formInfor.appendChild(createBtnBuy);

        gethomePage.appendChild(showImg);
        gethomePage.appendChild(formInfor)
        // console.log(gethomePage)
    }
    page.appendChild(gethomePage);
    // console.log(page);
}
createDatatoshow();



/*  create dialog detail information ___________________________________*/
function detailInformation(event){
    let index = event.target.parentElement.parentElement.dataset.index;
    let detailInformation=information[index];

    console.log(index);

    show(dialog_Detail );
    let dialog = document.querySelector("#dialog")
    let detailAboutPro = document.querySelector(".detailAboutPro");
    detailAboutPro.remove();
    detailAboutPro =document.createElement("div");
    detailAboutPro.className = "detailAboutPro";

    let showImg = document.createElement("div");
    showImg.className = "img";
    let myImg = document.createElement("img");
    myImg.src = detailInformation.image;
    myImg.style.width = "300px";
 

    showImg.appendChild(myImg);

    let formInfor = document.createElement("div");
    formInfor.className = "form-info";
    formInfor.style.marginLeft = "5%"

    let product_name = document.createElement("p");
    product_name.textContent = "Product Name: ";
    let createSpanPN = document.createElement("span");
    createSpanPN.id = "product-nameGet";
    createSpanPN.textContent = detailInformation.nameProduct;
    product_name.appendChild(createSpanPN);

    let createPrices = document.createElement("p");
    createPrices.textContent = "Price: ";
    let createSpanP = document.createElement("span");
    createSpanP.id = "priceGet";
    createSpanP.textContent = detailInformation.Price;
    createPrices.appendChild(createSpanP);

    let createColor= document.createElement("p");
    createColor.textContent = "Color: ";
    let createSpanC = document.createElement("span");
    createSpanC.id ="colorGet";
    createSpanC.textContent = detailInformation.Color;
    createColor.appendChild(createSpanC);

    let createSize = document.createElement("p");
    createSize.textContent = "Size: ";
    let createSpanS = document.createElement("span");
    createSpanS.id = "sizeGet";
    createSpanS.textContent = detailInformation.Size;
    createSize.appendChild(createSpanS);

    let createID = document.createElement("p");
    createID.textContent = "ID product: ";
    let createSpanID = document.createElement("span");
    createSpanID.id = "idGet";
    createSpanID.textContent = detailInformation.ID;
    createID.appendChild(createSpanID);

    let createBtnBuy = document.createElement("button");
    createBtnBuy.id = "buyss";
    createBtnBuy.style.marginBottom = "-30px"
    createBtnBuy.textContent = "Order";
    createBtnBuy.addEventListener("click",  function(){
        hide(dialog_Detail)
        show(dialog_buy);
    });
    let createBtbCancel = document.createElement("button");
    createBtbCancel.id = "tocancel";
    createBtbCancel.textContent = "Cancel";
    createBtbCancel.addEventListener("click",function(){
        hide(dialog_Detail);
    })

        
    formInfor.appendChild(product_name);
    formInfor.appendChild(createPrices);
    formInfor.appendChild(createColor);
    formInfor.appendChild(createSize);
    formInfor.appendChild(createID);
    formInfor.appendChild(createBtnBuy);
    formInfor.appendChild(createBtbCancel);

    detailAboutPro.appendChild(showImg);
    detailAboutPro.appendChild(formInfor)
    dialog.appendChild(detailAboutPro);

}

let dialog_Detail = document.querySelector("#dialog-Detail");
console.log(dialog_Detail);



