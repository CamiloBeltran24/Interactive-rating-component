(()=>{
  'use strict';
  // HTML references
  let button        = document.querySelector('.btn'),
      list_items    = document.querySelectorAll('.list-rate'),
      rate_box      = document.querySelector('.rating-box'),
      thankyou_box  = document.querySelector('.thankyou-box'),
      rate          = 0,
      rate_content  = document.querySelector('.rating span');

  console.log({ button, list_items, thankyou_box, rate_box, rate_content });

  const getNumber = (item) =>  item.dataset.value ;

  const removeAllActive = (list) => {
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      element.classList.contains("active") ? element.classList.remove("active") : "";
    }
  }

  //EVENTS
  list_items.forEach(( item ) => {
    item.addEventListener("click", () => {
      removeAllActive(list_items);
      item.classList.toggle("active");
      rate = getNumber(item);
    })
  })
  button.addEventListener('click', (e) => {
    rate_box.classList.add("hidden");
    rate_content.innerText = rate;
    setTimeout(() =>{
      thankyou_box.classList.remove("hidden");
    }, 200)
  })
})()