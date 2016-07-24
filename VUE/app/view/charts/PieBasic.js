Ext.define('SOFA.view.charts.PieBasic', {
    extend: 'Ext.Panel',
    xtype: 'basic-pie',
    store: 'PieBasic',
    alias: 'widget.piebasic',

    initComponent: function() {
        var me = this;

        me.items = [{
            xtype: 'chart',
            width: '100%',
            height: 410,
            padding: '10 0 0 0',
            style: 'background: #fff',
            animate: true,
            shadow: false,
            store: 'PieBasic',
            insetPadding: 40,
            legend: {
                field: 'produit',
                position: 'bottom',
                boxStrokeWidth: 0,
                labelFont: '12px Helvetica'
            },
            items: [{
                type  : 'text',
                text  : 'Prédiction des taux de produits',
                font  : '22px Helvetica',
                width : 100,
                height: 30,
                x : 40, //the sprite x position
                y : 12  //the sprite y position
            }, {
                type: 'text',
                text: 'Data: SOFA Predictions - 2017',
                font: '10px Helvetica',
                x: 12,
                y: 380
            }, {
                type: 'text',
                text: 'Source: SOFA BI',
                font: '10px Helvetica',
                x: 12,
                y: 390
            }],
            series: [{
                type: 'pie',
                angleField: 'quantite',
                label: {
                    field: 'produit',
                    display: 'outside',
                    calloutLine: true
                },
                showInLegend: true,
                highlight: true,
                highlightCfg: {
                    fill: '#000',
                    'stroke-width': 20,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('produit') + ': ' + storeItem.get('quantite') + '%');
                    }
                }
            }]
        }];

        this.callParent();
    }
});