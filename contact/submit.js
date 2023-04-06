let submit = document.getElementById("contact_submit");
let ip = "107.2.237.13:8000"

function check_for_whitespace(message) {
    return message.replace(/(\s{2,}|\s)/g, function(match, group1) {
      return group1 ? '+' : '';
    });
}
  

function submit_values(){
    event.preventDefault();
    const name = document.getElementById("contact_name")
    const email = document.getElementById("contact_email")
    const message = document.getElementById("contact_message")
    const full_route = "http://"+ip+"/contactus/"+check_for_whitespace(name.value)+"/"+email.value+"/"+check_for_whitespace(message.value)
    window.location.href = full_route;
}