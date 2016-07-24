<?php

include_once 'DAO.class.php';

class CommandeDao {
    
    public static function add(Commande $commande){
        $bdd=DAO::getPDO();
        $req=$bdd->prepare('INSERT INTO commande(numeroCommande,date,agent,client,montant,description) '
                . 'VALUES(:numeroCommande,:date,:agent,:client,:montant,:description)');
        $numeroCommande = $commande->getNumeroCommande();
        $date = $commande->getDate();
        $agent = $commande->getAgent();
        $client = $commande->getClient();
        $montant = $commande->getMontant();
        $description = $commande->getDescription();
        
        $req->bindParam('numeroCommande', $numeroCommande);
        $req->bindParam('date',$date);
        $req->bindParam('agent',$agent);
        $req->bindParam('client',$client);
        $req->bindParam('montant',$montant);
        $req->bindParam('description',$description);
        
        $req->execute();
    }
    
    public static function delete(Commande $commande){
        $bdd=DAO::getPDO();
        $bdd->exec('DELETE FROM commande WHERE id = '.$commande->getId());
    }
    
    public static function get($id){
        $id = (int)$id;
        $bdd = DAO::getPDO();
        $req = $bdd->query('SELECT * FROM commande WHERE id = '.$id);
        $donnees = $req->fetch(PDO::FETCH_ASSOC);
        if($donnees == false) return false;
        return new Commande($donnees);
    }
    
    public static function getList(){
        $bdd=DAO::getPDO();
        $cmd=array();
        $req=$bdd->query('SELECT * FROM commande');
        while ($donnees = $req->fetch(PDO::FETCH_ASSOC)){
            $cmd[] = new Commande($donnees);
        }
        return $cmd;
    }
    
    public static function getListPaging($start,$limit){
        $bdd=DAO::getPDO();
        $cmd=array();
        $req=$bdd->query('SELECT * FROM commande LIMIT '.$start.', '.$limit);
        while ($donnees = $req->fetch(PDO::FETCH_ASSOC)){
            $cmd[] = new Commande($donnees);
        }
        return $cmd;
    }
    
     public static function count(){
        
        $bdd = DAO::getPDO();
        $sql = "SELECT count(*) FROM commande";
        $result = $bdd->prepare($sql); 
        $result->execute(); 
        return $result->fetchColumn(); 
    }
    
    public static function update(Commande $commande){
        $bdd=DAO::getPDO();
        $req=$bdd->prepare('UPDATE commande SET numeroCommande = :numeroCommande, date = :date,'
                . 'agent = :agent, client = :client, montant = :montant, description = :description where id = :id');
        $req->bindValue(':numeroCommande', $commande->getNumeroCommande());
        $req->bindValue(':date', $commande->getDate());
        $req->bindValue(':agent', $commande->getAgent());
        $req->bindValue(':client', $commande->getClient());
        $req->bindValue(':montant', $commande->getMontant());
        $req->bindValue(':description', $commande->getDescription());
        $req->bindValue(':id', $commande->getId(), PDO::PARAM_INT);
        $req->execute();
    }
}
