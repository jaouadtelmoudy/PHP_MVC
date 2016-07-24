Ext.define('SOFA.store.ChiffreAffaireAgent', {
    extend: 'Ext.data.Store',
    model: 'SOFA.model.ChiffreAffaireAgent',
    autoLoad: true,
    
   proxy: {
       type: 'ajax',
       url: 'http://localhost:81/sofa/controller/chiffreAffaireData.php?type=agent',
       reader: {
           type: 'json',
           root: 'chiffreAffaire',
           successProperty: 'success'
       }
   }
});