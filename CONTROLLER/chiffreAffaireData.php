<?php
    include_once('../MODEL/class/ChiffreAffaireEntite.class.php');
    include_once('../MODEL/class/ChiffreAffairePersonne.class.php');
    include_once('../MODEL/DAO/ChiffreAffaireDao.class.php');
    header('Content-Type: text/html; charset=utf-8');
    
    $type = isset($_GET['type']) ? $_GET['type'] : 0;
    
    if($type == 'agent'){
        $chiffreAffaires = ChiffreAffaireDao::getListAgent();
     
        $result = array();
    
        foreach($chiffreAffaires as $element){
            $temp = array();
            
            $temp['id'] = $element->getId();
            $temp['nom'] = $element->getNom();
            $temp['mois'] = $element->getMois();
            $temp['montant'] = $element->getMontant();
            
            array_push($result, $temp);
        }
        
        $final_result = array("chiffreAffaire"=>$result);
    
        echo json_encode($final_result,JSON_UNESCAPED_UNICODE);
        
    }else if($type == 'client'){
        $chiffreAffaires = ChiffreAffaireDao::getListClient();
        
        $result = array();
    
        foreach($chiffreAffaires as $element){
            $temp = array();
            
            $temp['id'] = $element->getId();
            $temp['nom'] = $element->getNom();
            $temp['mois'] = $element->getMois();
            $temp['montant'] = $element->getMontant();
            
            array_push($result, $temp);
        }
        
        $final_result = array("chiffreAffaire"=>$result);
    
        echo json_encode($final_result,JSON_UNESCAPED_UNICODE);
    }else if($type == 'produit'){
        $chiffreAffaires = ChiffreAffaireDao::getListProduit();
        
        $result = array();
    
        foreach($chiffreAffaires as $element){
            $temp = array();
            
            $temp['id'] = $element->getId();
            $temp['nom'] = $element->getNom();
            $temp['montant'] = $element->getMontant();
            
            array_push($result, $temp);
        }
        
        $final_result = array("chiffreAffaire"=>$result);
    
        echo json_encode($final_result,JSON_UNESCAPED_UNICODE);
    }else if($type == 'mensuel'){
        $chiffreAffaires = ChiffreAffaireDao::getListMensuel();
        
        $result = array();
    
        foreach($chiffreAffaires as $element){
            $temp = array();
            
            $temp['id'] = $element->getId();
            $temp['nom'] = $element->getNom();
            $temp['montant'] = $element->getMontant();
            
            array_push($result, $temp);
        }
        
        $final_result = array("chiffreAffaire"=>$result);
    
        echo json_encode($final_result,JSON_UNESCAPED_UNICODE);
    }
    
?>