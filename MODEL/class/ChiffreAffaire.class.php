<?php
    


abstract class ChiffreAffaire {
    
    protected $id;
    protected $nom;
    protected $montant;
    protected $type;

   //getter
   function getId() {
       return $this->id;
   }

   function getNom() {
       return $this->nom;
   }

   function getMontant() {
       return $this->montant;
   }

   function getType() {
       return $this->type;
   }

   //setter
   function setId($id) {
       $this->id = $id;
   }

   function setNom($nom) {
       $this->nom = $nom;
   }

   function setMontant($montant) {
       $this->montant = $montant;
   }

   function setType($type) {
       $this->type = $type;
   }

   //hydratation
   public function hydrate(array $donnees) {
        foreach ($donnees as $key => $value) {

            $method = 'set' . ucfirst($key);

            // Si le setter correspondant existe
            if (method_exists($this, $method)) {
                // On appelle le setter
                $this->$method($value);
            }
        }
    }
    
}

