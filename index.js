document.getElementById("m").addEventListener("click", function() {
    var emailAddress = "vinodharath123@gmail.com"; // Replace with your email address
    var subject = "Inquiry";
    var body = "hello";
  
    var mailtoLink = "mailto:" + emailAddress + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    
    window.open(mailtoLink);
  });