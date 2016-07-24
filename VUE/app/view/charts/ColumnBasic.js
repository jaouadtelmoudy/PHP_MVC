Ext.define('SOFA.view.charts.ColumnBasic', {
    extend: 'Ext.Panel',
    xtype: 'basic-column',
    store: 'ColumnBasic',
    alias: 'widget.columnbasic',

    initComponent: function() {
        var me = this;

        me.items = [{
            xtype: 'chart',
            width: '100%',
            height: 410,
            style: 'background: #fff',
            padding: '10 0 0 0',
            insetPadding: 40,
            animate: true,
            shadow: false,
            store: 'ColumnBasic',
            items: [{
                type  : 'text',
                text  : 'Chiffre d\'affaire par mois',
                font  : '22px Helvetica',
                width : 100,
                height: 30,
                x : 40, //the sprite x position
                y : 12  //the sprite y position
            }, {
                type: 'text',
                text: 'Sofa: Browser Stats 2012',
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
                type: 'Numeric',
                position: 'left',
                fields: ['taux'],
                label: {
                    renderer: function(v) { return v + '%'; }
                },
                grid: true,
                minimum: 0
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['mois'],
                grid: true,
                label: {
                    rotate: {
                        degrees: -45
                    }
                }
            }],
            series: [{
                type: 'column',
                axis: 'left',
                xField: 'mois',
                yField: 'taux',
                style: {
                    opacity: 0.80
                },
                highlight: {
                    fill: '#000',
                    'stroke-width': 20,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('mois') + ': ' + storeItem.get('taux') + '%');
                    }
                }
            }]
        }];

        this.callParent();
    }
});