Ext.define('SOFA.view.charts.TipChart', {
    extend: 'Ext.Panel',
    xtype: 'basic-line',
    store: 'ColumnBasic',
    alias: 'widget.tipchart',

    initComponent: function() {
        var me = this;

        me.items = [{
            xtype: 'chart',
            width: '100%',
            height: 410,
            padding: '10 0 0 0',
            style: {
                'background' : '#fff'
            },
            animate: true,
            shadow: false,
            store: 'ColumnBasic',
            insetPadding: 40,
            items: [{
                type  : 'text',
                text  : 'Evolution des taux',
                font  : '22px Helvetica',
                width : 100,
                height: 30,
                x : 40, //the sprite x position
                y : 12  //the sprite y position
            }, {
                type: 'text',
                text: 'Data: SOFA Stats 2012',
                font: '10px Helvetica',
                x: 12,
                y: 380
            }, {
                type: 'text',
                text: 'Source: http://www.sofamaroc.com/',
                font: '10px Helvetica',
                x: 12,
                y: 390
            }],
            axes: [{
                type: 'numeric',
                fields: 'taux',
                position: 'left',
                grid: true,
                minimum: 0,
                label: {
                    renderer: function(v) { return v + '%'; }
                }
            }, {
                type: 'category',
                fields: 'mois',
                position: 'bottom',
                grid: true,
                label: {
                    rotate: {
                        degrees: -45
                    }
                }
            }],
            series: [{
                type: 'line',
                axis: 'left',
                xField: 'mois',
                yField: 'taux',
                style: {
                    'stroke-width': 4
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    showDelay: 0,
                    dismissDelay: 0,
                    hideDelay: 0,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('mois') + ': ' + storeItem.get('taux') + '%');
                    }
                }
            }]
        }];

        this.callParent();
    }
});