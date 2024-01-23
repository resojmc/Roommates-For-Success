const swiper = new Swiper(".swiper", 
{
  loop: true,
  slidePerView: "auto",
  spaceBetween: 30,
})




const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-id");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click" , (e) => 
{
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) =>
{
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});




function sendEmail() {
    const params = {
      to_email: document.getElementById("email-input").value,
    };
    const serviceID = "service_c6688w6";
    const templateID = "template_3hg8c6g";

    emailjs
      .send(serviceID, templateID, params)
      .then((clearInput) => {
        document.getElementById("email-input").value = "";
        alert("Message Sent Successfully!");
      })
      .catch((err) => {
        alert("Error. Message was not sent.");
      });
  }