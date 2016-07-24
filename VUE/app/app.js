Ext.application({
   name: 'SOFA',
   appFolder: 'app',
   autoCreateViewport : false,
   controllers: [
     'Commande',
     'Reporting'
   ],
   
   launch: function() {
       Ext.create('SOFA.view.Viewport');
   }
});