<?php
    include_once('../MODEL/class/Commande.class.php');
    include_once('../MODEL/DAO/CommandeDao.class.php');
    header('Content-Type: text/html; charset=utf-8');
    
    $start = isset($_GET['start']) ? $_GET['start'] : 0;
    $limit = isset($_GET['limit']) ? $_GET['limit'] : 0;
    
    $commandes = CommandeDao::getListPaging($start,$limit);
    
    $result = array();
    
    
    foreach($commandes as $element){
        $temp = array();
        
        $temp['id'] = $element->getId();
        $temp['numeroCommande'] = $element->getNumeroCommande();
        $temp['date'] = $element->getDate();
        $temp['agent'] = $element->getAgent();
        $temp['client'] = $element->getClient();
        $temp['montant'] = $element->getMontant();
        $temp['description'] = $element->getDescription();
        $temp['pdf'] = 'app/picture/pdf.png';
        $temp['maj'] = 'app/picture/update.png';
        
        array_push($result, $temp);
    }
    
    $final_result = array("totalCount"=>  CommandeDao::count(),"commandes"=>$result);
    
    echo json_encode($final_result,JSON_UNESCAPED_UNICODE);
    
?>