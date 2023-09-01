const loadPhone = async (searchTeaxt,isShow) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchTeaxt}`);
    const data = await res.json();
    const phones = data.data
    //console.log(phones);
    displayPhone(phones,isShow);
    // console.log(searchTeaxt,isShow);
}

const displayPhone = (phones,isShow) =>{
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

     const showall = document.getElementById('show-all');
    if(phones.length > 12 && !isShow)
       showall.classList.remove('hidden');
    else
     showall.classList.add('hidden');

    if(!isShow)
    phones = phones.slice(0,12);

    phones.forEach(phone =>{
        // console.log(phone);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card  bg-base-100 shadow-xl">
        <figure><img src=${phone.image} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-center">
            <button onclick = 'handleShowDetail("${phone.slug}")' class="btn btn-primary">Show Details</button>
          </div>
        </div>
      </div>   
        `;
        phoneContainer.appendChild(div);
    })
    loadSpin(false);
}

// show Details
 const handleShowDetail = async(id)=>{
    console.log('hell',id);

    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    console.log(data);
 } 

const handleSearch =  (isShow) =>{
    loadSpin(true);
//    console.log('search'); 
  const searchText = document.getElementById('search-field').value ;
//   console.log(searchText);
loadPhone(searchText,isShow);


}

const loadSpin = (isSpin) =>{
    const loadSpinner = document.getElementById('loadspin');
    if(isSpin)
    loadSpinner.classList.remove('hidden');
  else
  loadSpinner.classList.add('hidden');
}


// handle show all
 const showAll = () =>{
    handleSearch(true)
 }

loadPhone('13');