Ext.define('user.view.userEffectsView', {
    extend: 'Ext.panel.Panel',
    xtype: 'userEffectsView',
    controller: 'userEffectsController',

    width: 650,

    tbar: [
        '->',
        {
            text: 'Toggle markers',
            handler: 'onToggleMarkers'
        },
        {
            text: 'Preview',
            handler: 'onPreview'
        }
    ],
    items: [{
        xtype: 'cartesian',
        reference: 'chart',
        width: '100%',
        height: 500,
        legend: {
            docked: 'right'
        },
        store: {
            type: 'userEffects'
        },
        insetPadding: 40,
        sprites: [{
            type: 'text',
            text: 'Line Charts - Marked Lines',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20  // the sprite y position
        }, {
            type: 'text',
            text: 'Data: Browser Stats 2012',
            fontSize: 10,
            x: 12,
            y: 470
        }, {
            type: 'text',
            text: 'Source: http://www.w3schools.com/',
            fontSize: 10,
            x: 12,
            y: 485
        }],
        axes: [{
            type: 'numeric',
            fields: ['Actual116', 'Planned116' ],
            position: 'left',
            grid: true,
            minimum: 0,
            renderer: 'onAxisLabelRender'
        }, {
            type: 'category',
            fields: 'month',
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
            title: 'Actual 2016',
            xField: 'month',
            yField: 'Actual116',
            marker: {
                type: 'square',
                fx: {
                    duration: 200,
                    easing: 'backOut'
                }
            },
            highlightCfg: {
                scaling: 2
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }, {
            type: 'line',
            title: 'Planned 2016',
            xField: 'month',
            yField: 'Planned116',
            marker: {
                type: 'triangle',
                fx: {
                    duration: 200,
                    easing: 'backOut'
                }
            },
            highlightCfg: {
                scaling: 2
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }]
    }]
})