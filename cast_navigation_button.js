define(["jquery","text!./scoped-bootstrap.css","qlik"],function ($,cssContent,qlik){
        'use strict';
$("<style>").html(cssContent).appendTo("head");
var opts = [];
function getlist(){
    var xvalue;
    var Lvalues = [];
    var app = qlik.currApp();
    var i = 0;
    app.getAppObjectList('sheet', function(reply){
        for (i == 0;i < reply.qAppObjectList.qItems.length;i++){
        xvalue =  reply.qAppObjectList.qItems[i];
        Lvalues.value = xvalue.qInfo.qId;
        Lvalues.label = xvalue.qData.title;
        opts.push(Lvalues);
        Lvalues = [];
        };
        //opts.push({"label":"None","value":""});
});
};
var opts = [];
getlist();

    return {
        definition : {      
            type: "items",
            component: "accordion",
            items: {appearance:{
                    uses: "settings",
                    items: {
                        DropDownA: {
                            type: "string",
                            component: "dropdown",
                            label: "Page Selector",
                            ref: "PageSelector",
                            //options: opts,
                            options: function(){
                                return opts;
                                },
                            },
                    	ButtonStyle_Section:{
                    		type: "items",
                    		label: "Button Settings",
                    		items:{
	                        TextBoxA: {
	                            ref: "ButtonID",
	                            label: "Button ID",
	                            type: "string",
	                            },
	                        TextBoxB: {
	                            ref: "ButtonLabel",
	                            label: "Button Text",
	                            type: "string",
	                            defaultValue: "undefined",
	                            },
	                        DropDownB: {
	                            type: "string",
		                        component: "dropdown",
	                            label: "Button Class",
	                            ref: "ButtonClass",
	                            options:[{'label':'Primary','value':'btn-primary'},
	                            {'label':'Secondary','value':'btn-secondary'},
	                            {'label':'Success','value':'btn-success'},
	                            {'label':'Danger','value':'btn-danger'},
	                            {'label':'Warning','value':'btn-warning'},
	                            {'label':'Info','value':'btn-info'},
	                            //{'label':'Light','value':'btn-light'},
	                            //{'label':'Dark','value':'btn-dark'},
	                            {'label':'Link','value':'btn-link'},
	                            //{'label':'Outline Primary','value':'btn-outline-primary'},
	                            //{'label':'Outline Secondary','value':'btn-outline-secondary'},
	                            //{'label':'Outline Success','value':'btn-outline-success'},
	                            //{'label':'Outline Danger','value':'btn-outline-danger'},
	                            //{'label':'Outline Warning','value':'btn-outline-warning'},
	                            //{'label':'Outline Info','value':'btn-outline-info'},
	                            //{'label':'Outline Light','value':'btn-outline-light'},
	                            //{'label':'Outline Dark','value':'btn-outline-dark'},
	                            ],
	                            defaultValue: "btn-secondary",
	                            },
	                        TextBoxC: {
	                            ref: "ButtonWidth",
	                            label: "Width",
	                            type: "string",
	                            //defaultValue: "undefined",
	                            },
	                        TextBoxD: {
	                            ref: "ButtonHeight",
	                            label: "Height",
	                            type: "string",
	                            //defaultValue: "undefined",
	                            },	                            
	                        TextBoxE: {
	                            ref: "Style",
	                            label: "Custom CSS",
	                            component: "textarea",
	                            type: "string",
	                            //defaultValue: "undefined",
	                            },   
	                    	},
                    	},
	                    About_Section: {
                    		type: "items",
                    		label: "About",
                    		items:{
		                        About_TextA: {
		                            label: 'Cast Navigation Button V0.3b',
		                            component: "text",
		                            },   
		                        About_TextB: {
		                            label: 'Developed by Cast Solutions',
		                            component: "link",
		                            url:"http://www.castsolutions.com.au/"
		                            },
                    		},
                            },
                    }
                        }
                }
            },
        paint: function ($element,layout){
            var btnlabel=layout.ButtonLabel;
            $element.html("<head><meta charset='utf-8'><script src='https://use.fontawesome.com/7c3ee51946.js'></script></head>")
            var btnwidth="width:"+layout.ButtonWidth;
            var btnheight="height:"+layout.ButtonHeight;
            //var btnheight="height:"+$element.height();
            console.log(btnheight);
            //$element.html("<div class='bootstrap_inside'><button type='button' class='btn "+layout.ButtonClass+"'' style='"+btnwidth+";"+btnheight+";"+layout.Style+"' id="+layout.ButtonID+">"+btnlabel+"</button></div>");
            $element.append("<div class='bootstrap_inside'><button type='button' class='btn "+layout.ButtonClass+"'' style='"+btnwidth+";"+btnheight+";"+layout.Style+"' id="+layout.ButtonID+">"+btnlabel+"</button></div>");
            //$element.append("<div><button type='button' class='btn "+layout.ButtonClass+"'' style='"+btnwidth+";"+btnheight+";"+layout.Style+"' id="+layout.ButtonID+">Button Testing <span class='glyphicon glyphicon-music'>!</span></button></div>");
            //$element.append('<div class="bootstrap_inside"><button type="button" class="btn btn-primary" id="id"> Button Testing <i class="fa fa-camera-retro fa-lg"></i>!!!</button></div>')
            $("#"+layout.ButtonID).click(function(){
                var app = qlik.currApp();
                qlik.navigation.gotoSheet(layout.PageSelector);
                });
        }
    };
});
