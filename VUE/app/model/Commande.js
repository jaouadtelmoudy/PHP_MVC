Ext.define('SOFA.model.Commande', {
    extend: 'Ext.data.Model',
    fields: ['id','numeroCommande','date','agent','client','montant','pdf','maj']
});