# Cast Navigation Button
* Version: 1.0
* Requirement: Qlik Sense June 2017

## Documentation
### 1. Overview
![image](http://cdn.mixpad.net/overview.jpg)
### 2. Basic Settings

Property | Description
---|---
Button Text | Text shown on the button, support font-awesome^1^
Button Class | Pre-defined button style
Button Color | Background color of the button^2^
Font Color | Font color of the button^2^
Font Size | Font size (Integer)
Custom CSS | customise the style of the button (border, radius etc.)^3^
Sheet Selector | Link to another page

1. To use Font-awesome icons:
    * See http://fontawesome.io/icons/ for supported icons
    * Copy the code provided to the Button Text to insert an icon
2. For color:
    * Color Names: https://www.w3schools.com/colors/colors_names.asp 
    * You can also use:
        * RGB - "rgb(255, 99, 71)" 
        * HEX - "#FF6347"
        * HSL - "hsl(9, 100%, 64%)"
        * For detail, see https://www.w3schools.com/html/html_colors.asp 
3. For Custom CSS: useful properties

Property | Value
---|---
border-radius | border-radius:3px;
border | border:3px solid blue;
border-style | border-style:solid dotted dashed double
---

### 3. Examples
* Basic Button

Property | Value
---|---
Button Text | Basic Button
Button Class | Primary
![image](http://cdn.mixpad.net/basic_button.png)

---

* **Button with icon (using Font-awesome)**

Property | Value
---|---
Button Text | KPI Dashboard <i class="fa fa-github-alt" aria-hidden="true"></i>
Button Class | Primary
Button Color | white
Font Color | #0099cc
Font Size | 30
Custom CSS| border-radius:15px; border:4px solid #0099cc;
![image](http://cdn.mixpad.net/button_with_icon.png)

--- 
* **Button with border (customised style)**

Property | Value
---|---
Button Text | Cast Navigation Button V1.0
Button Class | None 
Button Color | white
Font Color | RoyalBlue
Font Size | 50
Custom CSS| border-radius:0px;border:6px solid RoyalBlue; border-style:solid hidden solid hidden;
![image](http://cdn.mixpad.net/button_with_border.png)