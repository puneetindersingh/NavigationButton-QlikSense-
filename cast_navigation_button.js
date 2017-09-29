define(["jquery","text!./scoped-bootstrap.css","qlik"],
function ($,cssContent,qlik){

        'use strict';
$("<style>").html(cssContent).appendTo("head");
var opts = [];
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
        "#000000"
    ];
function getlist(){
    var xvalue;
    var Lvalues = [];
    var app = qlik.currApp();
    var i = 0;
    //opts.push({"value":"","label":"None"});
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
            items: {





              appearance:{
                    uses: "settings",

                    items: {


            						MyColorPicker: {
            							label:"My color-picker",
            							component: "color-picker",
            							ref: "myColor",
            							type: "integer",
            							defaultValue: 3

            					}
            				,
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
	                            component: "textarea",
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
	                            {'label':'Link','value':'btn-link'},
	                            ],
	                            defaultValue: "btn-secondary",
	                            },
	                        //TextBoxY: {
	                        //    ref: "Buttoncolor",
	                        //    label: "Button Color",
	                        //    type: "string",
	                            //defaultValue: "undefined",
	                        //    },
	                        TextBoxX: {
	                            ref: "Fontcolor",
	                            label: "Font Color",
	                            type: "string",
	                            //defaultValue: "undefined",
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
		                            label: 'Cast Navigation Button V1.0',
		                            component: "text",
		                            },
		                        About_TextB: {
		                            label: 'Release Date: 29.Sep.2017',
		                            component: "text",
		                            },
		                        About_TextC: {
		                            label: 'Developed by Cast Solutions',
		                            component: "link",
		                            url:"http://www.castsolutions.com.au/"
		                            },
		                        About_TextD: {
		                            label: 'Documentation',
		                            component: "link",
		                            url:"http://cdn.mixpad.net/Cast_Navi_Btn_v10_documentation.html"
		                            },
                    		},
                            },
                    }
                        }
                }
            },
        paint: function ($element,layout){
		    var btncolor="background-color:"+palette[layout.myColor]+";";
            var btnlabel=layout.ButtonLabel;
           // $element.css("background-color", palette[layout.myColor]);
           var fntcolor="color:"+layout.Fontcolor+";";

            $element.html("<head><meta charset='utf-8'><script src='https://use.fontawesome.com/7c3ee51946.js'></script></head>");
            var font_size="font-size:"+layout.Fontsize+"px;";
            var btnid=Math.round(Math.random()*10000);
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
