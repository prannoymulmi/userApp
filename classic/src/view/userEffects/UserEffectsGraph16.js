/**
 * The View for the Charts for Actuals and planned 2016
 */
Ext.define('user.view.userEffectsView16', {
    extend: 'Ext.panel.Panel',
    xtype: 'userEffectsView16',
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
            text: 'Actuals - Planned  Comparison',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20  // the sprite y position
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