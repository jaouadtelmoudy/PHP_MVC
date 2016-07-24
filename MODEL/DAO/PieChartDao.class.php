<?php
    
include_once 'DAO.class.php';

class PieChartDao {

    public static function getList(){
        $bdd=DAO::getPDO();
        $chrt=array();
        $req=$bdd->query('SELECT * FROM piedata');
        while ($donnees = $req->fetch(PDO::FETCH_ASSOC)){
            $chrt[] = new PieChart($donnees);
        }
        return $chrt;
    }
    
}

