<?php
    


class PieChart {
    
    protected $id;
    protected $produit;
    protected $quantite;

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
    
    //getter
    function getId() {
        return $this->id;
    }

    function getProduit() {
        return $this->produit;
    }

    function getQuantite() {
        return $this->quantite;
    }

    //setter
    function setId($id) {
        $this->id = $id;
    }

    function setProduit($produit) {
        $this->produit = $produit;
    }

    function setQuantite($quantite) {
        $this->quantite = $quantite;
    }

    
}

