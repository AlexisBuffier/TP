var form = document.getElementById('form');

form.addEventListener('submit', function()
{
    var login = document.getElementById('login');
    var mdp = document.getElementById('MDP');

    if(login.value == "login" && mdp.value == "mdp")
    {
        alert("Connexion réussie");
    }
    else
    {
        alert("Identifiant ou mots de passe incorrecte");
    }
});