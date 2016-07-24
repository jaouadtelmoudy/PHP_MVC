Ext.define('SOFA.store.PieBasic', {
    extend: 'Ext.data.Store',
    model: 'SOFA.model.PieBasic',
    autoLoad: true,
    
   proxy: {
       type: 'ajax',
       url: 'http://localhost:81/sofa/controller/chartData.php?type=pie',
       reader: {
           type: 'json',
           root: 'chart',
           successProperty: 'success'
       }
   }
});