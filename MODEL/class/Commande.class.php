<?php
    


class Commande {
    
    protected $id;
    protected $numeroCommande;
    protected $date;
    protected $agent;
    protected $client;
    protected $montant;
    protected $description;
    
    //constructeur
    public function __construct(array $donnees){
        foreach($donnees as $key=>$value){
            $method = 'set'.ucfirst($key); //met le premier caractere en majuscule
            //si le setter existe on l'appel
            if(method_exists($this, $method)){
                $this->$method($value);
            }
        }
    }
    
    // getter
    function getId() {
        return $this->id;
    }

    function getNumeroCommande() {
        return $this->numeroCommande;
    }

    function getDate() {
        return $this->date;
    }

    function getAgent() {
        return $this->agent;
    }

    function getClient() {
        return $this->client;
    }

    function getMontant() {
        return $this->montant;
    }
    function getDescription() {
        return $this->description;
    }
    
    // setter
    function setId($id) {
        $this->id = $id;
    }

    function setNumeroCommande($numeroCommande) {
        $this->numeroCommande = $numeroCommande;
    }

    function setDate($date) {
        $this->date = $date;
    }

    function setAgent($agent) {
        $this->agent = $agent;
    }

    function setClient($client) {
        $this->client = $client;
    }

    function setMontant($montant) {
        $this->montant = $montant;
    }
    function setDescription($description) {
        $this->description = $description;
    }




    
}

