var size = 0;
var placement = 'point';

var style_Z_136km_collegiak_pop_14 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("''");
    var labelFont = "9.1px \'Arial\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#f3bd1b";
    var bufferWidth = 2.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get(" format_number( \"pop._sum\",0,'fr') || ' / nb comm : ' ||  \"insee_coun\" ") !== null) {
        labelText = String(feature.get(" format_number( \"pop._sum\",0,'fr') || ' / nb comm : ' ||  \"insee_coun\" "));
    }
    
    var style = [ new ol.style.Style({
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];;

    return style;
};
