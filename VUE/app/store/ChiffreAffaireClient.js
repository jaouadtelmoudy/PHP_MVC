Ext.define('SOFA.store.ChiffreAffaireClient', {
    extend: 'Ext.data.Store',
    model: 'SOFA.model.ChiffreAffaireClient',
    autoLoad: true,
    
   proxy: {
       type: 'ajax',
       url: 'http://localhost:81/sofa/controller/chiffreAffaireData.php?type=client',
       reader: {
           type: 'json',
           root: 'chiffreAffaire',
           successProperty: 'success'
       }
   }
});