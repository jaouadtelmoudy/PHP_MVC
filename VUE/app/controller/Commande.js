Ext.define('SOFA.controller.Commande',{
    extend: 'Ext.app.Controller',
    stores: [
        'Commande'
    ],
    views: [
        'commande.List',
        'commande.Edit',
        'commande.Client',
        'commande.EditAdd'
    ],
    
    init: function() {
        this.control({
           'commandelist': {
               itemdblclick: this.editCommand
           },
           'commandedit button[action=save]': {
               click: this.updateCommand
           },
           'commandeditadd button[action=save]': {
               click: this.saveCommand
           },
           '#addCommand': {
                click: this.addCommand
            },
            '#pdfList': {
                click: this.generatePdf
            },
            'forumthreadgrid button[action=showPreview]': {
	        	toggle: this.showPreview
	    }
            
        });
    },
    
    editCommand: function(grid,record) {
        var view = Ext.widget('commandedit');
        
        view.show();
        
        view.down('form').loadRecord(record);
    },
    
    updateCommand: function(button) {
        var win = button.up('window');
            form = win.down('form');
            record = form.getRecord();
            values = form.getValues();
            
        record.set(values);
        win.close();
    },
    
    addCommand: function(grid,record) {
        var view = Ext.widget('commandeditadd');
        
        view.show();
    },
    
    generatePdf: function(grid,record) {
        
    },
    
    showPreview: function(btn, pressed){
    	
        var preview = Ext.ComponentQuery.query('commandelist dataview')[0].plugins[0];
        
        preview.toggleExpanded(pressed);
    },
    saveCommand: function(button, event, options) {
        var win = button.up('window');
    var formPanel = win.down('form');
    var store = this.store;
    // form is valid, send the data
    formPanel.submit({
	waitMsg		: 'Chargement en cours',
	url		: "http://localhost:81/sofa/CONTROLLER/commandeControl.php",
	method		: 'POST',
	success : function(form,action){
            
	Ext.Msg.show({
	title: 'status enregistrement',
	msg: 'Votre demande a bien été enregistre',
	buttons: []
	});
	
	},
	failure : function(form,action){
	alert("FAILURE Submit : "+action.result.errors);
	}
	});
    
    }
});