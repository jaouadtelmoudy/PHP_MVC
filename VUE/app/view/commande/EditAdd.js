Ext.define('SOFA.view.commande.EditAdd', {
    extend: 'Ext.window.Window',
    alias: 'widget.commandeditadd',
    
    title: 'Editer la commande',
    layout: 'fit',
    //autoShow: true,
    width: 300,
    initComponent: function(){
        this.items = [
            {
                xtype: 'form',
                name: 'form',
                itemId: 'nouveauCommande',
                bodyStyle: 'padding:7px',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'numeroCommande',
                        fieldLabel: 'Numéro de la commande',
                        allowBlank: false
                    },
                    {
                        xtype: 'datefield',
                        name: 'date',
                        fieldLabel: 'Date',
                        submitFormat: 'd-m-Y',
                        msgTarget: 'under',
                        invalidText: '"{0} incorrecte -> {1} correcte."',
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        name: 'agent',
                        fieldLabel: 'Agent',
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        name: 'client',
                        fieldLabel: 'Client',
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        name: 'montant',
                        fieldLabel: 'Montant',
                        allowBlank: false
                    },
                    {
                        xtype: 'textarea',
                        name: 'description',
                        fieldLabel: 'Description',
                        allowBlank: false
                    }
                ]
            }
        ];
        this.buttons = [
            {
                text: 'Save',
                action: 'save'

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