Ext.define('SOFA.view.Viewport', {
   extend: 'Ext.container.Viewport',
   layout: 'fit',
   
   requires: [
       'SOFA.view.User'
   ],
   initComponent: function() {
       this.items = {
           dockedItems: [{
              dock: 'top',
              xtype: 'toolbar',
              height: 80,
              layout: {
                  type: 'hbox',
                  align: 'stretch'
              },
              items: [{
                      xtype: 'image',
                      name: 'logo',
                      src: 'app/picture/sofa.png'
              }]
           }],
         items: [{
                 xtype: 'form',
                 title: 'Profile utilisateur',
                 bodyStyle: 'padding: 5px',
                 layout: {
                     type: 'vbox',
                     align: 'stretch'
                 },
                 items: [{
                         xtype: 'user'
                 }],
             listeners: {
                 render: function(form) {
                     loadForm(form);
                 }
             }
         }]
       };
       
       this.callParent();
   }
});

loadForm = function(form) {
    
};