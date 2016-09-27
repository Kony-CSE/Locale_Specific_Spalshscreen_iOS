//Form JS File
function addWidgetsfrmHome() {
    var image2999296733169363 = new kony.ui.Image2({
        "id": "image2999296733169363",
        "top": "36dp",
        "left": "150dp",
        "width": "150dp",
        "height": "54dp",
        "centerX": "50.0%",
        "centerY": "14.0%",
        "zIndex": 1,
        "isVisible": true,
        "src": "logo.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 12
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var label999296733169364 = new kony.ui.Label({
        "id": "label999296733169364",
        "top": "125dp",
        "left": "5%",
        "width": "90%",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Sample app to demonstrate Locale Specific Splash screens",
        "skin": "lblwhite"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label999296733169365 = new kony.ui.Label({
        "id": "label999296733169365",
        "top": "165dp",
        "left": "5%",
        "width": "30%",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "i18N Value : ",
        "skin": "lblwhite"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label999296733169366 = new kony.ui.Label({
        "id": "label999296733169366",
        "top": "165dp",
        "left": "40.0%",
        "width": "55%",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("hello"),
        "skin": "lblwhite"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmHome.add(image2999296733169363, label999296733169364, label999296733169365, label999296733169366);
    frmHome.setDefaultUnit(kony.flex.DP);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frmBGColor",
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmHome
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none",
            "transitionDuration": 0.3
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none",
            "transitionDuration": 0.3
        }
    });
};