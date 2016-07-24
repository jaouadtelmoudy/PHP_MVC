Ext.define('SOFA.store.ChiffreAffaireAnnuel', {
    extend: 'Ext.data.Store',
    model: 'SOFA.model.ChiffreAffaireAnnuel',
    autoLoad: true,
    
   proxy: {
       type: 'ajax',
       url: 'http://localhost:81/sofa/controller/chiffreAffaireData.php?type=mensuel',
       reader: {
           type: 'json',
           root: 'chiffreAffaire',
           successProperty: 'success'
       }
   }
});