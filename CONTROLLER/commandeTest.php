<?php
    include_once('../MODEL/class/Commande.class.php');
    include_once('../MODEL/DAO/CommandeDao.class.php');
    
    $donnees = array("numeroCommande" => 2571287,"date" => date('Ydm'),
        "agent" => 'agent de test',"client" => 'client de test',"montant" => 36923,
            "description" => 'description de test');
    
    $commande = new Commande($donnees);
    
    print_r(CommandeDao::getListPaging(10,5));
?>