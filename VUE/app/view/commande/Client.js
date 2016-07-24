Ext.define('SOFA.view.commande.Client', {
   extend: 'Ext.form.FieldSet',
   alias: 'widget.clientcommande',
   title: 'Informations du client :',
   border: true,
   
   initComponent: function() {
       var vide_1 = {
           xtype: 'displayfield',
           value: ' ',
           width: 40
       };
       
       var vide_2 = {
           xtype: 'displayfield',
           value: ' ',
           width: 80
       };
       
       this.layout = {
           type: 'table',
           columns: 7
       };
       
       this.items = [{
            xtype: 'label',
            text: 'Client : ',
            padding: '10',
            style: 'font-weight:bold'
	}, vide_1, {
            xtype: 'label',
            text: '5',
            padding: '10'
	}, vide_2 , {
            xtype: 'label',
            text: 'Total : ',
            padding: '10',
            style: 'font-weight:bold'
        }, vide_1, {
            xtype: 'label',
            text: '5',
            padding: '10'
	}];
	this.callParent();
   }
});