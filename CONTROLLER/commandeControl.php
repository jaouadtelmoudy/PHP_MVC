<?php
    include_once('../MODEL/class/Commande.class.php');
    include_once('../MODEL/DAO/CommandeDao.class.php');
    
    if(isset($_POST['numeroCommande']) && isset($_POST['date']) && isset($_POST['agent']) && 
            isset($_POST['client']) && $_POST['montant'] && $_POST['description']){
      
        
        $donnees = array("numeroCommande" => $_POST['numeroCommande'],"date" => $_POST['date'],
        "agent" => $_POST['agent'],"client" => $_POST['client'],"montant" => $_POST['montant'],
            "description" => $_POST['description']);
        
        $commande = new Commande($donnees);
        
        CommandeDao::add($commande);
    }
?>