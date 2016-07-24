Ext.define('SOFA.store.TipChart1', {
    extend: 'Ext.data.Store',
    model: 'SOFA.model.TipChart1',
    autoLoad: true,
    
   proxy: {
       type: 'ajax',
       url: 'http://localhost:81/sofa/controller/chartData.php?type=tip1',
       reader: {
           type: 'json',
           root: 'chart',
           successProperty: 'success'
       }
   }
});