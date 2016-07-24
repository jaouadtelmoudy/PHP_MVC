Ext.define('SOFA.store.Commande', {
    extend: 'Ext.data.Store',
    model: 'SOFA.model.Commande',
    autoLoad: {start: 0, limit: 5},
    pageSize: 5,
    remoteSort: true,
    remoteFilter:true,
   proxy: {
       type: 'ajax',
       enablePaging: true,
       url: 'http://localhost:81/sofa/controller/commandGridData.php',
       /*sorters: [{
                  property : 'numeroCommande',
                  direction: 'asc'
        }],*/
       reader: {
           type: 'json',
           root: 'commandes',
           totalProperty: 'totalCount'
       }
   }
});