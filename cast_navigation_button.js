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
                            label: "Sheet Selector",
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
	                        //TextBoxA: {
	                        //    ref: "ButtonID",
	                        //    label: "Button ID",
	                        //    type: "string",
	                        //    },
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
	                            options:[
	                            {'label':'None','value':''},
	                            {'label':'Primary','value':'btn-primary'},
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
	                        ColorPicker: {
								label:"Button Color",
								component: "color-picker",
								ref: "Buttoncolor",
								type: "integer",
								defaultValue: 3
							},
	                        ColorPicker2: {
								label:"Font Color",
								component: "color-picker",
								ref: "Fontcolor",
								type: "integer",
								defaultValue: 2
							},
	                        TextBoxC: {
	                            ref: "Fontsize",
	                            label: "Font Size",
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
		                            label: 'Cast Navigation Button V0.4',
		                            component: "text",
		                            },   
		                        About_TextB: {
		                            label: 'Release Date: 22.Sep.2017',
		                            component: "text",
		                            },   
		                        About_TextC: {
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
        	var palette = [
		        "#b0afae",
		        "#7b7a78",
		        "#545352",
		        "#4477aa",
		        "#7db8da",
		        "#b6d7ea",
		        "#46c646",
		        "#f93f17",
		        "#ffcf02",
		        "#276e27",
		        "#ffffff",
		        "#000000",
		        "#000000"
		    ];
		    var btncolor="background:"+palette[layout.Buttoncolor]+";";
            var btnlabel=layout.ButtonLabel;
            var fntcolor="color:"+palette[layout.Fontcolor]+";";
            $element.html("<head><meta charset='utf-8'><script src='http://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'></script></head>");
            var font_size="font-size:"+layout.Fontsize+"px;";
            var btnid=Math.round(Math.random()*1000000);
            console.log(btnid);
            //$element.append("<div class='bootstrap_inside' style='height:100%;'><button type='button' class='btn "+layout.ButtonClass+"'' style='height:100%;width:100%;"+font_size+fntcolor+btncolor+layout.Style+"' id="+layout.ButtonID+">"+btnlabel+"</button></div>");
            $element.append("<div class='bootstrap_inside' style='height:100%;'><button type='button' class='btn "+layout.ButtonClass+"'' style='height:100%;width:100%;"+font_size+fntcolor+btncolor+layout.Style+"' id="+btnid+">"+btnlabel+"</button></div>");

            //$("#"+layout.ButtonID).click(function(){
            $("#"+btnid).click(function(){
                var app = qlik.currApp();
                qlik.navigation.gotoSheet(layout.PageSelector);
                });
        }
    };
});
