Ext.define('SOFA.controller.Reporting',{
    extend: 'Ext.app.Controller',
    stores: [
        'ChiffreAffaireAgent',
        'ChiffreAffaireAnnuel',
        'ChiffreAffaireClient',
        'ChiffreAffaireProduit',
        'ColumnBasic',
        'PieBasic'
    ],
    views: [
        'chiffre.ChiffreAffaireAgent',
        'chiffre.ChiffreAffaireAnnuel',
        'chiffre.ChiffreAffaireClient',
        'chiffre.ChiffreAffaireProduit',
        'charts.ColumnBasic',
        'charts.PieBasic',
        'charts.TipChart'
    ],
    
    init: function() {
        this.control({
          
        });
    }
});