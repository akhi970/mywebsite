//===========================
// BACK TO TOP
//===========================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if(window.scrollY > 400){

        backToTop.style.display = "flex";

    }

    else{

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// Scroll Progress Bar

const scrollProgress = document.getElementById("scrollProgress");

window.addEventListener("scroll", function(){

    const scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        scrollHeight > 0
        ? (scrollTop / scrollHeight) * 100
        : 0;

    scrollProgress.style.width = progress + "%";

});

// Navbar Shrink Effect

const siteNavbar = document.querySelector(".site-navbar");

window.addEventListener("scroll", function(){

    if(window.scrollY > 80){
        siteNavbar.classList.add("navbar-scrolled");
    }else{
        siteNavbar.classList.remove("navbar-scrolled");
    }

});

//=========================================
// ADMISSION FORM TO WHATSAPP
//=========================================

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(event){

        event.preventDefault();

        const studentName =
            document.getElementById("studentName").value.trim();

        const mobileNumber =
            document.getElementById("mobileNumber").value.trim();

        const emailAddress =
            document.getElementById("emailAddress").value.trim();

        const course =
            document.getElementById("courseSelect").value;

        const studentClass =
            document.getElementById("classSelect").value;

        const contactTime =
            document.getElementById("contactTime").value;

        const medium =
            document.getElementById("mediumSelect").value;

        const enquiryMessage =
            document.getElementById("enquiryMessage").value.trim();

        const mobilePattern = /^[6-9][0-9]{9}$/;

        if(!studentName){

            alert("Please enter the student's name.");
            return;

        }

        if(!mobilePattern.test(mobileNumber)){

            alert("Please enter a valid 10-digit Indian mobile number.");
            return;

        }

        if(!course){

            alert("Please select a course.");
            return;

        }

        if(!studentClass){

            alert("Please select a class.");
            return;

        }

        /*
        अपना WhatsApp number यहाँ डालें।

        Format:
        Country code + mobile number
        बिना +, बिना space, बिना dash

        Example:
        919876543210
        */

        const instituteWhatsAppNumber = "919167119965";

        const whatsappMessage =
`🎓 *New Admission Enquiry — SRP Tutorials*

👤 *Student Name:* ${studentName}
📱 *Mobile Number:* ${mobileNumber}
📧 *Email:* ${emailAddress || "Not provided"}
📚 *Course:* ${course}
🏫 *Class:* ${studentClass}
🌐 *Medium:* ${medium}
🕒 *Preferred Contact Time:* ${contactTime}

💬 *Message:*
${enquiryMessage || "I want admission and demo class details."}

✅ Please share admission details and demo class timing.`;

        const whatsappUrl =
            "https://wa.me/" +
            instituteWhatsAppNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappUrl, "_blank");

    });

}
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) return;

    Array.from(contactForm.childNodes).forEach(function (node) {

        if (
            node.nodeType === Node.TEXT_NODE &&
            node.textContent.trim() === "00"
        ) {
            node.remove();
        }

    });

});

// =========================================
// REMOVE ACCIDENTAL "00" TEXT FROM FORM
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) {
        return;
    }

    function removeDoubleZeroText(rootElement) {

        const walker = document.createTreeWalker(
            rootElement,
            NodeFilter.SHOW_TEXT
        );

        const nodesToRemove = [];

        while (walker.nextNode()) {

            const currentNode = walker.currentNode;

            if (currentNode.textContent.trim() === "00") {
                nodesToRemove.push(currentNode);
            }

        }

        nodesToRemove.forEach(function (node) {
            node.remove();
        });

    }

    // Page load पर remove करें
    removeDoubleZeroText(contactForm);

    // किसी script से दोबारा add हो तो भी remove करें
    const formObserver = new MutationObserver(function () {
        removeDoubleZeroText(contactForm);
    });

    formObserver.observe(contactForm, {
        childList: true,
        subtree: true,
        characterData: true
    });

});
