//Foi usado plugin do jquery input mask para fazer a mascara do telefone
$(document).ready(function() {
    
    $("#phone").inputmask({
      mask: ["(99) 9999-9999", "(99) 99999-9999", ],
      keepStatic: true
    });
    $("#registro").click(function(){
        var name = $("#fName").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var confPassword = $("#confPassword").val();

        if(name == ""| phone=="" | email ==""| password==""| confPassword==""){
            alert ("Todos os campos devem se preenchidos");
        }
        else if(password!=confPassword){
            alert("As senhas nao batem, por favor verifique");
        }
        else{
            alert("Nome: "+ name+ "\n" + "Telefone: " + phone + "\n" + "Email: " + email+ "\n" + "Senha: " + password);
        }
    });
  });