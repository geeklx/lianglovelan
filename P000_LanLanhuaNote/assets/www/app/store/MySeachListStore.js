/*
 * File: app/store/MySeachListStore.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.MySeachListStore', {
    extend: 'Ext.data.Store',
    alias: 'store.mySeachListStore',

    requires: [
        'MyApp.model.OAMySeachListmodel',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        autoLoad: true,
        groupDir: 'DESC',
        model: 'MyApp.model.OAMySeachListmodel',
        pageSize: 10,
        storeId: 'MySeachListStore',
        proxy: {
            type: 'jsonp',
            extraParams: {
                action: 'getdailylist',
                sID: 'J7PLy8',
                Deptid: '1000001005'
            },
            url: 'http://211.142.200.10:8080/IMPMobileService.ashx',
            reader: {
                type: 'json',
                rootProperty: 'instanceMsg'
            }
        }
    }
});