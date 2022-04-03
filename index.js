function myfunc() {
    var full_name = document.getElementById("full_name").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;
    var topic = document.getElementById("topic").value;
    var subject = document.getElementById("subject").value;

   var name = localStorage.setItem('full_name', full_name);
   var contact =  localStorage.setItem('contact', contact);
   var address =  localStorage.setItem('address', address);
   var address =  localStorage.setItem('topic', topic);
   var subject =  localStorage.setItem('subject', subject);

}