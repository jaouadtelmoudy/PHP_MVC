Ext.define('SOFA.view.chiffre.ChiffreAffaireClient', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.chiffreaffaireclient',
    title: 'Chiffre d\'affaire Clients',
    store: 'ChiffreAffaireClient',
    autoScroll: true,
    
    initComponent: function() {
        this.columns = [
            {
                header: 'Client', dataIndex: 'nom', flex: 1,
                renderer: function(value, metadata, record){
                   myToolTipText = "<b>" + record.get('nom') + "</b>";
                   metadata.tdAttr = 'data-qtip="' + myToolTipText + '"';
                   return value;
               }
            },
            {
                header: 'Mois', dataIndex: 'mois', flex: 1,
                renderer: function(value, metadata, record){
                   myToolTipText = "<b>" + record.get('numeroCommande') + "</b>";
                   metadata.tdAttr = 'data-qtip="' + myToolTipText + '"';
                   return value;
                }
            },
            {
                header: 'Montant', dataIndex: 'montant', flex: 1,
                renderer: function(value, metadata, record){
                   myToolTipText = "<b>" + record.get('numeroCommande') + "</b>";
                   metadata.tdAttr = 'data-qtip="' + myToolTipText + '"';
                   return value;
                }
            }
            
        ];
        this.callParent(arguments);
    }
});

