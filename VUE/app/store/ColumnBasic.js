Ext.define('SOFA.store.ColumnBasic', {
    extend: 'Ext.data.Store',
    model: 'SOFA.model.ColumnBasic',
    autoLoad: true,
    
   proxy: {
       type: 'ajax',
       url: 'data/chartChiffreAffaireAnnuel.json',
       reader: {
           type: 'json',
           root: 'chart',
           successProperty: 'success'
       }
   }
});