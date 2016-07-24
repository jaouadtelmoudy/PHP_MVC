Ext.define('SOFA.view.commande.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.commandedit',
    
    title: 'Editer la commande',
    layout: 'fit',
    //autoShow: true,
    width: 300,
    initComponent: function(){
        this.items = [
            {
                xtype: 'form',
                bodyStyle: 'padding:7px',
                url: 'http://localhost:81/sofa/CONTROLLER/commandeControl.php',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'numeroCommande',
                        fieldLabel: 'Numéro de la commande'
                    },
                    {
                        xtype: 'datefield',
                        name: 'date',
                        fieldLabel: 'Date',
                        submitFormat: 'd-m-Y',
                        msgTarget: 'under',
                        invalidText: '"{0} incorrecte -> {1} correcte."'
                    },
                    {
                        xtype: 'textfield',
                        name: 'agent',
                        fieldLabel: 'Agent'
                    },
                    {
                        xtype: 'textfield',
                        name: 'client',
                        fieldLabel: 'Client'
                    },
                    {
                        xtype: 'textfield',
                        name: 'montant',
                        fieldLabel: 'Montant'
                    }
                ]
            }
        ];
        this.buttons = [
            {
                text: 'Save',
                action: 'save',
                handler: function() {
                    var form = this.up('form').getForm();
                    if(form.isValid()){
                        form.submit({
                           success: function(form,action){
                               console.log('success');
                           } ,
                           failure: function(form, action) {
                               Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
                           }
                        });
                    }else{
                        Ext.Msg.alert('Veuillez verifiez la cohérence de vos données !');
                    }
                }
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});