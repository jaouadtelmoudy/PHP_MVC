<?php
    
include_once 'DAO.class.php';

class TipChart1Dao {

    public static function getList(){
        $bdd=DAO::getPDO();
        $chrt=array();
        $req=$bdd->query('SELECT * FROM tipdata1');
        while ($donnees = $req->fetch(PDO::FETCH_ASSOC)){
            $chrt[] = new TipChart1($donnees);
        }
        return $chrt;
    }

}

