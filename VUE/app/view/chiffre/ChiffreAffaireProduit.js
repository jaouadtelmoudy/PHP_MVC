Ext.define('SOFA.view.chiffre.ChiffreAffaireProduit', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.chiffreaffaireproduit',
    title: 'Chiffre d\'affaire Produits',
    store: 'ChiffreAffaireProduit',
    autoScroll: true,
    
    initComponent: function() {
        this.columns = [
            {
                header: 'Produit', dataIndex: 'nom', flex: 1,
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