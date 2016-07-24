<?php
    
include_once('ChiffreAffaire.class.php');


class ChiffreAffaireEntite extends ChiffreAffaire{
    
    function __construct(array $donnees) {
        $this->hydrate($donnees);
    }
}

