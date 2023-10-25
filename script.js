function validateForm(){
    const nama = document.forms('message-form')['name-input'].value

    if(name ==''){
        document.getElementById('error-name').innerHTML = "Nama tidak boleh kosong!"
        
        return false
    }
    document.getElementById("name").innerHTML = "";

    return false;
}
function setName(name){
    document.getElementById("name").innerHTML = name;
    document.getElementById('error-name').innerHTML = ""

}