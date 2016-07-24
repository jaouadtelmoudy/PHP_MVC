<?php
    


class TipChart2Dao {
    
    public static function getList(){
        $bdd=DAO::getPDO();
        $chrt=array();
        $req=$bdd->query('SELECT * FROM tipdata2');
        while ($donnees = $req->fetch(PDO::FETCH_ASSOC)){
            $chrt[] = new TipChart2($donnees);
        }
        return $chrt;
    }
    
}

