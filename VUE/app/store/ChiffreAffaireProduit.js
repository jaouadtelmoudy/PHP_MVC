Ext.define('SOFA.store.ChiffreAffaireProduit', {
    extend: 'Ext.data.Store',
    model: 'SOFA.model.ChiffreAffaireProduit',
    autoLoad: true,
    
   proxy: {
       type: 'ajax',
       url: 'http://localhost:81/sofa/controller/chiffreAffaireData.php?type=produit',
       reader: {
           type: 'json',
           root: 'chiffreAffaire',
           successProperty: 'success'
       }
   }
});