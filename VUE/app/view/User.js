Ext.define('SOFA.view.User', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.user',
    id: 'usertabpanel',
    
    autoScroll : true,
    //resizable: true,
    requires: [
        'SOFA.view.commande.List',
        'SOFA.view.commande.Client',
        'SOFA.view.chiffre.ChiffreAffaireAgent',
        'SOFA.view.chiffre.ChiffreAffaireClient',
        'SOFA.view.chiffre.ChiffreAffaireAnnuel',
        'SOFA.view.chiffre.ChiffreAffaireProduit',
        'SOFA.view.charts.ColumnBasic',
        'SOFA.view.charts.TipChart'
    ],
    
    initComponent: function() {
        
        this.items = [{
            xtype: 'form',
            bodyStyle: 'padding:5px',
            title: 'Liste des commandes',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'clientcommande',
                align: 'start'
            },{
                xtype: 'commandelist',
                align: 'end',
                height: 285
            }]
        },{
            xtype: 'form',
            bodyStyle: 'padding:5px',
            title: 'Chiffre d\'affaire',
            
            layout: {
                type: 'table',
                columns: 2,
                tableAttrs: {
                    style: {
                        width: '100%'
                    }
                }
            },
            items: [{
                xtype: 'chiffreaffaireproduit',
                autoScroll : true
            },{
                xtype: 'chiffreaffaireagent',
                autoScroll : true
            },   {
                xtype: 'chiffreaffaireannuel',
                autoScroll : true
            },{
                xtype: 'chiffreaffaireclient',
                autoScroll : true
            }]
        },{
            xtype: 'form',
            bodyStyle: 'padding:5px',
            title: 'Reporting',
            
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'columnbasic',
                flex: 1
            },{
                xtype: 'tipchart',
                flex: 1
            },{
                xtype: 'piebasic',
                flex: 1
            }]
        }];
    
    this.callParent();
//    this.on('afterrender', function() {
//        if (this.getHeight() > this.maxHeight) {
//            this.setHeight(this.maxHeight);
//        }
//       this.center();
//    }, this);
    
    }
});