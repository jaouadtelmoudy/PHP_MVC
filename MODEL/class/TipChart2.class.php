<?php
    


class TipChart2 {
    
    protected $id;
    protected $produit;
    protected $data;
    
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

    function getData() {
        return $this->data;
    }

    //setter
    function setId($id) {
        $this->id = $id;
    }

    function setProduit($produit) {
        $this->produit = $produit;
    }

    function setData($data) {
        $this->data = $data;
    }

    
}

