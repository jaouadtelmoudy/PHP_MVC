<?php
    
include_once('ChiffreAffaire.class.php');

class ChiffreAffairePersonne extends ChiffreAffaire{
    
    protected $mois;

    function __construct(array $donnees) {
        if (isset($donnees['mois'])){
            $this->setMois($donnees['mois']);
        }

        $this->hydrate($donnees);
    }
    
    function getMois() {
        return $this->mois;
    }

    function setMois($mois) {
        $this->mois = $mois;
    }

    
}

