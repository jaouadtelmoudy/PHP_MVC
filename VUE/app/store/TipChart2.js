Ext.define('SOFA.store.TipChart2', {
    extend: 'Ext.data.Store',
    model: 'SOFA.model.TipChart2',
    autoLoad: true,
    
   proxy: {
       type: 'ajax',
       url: 'http://localhost:81/sofa/controller/chartData.php?type=tip2',
       reader: {
           type: 'json',
           root: 'chart',
           successProperty: 'success'
       }
   }
});