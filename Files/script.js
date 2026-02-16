let tip_hover = document.querySelector("#tips")
let tip = document.querySelector(".tips-hover")

tip_hover.addEventListener("mouseenter", function () {
        return  tip.classList.add("active")
    
})

let timer;

tip_hover.addEventListener("mouseleave", () => {
    timer = setTimeout(() => {
        return  tip.classList.remove("active");
        
    }, 500);
});

tip.addEventListener("mouseenter", () => {
    clearTimeout(timer);
    tip.classList.add("active");
});

tip.addEventListener("mouseleave", () => {
    tip.classList.remove("active")
});

let question = document.querySelectorAll(".faq-item")
let faqText = document.querySelector(".faq-content #faq-p")

question.forEach((item, index) => {
    item.addEventListener("click", function () {

        question.forEach(q=>{
            q.classList.remove("active")
        })
        item.classList.add("active")

       
        if (index === 0) {
            faqText.textContent = "We recommend maintaining a mowing height between 2.5 and 3 inches. Mowing too short stresses the grass, while keeping it higher encourages deep rooting and shades out weeds."
        } 
        else if (index === 1) {
            faqText.textContent = "Grasscycling returns nitrogen and nutrients to the soil as clippings decompose, reducing fertilizer needs by up to 25% and retaining soil moisture."
        }
        else if (index === 2) {
            faqText.textContent = "Most lawns need 1 to 1.5 inches of water per week. It is better to water deeply and less frequently (1-2 times a week) to encourage deep root growth."
        }
        else if (index === 3) {
            faqText.textContent = "Balanced fertilization results in a dense, vigorous lawn that can better resist harmful organisms like diseases, insects, and aggressive weeds."
        }
        else if (index === 4) {
            faqText.textContent = "A regular schedule ensures your soil maintains the proper nutrient balance through changing seasons, promoting spring green-up and winter root protection."
        }
        else if (index === 5) {
            faqText.textContent = "Early morning (between 4 AM and 10 AM) is best. This reduces evaporation from the sun and prevents fungal diseases that occur when grass stays wet overnight."
        }
        else if (index === 6) {
            faqText.textContent = "It is best to wait at least 24 hours after a fertilizer or weed control application before mowing to allow the product to be fully absorbed by the plant."
        }
        else if (index === 7) {
            faqText.textContent = "For granular fertilizer, rain is actually beneficial as it activates the product. For liquid weed control, light rain is usually fine once the product has dried (about 30 minutes)."
        }
        else if (index === 8) {
            faqText.textContent = "Aeration involves pulling small plugs of soil from the lawn to relieve compaction. It allows air, water, and nutrients to reach the roots more easily and is recommended once a year."
        }
       
    })
})


const menuBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-container');

menuBtn.addEventListener('click', () => {
     tip.classList.add("active");
     menuBtn.classList.toggle('active');
     nav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

function scrollToFaq() {
   let p = document.getElementById("faq-p").scrollIntoView({
        behavior: "smooth"
        
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.list-item');
    const mapIframe = document.getElementById('map');

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            const locationName = item.textContent.trim();
            
            const encodedLocation = encodeURIComponent(locationName);
            
            const newMapUrl = `https://www.google.com/maps?q=${encodedLocation}&output=embed`;

            mapIframe.src = newMapUrl;
        });
    });
});
