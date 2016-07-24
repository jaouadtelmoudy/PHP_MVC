<?php
    


class TipChart1 {
    
   protected $id;
   protected $mois;
   protected $data1;
   protected $data2;
   protected $data3;
   protected $data4;
    
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

    function getMois() {
        return $this->mois;
    }

    function getData1() {
        return $this->data1;
    }

    function getData2() {
        return $this->data2;
    }

    function getData3() {
        return $this->data3;
    }

    function getData4() {
        return $this->data4;
    }

    //setter
    function setId($id) {
        $this->id = $id;
    }

    function setMois($mois) {
        $this->mois = $mois;
    }

    function setData1($data1) {
        $this->data1 = $data1;
    }

    function setData2($data2) {
        $this->data2 = $data2;
    }

    function setData3($data3) {
        $this->data3 = $data3;
    }

    function setData4($data4) {
        $this->data4 = $data4;
    }



}

