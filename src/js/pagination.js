const element = document.querySelector(".pagination ul");


export function createPagination(total, page){
    /*let paginationMark = '';        
        if (page <= 3) {           
            if (page === 1){
                if(total === 0){
                    paginationMark = "";
                    pagination.innerHTML = paginationMark;
                }   
                else if (total === 1){
                    paginationMark = `        
                    <li class='first page active-page' data-id="${page}"> ${page} </li>
                    ` 
                    pagination.innerHTML = paginationMark;
                }else if (total === 2){
                    paginationMark = `        
                    <li class='first page active-page' data-id="${page}"> ${page} </li>
                    <li class='last page' data-id="${total}"> ${total} </li>
                    ` 
                    pagination.innerHTML = paginationMark;
                }else if (total === 3){
                    paginationMark = `        
                    <li class='first page active-page' data-id="${page}"> ${page} </li>
                    <li class='page' data-id="${page+1}"> ${page+1} </li>
                    <li class='last page' data-id="${total}"> ${total} </li>
                    ` 
                    pagination.innerHTML = paginationMark;
                }else if (total === 4){
                    paginationMark = `        
                    <li class='first page active-page' data-id="${page}"> ${page} </li>
                    <li class='page' data-id="${page+1}"> ${page+1} </li>
                    <li class='page' data-id="${page+2}"> ${page+2} </li>
                    <li class='last page' data-id="${total}"> ${total} </li>
                    ` 
                    pagination.innerHTML = paginationMark;
                }

                else {
                    paginationMark = `        
                    <li class='first page active-page' data-id="${page}"> ${page} </li>                  
                    <li class='page' data-id="${page+1}"> ${page+1} </li>
                    <li class='page' data-id="${page+2}"> ${page+2} </li>   
                    <li class='page' data-id="${page+3}"> ${page+3} </li>             
                    <li class='dots'> ... </li>
                    <li class='last page' data-id="${total}"> ${total} </li>
                    ` 
                    pagination.innerHTML = paginationMark;
                }
               
            } else if(page === 2) {                
                if (total === 2){
                    paginationMark = `        
                    <li class='first page' data-id="1"> 1 </li>  
                    <li class='page active-page' data-id="${page}"> ${page} </li>
                    ` 
                    pagination.innerHTML = paginationMark;
                }else if (total === 3){
                    paginationMark = `        
                    <li class='first page' data-id="1"> 1 </li>  
                    <li class='page active-page' data-id="${page}"> ${page} </li>
                    <li class='last page' data-id="${total}"> ${total} </li>
                    ` 
                    pagination.innerHTML = paginationMark;
                }else if (total === 4){
                    paginationMark = `        
                    <li class='first page' data-id="1"> 1 </li>  
                    <li class='page active-page' data-id="${page}"> ${page} </li>
                    <li class='page' data-id="${page+1}"> ${page+1} </li>
                    <li class='last page' data-id="${total}"> ${total} </li>
                    ` 
                    pagination.innerHTML = paginationMark;
                }else {
                    paginationMark = `
                    <li class='first page' data-id="1"> 1 </li>                  
                    <li class='page active-page' data-id="${page}"> ${page} </li>
                    <li class='page' data-id="${page+1}"> ${page+1} </li>   
                    <li class='page' data-id="${page+2}"> ${page+2} </li>             
                    <li class='dots'> ... </li>
                    <li class='last page' data-id="${total}"> ${total} </li>
                    `
                    pagination.innerHTML = paginationMark;
                    }
                
            } else{
                if (total === 3){
                    paginationMark = `
                    <li class='first page' data-id="1"> 1 </li>                  
                    <li class='page' data-id="${page -1}"> ${page-1} </li>
                    <li class='page active-page' data-id="${page}"> ${page} </li>                   
                    `
                    pagination.innerHTML = paginationMark;
                }else{
                    paginationMark = `
                    <li class='first page' data-id="1"> 1 </li>                  
                    <li class='page' data-id="${page -1}"> ${page-1} </li>
                    <li class='page active-page' data-id="${page}"> ${page} </li>   
                    <li class='page' data-id="${page+1}"> ${page+1} </li>
                    <li class='page' data-id="${page+2}"> ${page+2} </li>              
                    <li class='dots'> ... </li>
                    <li class='last page' data-id="${total}"> ${total} </li>
                    `
                    pagination.innerHTML = paginationMark;
                }               
            }           
        }       

        //--------------------------------------------------------
        if (page >= 4) {
            if (page === 4){
                if(total === 4){
                paginationMark = `
                <li class='first page' data-id="1"> 1 </li>                  
                <li class='page' data-id="${page-2}"> ${page-2} </li>
                <li class='page' data-id="${page-1}"> ${page-1} </li>
                <li class='page active-page' data-id="${page}"> ${page} </li>                   
                `
                pagination.innerHTML = paginationMark;

                }else{
                paginationMark = `
                <li class='first page' data-id="1"> 1 </li>                  
                <li class='page' data-id="${page-2}"> ${page-2} </li>
                <li class='page' data-id="${page-1}"> ${page-1} </li>
                <li class='page active-page' data-id="${page}"> ${page} </li>   
                <li class='page' data-id="${page+1}"> ${page+1} </li>
                <li class='page' data-id="${page+2}"> ${page+2} </li>              
                <li class='dots'> ... </li>
                <li class='last page' data-id="${total}"> ${total} </li>
                `
                pagination.innerHTML = paginationMark;
                }
                 
            } else if(page === total){
                paginationMark = `
                <li class=' first page' data-id="1"> 1 </li> 
                <li class='dots'> ... </li>   
                <li class='page' data-id="${page-3}"> ${page-3} </li>              
                <li class='page' data-id="${page-2}"> ${page-2} </li>
                <li class='page' data-id="${page-1}"> ${page-1} </li>
                <li class='last page active-page' data-id="${total}"> ${total} </li>
                `
                pagination.innerHTML = paginationMark; 
            } else if(page === total - 1){
                paginationMark = `
                <li class='first page' data-id="1"> 1 </li> 
                <li class='dots'> ... </li>
                <li class='page' data-id="${page-2}"> ${page-2} </li>              
                <li class='page' data-id="${page-1}"> ${page-1} </li>
                <li class='page active-page' data-id="${page}"> ${page} </li>
                <li class='last page' data-id="${total}"> ${total} </li>
                `
                pagination.innerHTML = paginationMark; 
            } else if(page === total - 2){
                paginationMark = `
                <li class='first page' data-id="1"> 1 </li> 
                <li class='dots'> ... </li>
                <li class='page' data-id="${page-2}"> ${page-2} </li> 
                <li class='page' data-id="${page-1}"> ${page-1} </li>              
                <li class='page active-page' data-id="${page}"> ${page} </li>
                <li class='page' data-id="${page+1}"> ${page+1} </li>
                <li class='last page' data-id="${total}"> ${total} </li>
                `
                pagination.innerHTML = paginationMark; 
            } else if(page === total - 3){
                paginationMark = `
                <li class=' first page' data-id="1"> 1 </li> 
                <li class='dots'> ... </li>
                <li class='page' data-id="${page-2}"> ${page-2} </li> 
                <li class='page' data-id="${page-1}"> ${page-1} </li>              
                <li class='page active-page' data-id="${page}"> ${page} </li>
                <li class='page' data-id="${page+1}"> ${page+1} </li>
                <li class='page' data-id="${page+2}"> ${page+2} </li>
                <li class='last page' data-id="${total}"> ${total} </li>
                `
                pagination.innerHTML = paginationMark; 
            }
            else {
            paginationMark = `
                <li class='first page' data-id="1"> 1 </li>                  
                <li class='dots'> ... </li>
                <li class='page' data-id="${page -2}"> ${page-2} </li>
                <li class='page' data-id="${page-1}"> ${page-1} </li>
                <li class='page active-page' data-id="${page}"> ${page} </li>   
                <li class='page' data-id="${page+1}"> ${page+1} </li>
                <li class='page' data-id="${page+2}"> ${page+2} </li>              
                <li class='dots'> ... </li>
                <li class='last page' data-id="${total}"> ${total} </li>
                `
                pagination.innerHTML = paginationMark; 
            }
        }*/
            console.log(total);
            console.log(page);
            let liTag = '';
            let active;
            let beforePage = page - 1;
            let afterPage = page + 1;
            if(page > 1){ //show the next button if the page value is greater than 1
              liTag += `<li class="btn prev" onclick="createPagination(total, ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
            }
          
            if(page > 2){ //if page value is less than 2 then add 1 after the previous button
              liTag += `<li class="first numb" onclick="createPagination(total, 1)"><span>1</span></li>`;
              if(page > 3){ //if page value is greater than 3 then add this (...) after the first li or page
                liTag += `<li class="dots"><span>...</span></li>`;
              }
            }
          
            // how many pages or li show before the current li
            if (page == total) {
              beforePage = beforePage - 2;
            } else if (page == total - 1) {
              beforePage = beforePage - 1;
            }
            // how many pages or li show after the current li
            if (page == 1) {
              afterPage = afterPage + 2;
            } else if (page == 2) {
              afterPage  = afterPage + 1;
            }
          
            for (var plength = beforePage; plength <= afterPage; plength++) {
              if (plength > total) { //if plength is greater than totalPage length then continue
                continue;
              }
              if (plength == 0) { //if plength is 0 than add +1 in plength value
                plength = plength + 1;
              }
              if(page == plength){ //if page is equal to plength than assign active string in the active variable
                active = "active";
              }else{ //else leave empty to the active variable
                active = "";
              }
              liTag += `<li class="numb ${active}" onclick="createPagination(total, ${plength})"><span>${plength}</span></li>`;
            }
          
            if(page < total - 1){ //if page value is less than totalPage value by -1 then show the last li or page
              if(page < total - 2){ //if page value is less than totalPage value by -2 then add this (...) before the last li or page
                liTag += `<li class="dots"><span>...</span></li>`;
              }
              liTag += `<li class="last numb" onclick="createPagination(total, ${total})"><span>${total}</span></li>`;
            }
          
            if (page < total) { //show the next button if the page value is less than totalPage(20)
              liTag += `<li class="btn next" onclick="createPagination(total, ${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
            }
            element.innerHTML = liTag; //add li tag inside ul tag
            return liTag; //reurn the li tag
    }
