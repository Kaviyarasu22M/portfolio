const toggler = document.querySelector('.custom-toggler');
  const menu = document.getElementById('menu');

  toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
  });

  
  menu.addEventListener('hidden.bs.collapse', () => {
    toggler.classList.remove('active');
  });



  const form = document.getElementById("myform");
const msg = document.getElementById("msg");

form.addEventListener("submit", async function(e) {
  e.preventDefault(); 

  msg.style.display = "block";
  msg.innerText = "Submitting...";

  let formData = new FormData(form);

  let response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  if (response.ok) {
    msg.innerText = "✅ Form submitted successfully!";
    setTimeout(() => {
      msg.style.display = "none";
    }, 10000);

    form.reset();
  } else {
    msg.innerText = "❌ Submission failed. Try again.";
  }
});