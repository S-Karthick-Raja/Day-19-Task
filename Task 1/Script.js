// CONSTRUCTION OF BODY
const bodySlt = document.querySelector("body");
bodySlt.innerHTML = `
    <div class="mainContainer">
        <h1>PAGINATION</h1>
        <div class="userDetails">
                            
        </div>
        <div class="pagination">  
            <div class="starting">
            </div>
            
            <div class="inbetween">
            </div>
            <div class="ending">
            </div>
        </div>
    </div>
`;

let pageNumStrt = 1;
let pageNumEnd = 10;
let pageNum = 1;

const userDetailsSlt = document.querySelector(".userDetails");

const paginationInbtwSlt = document.querySelector(".inbetween");

// ASYNC/ AWIAT FUNCTION TO FETCH DETAILS FROM THE API
async function paginationData(pageNumStrt, pageNumEnd, pageNum) {
  const data = await fetch(
    "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
  );
  const dataConv = await data.json();

  // PRINTING USERNAME AND EMAIL
  userDetailsSlt.innerHTML = `
        <p>${dataConv[pageNum - 1].name}</p>
        <p>${dataConv[pageNum - 1].email}</p>
    `;

  // CREATION OF FIRST AND PREVIOUS BUTTON
  const paginationStrtSlt = document.querySelector(".starting");

  paginationStrtSlt.innerHTML = "";
  paginationStrtSlt.innerHTML = `
        <button onclick="first()">First</button>
        <button onclick="previous(${pageNumStrt}, ${pageNumEnd}, ${pageNum})">Previous</button>        
    `;

  // CREATION OF NUMBER BUTTONS PAGINATION
  paginationInbtwSlt.innerHTML = "";

  function paginationDisplay() {
    let i = 0;
    const paginationFilter = dataConv.filter((data) => {
      if (data.id >= pageNumStrt && data.id <= pageNumEnd) {
        i++;
        if (pageNum == data.id) {
          paginationInbtwSlt.innerHTML += `
                        <button class="button${data.id}">${data.id}</button>
                    `;
        } else {
          paginationInbtwSlt.innerHTML += `
                        <button onclick="pageNumSelect(${data.id}, ${pageNumStrt}, ${pageNumEnd}, ${i})" class="button${data.id}">${data.id}</button>
                    `;
        }
      }
    });
  }
  paginationDisplay();

  // CREATION OF NEXT AND LAST BUTTON
  const paginationEndSlt = document.querySelector(".ending");

  paginationEndSlt.innerHTML = "";
  paginationEndSlt.innerHTML += `
        <button onclick="next(${pageNumStrt}, ${pageNumEnd}, ${pageNum})">Next</button>
        <button onclick="last()">Last</button>
    `;
}
paginationData(pageNumStrt, pageNumEnd, pageNum);

// ONCLICK FUNCTION WWRITTEN HERE FOR THE PAGINATION BUTTONS
function pageNumSelect(pageNum, pageNumStrt, pageNumEnd, i) {
  if (i >= 6 && pageNum <= 100) {
    if (i === 6 && pageNum <= 95) {
      paginationData(
        (pageNumStrt = pageNumStrt + 1),
        (pageNumEnd = pageNumEnd + 1),
        pageNum
      );
    } else if (i === 7 && pageNum <= 95) {
      paginationData(
        (pageNumStrt = pageNumStrt + 2),
        (pageNumEnd = pageNumEnd + 2),
        pageNum
      );
    } else if (i === 8 && pageNum <= 95) {
      paginationData(
        (pageNumStrt = pageNumStrt + 3),
        (pageNumEnd = pageNumEnd + 3),
        pageNum
      );
    } else if (i === 9 && pageNum <= 95) {
      paginationData(
        (pageNumStrt = pageNumStrt + 4),
        (pageNumEnd = pageNumEnd + 4),
        pageNum
      );
    } else if (i === 10 && pageNum <= 95) {
      paginationData(
        (pageNumStrt = pageNumStrt + 5),
        (pageNumEnd = pageNumEnd + 5),
        pageNum
      );
    } else {
      paginationData((pageNumStrt = 91), (pageNumEnd = 100), pageNum);
    }
  } else {
    if (i === 5 && pageNum >= 6) {
      paginationData(
        (pageNumStrt = pageNumStrt - 1),
        (pageNumEnd = pageNumEnd - 1),
        pageNum
      );
    } else if (i === 4 && pageNum >= 6) {
      paginationData(
        (pageNumStrt = pageNumStrt - 2),
        (pageNumEnd = pageNumEnd - 2),
        pageNum
      );
    } else if (i === 3 && pageNum >= 6) {
      paginationData(
        (pageNumStrt = pageNumStrt - 3),
        (pageNumEnd = pageNumEnd - 3),
        pageNum
      );
    } else if (i === 2 && pageNum >= 6) {
      paginationData(
        (pageNumStrt = pageNumStrt - 4),
        (pageNumEnd = pageNumEnd - 4),
        pageNum
      );
    } else if (i === 1 && pageNum >= 6) {
      paginationData(
        (pageNumStrt = pageNumStrt - 5),
        (pageNumEnd = pageNumEnd - 5),
        pageNum
      );
    } else {
      paginationData((pageNumStrt = 1), (pageNumEnd = 10), pageNum);
    }
  }
}

// ONCLICK FUNCTION FOR FIRST BUTTON
function first() {
  paginationData((pageNumStrt = 1), (pageNumEnd = 10), (pageNum = 1));
}

// ONCLICK FUNCTION FOR LAST BUTTON
function last() {
  paginationData((pageNumStrt = 91), (pageNumEnd = 100), (pageNum = 100));
}

// ONCLICK FUNCTION FOR NEXT BUTTON
function next(pageNumStrt, pageNumEnd, pageNum) {
  if (pageNum <= 99) {
    paginationData((pageNumStrt = 91), (pageNumEnd = 100), (pageNum = 100));
  }
}
// ONCLICK FUNCTION FOR PREVIOUS BUTTON
function previous(pageNumStrt, pageNumEnd, pageNum) {
  if (pageNum >= 2) {
    paginationData((pageNumStrt -= 1), (pageNumEnd -= 1), (pageNum -= 1));
  }
}
