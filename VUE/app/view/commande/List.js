Ext.define('SOFA.view.commande.List', {
   extend: 'Ext.grid.Panel',
   alias: 'widget.commandelist',
   title: 'Liste des commandes',
   store: 'Commande',
   autoScroll: true,
   height: Ext.getBody(),
   initComponent: function() {
       this.tools = [{
            type:'plus',
            tooltip: 'Nouvelle Commande',
            itemId: 'addCommand',
            handler: function(event, toolEl, panel){
            // refresh logic
            }
        }],
       this.columns = [
           {
               header: 'Numéro de commande', dataIndex: 'numeroCommande', flex: 1,itemId: 'numeroCommandeList',
               renderer: function(value, metadata, record){
                   myToolTipText = "<b>" + record.get('numeroCommande') + "</b>";
                   metadata.tdAttr = 'data-qtip="' + myToolTipText + '"';
                   return value;
               }
           },
           {
               header: 'Date', dataIndex: 'date', flex: 1,itemId: 'dateList',
               renderer: function(value, metadata, record){
                   myToolTipText = "<b>" + record.get('date') + "</b>";
                   metadata.tdAttr = 'data-qtip="' + myToolTipText + '"';
                   return value;
               }
           },
           {
               header: 'Agent', dataIndex: 'agent', flex: 1,itemId: 'agentList',
               renderer: function(value, metadata, record){
                   myToolTipText = "<b>" + record.get('agent') + "</b>";
                   metadata.tdAttr = 'data-qtip="' + myToolTipText + '"';
                   return value;
               }
           },
           {
               header: 'Client', dataIndex: 'client', flex: 1,itemId: 'clientList',
               renderer: function(value, metadata, record){
                   myToolTipText = "<b>" + record.get('client') + "</b>";
                   metadata.tdAttr = 'data-qtip="' + myToolTipText + '"';
                   return value;
               }
           },
           {
               header: 'Montant', dataIndex: 'montant', flex: 1,itemId:'montantList',
               renderer: function(value, metadata, record){
                   myToolTipText = "<b>" + record.get('montant') + "</b>";
                   metadata.tdAttr = 'data-qtip="' + myToolTipText + '"';
                   return value;
               }
           },
           {
               header: 'PDF', dataIndex: 'pdf', flex: 1,itemId: 'pdfList',
               renderer: function(value){
                   return '<img src="' + value + '" />';
               }
           },
           {
               header: 'MAJ', dataIndex: 'maj', flex: 1,
               renderer: function(value){
                   return '<img src="' + value + '" />';
               }
           }
       
       ];
       this.dockedItems = [{
           xtype: 'pagingtoolbar',
           store: this.store,   // same store GridPanel is using
           dock: 'bottom',
           displayInfo: true
       }],
       this.callParent(arguments);
   }
});