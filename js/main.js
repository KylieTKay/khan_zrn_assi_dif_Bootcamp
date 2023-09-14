// let theButtons = document.querySelectorAll;

//#blue
let taylorButton = document.querySelectorAll('#taylorBtn');
let taylorImg = document.querySelector('#taylorPortPics');
let taylorCard = document.querySelector('#TaylorKhanCard');
let taylorinfo = document.querySelector('#taylorParagraph');
//#
//#red
let mohButton = document.querySelectorAll('#mohBtn');
let mohImg = document.querySelector('#mohPortPics');
let mohCard = document.querySelector('#MohZrnCard');
let mohinfo = document.querySelector('#mohParagraph');
//#
//#green
let jasonButton = document.querySelectorAll('#jasonBtn');
let jasonImg = document.querySelector('#jasonPortPics');
let jasonCard = document.querySelector('#JasonDifCard');
let jasoninfo = document.querySelector('#jasonParagraph');
//#
//#yellow
let mirdanButton = document.querySelectorAll('#mirdanBtn');
let mirdanImg = document.querySelector('#mirdanPortPics');
let mirdanCard = document.querySelector('#MirdanAssiCard');
let mirdaninfo = document.querySelector('#mirdanParagraph');
//#

//#lightblue
let taylorButton2 = document.querySelectorAll('#taylorBtn2');
let mohButton2 = document.querySelectorAll('#mohBtn2');
let jasonButton2 = document.querySelectorAll('#jasonBtn2');
let mirdanButton2 = document.querySelectorAll('#mirdanBtn2');
let popUpCon = document.querySelector('#lightBox');
let profileImg = document.querySelector('#teamProfileImg');
let teamParagraph = document.querySelector('#teamPara');
let role = document.querySelector('#groupRole');
//#

let team = {
	//#blue
	taylor: {
		name: "TAYLOR<br>KHAN",
		Role: "CODING/DESIGN",
		Description: "In this project, I designed high-fidelity wireframes, selected colors, text, and layout styles, and handled the HTML, CSS, and JavaScript coding for the website, ensuring responsiveness and proper semantic tagging. My role encompassed both design and development, creating a cohesive and visually appealing website.",
	},
	//#
	//#red
	moh: {
		name: "MOH<br>ZARANDAH",
		Role: "DEVELOPEMENT/DESIGN",
		Description: "My role in this project included creating the video's intro logo and developing the website. I designed the logo for the video and handled the HTML, CSS, and JavaScript coding for the website, ensuring responsiveness and proper semantic tagging.",
	},	
	//#
	//#yellow
	mirdan: {
		name: "MIRDAN<br>ASSI",
		Role: "RESEARCH/CONTENT CREATOR",
		Description: "In this project, I conducted research, curated content, selected images, and did some coding to create an informative and visually appealing website for Fanshawe's Interactive Media Design program and Level 4 students' portfolios.",
	},	//#
	//#green
	jason: {
		name: "JASON<br>DIFUNTORUM",
		Role: "VIDEOGRAPHER/",
		Description: "My primary role in this project was to create a compelling video that showcased the project's concept using visuals, including images and short videos, accompanied by music. I also assisted in selecting visuals for the website and contributed to some coding tasks to ensure a seamless user experience.",
	},//#
};
//#blue
function taylorM() {
	console.log("fired");

		popUpCon.classList.toggle("hidden");
  
//         teamPara.innerHTML = "";
//             for (item in team[this.dataset.member].Description) {
//                 let newItem = document.createElement ('span');
//                 newItem.textContent = team[this.dataset.member].Description[item];
//                 teamPara.appendChild(newItem);
            
//     };
}
    taylorButton2.forEach(button => button.addEventListener("click", taylorM));
//#


//#red
function moh() {
	console.log("fired");

        let mohButtonText = document.getElementById('mohButtonText');

		mohCard.classList.toggle("open");
		mohImg.classList.toggle("hidden");
  
        mohinfo.innerHTML = "";
        if (mohButtonText.innerText.match('VIEW')) {
            mohButtonText.innerText = 'CLOSE';
            for (item in team[this.dataset.member].Description) {
                let newItem = document.createElement ('span');
                newItem.textContent = team[this.dataset.member].Description[item];
                mohinfo.appendChild(newItem);
            }
        } else {
                mohButtonText.innerText = 'VIEW';}
    };
    mohButton.forEach(button => button.addEventListener("click", moh));
//#
//#green
function jason() {
	console.log("fired");

        let jasonButtonText = document.getElementById('jasonButtonText');

		jasonCard.classList.toggle("open");
		jasonImg.classList.toggle("hidden");
  
        jasoninfo.innerHTML = "";
        if (jasonButtonText.innerText.match('VIEW')) {
            jasonButtonText.innerText = 'CLOSE';
            for (item in team[this.dataset.member].Description) {
                let newItem = document.createElement ('span');
                newItem.textContent = team[this.dataset.member].Description[item];
                jasoninfo.appendChild(newItem);
            }
        } else {
                jasonButtonText.innerText = 'VIEW';}
    };
    jasonButton.forEach(button => button.addEventListener("click", jason));
//#
//#yellow
function mirdan() {
	console.log("fired");

        let mirdanButtonText = document.getElementById('mirdanButtonText');

		mirdanCard.classList.toggle("open");
		mirdanImg.classList.toggle("hidden");
  
        mirdaninfo.innerHTML = "";
        if (mirdanButtonText.innerText.match('VIEW')) {
            mirdanButtonText.innerText = 'CLOSE';
            for (item in team[this.dataset.member].Description) {
                let newItem = document.createElement ('span');
                newItem.textContent = team[this.dataset.member].Description[item];
                mirdaninfo.appendChild(newItem);
            }
        } else {
                mirdanButtonText.innerText = 'VIEW';}
    };
    mirdanButton.forEach(button => button.addEventListener("click", mirdan));
//#

(function(){
	"use strict";
	
	console.log("fired");

	let button = document.querySelector("#hamburger");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	button.addEventListener("click", hamburgerMenu, false);
		
})();
