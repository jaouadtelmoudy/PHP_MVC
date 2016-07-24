<?php

include_once 'DAO.class.php';

class ChiffreAffaireDao {
    
    public static function addChiffreAffairePersonne(ChiffreAffairePersonne $chiffreAffaire){

        $bdd=DAO::getPDO();
        $req = $bdd->prepare('INSERT INTO chiffreaffairepersonne(nom,mois,montant,type) '
                . 'VALUES(:nom,:mois,:montant,:type)');
        $nom = $chiffreAffaire->getNom();
        $mois = $chiffreAffaire->getMois();
        $montant = $chiffreAffaire->getMontant();
        $type = $chiffreAffaire->getType();
            
        $req->bindParam('nom', $nom);
        $req->bindParam('mois', $mois);
        $req->bindParam('montant', $montant);
        $req->bindParam('type', $type);
            
        $req->execute();
        
    }
    
    public static function addChiffreAffaireEntite(ChiffreAffaireEntite $chiffreAffaire){

        $bdd=DAO::getPDO();
        $req = $bdd->prepare('INSERT INTO chiffreaffaire(nom,montant,type) '
                . 'VALUES(:nom,:montant,:type)');
        $nom = $chiffreAffaire->getNom();
        $montant = $chiffreAffaire->getMontant();
        $type = $chiffreAffaire->getType();
            
        $req->bindParam('nom', $nom);
        $req->bindParam('montant', $montant);
        $req->bindParam('type', $type);
            
        $req->execute();
        
    }
    
    
    public static function getChiffreAffairePersonne($id){
        $id = (int)$id;
        $bdd = DAO::getPDO();
        $req = $bdd->query('SELECT * FROM chiffreaffairepersonne WHERE id = '.$id);
        $donnees = $req->fetch(PDO::FETCH_ASSOC);
        if($donnees == false) return false;
        return new ChiffreAffairePersonne($donnees);
    }
    
     public static function getChiffreAffaireEntite($id){
        $id = (int)$id;
        $bdd = DAO::getPDO();
        $req = $bdd->query('SELECT * FROM chiffreaffaire WHERE id = '.$id);
        $donnees = $req->fetch(PDO::FETCH_ASSOC);
        if($donnees == false) return false;
        return new ChiffreAffaireEntite($donnees);
    }
    
    
    public static function getListClient(){
        $bdd=DAO::getPDO();
        $chfa=array();
        $req=$bdd->query("SELECT * FROM chiffreaffairepersonne WHERE type = 'client'");
        while ($donnees = $req->fetch(PDO::FETCH_ASSOC)){
            $chfa[] = new ChiffreAffairePersonne($donnees);
        }
        return $chfa;
    }
    
    public static function getListAgent(){
        $bdd=DAO::getPDO();
        $chfa=array();
        $req=$bdd->query("SELECT * FROM chiffreaffairepersonne WHERE type = 'agent'");
        while ($donnees = $req->fetch(PDO::FETCH_ASSOC)){
            $chfa[] = new ChiffreAffairePersonne($donnees);
        }
        return $chfa;
    }
    
    public static function getListProduit(){
        $bdd=DAO::getPDO();
        $chfa=array();
        $req=$bdd->query("SELECT * FROM chiffreaffaire WHERE type = 'produit'");
        while ($donnees = $req->fetch(PDO::FETCH_ASSOC)){
            $chfa[] = new ChiffreAffaireEntite($donnees);
        }
        return $chfa;
    }
    
    public static function getListMensuel(){
        $bdd=DAO::getPDO();
        $chfa=array();
        $req=$bdd->query("SELECT * FROM chiffreaffaire WHERE type = 'mensuel'");
        while ($donnees = $req->fetch(PDO::FETCH_ASSOC)){
            $chfa[] = new ChiffreAffaireEntite($donnees);
        }
        return $chfa;
    }
    
   
}
