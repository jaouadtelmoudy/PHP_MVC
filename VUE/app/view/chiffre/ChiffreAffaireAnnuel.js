Ext.define('SOFA.view.chiffre.ChiffreAffaireAnnuel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.chiffreaffaireannuel',
    title: 'Chiffre d\'affaire Mensuel',
    store: 'ChiffreAffaireAnnuel',
    autoScroll: true,
    
    initComponent: function() {
        this.columns = [
            {
                header: 'Mois', dataIndex: 'nom', flex: 1,
                renderer: function(value, metadata, record){
                   myToolTipText = "<b>" + record.get('nom') + "</b>";
                   metadata.tdAttr = 'data-qtip="' + myToolTipText + '"';
                   return value;
                }
            },
            {
                header: 'Montant', dataIndex: 'montant', flex: 1,
                renderer: function(value, metadata, record){
                   myToolTipText = "<b>" + record.get('montant') + "</b>";
                   metadata.tdAttr = 'data-qtip="' + myToolTipText + '"';
                   return value;
                }
            }
            
        ];
        this.callParent(arguments);
    }
});