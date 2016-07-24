<?php
    include_once('../MODEL/class/PieChart.class.php');
    include_once('../MODEL/class/TipChart1.class.php');
    include_once('../MODEL/class/TipChart2.class.php');
    include_once('../MODEL/DAO/PieChartDao.class.php');
    include_once('../MODEL/DAO/TipChart1Dao.class.php');
    include_once('../MODEL/DAO/TipChart2Dao.class.php');
    
    $type = isset($_GET['type']) ? $_GET['type'] : 0;
    
    if($type == 'pie'){
        $chart = PieChartDao::getList();
     
        $result = array();
    
        foreach($chart as $element){
            $temp = array();
            
            $temp['id'] = $element->getId();
            $temp['produit'] = $element->getProduit();
            $temp['quantite'] = $element->getQuantite();
            
            array_push($result, $temp);
        }
        
        $final_result = array("chart"=>$result);
    
        echo json_encode($final_result,JSON_UNESCAPED_UNICODE);
        
    }else if($type == 'tip1'){
        $chart = TipChart1Dao::getList();
        
        $result = array();
    
        foreach($chart as $element){
            $temp = array();
            
            $temp['id'] = $element->getId();
            $temp['mois'] = $element->getMois();
            $temp['data1'] = $element->getData1();
            $temp['data2'] = $element->getData2();
            $temp['data3'] = $element->getData3();
            $temp['data4'] = $element->getData4();
            
            array_push($result, $temp);
        }
        
        $final_result = array("chart"=>$result);
    
        echo json_encode($final_result,JSON_UNESCAPED_UNICODE);
    }else if($type == 'tip2'){
        $chart = TipChart2Dao::getList();
        
        $result = array();
    
        foreach($chart as $element){
            $temp = array();
            
            $temp['id'] = $element->getId();
            $temp['produit'] = $element->getProduit();
            $temp['data'] = $element->getData();
            
            array_push($result, $temp);
        }
        
        $final_result = array("chart"=>$result);
    
        echo json_encode($final_result,JSON_UNESCAPED_UNICODE);
    }
    
?>