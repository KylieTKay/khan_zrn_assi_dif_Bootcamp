



// // let theButtons = document.querySelectorAll;

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

let team = {
	//#blue
	taylor: {
		profileImageSrc: 'assets/desktop_images/team_images/taylor_khan.jpg',
		name: "TAYLOR KHAN",
		Role: "CODING/DESIGN",
		Description: "In this project, I designed high-fidelity wireframes, selected colors, text, and layout styles, and handled the HTML, CSS, and JavaScript coding for the website, ensuring responsiveness and proper semantic tagging. My role encompassed both design and development, creating a cohesive and visually appealing website.",
	},
	//#
	//#red
	moh: {
		name: "MOH ZARANDAH",
		Role: "DEVELOPEMENT/DESIGN",
		Description: "My role in this project included creating the video's intro logo and developing the website. I designed the logo for the video and handled the HTML, CSS, and JavaScript coding for the website, ensuring responsiveness and proper semantic tagging.",
	},	
	//#
	//#yellow
	mirdan: {
		name: "MIRDAN ASSI",
		Role: "RESEARCH/CONTENT CREATOR",
		Description: "In this project, I conducted research, curated content, selected images, and did some coding to create an informative and visually appealing website for Fanshawe's Interactive Media Design program and Level 4 students' portfolios.",
	},	//#
	//#green
	jason: {
		name: "JASON DIFUNTORUM",
		Role: "VIDEOGRAPHER",
		Description: "My primary role in this project was to create a compelling video that showcased the project's concept using visuals, including images and short videos, accompanied by music. I also assisted in selecting visuals for the website and contributed to some coding tasks to ensure a seamless user experience.",
	},//#
};

//#blue
function taylor() {
    console.log("fired");

    let taylorButtonText = document.getElementById('taylorButtonText');

	taylorCard.classList.toggle("open");
	taylorImg.classList.toggle("hidden");

    if (taylorButtonText.innerText.match('VIEW')) {
        taylorButtonText.innerText = 'CLOSE';
        taylorinfo.textContent = team[this.dataset.member].Description;

		taylorCard.style.display = "grid";
    } else {
        taylorButtonText.innerText = 'VIEW';
        taylorinfo.textContent = ''; // Clear the content when closing
		taylorCard.style.display = "flex";

    }
};

taylorButton.forEach(button => button.addEventListener("click", taylor));
//#
//#red
function moh() {
	console.log("fired");

        let mohButtonText = document.getElementById('mohButtonText');

		mohCard.classList.toggle("open");
		mohImg.classList.toggle("hidden");
  
        if (mohButtonText.innerText.match('VIEW')) {
            mohButtonText.innerText = 'CLOSE';
            mohinfo.textContent = team[this.dataset.member].Description;
			mohCard.style.display = "grid";
        } else {
            mohButtonText.innerText = 'VIEW';
            mohinfo.textContent = ''; // Clear the content when closing
			mohCard.style.display = "flex";
        }
    };
    mohButton.forEach(button => button.addEventListener("click", moh));
//#
//#green
function jason() {
	console.log("fired");

        let jasonButtonText = document.getElementById('jasonButtonText');

		jasonCard.classList.toggle("open");
		jasonImg.classList.toggle("hidden");
  
        if (jasonButtonText.innerText.match('VIEW')) {
            jasonButtonText.innerText = 'CLOSE';
            jasoninfo.textContent = team[this.dataset.member].Description;
			jasonCard.style.display = "grid";
        } else {
            jasonButtonText.innerText = 'VIEW';
            jasoninfo.textContent = ''; // Clear the content when closing
			jasonCard.style.display = "flex";
        }
    };
    jasonButton.forEach(button => button.addEventListener("click", jason));
//#
//#yellow
function mirdan() {
	console.log("fired");

        let mirdanButtonText = document.getElementById('mirdanButtonText');

		mirdanCard.classList.toggle("open");
		mirdanImg.classList.toggle("hidden");
  
        if (mirdanButtonText.innerText.match('VIEW')) {
            mirdanButtonText.innerText = 'CLOSE';
            mirdaninfo.textContent = team[this.dataset.member].Description;
			mirdanCard.style.display = "grid";
        } else {
            mirdanButtonText.innerText = 'VIEW';
            mirdaninfo.textContent = ''; // Clear the content when closing
			mirdanCard.style.display = "flex";
        }
    };
    mirdanButton.forEach(button => button.addEventListener("click", mirdan));
//#



let taylorButton2 = document.querySelectorAll('#taylorBtn2');
let mohButton2 = document.querySelectorAll('#mohBtn2');
let jasonButton2 = document.querySelectorAll('#jasonBtn2');
let mirdanButton2 = document.querySelectorAll('#mirdanBtn2');
let popUpCon = document.querySelector('#lightBox');
let profileImg = document.querySelector('#teamProfileImg');
let teamParagraph = document.querySelector('#teamPara');
let teamName = document.querySelector('#studentNameTag')
let role = document.querySelector('#groupRole');
const closeBtn = document.getElementById('closeBtn');



//#blue
function taylorLB() {
    console.log("Pop-Up");

	// let profileImageSrc = 'assets/desktop_images/team_images/taylor_khan.jpg';
	// previewSrc1 = '';
	// previewSrc2 = '';

	popUpCon.classList.remove('hidden');
	role.textContent = team[this.dataset.member].Role;
	teamName.textContent = team[this.dataset.member].name;
	profileImg.src =  team[this.dataset.member].profileImageSrc;
	teamParagraph.textContent =  team[this.dataset.member].Description;
	// profileImg.src =  team[this.dataset.member].profileImageSrc;

};
closeBtn.addEventListener('click', () => {
    popUpCon.classList.add('hidden');
});


taylorButton2.forEach(button => button.addEventListener("click", taylorLB)),


closeBtn.forEach(button => button.addEventListener("click", closeLightBox));


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
