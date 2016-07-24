<?php

class DAO{
    private static $_pdo;
    protected $pdo;

    public function __construct() {
    try
    {
        $donnees = file_get_contents(dirname (__FILE__)."/../../config/init.txt");
        $tab = explode("|", $donnees);
        $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
        $pdo_options[PDO::MYSQL_ATTR_INIT_COMMAND] = "SET NAMES utf8";
        $this->pdo = new PDO('mysql:host='.$tab[0].';dbname='.$tab[3],$tab[1],$tab[2], $pdo_options);
    } catch(Exception $e)
    {
        die('Erreur : '.$e->getMessage());
    }

    }

    public static function getPDO(){

    try {

    $file = fopen(dirname (__FILE__)."/../../config/init.txt", 'r');
    $donnees = fgets($file);
    fclose($file);
    $tab = explode("|", $donnees);

    $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
    $pdo_options[PDO::MYSQL_ATTR_INIT_COMMAND] = "SET NAMES utf8";
    $_pdo = new PDO('mysql:host='.$tab[0].';dbname='.$tab[3],$tab[1],$tab[2], $pdo_options);
    
    return $_pdo;

    }
    catch (Exception $e)
    {
        die('error'.$e->getMessage());
        return null;
    }

}

}

?>