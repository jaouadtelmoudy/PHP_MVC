Ext.define('SOFA.view.chiffre.ChiffreAffaireAgent', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.chiffreaffaireagent',
    title: 'Chiffre d\'affaire Agents',
    store: 'ChiffreAffaireAgent',
    autoScroll: true,
    
    initComponent: function() {
        this.columns = [
            {
                header: 'Agent', dataIndex: 'nom', flex: 1,
                renderer: function(value, metadata, record){
                   myToolTipText = "<b>" + record.get('nom') + "</b>";
                   metadata.tdAttr = 'data-qtip="' + myToolTipText + '"';
                   return value;
               }
            },
            {
                header: 'Mois', dataIndex: 'mois', flex: 1,
                renderer: function(value, metadata, record){
                   myToolTipText = "<b>" + record.get('mois') + "</b>";
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

