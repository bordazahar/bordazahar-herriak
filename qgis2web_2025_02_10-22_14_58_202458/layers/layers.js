var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_zoneEH_1 = new ol.format.GeoJSON();
var features_zoneEH_1 = format_zoneEH_1.readFeatures(json_zoneEH_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zoneEH_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zoneEH_1.addFeatures(features_zoneEH_1);
var lyr_zoneEH_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zoneEH_1, 
                style: style_zoneEH_1,
                popuplayertitle: 'zone EH',
                interactive: true,
                title: '<img src="styles/legend/zoneEH_1.png" /> zone EH'
            });
var format_Isochroneprojetslizeoak_2 = new ol.format.GeoJSON();
var features_Isochroneprojetslizeoak_2 = format_Isochroneprojetslizeoak_2.readFeatures(json_Isochroneprojetslizeoak_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isochroneprojetslizeoak_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isochroneprojetslizeoak_2.addFeatures(features_Isochroneprojetslizeoak_2);
var lyr_Isochroneprojetslizeoak_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isochroneprojetslizeoak_2, 
                style: style_Isochroneprojetslizeoak_2,
                popuplayertitle: 'Isochrone projets lizeoak',
                interactive: true,
    title: 'Isochrone projets lizeoak<br />\
    <img src="styles/legend/Isochroneprojetslizeoak_2_0.png" /> 10 min<br />\
    <img src="styles/legend/Isochroneprojetslizeoak_2_1.png" /> 20 min<br />' });
var format_Isochronelizeoabayonne_3 = new ol.format.GeoJSON();
var features_Isochronelizeoabayonne_3 = format_Isochronelizeoabayonne_3.readFeatures(json_Isochronelizeoabayonne_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isochronelizeoabayonne_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isochronelizeoabayonne_3.addFeatures(features_Isochronelizeoabayonne_3);
var lyr_Isochronelizeoabayonne_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isochronelizeoabayonne_3, 
                style: style_Isochronelizeoabayonne_3,
                popuplayertitle: 'Isochrone lizeoa bayonne',
                interactive: true,
    title: 'Isochrone lizeoa bayonne<br />\
    <img src="styles/legend/Isochronelizeoabayonne_3_0.png" /> 10 min<br />\
    <img src="styles/legend/Isochronelizeoabayonne_3_1.png" /> 20 min<br />' });
var format_PROJETSLIZEOAK_4 = new ol.format.GeoJSON();
var features_PROJETSLIZEOAK_4 = format_PROJETSLIZEOAK_4.readFeatures(json_PROJETSLIZEOAK_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROJETSLIZEOAK_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROJETSLIZEOAK_4.addFeatures(features_PROJETSLIZEOAK_4);
var lyr_PROJETSLIZEOAK_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROJETSLIZEOAK_4, 
                style: style_PROJETSLIZEOAK_4,
                popuplayertitle: 'PROJETS LIZEOAK',
                interactive: true,
                title: '<img src="styles/legend/PROJETSLIZEOAK_4.png" /> PROJETS LIZEOAK'
            });
var format_bayonne_5 = new ol.format.GeoJSON();
var features_bayonne_5 = format_bayonne_5.readFeatures(json_bayonne_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bayonne_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bayonne_5.addFeatures(features_bayonne_5);
var lyr_bayonne_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bayonne_5, 
                style: style_bayonne_5,
                popuplayertitle: 'bayonne',
                interactive: true,
                title: '<img src="styles/legend/bayonne_5.png" /> bayonne'
            });

    var projection_Densitdepopulation_6 = ol.proj.get('EPSG:3857');
    var projectionExtent_Densitdepopulation_6 = projection_Densitdepopulation_6.getExtent();
    var size_Densitdepopulation_6 = ol.extent.getWidth(projectionExtent_Densitdepopulation_6) / 256;
    var resolutions_Densitdepopulation_6 = new Array(14);
    var matrixIds_Densitdepopulation_6 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Densitdepopulation_6[z] = size_Densitdepopulation_6 / Math.pow(2, z);
        matrixIds_Densitdepopulation_6[z] = z;
    }
    var lyr_Densitdepopulation_6 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities",
                                attributions: ' ',
                                "layer": "INSEE.FILOSOFI.POPULATION",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_Densitdepopulation_6,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Densitdepopulation_6),
                resolutions: resolutions_Densitdepopulation_6,
                matrixIds: matrixIds_Densitdepopulation_6
              }),
              style: 'INSEE',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Densité de population',
                            opacity: 1.0,
                            
                            
                          });
var format_communesECOLES_7 = new ol.format.GeoJSON();
var features_communesECOLES_7 = format_communesECOLES_7.readFeatures(json_communesECOLES_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_communesECOLES_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communesECOLES_7.addFeatures(features_communesECOLES_7);
var lyr_communesECOLES_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_communesECOLES_7, 
                style: style_communesECOLES_7,
                popuplayertitle: 'communes ECOLES',
                interactive: false,
                title: '<img src="styles/legend/communesECOLES_7.png" /> communes ECOLES'
            });
var format_communesCOLLEGES_8 = new ol.format.GeoJSON();
var features_communesCOLLEGES_8 = format_communesCOLLEGES_8.readFeatures(json_communesCOLLEGES_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_communesCOLLEGES_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communesCOLLEGES_8.addFeatures(features_communesCOLLEGES_8);
var lyr_communesCOLLEGES_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_communesCOLLEGES_8, 
                style: style_communesCOLLEGES_8,
                popuplayertitle: 'communes COLLEGES',
                interactive: false,
                title: '<img src="styles/legend/communesCOLLEGES_8.png" /> communes COLLEGES'
            });
var format_communesLYCEES_9 = new ol.format.GeoJSON();
var features_communesLYCEES_9 = format_communesLYCEES_9.readFeatures(json_communesLYCEES_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_communesLYCEES_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communesLYCEES_9.addFeatures(features_communesLYCEES_9);
var lyr_communesLYCEES_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_communesLYCEES_9, 
                style: style_communesLYCEES_9,
                popuplayertitle: 'communes LYCEES',
                interactive: false,
                title: '<img src="styles/legend/communesLYCEES_9.png" /> communes LYCEES'
            });
var format_communesIKASTOLA_10 = new ol.format.GeoJSON();
var features_communesIKASTOLA_10 = format_communesIKASTOLA_10.readFeatures(json_communesIKASTOLA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_communesIKASTOLA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communesIKASTOLA_10.addFeatures(features_communesIKASTOLA_10);
var lyr_communesIKASTOLA_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_communesIKASTOLA_10, 
                style: style_communesIKASTOLA_10,
                popuplayertitle: 'communes IKASTOLA',
                interactive: false,
                title: '<img src="styles/legend/communesIKASTOLA_10.png" /> communes IKASTOLA'
            });
var format_communesKOLEGIOA_11 = new ol.format.GeoJSON();
var features_communesKOLEGIOA_11 = format_communesKOLEGIOA_11.readFeatures(json_communesKOLEGIOA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_communesKOLEGIOA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communesKOLEGIOA_11.addFeatures(features_communesKOLEGIOA_11);
var lyr_communesKOLEGIOA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_communesKOLEGIOA_11, 
                style: style_communesKOLEGIOA_11,
                popuplayertitle: 'communes KOLEGIOA',
                interactive: false,
                title: '<img src="styles/legend/communesKOLEGIOA_11.png" /> communes KOLEGIOA'
            });
var format_communesLIZEOA_12 = new ol.format.GeoJSON();
var features_communesLIZEOA_12 = format_communesLIZEOA_12.readFeatures(json_communesLIZEOA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_communesLIZEOA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communesLIZEOA_12.addFeatures(features_communesLIZEOA_12);
var lyr_communesLIZEOA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_communesLIZEOA_12, 
                style: style_communesLIZEOA_12,
                popuplayertitle: 'communes LIZEOA',
                interactive: false,
                title: '<img src="styles/legend/communesLIZEOA_12.png" /> communes LIZEOA'
            });
var format_Z_1327km_ikastola_pop_13 = new ol.format.GeoJSON();
var features_Z_1327km_ikastola_pop_13 = format_Z_1327km_ikastola_pop_13.readFeatures(json_Z_1327km_ikastola_pop_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Z_1327km_ikastola_pop_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Z_1327km_ikastola_pop_13.addFeatures(features_Z_1327km_ikastola_pop_13);
var lyr_Z_1327km_ikastola_pop_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Z_1327km_ikastola_pop_13, 
                style: style_Z_1327km_ikastola_pop_13,
                popuplayertitle: 'Z_13,27km_ikastola_pop',
                interactive: false,
                title: 'Z_13,27km_ikastola_pop'
            });
var format_Z_136km_collegiak_pop_14 = new ol.format.GeoJSON();
var features_Z_136km_collegiak_pop_14 = format_Z_136km_collegiak_pop_14.readFeatures(json_Z_136km_collegiak_pop_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Z_136km_collegiak_pop_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Z_136km_collegiak_pop_14.addFeatures(features_Z_136km_collegiak_pop_14);
var lyr_Z_136km_collegiak_pop_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Z_136km_collegiak_pop_14, 
                style: style_Z_136km_collegiak_pop_14,
                popuplayertitle: 'Z_13,6km_collegiak_pop',
                interactive: false,
                title: 'Z_13,6km_collegiak_pop'
            });
var format_IKASTOLAKV2_15 = new ol.format.GeoJSON();
var features_IKASTOLAKV2_15 = format_IKASTOLAKV2_15.readFeatures(json_IKASTOLAKV2_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IKASTOLAKV2_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IKASTOLAKV2_15.addFeatures(features_IKASTOLAKV2_15);
var lyr_IKASTOLAKV2_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IKASTOLAKV2_15, 
                style: style_IKASTOLAKV2_15,
                popuplayertitle: 'IKASTOLAK V2',
                interactive: true,
    title: 'IKASTOLAK V2<br />\
    <img src="styles/legend/IKASTOLAKV2_15_0.png" /> IKASTOLA<br />\
    <img src="styles/legend/IKASTOLAKV2_15_1.png" /> KOLEGIOA<br />\
    <img src="styles/legend/IKASTOLAKV2_15_2.png" /> LIZEOA<br />\
    <img src="styles/legend/IKASTOLAKV2_15_3.png" /> <br />' });
var format_SOULE_16 = new ol.format.GeoJSON();
var features_SOULE_16 = format_SOULE_16.readFeatures(json_SOULE_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOULE_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOULE_16.addFeatures(features_SOULE_16);
var lyr_SOULE_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOULE_16, 
                style: style_SOULE_16,
                popuplayertitle: 'SOULE',
                interactive: false,
                title: '<img src="styles/legend/SOULE_16.png" /> SOULE'
            });
var format_BASSENAVARRE_17 = new ol.format.GeoJSON();
var features_BASSENAVARRE_17 = format_BASSENAVARRE_17.readFeatures(json_BASSENAVARRE_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BASSENAVARRE_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BASSENAVARRE_17.addFeatures(features_BASSENAVARRE_17);
var lyr_BASSENAVARRE_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BASSENAVARRE_17, 
                style: style_BASSENAVARRE_17,
                popuplayertitle: 'BASSE NAVARRE',
                interactive: false,
                title: '<img src="styles/legend/BASSENAVARRE_17.png" /> BASSE NAVARRE'
            });
var format_LABOURD_18 = new ol.format.GeoJSON();
var features_LABOURD_18 = format_LABOURD_18.readFeatures(json_LABOURD_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LABOURD_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LABOURD_18.addFeatures(features_LABOURD_18);
var lyr_LABOURD_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LABOURD_18, 
                style: style_LABOURD_18,
                popuplayertitle: 'LABOURD',
                interactive: false,
                title: '<img src="styles/legend/LABOURD_18.png" /> LABOURD'
            });
var group_WIKASTOLA = new ol.layer.Group({
                                layers: [lyr_SOULE_16,lyr_BASSENAVARRE_17,lyr_LABOURD_18,],
                                fold: "open",
                                title: 'W IKASTOLA'});
var group_points = new ol.layer.Group({
                                layers: [lyr_IKASTOLAKV2_15,],
                                fold: "open",
                                title: 'points'});
var group_communes = new ol.layer.Group({
                                layers: [lyr_communesIKASTOLA_10,lyr_communesKOLEGIOA_11,lyr_communesLIZEOA_12,lyr_Z_1327km_ikastola_pop_13,lyr_Z_136km_collegiak_pop_14,],
                                fold: "open",
                                title: 'communes'});
var group_matrices = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'matrices'});
var group_SEASKA = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'SEASKA'});
var group_SCOLARITEPUBLIQUE = new ol.layer.Group({
                                layers: [lyr_communesECOLES_7,lyr_communesCOLLEGES_8,lyr_communesLYCEES_9,],
                                fold: "open",
                                title: 'SCOLARITE PUBLIQUE'});
var group_infos = new ol.layer.Group({
                                layers: [lyr_Densitdepopulation_6,],
                                fold: "open",
                                title: 'infos'});
var group_archive = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'archive'});
var group_PROJET = new ol.layer.Group({
                                layers: [lyr_Isochroneprojetslizeoak_2,lyr_Isochronelizeoabayonne_3,lyr_PROJETSLIZEOAK_4,lyr_bayonne_5,],
                                fold: "open",
                                title: 'PROJET'});

lyr_OSMStandard_0.setVisible(true);lyr_zoneEH_1.setVisible(true);lyr_Isochroneprojetslizeoak_2.setVisible(true);lyr_Isochronelizeoabayonne_3.setVisible(true);lyr_PROJETSLIZEOAK_4.setVisible(true);lyr_bayonne_5.setVisible(true);lyr_Densitdepopulation_6.setVisible(true);lyr_communesECOLES_7.setVisible(true);lyr_communesCOLLEGES_8.setVisible(true);lyr_communesLYCEES_9.setVisible(true);lyr_communesIKASTOLA_10.setVisible(true);lyr_communesKOLEGIOA_11.setVisible(true);lyr_communesLIZEOA_12.setVisible(true);lyr_Z_1327km_ikastola_pop_13.setVisible(true);lyr_Z_136km_collegiak_pop_14.setVisible(true);lyr_IKASTOLAKV2_15.setVisible(true);lyr_SOULE_16.setVisible(true);lyr_BASSENAVARRE_17.setVisible(true);lyr_LABOURD_18.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_zoneEH_1,group_PROJET,group_infos,group_SCOLARITEPUBLIQUE,group_communes,group_points,group_WIKASTOLA];
lyr_zoneEH_1.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'dep_': 'dep_', 'nom commun': 'nom commun', 'pop.': 'pop.', 'code insee': 'code insee', 'code siren': 'code siren', 'code posta': 'code posta', 'nom comm_1': 'nom comm_1', });
lyr_Isochroneprojetslizeoak_2.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Isochronelizeoabayonne_3.set('fieldAliases', {'libelle': 'libelle', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_PROJETSLIZEOAK_4.set('fieldAliases', {'address': 'address', 'LIBELLE': 'LIBELLE', });
lyr_bayonne_5.set('fieldAliases', {'id': 'id', 'libelle': 'libelle', });
lyr_communesECOLES_7.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'dep_': 'dep_', 'nom commun': 'nom commun', 'pop.': 'pop.', 'code insee': 'code insee', 'code siren': 'code siren', 'code posta': 'code posta', 'nom comm_1': 'nom comm_1', 'Code étab': 'Code étab', 'Appellatio': 'Appellatio', 'Dénominat': 'Dénominat', 'Patronyme': 'Patronyme', 'Secteur Pu': 'Secteur Pu', 'Adresse': 'Adresse', 'Lieu_dit': 'Lieu_dit', 'Boite post': 'Boite post', 'Code pos_1': 'Code pos_1', 'Localité': 'Localité', 'Commune': 'Commune', 'Coordonné': 'Coordonné', 'Coordonn_1': 'Coordonn_1', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Qualité d': 'Qualité d', 'Localisati': 'Localisati', 'Code natur': 'Code natur', 'Nature': 'Nature', 'Sigle': 'Sigle', 'Code état': 'Code état', 'Etat étab': 'Etat étab', 'Code dépa': 'Code dépa', 'Code régi': 'Code régi', 'Code acad�': 'Code acad�', 'Code commu': 'Code commu', 'Départeme': 'Départeme', 'Région': 'Région', 'Académie': 'Académie', 'Secteur pr': 'Secteur pr', 'Secteur _1': 'Secteur _1', 'Code minis': 'Code minis', 'Ministère': 'Ministère', 'Date d\'ouv': 'Date d\'ouv', 'Geo Point': 'Geo Point', 'Geo Shape': 'Geo Shape', 'EPSG': 'EPSG', 'insee text': 'insee text', 'nom comm_2': 'nom comm_2', 'pop._2': 'pop._2', 'code ins_1': 'code ins_1', 'code sir_1': 'code sir_1', 'code pos_2': 'code pos_2', 'nom comm_3': 'nom comm_3', });
lyr_communesCOLLEGES_8.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'dep_': 'dep_', 'nom commun': 'nom commun', 'pop.': 'pop.', 'code insee': 'code insee', 'code siren': 'code siren', 'code posta': 'code posta', 'nom comm_1': 'nom comm_1', 'Code étab': 'Code étab', 'Appellatio': 'Appellatio', 'Dénominat': 'Dénominat', 'Patronyme': 'Patronyme', 'Secteur Pu': 'Secteur Pu', 'Adresse': 'Adresse', 'Lieu_dit': 'Lieu_dit', 'Boite post': 'Boite post', 'Code pos_1': 'Code pos_1', 'Localité': 'Localité', 'Commune': 'Commune', 'Coordonné': 'Coordonné', 'Coordonn_1': 'Coordonn_1', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Qualité d': 'Qualité d', 'Localisati': 'Localisati', 'Code natur': 'Code natur', 'Nature': 'Nature', 'Sigle': 'Sigle', 'Code état': 'Code état', 'Etat étab': 'Etat étab', 'Code dépa': 'Code dépa', 'Code régi': 'Code régi', 'Code acad�': 'Code acad�', 'Code commu': 'Code commu', 'Départeme': 'Départeme', 'Région': 'Région', 'Académie': 'Académie', 'Secteur pr': 'Secteur pr', 'Secteur _1': 'Secteur _1', 'Code minis': 'Code minis', 'Ministère': 'Ministère', 'Date d\'ouv': 'Date d\'ouv', 'Geo Point': 'Geo Point', 'Geo Shape': 'Geo Shape', 'EPSG': 'EPSG', 'insee text': 'insee text', 'nom comm_2': 'nom comm_2', 'pop._2': 'pop._2', 'code ins_1': 'code ins_1', 'code sir_1': 'code sir_1', 'code pos_2': 'code pos_2', 'nom comm_3': 'nom comm_3', });
lyr_communesLYCEES_9.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'dep_': 'dep_', 'nom commun': 'nom commun', 'pop.': 'pop.', 'code insee': 'code insee', 'code siren': 'code siren', 'code posta': 'code posta', 'nom comm_1': 'nom comm_1', 'Code étab': 'Code étab', 'Appellatio': 'Appellatio', 'Dénominat': 'Dénominat', 'Patronyme': 'Patronyme', 'Secteur Pu': 'Secteur Pu', 'Adresse': 'Adresse', 'Lieu_dit': 'Lieu_dit', 'Boite post': 'Boite post', 'Code pos_1': 'Code pos_1', 'Localité': 'Localité', 'Commune': 'Commune', 'Coordonné': 'Coordonné', 'Coordonn_1': 'Coordonn_1', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Qualité d': 'Qualité d', 'Localisati': 'Localisati', 'Code natur': 'Code natur', 'Nature': 'Nature', 'Sigle': 'Sigle', 'Code état': 'Code état', 'Etat étab': 'Etat étab', 'Code dépa': 'Code dépa', 'Code régi': 'Code régi', 'Code acad�': 'Code acad�', 'Code commu': 'Code commu', 'Départeme': 'Départeme', 'Région': 'Région', 'Académie': 'Académie', 'Secteur pr': 'Secteur pr', 'Secteur _1': 'Secteur _1', 'Code minis': 'Code minis', 'Ministère': 'Ministère', 'Date d\'ouv': 'Date d\'ouv', 'Geo Point': 'Geo Point', 'Geo Shape': 'Geo Shape', 'EPSG': 'EPSG', 'insee text': 'insee text', 'nom comm_2': 'nom comm_2', 'pop._2': 'pop._2', 'code ins_1': 'code ins_1', 'code sir_1': 'code sir_1', 'code pos_2': 'code pos_2', 'nom comm_3': 'nom comm_3', });
lyr_communesIKASTOLA_10.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'dep_': 'dep_', 'nom commun': 'nom commun', 'pop.': 'pop.', 'code insee': 'code insee', 'code siren': 'code siren', 'code posta': 'code posta', 'nom comm_1': 'nom comm_1', 'Code étab': 'Code étab', 'Appellatio': 'Appellatio', 'Dénominat': 'Dénominat', 'Patronyme': 'Patronyme', 'Secteur Pu': 'Secteur Pu', 'Adresse': 'Adresse', 'Lieu_dit': 'Lieu_dit', 'Boite post': 'Boite post', 'Code pos_1': 'Code pos_1', 'Localité': 'Localité', 'Commune': 'Commune', 'Coordonné': 'Coordonné', 'Coordonn_1': 'Coordonn_1', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Qualité d': 'Qualité d', 'Localisati': 'Localisati', 'Code natur': 'Code natur', 'Nature': 'Nature', 'Sigle': 'Sigle', 'Code état': 'Code état', 'Etat étab': 'Etat étab', 'Code dépa': 'Code dépa', 'Code régi': 'Code régi', 'Code acad�': 'Code acad�', 'Code commu': 'Code commu', 'Départeme': 'Départeme', 'Région': 'Région', 'Académie': 'Académie', 'Secteur pr': 'Secteur pr', 'Secteur _1': 'Secteur _1', 'Code minis': 'Code minis', 'Ministère': 'Ministère', 'Date d\'ouv': 'Date d\'ouv', 'Geo Point': 'Geo Point', 'Geo Shape': 'Geo Shape', 'EPSG': 'EPSG', 'classif': 'classif', 'CODE INS_1': 'CODE INS_1', });
lyr_communesKOLEGIOA_11.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'dep_': 'dep_', 'nom commun': 'nom commun', 'pop.': 'pop.', 'code insee': 'code insee', 'code siren': 'code siren', 'code posta': 'code posta', 'nom comm_1': 'nom comm_1', 'Code étab': 'Code étab', 'Appellatio': 'Appellatio', 'Dénominat': 'Dénominat', 'Patronyme': 'Patronyme', 'Secteur Pu': 'Secteur Pu', 'Adresse': 'Adresse', 'Lieu_dit': 'Lieu_dit', 'Boite post': 'Boite post', 'Code pos_1': 'Code pos_1', 'Localité': 'Localité', 'Commune': 'Commune', 'Coordonné': 'Coordonné', 'Coordonn_1': 'Coordonn_1', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Qualité d': 'Qualité d', 'Localisati': 'Localisati', 'Code natur': 'Code natur', 'Nature': 'Nature', 'Sigle': 'Sigle', 'Code état': 'Code état', 'Etat étab': 'Etat étab', 'Code dépa': 'Code dépa', 'Code régi': 'Code régi', 'Code acad�': 'Code acad�', 'Code commu': 'Code commu', 'Départeme': 'Départeme', 'Région': 'Région', 'Académie': 'Académie', 'Secteur pr': 'Secteur pr', 'Secteur _1': 'Secteur _1', 'Code minis': 'Code minis', 'Ministère': 'Ministère', 'Date d\'ouv': 'Date d\'ouv', 'Geo Point': 'Geo Point', 'Geo Shape': 'Geo Shape', 'EPSG': 'EPSG', 'classif': 'classif', 'CODE INS_1': 'CODE INS_1', });
lyr_communesLIZEOA_12.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'dep_': 'dep_', 'nom commun': 'nom commun', 'pop.': 'pop.', 'code insee': 'code insee', 'code siren': 'code siren', 'code posta': 'code posta', 'nom comm_1': 'nom comm_1', 'Code étab': 'Code étab', 'Appellatio': 'Appellatio', 'Dénominat': 'Dénominat', 'Patronyme': 'Patronyme', 'Secteur Pu': 'Secteur Pu', 'Adresse': 'Adresse', 'Lieu_dit': 'Lieu_dit', 'Boite post': 'Boite post', 'Code pos_1': 'Code pos_1', 'Localité': 'Localité', 'Commune': 'Commune', 'Coordonné': 'Coordonné', 'Coordonn_1': 'Coordonn_1', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Qualité d': 'Qualité d', 'Localisati': 'Localisati', 'Code natur': 'Code natur', 'Nature': 'Nature', 'Sigle': 'Sigle', 'Code état': 'Code état', 'Etat étab': 'Etat étab', 'Code dépa': 'Code dépa', 'Code régi': 'Code régi', 'Code acad�': 'Code acad�', 'Code commu': 'Code commu', 'Départeme': 'Départeme', 'Région': 'Région', 'Académie': 'Académie', 'Secteur pr': 'Secteur pr', 'Secteur _1': 'Secteur _1', 'Code minis': 'Code minis', 'Ministère': 'Ministère', 'Date d\'ouv': 'Date d\'ouv', 'Geo Point': 'Geo Point', 'Geo Shape': 'Geo Shape', 'EPSG': 'EPSG', 'classif': 'classif', 'CODE INS_1': 'CODE INS_1', });
lyr_Z_1327km_ikastola_pop_13.set('fieldAliases', {'Code étab': 'Code étab', 'Appellatio': 'Appellatio', 'Dénominat': 'Dénominat', 'Patronyme': 'Patronyme', 'Secteur Pu': 'Secteur Pu', 'Adresse': 'Adresse', 'Lieu_dit': 'Lieu_dit', 'Boite post': 'Boite post', 'Code posta': 'Code posta', 'Localité': 'Localité', 'Commune': 'Commune', 'Coordonné': 'Coordonné', 'Coordonn_1': 'Coordonn_1', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Qualité d': 'Qualité d', 'Localisati': 'Localisati', 'Code natur': 'Code natur', 'Nature': 'Nature', 'Sigle': 'Sigle', 'Code état': 'Code état', 'Etat étab': 'Etat étab', 'Code dépa': 'Code dépa', 'Code régi': 'Code régi', 'Code acad�': 'Code acad�', 'Code commu': 'Code commu', 'Départeme': 'Départeme', 'Région': 'Région', 'Académie': 'Académie', 'Secteur pr': 'Secteur pr', 'Secteur _1': 'Secteur _1', 'Code minis': 'Code minis', 'Ministère': 'Ministère', 'Date d\'ouv': 'Date d\'ouv', 'Geo Point': 'Geo Point', 'Geo Shape': 'Geo Shape', 'EPSG': 'EPSG', 'classif': 'classif', 'insee_coun': 'insee_coun', 'insee_uniq': 'insee_uniq', 'insee_empt': 'insee_empt', 'insee_fill': 'insee_fill', 'insee_min': 'insee_min', 'insee_max': 'insee_max', 'insee_min_': 'insee_min_', 'insee_max_': 'insee_max_', 'insee_mean': 'insee_mean', 'nom_count': 'nom_count', 'nom_unique': 'nom_unique', 'nom_empty': 'nom_empty', 'nom_filled': 'nom_filled', 'nom_min': 'nom_min', 'nom_max': 'nom_max', 'nom_min_le': 'nom_min_le', 'nom_max_le': 'nom_max_le', 'nom_mean_l': 'nom_mean_l', 'wikipedia_': 'wikipedia_', 'wikipedi_1': 'wikipedi_1', 'wikipedi_2': 'wikipedi_2', 'wikipedi_3': 'wikipedi_3', 'wikipedi_4': 'wikipedi_4', 'wikipedi_5': 'wikipedi_5', 'wikipedi_6': 'wikipedi_6', 'wikipedi_7': 'wikipedi_7', 'wikipedi_8': 'wikipedi_8', 'surf_ha_co': 'surf_ha_co', 'surf_ha_un': 'surf_ha_un', 'surf_ha_mi': 'surf_ha_mi', 'surf_ha_ma': 'surf_ha_ma', 'surf_ha_ra': 'surf_ha_ra', 'surf_ha_su': 'surf_ha_su', 'surf_ha_me': 'surf_ha_me', 'surf_ha__1': 'surf_ha__1', 'surf_ha_st': 'surf_ha_st', 'surf_ha__2': 'surf_ha__2', 'surf_ha__3': 'surf_ha__3', 'surf_ha_q1': 'surf_ha_q1', 'surf_ha_q3': 'surf_ha_q3', 'surf_ha_iq': 'surf_ha_iq', 'dep__count': 'dep__count', 'dep__uniqu': 'dep__uniqu', 'dep__empty': 'dep__empty', 'dep__fille': 'dep__fille', 'dep__min': 'dep__min', 'dep__max': 'dep__max', 'dep__min_l': 'dep__min_l', 'dep__max_l': 'dep__max_l', 'dep__mean_': 'dep__mean_', 'nom commun': 'nom commun', 'nom comm_1': 'nom comm_1', 'nom comm_2': 'nom comm_2', 'nom comm_3': 'nom comm_3', 'nom comm_4': 'nom comm_4', 'nom comm_5': 'nom comm_5', 'nom comm_6': 'nom comm_6', 'nom comm_7': 'nom comm_7', 'nom comm_8': 'nom comm_8', 'pop._count': 'pop._count', 'pop._uniqu': 'pop._uniqu', 'pop._min': 'pop._min', 'pop._max': 'pop._max', 'pop._range': 'pop._range', 'pop._sum': 'pop._sum', 'pop._mean': 'pop._mean', 'pop._media': 'pop._media', 'pop._stdde': 'pop._stdde', 'pop._minor': 'pop._minor', 'pop._major': 'pop._major', 'pop._q1': 'pop._q1', 'pop._q3': 'pop._q3', 'pop._iqr': 'pop._iqr', 'code insee': 'code insee', 'code ins_1': 'code ins_1', 'code ins_2': 'code ins_2', 'code ins_3': 'code ins_3', 'code ins_4': 'code ins_4', 'code ins_5': 'code ins_5', 'code ins_6': 'code ins_6', 'code ins_7': 'code ins_7', 'code ins_8': 'code ins_8', 'code siren': 'code siren', 'code sir_1': 'code sir_1', 'code sir_2': 'code sir_2', 'code sir_3': 'code sir_3', 'code sir_4': 'code sir_4', 'code sir_5': 'code sir_5', 'code sir_6': 'code sir_6', 'code sir_7': 'code sir_7', 'code sir_8': 'code sir_8', 'code pos_1': 'code pos_1', 'code pos_2': 'code pos_2', 'code pos_3': 'code pos_3', 'code pos_4': 'code pos_4', 'code pos_5': 'code pos_5', 'code pos_6': 'code pos_6', 'code pos_7': 'code pos_7', 'code pos_8': 'code pos_8', 'code pos_9': 'code pos_9', 'code pos10': 'code pos10', 'code pos11': 'code pos11', 'code pos12': 'code pos12', 'code pos13': 'code pos13', 'code pos14': 'code pos14', 'nom comm_9': 'nom comm_9', 'nom comm10': 'nom comm10', 'nom comm11': 'nom comm11', 'nom comm12': 'nom comm12', 'nom comm13': 'nom comm13', 'nom comm14': 'nom comm14', 'nom comm15': 'nom comm15', 'nom comm16': 'nom comm16', 'nom comm17': 'nom comm17', });
lyr_Z_136km_collegiak_pop_14.set('fieldAliases', {'Code étab': 'Code étab', 'Appellatio': 'Appellatio', 'Dénominat': 'Dénominat', 'Patronyme': 'Patronyme', 'Secteur Pu': 'Secteur Pu', 'Adresse': 'Adresse', 'Lieu_dit': 'Lieu_dit', 'Boite post': 'Boite post', 'Code posta': 'Code posta', 'Localité': 'Localité', 'Commune': 'Commune', 'Coordonné': 'Coordonné', 'Coordonn_1': 'Coordonn_1', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Qualité d': 'Qualité d', 'Localisati': 'Localisati', 'Code natur': 'Code natur', 'Nature': 'Nature', 'Sigle': 'Sigle', 'Code état': 'Code état', 'Etat étab': 'Etat étab', 'Code dépa': 'Code dépa', 'Code régi': 'Code régi', 'Code acad�': 'Code acad�', 'Code commu': 'Code commu', 'Départeme': 'Départeme', 'Région': 'Région', 'Académie': 'Académie', 'Secteur pr': 'Secteur pr', 'Secteur _1': 'Secteur _1', 'Code minis': 'Code minis', 'Ministère': 'Ministère', 'Date d\'ouv': 'Date d\'ouv', 'Geo Point': 'Geo Point', 'Geo Shape': 'Geo Shape', 'EPSG': 'EPSG', 'classif': 'classif', 'insee_coun': 'insee_coun', 'insee_uniq': 'insee_uniq', 'insee_empt': 'insee_empt', 'insee_fill': 'insee_fill', 'insee_min': 'insee_min', 'insee_max': 'insee_max', 'insee_min_': 'insee_min_', 'insee_max_': 'insee_max_', 'insee_mean': 'insee_mean', 'nom_count': 'nom_count', 'nom_unique': 'nom_unique', 'nom_empty': 'nom_empty', 'nom_filled': 'nom_filled', 'nom_min': 'nom_min', 'nom_max': 'nom_max', 'nom_min_le': 'nom_min_le', 'nom_max_le': 'nom_max_le', 'nom_mean_l': 'nom_mean_l', 'wikipedia_': 'wikipedia_', 'wikipedi_1': 'wikipedi_1', 'wikipedi_2': 'wikipedi_2', 'wikipedi_3': 'wikipedi_3', 'wikipedi_4': 'wikipedi_4', 'wikipedi_5': 'wikipedi_5', 'wikipedi_6': 'wikipedi_6', 'wikipedi_7': 'wikipedi_7', 'wikipedi_8': 'wikipedi_8', 'surf_ha_co': 'surf_ha_co', 'surf_ha_un': 'surf_ha_un', 'surf_ha_mi': 'surf_ha_mi', 'surf_ha_ma': 'surf_ha_ma', 'surf_ha_ra': 'surf_ha_ra', 'surf_ha_su': 'surf_ha_su', 'surf_ha_me': 'surf_ha_me', 'surf_ha__1': 'surf_ha__1', 'surf_ha_st': 'surf_ha_st', 'surf_ha__2': 'surf_ha__2', 'surf_ha__3': 'surf_ha__3', 'surf_ha_q1': 'surf_ha_q1', 'surf_ha_q3': 'surf_ha_q3', 'surf_ha_iq': 'surf_ha_iq', 'dep__count': 'dep__count', 'dep__uniqu': 'dep__uniqu', 'dep__empty': 'dep__empty', 'dep__fille': 'dep__fille', 'dep__min': 'dep__min', 'dep__max': 'dep__max', 'dep__min_l': 'dep__min_l', 'dep__max_l': 'dep__max_l', 'dep__mean_': 'dep__mean_', 'nom commun': 'nom commun', 'nom comm_1': 'nom comm_1', 'nom comm_2': 'nom comm_2', 'nom comm_3': 'nom comm_3', 'nom comm_4': 'nom comm_4', 'nom comm_5': 'nom comm_5', 'nom comm_6': 'nom comm_6', 'nom comm_7': 'nom comm_7', 'nom comm_8': 'nom comm_8', 'pop._count': 'pop._count', 'pop._uniqu': 'pop._uniqu', 'pop._min': 'pop._min', 'pop._max': 'pop._max', 'pop._range': 'pop._range', 'pop._sum': 'pop._sum', 'pop._mean': 'pop._mean', 'pop._media': 'pop._media', 'pop._stdde': 'pop._stdde', 'pop._minor': 'pop._minor', 'pop._major': 'pop._major', 'pop._q1': 'pop._q1', 'pop._q3': 'pop._q3', 'pop._iqr': 'pop._iqr', 'code insee': 'code insee', 'code ins_1': 'code ins_1', 'code ins_2': 'code ins_2', 'code ins_3': 'code ins_3', 'code ins_4': 'code ins_4', 'code ins_5': 'code ins_5', 'code ins_6': 'code ins_6', 'code ins_7': 'code ins_7', 'code ins_8': 'code ins_8', 'code siren': 'code siren', 'code sir_1': 'code sir_1', 'code sir_2': 'code sir_2', 'code sir_3': 'code sir_3', 'code sir_4': 'code sir_4', 'code sir_5': 'code sir_5', 'code sir_6': 'code sir_6', 'code sir_7': 'code sir_7', 'code sir_8': 'code sir_8', 'code pos_1': 'code pos_1', 'code pos_2': 'code pos_2', 'code pos_3': 'code pos_3', 'code pos_4': 'code pos_4', 'code pos_5': 'code pos_5', 'code pos_6': 'code pos_6', 'code pos_7': 'code pos_7', 'code pos_8': 'code pos_8', 'code pos_9': 'code pos_9', 'code pos10': 'code pos10', 'code pos11': 'code pos11', 'code pos12': 'code pos12', 'code pos13': 'code pos13', 'code pos14': 'code pos14', 'nom comm_9': 'nom comm_9', 'nom comm10': 'nom comm10', 'nom comm11': 'nom comm11', 'nom comm12': 'nom comm12', 'nom comm13': 'nom comm13', 'nom comm14': 'nom comm14', 'nom comm15': 'nom comm15', 'nom comm16': 'nom comm16', 'nom comm17': 'nom comm17', });
lyr_IKASTOLAKV2_15.set('fieldAliases', {'Code étab': 'Code étab', 'Appellatio': 'Appellatio', 'Dénominat': 'Dénominat', 'Patronyme': 'Patronyme', 'Secteur Pu': 'Secteur Pu', 'Adresse': 'Adresse', 'Lieu_dit': 'Lieu_dit', 'Boite post': 'Boite post', 'Code posta': 'Code posta', 'Localité': 'Localité', 'Commune': 'Commune', 'Coordonné': 'Coordonné', 'Coordonn_1': 'Coordonn_1', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Qualité d': 'Qualité d', 'Localisati': 'Localisati', 'Code natur': 'Code natur', 'Nature': 'Nature', 'Sigle': 'Sigle', 'Code état': 'Code état', 'Etat étab': 'Etat étab', 'Code dépa': 'Code dépa', 'Code régi': 'Code régi', 'Code acad�': 'Code acad�', 'Code commu': 'Code commu', 'Départeme': 'Départeme', 'Région': 'Région', 'Académie': 'Académie', 'Secteur pr': 'Secteur pr', 'Secteur _1': 'Secteur _1', 'Code minis': 'Code minis', 'Ministère': 'Ministère', 'Date d\'ouv': 'Date d\'ouv', 'Geo Point': 'Geo Point', 'Geo Shape': 'Geo Shape', 'EPSG': 'EPSG', 'classif': 'classif', });
lyr_SOULE_16.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'dep_': 'dep_', 'nom commun': 'nom commun', 'pop.': 'pop.', 'code insee': 'code insee', 'code siren': 'code siren', 'code posta': 'code posta', 'nom comm_1': 'nom comm_1', 'province': 'province', });
lyr_BASSENAVARRE_17.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'dep_': 'dep_', 'nom commun': 'nom commun', 'pop.': 'pop.', 'code insee': 'code insee', 'code siren': 'code siren', 'code posta': 'code posta', 'nom comm_1': 'nom comm_1', 'province': 'province', });
lyr_LABOURD_18.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'dep_': 'dep_', 'nom commun': 'nom commun', 'pop.': 'pop.', 'code insee': 'code insee', 'code siren': 'code siren', 'code posta': 'code posta', 'nom comm_1': 'nom comm_1', 'province': 'province', });
lyr_zoneEH_1.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'dep_': 'TextEdit', 'nom commun': 'TextEdit', 'pop.': 'TextEdit', 'code insee': 'TextEdit', 'code siren': 'TextEdit', 'code posta': 'TextEdit', 'nom comm_1': 'TextEdit', });
lyr_Isochroneprojetslizeoak_2.set('fieldImages', {'LIBELLE': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_Isochronelizeoabayonne_3.set('fieldImages', {'libelle': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_PROJETSLIZEOAK_4.set('fieldImages', {'address': 'TextEdit', 'LIBELLE': 'TextEdit', });
lyr_bayonne_5.set('fieldImages', {'id': 'TextEdit', 'libelle': 'TextEdit', });
lyr_communesECOLES_7.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'dep_': 'TextEdit', 'nom commun': 'TextEdit', 'pop.': 'TextEdit', 'code insee': 'TextEdit', 'code siren': 'TextEdit', 'code posta': 'TextEdit', 'nom comm_1': 'TextEdit', 'Code étab': 'TextEdit', 'Appellatio': 'TextEdit', 'Dénominat': 'TextEdit', 'Patronyme': 'TextEdit', 'Secteur Pu': 'TextEdit', 'Adresse': 'TextEdit', 'Lieu_dit': 'TextEdit', 'Boite post': 'TextEdit', 'Code pos_1': 'TextEdit', 'Localité': 'TextEdit', 'Commune': 'TextEdit', 'Coordonné': 'TextEdit', 'Coordonn_1': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Qualité d': 'TextEdit', 'Localisati': 'TextEdit', 'Code natur': 'TextEdit', 'Nature': 'TextEdit', 'Sigle': 'TextEdit', 'Code état': 'Range', 'Etat étab': 'TextEdit', 'Code dépa': 'TextEdit', 'Code régi': 'TextEdit', 'Code acad�': 'TextEdit', 'Code commu': 'TextEdit', 'Départeme': 'TextEdit', 'Région': 'TextEdit', 'Académie': 'TextEdit', 'Secteur pr': 'TextEdit', 'Secteur _1': 'TextEdit', 'Code minis': 'TextEdit', 'Ministère': 'TextEdit', 'Date d\'ouv': 'DateTime', 'Geo Point': 'TextEdit', 'Geo Shape': 'TextEdit', 'EPSG': 'TextEdit', 'insee text': 'TextEdit', 'nom comm_2': 'TextEdit', 'pop._2': 'TextEdit', 'code ins_1': 'TextEdit', 'code sir_1': 'TextEdit', 'code pos_2': 'TextEdit', 'nom comm_3': 'TextEdit', });
lyr_communesCOLLEGES_8.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'dep_': 'TextEdit', 'nom commun': 'TextEdit', 'pop.': 'TextEdit', 'code insee': 'TextEdit', 'code siren': 'TextEdit', 'code posta': 'TextEdit', 'nom comm_1': 'TextEdit', 'Code étab': 'TextEdit', 'Appellatio': 'TextEdit', 'Dénominat': 'TextEdit', 'Patronyme': 'TextEdit', 'Secteur Pu': 'TextEdit', 'Adresse': 'TextEdit', 'Lieu_dit': 'TextEdit', 'Boite post': 'TextEdit', 'Code pos_1': 'TextEdit', 'Localité': 'TextEdit', 'Commune': 'TextEdit', 'Coordonné': 'TextEdit', 'Coordonn_1': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Qualité d': 'TextEdit', 'Localisati': 'TextEdit', 'Code natur': 'TextEdit', 'Nature': 'TextEdit', 'Sigle': 'TextEdit', 'Code état': 'Range', 'Etat étab': 'TextEdit', 'Code dépa': 'TextEdit', 'Code régi': 'TextEdit', 'Code acad�': 'TextEdit', 'Code commu': 'TextEdit', 'Départeme': 'TextEdit', 'Région': 'TextEdit', 'Académie': 'TextEdit', 'Secteur pr': 'TextEdit', 'Secteur _1': 'TextEdit', 'Code minis': 'TextEdit', 'Ministère': 'TextEdit', 'Date d\'ouv': 'DateTime', 'Geo Point': 'TextEdit', 'Geo Shape': 'TextEdit', 'EPSG': 'TextEdit', 'insee text': 'TextEdit', 'nom comm_2': 'TextEdit', 'pop._2': 'TextEdit', 'code ins_1': 'TextEdit', 'code sir_1': 'TextEdit', 'code pos_2': 'TextEdit', 'nom comm_3': 'TextEdit', });
lyr_communesLYCEES_9.set('fieldImages', {'insee': '', 'nom': '', 'wikipedia': '', 'surf_ha': '', 'dep_': '', 'nom commun': '', 'pop.': '', 'code insee': '', 'code siren': '', 'code posta': '', 'nom comm_1': '', 'Code étab': '', 'Appellatio': '', 'Dénominat': '', 'Patronyme': '', 'Secteur Pu': '', 'Adresse': '', 'Lieu_dit': '', 'Boite post': '', 'Code pos_1': '', 'Localité': '', 'Commune': '', 'Coordonné': '', 'Coordonn_1': '', 'Latitude': '', 'Longitude': '', 'Qualité d': '', 'Localisati': '', 'Code natur': '', 'Nature': '', 'Sigle': '', 'Code état': '', 'Etat étab': '', 'Code dépa': '', 'Code régi': '', 'Code acad�': '', 'Code commu': '', 'Départeme': '', 'Région': '', 'Académie': '', 'Secteur pr': '', 'Secteur _1': '', 'Code minis': '', 'Ministère': '', 'Date d\'ouv': '', 'Geo Point': '', 'Geo Shape': '', 'EPSG': '', 'insee text': '', 'nom comm_2': '', 'pop._2': '', 'code ins_1': '', 'code sir_1': '', 'code pos_2': '', 'nom comm_3': '', });
lyr_communesIKASTOLA_10.set('fieldImages', {'insee': '', 'nom': '', 'wikipedia': '', 'surf_ha': '', 'dep_': '', 'nom commun': '', 'pop.': '', 'code insee': '', 'code siren': '', 'code posta': '', 'nom comm_1': '', 'Code étab': '', 'Appellatio': '', 'Dénominat': '', 'Patronyme': '', 'Secteur Pu': '', 'Adresse': '', 'Lieu_dit': '', 'Boite post': '', 'Code pos_1': '', 'Localité': '', 'Commune': '', 'Coordonné': '', 'Coordonn_1': '', 'Latitude': '', 'Longitude': '', 'Qualité d': '', 'Localisati': '', 'Code natur': '', 'Nature': '', 'Sigle': '', 'Code état': '', 'Etat étab': '', 'Code dépa': '', 'Code régi': '', 'Code acad�': '', 'Code commu': '', 'Départeme': '', 'Région': '', 'Académie': '', 'Secteur pr': '', 'Secteur _1': '', 'Code minis': '', 'Ministère': '', 'Date d\'ouv': '', 'Geo Point': '', 'Geo Shape': '', 'EPSG': '', 'classif': '', 'CODE INS_1': '', });
lyr_communesKOLEGIOA_11.set('fieldImages', {'insee': '', 'nom': '', 'wikipedia': '', 'surf_ha': '', 'dep_': '', 'nom commun': '', 'pop.': '', 'code insee': '', 'code siren': '', 'code posta': '', 'nom comm_1': '', 'Code étab': '', 'Appellatio': '', 'Dénominat': '', 'Patronyme': '', 'Secteur Pu': '', 'Adresse': '', 'Lieu_dit': '', 'Boite post': '', 'Code pos_1': '', 'Localité': '', 'Commune': '', 'Coordonné': '', 'Coordonn_1': '', 'Latitude': '', 'Longitude': '', 'Qualité d': '', 'Localisati': '', 'Code natur': '', 'Nature': '', 'Sigle': '', 'Code état': '', 'Etat étab': '', 'Code dépa': '', 'Code régi': '', 'Code acad�': '', 'Code commu': '', 'Départeme': '', 'Région': '', 'Académie': '', 'Secteur pr': '', 'Secteur _1': '', 'Code minis': '', 'Ministère': '', 'Date d\'ouv': '', 'Geo Point': '', 'Geo Shape': '', 'EPSG': '', 'classif': '', 'CODE INS_1': '', });
lyr_communesLIZEOA_12.set('fieldImages', {'insee': '', 'nom': '', 'wikipedia': '', 'surf_ha': '', 'dep_': '', 'nom commun': '', 'pop.': '', 'code insee': '', 'code siren': '', 'code posta': '', 'nom comm_1': '', 'Code étab': '', 'Appellatio': '', 'Dénominat': '', 'Patronyme': '', 'Secteur Pu': '', 'Adresse': '', 'Lieu_dit': '', 'Boite post': '', 'Code pos_1': '', 'Localité': '', 'Commune': '', 'Coordonné': '', 'Coordonn_1': '', 'Latitude': '', 'Longitude': '', 'Qualité d': '', 'Localisati': '', 'Code natur': '', 'Nature': '', 'Sigle': '', 'Code état': '', 'Etat étab': '', 'Code dépa': '', 'Code régi': '', 'Code acad�': '', 'Code commu': '', 'Départeme': '', 'Région': '', 'Académie': '', 'Secteur pr': '', 'Secteur _1': '', 'Code minis': '', 'Ministère': '', 'Date d\'ouv': '', 'Geo Point': '', 'Geo Shape': '', 'EPSG': '', 'classif': '', 'CODE INS_1': '', });
lyr_Z_1327km_ikastola_pop_13.set('fieldImages', {'Code étab': 'TextEdit', 'Appellatio': 'TextEdit', 'Dénominat': 'TextEdit', 'Patronyme': 'TextEdit', 'Secteur Pu': 'TextEdit', 'Adresse': 'TextEdit', 'Lieu_dit': 'TextEdit', 'Boite post': 'TextEdit', 'Code posta': 'TextEdit', 'Localité': 'TextEdit', 'Commune': 'TextEdit', 'Coordonné': 'TextEdit', 'Coordonn_1': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Qualité d': 'TextEdit', 'Localisati': 'TextEdit', 'Code natur': 'TextEdit', 'Nature': 'TextEdit', 'Sigle': 'TextEdit', 'Code état': 'TextEdit', 'Etat étab': 'TextEdit', 'Code dépa': 'TextEdit', 'Code régi': 'TextEdit', 'Code acad�': 'TextEdit', 'Code commu': 'TextEdit', 'Départeme': 'TextEdit', 'Région': 'TextEdit', 'Académie': 'TextEdit', 'Secteur pr': 'TextEdit', 'Secteur _1': 'TextEdit', 'Code minis': 'TextEdit', 'Ministère': 'TextEdit', 'Date d\'ouv': 'TextEdit', 'Geo Point': 'TextEdit', 'Geo Shape': 'TextEdit', 'EPSG': 'TextEdit', 'classif': 'TextEdit', 'insee_coun': 'TextEdit', 'insee_uniq': 'TextEdit', 'insee_empt': 'TextEdit', 'insee_fill': 'TextEdit', 'insee_min': 'TextEdit', 'insee_max': 'TextEdit', 'insee_min_': 'TextEdit', 'insee_max_': 'TextEdit', 'insee_mean': 'TextEdit', 'nom_count': 'TextEdit', 'nom_unique': 'TextEdit', 'nom_empty': 'TextEdit', 'nom_filled': 'TextEdit', 'nom_min': 'TextEdit', 'nom_max': 'TextEdit', 'nom_min_le': 'TextEdit', 'nom_max_le': 'TextEdit', 'nom_mean_l': 'TextEdit', 'wikipedia_': 'TextEdit', 'wikipedi_1': 'TextEdit', 'wikipedi_2': 'TextEdit', 'wikipedi_3': 'TextEdit', 'wikipedi_4': 'TextEdit', 'wikipedi_5': 'TextEdit', 'wikipedi_6': 'TextEdit', 'wikipedi_7': 'TextEdit', 'wikipedi_8': 'TextEdit', 'surf_ha_co': 'TextEdit', 'surf_ha_un': 'TextEdit', 'surf_ha_mi': 'TextEdit', 'surf_ha_ma': 'TextEdit', 'surf_ha_ra': 'TextEdit', 'surf_ha_su': 'TextEdit', 'surf_ha_me': 'TextEdit', 'surf_ha__1': 'TextEdit', 'surf_ha_st': 'TextEdit', 'surf_ha__2': 'TextEdit', 'surf_ha__3': 'TextEdit', 'surf_ha_q1': 'TextEdit', 'surf_ha_q3': 'TextEdit', 'surf_ha_iq': 'TextEdit', 'dep__count': 'TextEdit', 'dep__uniqu': 'TextEdit', 'dep__empty': 'TextEdit', 'dep__fille': 'TextEdit', 'dep__min': 'TextEdit', 'dep__max': 'TextEdit', 'dep__min_l': 'TextEdit', 'dep__max_l': 'TextEdit', 'dep__mean_': 'TextEdit', 'nom commun': 'TextEdit', 'nom comm_1': 'TextEdit', 'nom comm_2': 'TextEdit', 'nom comm_3': 'TextEdit', 'nom comm_4': 'TextEdit', 'nom comm_5': 'TextEdit', 'nom comm_6': 'TextEdit', 'nom comm_7': 'TextEdit', 'nom comm_8': 'TextEdit', 'pop._count': 'TextEdit', 'pop._uniqu': 'TextEdit', 'pop._min': 'TextEdit', 'pop._max': 'TextEdit', 'pop._range': 'TextEdit', 'pop._sum': 'TextEdit', 'pop._mean': 'TextEdit', 'pop._media': 'TextEdit', 'pop._stdde': 'TextEdit', 'pop._minor': 'TextEdit', 'pop._major': 'TextEdit', 'pop._q1': 'TextEdit', 'pop._q3': 'TextEdit', 'pop._iqr': 'TextEdit', 'code insee': 'TextEdit', 'code ins_1': 'TextEdit', 'code ins_2': 'TextEdit', 'code ins_3': 'TextEdit', 'code ins_4': 'TextEdit', 'code ins_5': 'TextEdit', 'code ins_6': 'TextEdit', 'code ins_7': 'TextEdit', 'code ins_8': 'TextEdit', 'code siren': 'TextEdit', 'code sir_1': 'TextEdit', 'code sir_2': 'TextEdit', 'code sir_3': 'TextEdit', 'code sir_4': 'TextEdit', 'code sir_5': 'TextEdit', 'code sir_6': 'TextEdit', 'code sir_7': 'TextEdit', 'code sir_8': 'TextEdit', 'code pos_1': 'TextEdit', 'code pos_2': 'TextEdit', 'code pos_3': 'TextEdit', 'code pos_4': 'TextEdit', 'code pos_5': 'TextEdit', 'code pos_6': 'TextEdit', 'code pos_7': 'TextEdit', 'code pos_8': 'TextEdit', 'code pos_9': 'TextEdit', 'code pos10': 'TextEdit', 'code pos11': 'TextEdit', 'code pos12': 'TextEdit', 'code pos13': 'TextEdit', 'code pos14': 'TextEdit', 'nom comm_9': 'TextEdit', 'nom comm10': 'TextEdit', 'nom comm11': 'TextEdit', 'nom comm12': 'TextEdit', 'nom comm13': 'TextEdit', 'nom comm14': 'TextEdit', 'nom comm15': 'TextEdit', 'nom comm16': 'TextEdit', 'nom comm17': 'TextEdit', });
lyr_Z_136km_collegiak_pop_14.set('fieldImages', {'Code étab': 'TextEdit', 'Appellatio': 'TextEdit', 'Dénominat': 'TextEdit', 'Patronyme': 'TextEdit', 'Secteur Pu': 'TextEdit', 'Adresse': 'TextEdit', 'Lieu_dit': 'TextEdit', 'Boite post': 'TextEdit', 'Code posta': 'TextEdit', 'Localité': 'TextEdit', 'Commune': 'TextEdit', 'Coordonné': 'TextEdit', 'Coordonn_1': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Qualité d': 'TextEdit', 'Localisati': 'TextEdit', 'Code natur': 'TextEdit', 'Nature': 'TextEdit', 'Sigle': 'TextEdit', 'Code état': 'TextEdit', 'Etat étab': 'TextEdit', 'Code dépa': 'TextEdit', 'Code régi': 'TextEdit', 'Code acad�': 'TextEdit', 'Code commu': 'TextEdit', 'Départeme': 'TextEdit', 'Région': 'TextEdit', 'Académie': 'TextEdit', 'Secteur pr': 'TextEdit', 'Secteur _1': 'TextEdit', 'Code minis': 'TextEdit', 'Ministère': 'TextEdit', 'Date d\'ouv': 'TextEdit', 'Geo Point': 'TextEdit', 'Geo Shape': 'TextEdit', 'EPSG': 'TextEdit', 'classif': 'TextEdit', 'insee_coun': 'TextEdit', 'insee_uniq': 'TextEdit', 'insee_empt': 'TextEdit', 'insee_fill': 'TextEdit', 'insee_min': 'TextEdit', 'insee_max': 'TextEdit', 'insee_min_': 'TextEdit', 'insee_max_': 'TextEdit', 'insee_mean': 'TextEdit', 'nom_count': 'TextEdit', 'nom_unique': 'TextEdit', 'nom_empty': 'TextEdit', 'nom_filled': 'TextEdit', 'nom_min': 'TextEdit', 'nom_max': 'TextEdit', 'nom_min_le': 'TextEdit', 'nom_max_le': 'TextEdit', 'nom_mean_l': 'TextEdit', 'wikipedia_': 'TextEdit', 'wikipedi_1': 'TextEdit', 'wikipedi_2': 'TextEdit', 'wikipedi_3': 'TextEdit', 'wikipedi_4': 'TextEdit', 'wikipedi_5': 'TextEdit', 'wikipedi_6': 'TextEdit', 'wikipedi_7': 'TextEdit', 'wikipedi_8': 'TextEdit', 'surf_ha_co': 'TextEdit', 'surf_ha_un': 'TextEdit', 'surf_ha_mi': 'TextEdit', 'surf_ha_ma': 'TextEdit', 'surf_ha_ra': 'TextEdit', 'surf_ha_su': 'TextEdit', 'surf_ha_me': 'TextEdit', 'surf_ha__1': 'TextEdit', 'surf_ha_st': 'TextEdit', 'surf_ha__2': 'TextEdit', 'surf_ha__3': 'TextEdit', 'surf_ha_q1': 'TextEdit', 'surf_ha_q3': 'TextEdit', 'surf_ha_iq': 'TextEdit', 'dep__count': 'TextEdit', 'dep__uniqu': 'TextEdit', 'dep__empty': 'TextEdit', 'dep__fille': 'TextEdit', 'dep__min': 'TextEdit', 'dep__max': 'TextEdit', 'dep__min_l': 'TextEdit', 'dep__max_l': 'TextEdit', 'dep__mean_': 'TextEdit', 'nom commun': 'TextEdit', 'nom comm_1': 'TextEdit', 'nom comm_2': 'TextEdit', 'nom comm_3': 'TextEdit', 'nom comm_4': 'TextEdit', 'nom comm_5': 'TextEdit', 'nom comm_6': 'TextEdit', 'nom comm_7': 'TextEdit', 'nom comm_8': 'TextEdit', 'pop._count': 'TextEdit', 'pop._uniqu': 'TextEdit', 'pop._min': 'TextEdit', 'pop._max': 'TextEdit', 'pop._range': 'TextEdit', 'pop._sum': 'TextEdit', 'pop._mean': 'TextEdit', 'pop._media': 'TextEdit', 'pop._stdde': 'TextEdit', 'pop._minor': 'TextEdit', 'pop._major': 'TextEdit', 'pop._q1': 'TextEdit', 'pop._q3': 'TextEdit', 'pop._iqr': 'TextEdit', 'code insee': 'TextEdit', 'code ins_1': 'TextEdit', 'code ins_2': 'TextEdit', 'code ins_3': 'TextEdit', 'code ins_4': 'TextEdit', 'code ins_5': 'TextEdit', 'code ins_6': 'TextEdit', 'code ins_7': 'TextEdit', 'code ins_8': 'TextEdit', 'code siren': 'TextEdit', 'code sir_1': 'TextEdit', 'code sir_2': 'TextEdit', 'code sir_3': 'TextEdit', 'code sir_4': 'TextEdit', 'code sir_5': 'TextEdit', 'code sir_6': 'TextEdit', 'code sir_7': 'TextEdit', 'code sir_8': 'TextEdit', 'code pos_1': 'TextEdit', 'code pos_2': 'TextEdit', 'code pos_3': 'TextEdit', 'code pos_4': 'TextEdit', 'code pos_5': 'TextEdit', 'code pos_6': 'TextEdit', 'code pos_7': 'TextEdit', 'code pos_8': 'TextEdit', 'code pos_9': 'TextEdit', 'code pos10': 'TextEdit', 'code pos11': 'TextEdit', 'code pos12': 'TextEdit', 'code pos13': 'TextEdit', 'code pos14': 'TextEdit', 'nom comm_9': 'TextEdit', 'nom comm10': 'TextEdit', 'nom comm11': 'TextEdit', 'nom comm12': 'TextEdit', 'nom comm13': 'TextEdit', 'nom comm14': 'TextEdit', 'nom comm15': 'TextEdit', 'nom comm16': 'TextEdit', 'nom comm17': 'TextEdit', });
lyr_IKASTOLAKV2_15.set('fieldImages', {'Code étab': 'TextEdit', 'Appellatio': 'TextEdit', 'Dénominat': 'TextEdit', 'Patronyme': 'TextEdit', 'Secteur Pu': 'TextEdit', 'Adresse': 'TextEdit', 'Lieu_dit': 'TextEdit', 'Boite post': 'TextEdit', 'Code posta': 'TextEdit', 'Localité': 'TextEdit', 'Commune': 'TextEdit', 'Coordonné': 'TextEdit', 'Coordonn_1': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Qualité d': 'TextEdit', 'Localisati': 'TextEdit', 'Code natur': 'TextEdit', 'Nature': 'TextEdit', 'Sigle': 'TextEdit', 'Code état': 'TextEdit', 'Etat étab': 'TextEdit', 'Code dépa': 'TextEdit', 'Code régi': 'TextEdit', 'Code acad�': 'TextEdit', 'Code commu': 'TextEdit', 'Départeme': 'TextEdit', 'Région': 'TextEdit', 'Académie': 'TextEdit', 'Secteur pr': 'TextEdit', 'Secteur _1': 'TextEdit', 'Code minis': 'TextEdit', 'Ministère': 'TextEdit', 'Date d\'ouv': 'TextEdit', 'Geo Point': 'TextEdit', 'Geo Shape': 'TextEdit', 'EPSG': 'TextEdit', 'classif': 'TextEdit', });
lyr_SOULE_16.set('fieldImages', {'insee': '', 'nom': '', 'wikipedia': '', 'surf_ha': '', 'dep_': '', 'nom commun': '', 'pop.': '', 'code insee': '', 'code siren': '', 'code posta': '', 'nom comm_1': '', 'province': '', });
lyr_BASSENAVARRE_17.set('fieldImages', {'insee': '', 'nom': '', 'wikipedia': '', 'surf_ha': '', 'dep_': '', 'nom commun': '', 'pop.': '', 'code insee': '', 'code siren': '', 'code posta': '', 'nom comm_1': '', 'province': '', });
lyr_LABOURD_18.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'dep_': 'TextEdit', 'nom commun': 'TextEdit', 'pop.': 'TextEdit', 'code insee': 'TextEdit', 'code siren': 'TextEdit', 'code posta': 'TextEdit', 'nom comm_1': 'TextEdit', 'province': 'TextEdit', });
lyr_zoneEH_1.set('fieldLabels', {'insee': 'inline label - always visible', 'nom': 'inline label - always visible', 'wikipedia': 'inline label - always visible', 'surf_ha': 'inline label - always visible', 'dep_': 'inline label - always visible', 'nom commun': 'inline label - always visible', 'pop.': 'inline label - always visible', 'code insee': 'no label', 'code siren': 'no label', 'code posta': 'no label', 'nom comm_1': 'no label', });
lyr_Isochroneprojetslizeoak_2.set('fieldLabels', {'LIBELLE': 'inline label - always visible', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'inline label - always visible', });
lyr_Isochronelizeoabayonne_3.set('fieldLabels', {'libelle': 'inline label - always visible', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'inline label - always visible', });
lyr_PROJETSLIZEOAK_4.set('fieldLabels', {'address': 'inline label - always visible', 'LIBELLE': 'inline label - always visible', });
lyr_bayonne_5.set('fieldLabels', {'id': 'inline label - always visible', 'libelle': 'inline label - always visible', });
lyr_communesECOLES_7.set('fieldLabels', {'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', 'dep_': 'no label', 'nom commun': 'no label', 'pop.': 'no label', 'code insee': 'no label', 'code siren': 'no label', 'code posta': 'no label', 'nom comm_1': 'no label', 'Code étab': 'no label', 'Appellatio': 'no label', 'Dénominat': 'no label', 'Patronyme': 'no label', 'Secteur Pu': 'no label', 'Adresse': 'no label', 'Lieu_dit': 'no label', 'Boite post': 'no label', 'Code pos_1': 'no label', 'Localité': 'no label', 'Commune': 'no label', 'Coordonné': 'no label', 'Coordonn_1': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Qualité d': 'no label', 'Localisati': 'no label', 'Code natur': 'no label', 'Nature': 'no label', 'Sigle': 'no label', 'Code état': 'no label', 'Etat étab': 'no label', 'Code dépa': 'no label', 'Code régi': 'no label', 'Code acad�': 'no label', 'Code commu': 'no label', 'Départeme': 'no label', 'Région': 'no label', 'Académie': 'no label', 'Secteur pr': 'no label', 'Secteur _1': 'no label', 'Code minis': 'no label', 'Ministère': 'no label', 'Date d\'ouv': 'no label', 'Geo Point': 'no label', 'Geo Shape': 'no label', 'EPSG': 'no label', 'insee text': 'no label', 'nom comm_2': 'no label', 'pop._2': 'no label', 'code ins_1': 'no label', 'code sir_1': 'no label', 'code pos_2': 'no label', 'nom comm_3': 'no label', });
lyr_communesCOLLEGES_8.set('fieldLabels', {'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', 'dep_': 'no label', 'nom commun': 'no label', 'pop.': 'no label', 'code insee': 'no label', 'code siren': 'no label', 'code posta': 'no label', 'nom comm_1': 'no label', 'Code étab': 'no label', 'Appellatio': 'no label', 'Dénominat': 'no label', 'Patronyme': 'no label', 'Secteur Pu': 'no label', 'Adresse': 'no label', 'Lieu_dit': 'no label', 'Boite post': 'no label', 'Code pos_1': 'no label', 'Localité': 'no label', 'Commune': 'no label', 'Coordonné': 'no label', 'Coordonn_1': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Qualité d': 'no label', 'Localisati': 'no label', 'Code natur': 'no label', 'Nature': 'no label', 'Sigle': 'no label', 'Code état': 'no label', 'Etat étab': 'no label', 'Code dépa': 'no label', 'Code régi': 'no label', 'Code acad�': 'no label', 'Code commu': 'no label', 'Départeme': 'no label', 'Région': 'no label', 'Académie': 'no label', 'Secteur pr': 'no label', 'Secteur _1': 'no label', 'Code minis': 'no label', 'Ministère': 'no label', 'Date d\'ouv': 'no label', 'Geo Point': 'no label', 'Geo Shape': 'no label', 'EPSG': 'no label', 'insee text': 'no label', 'nom comm_2': 'no label', 'pop._2': 'no label', 'code ins_1': 'no label', 'code sir_1': 'no label', 'code pos_2': 'no label', 'nom comm_3': 'no label', });
lyr_communesLYCEES_9.set('fieldLabels', {'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', 'dep_': 'no label', 'nom commun': 'no label', 'pop.': 'no label', 'code insee': 'no label', 'code siren': 'no label', 'code posta': 'no label', 'nom comm_1': 'no label', 'Code étab': 'no label', 'Appellatio': 'no label', 'Dénominat': 'no label', 'Patronyme': 'no label', 'Secteur Pu': 'no label', 'Adresse': 'no label', 'Lieu_dit': 'no label', 'Boite post': 'no label', 'Code pos_1': 'no label', 'Localité': 'no label', 'Commune': 'no label', 'Coordonné': 'no label', 'Coordonn_1': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Qualité d': 'no label', 'Localisati': 'no label', 'Code natur': 'no label', 'Nature': 'no label', 'Sigle': 'no label', 'Code état': 'no label', 'Etat étab': 'no label', 'Code dépa': 'no label', 'Code régi': 'no label', 'Code acad�': 'no label', 'Code commu': 'no label', 'Départeme': 'no label', 'Région': 'no label', 'Académie': 'no label', 'Secteur pr': 'no label', 'Secteur _1': 'no label', 'Code minis': 'no label', 'Ministère': 'no label', 'Date d\'ouv': 'no label', 'Geo Point': 'no label', 'Geo Shape': 'no label', 'EPSG': 'no label', 'insee text': 'no label', 'nom comm_2': 'no label', 'pop._2': 'no label', 'code ins_1': 'no label', 'code sir_1': 'no label', 'code pos_2': 'no label', 'nom comm_3': 'no label', });
lyr_communesIKASTOLA_10.set('fieldLabels', {'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', 'dep_': 'no label', 'nom commun': 'no label', 'pop.': 'no label', 'code insee': 'no label', 'code siren': 'no label', 'code posta': 'no label', 'nom comm_1': 'no label', 'Code étab': 'no label', 'Appellatio': 'no label', 'Dénominat': 'no label', 'Patronyme': 'no label', 'Secteur Pu': 'no label', 'Adresse': 'no label', 'Lieu_dit': 'no label', 'Boite post': 'no label', 'Code pos_1': 'no label', 'Localité': 'no label', 'Commune': 'no label', 'Coordonné': 'no label', 'Coordonn_1': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Qualité d': 'no label', 'Localisati': 'no label', 'Code natur': 'no label', 'Nature': 'no label', 'Sigle': 'no label', 'Code état': 'no label', 'Etat étab': 'no label', 'Code dépa': 'no label', 'Code régi': 'no label', 'Code acad�': 'no label', 'Code commu': 'no label', 'Départeme': 'no label', 'Région': 'no label', 'Académie': 'no label', 'Secteur pr': 'no label', 'Secteur _1': 'no label', 'Code minis': 'no label', 'Ministère': 'no label', 'Date d\'ouv': 'no label', 'Geo Point': 'no label', 'Geo Shape': 'no label', 'EPSG': 'no label', 'classif': 'no label', 'CODE INS_1': 'no label', });
lyr_communesKOLEGIOA_11.set('fieldLabels', {'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', 'dep_': 'no label', 'nom commun': 'no label', 'pop.': 'no label', 'code insee': 'no label', 'code siren': 'no label', 'code posta': 'no label', 'nom comm_1': 'no label', 'Code étab': 'no label', 'Appellatio': 'no label', 'Dénominat': 'no label', 'Patronyme': 'no label', 'Secteur Pu': 'no label', 'Adresse': 'no label', 'Lieu_dit': 'no label', 'Boite post': 'no label', 'Code pos_1': 'no label', 'Localité': 'no label', 'Commune': 'no label', 'Coordonné': 'no label', 'Coordonn_1': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Qualité d': 'no label', 'Localisati': 'no label', 'Code natur': 'no label', 'Nature': 'no label', 'Sigle': 'no label', 'Code état': 'no label', 'Etat étab': 'no label', 'Code dépa': 'no label', 'Code régi': 'no label', 'Code acad�': 'no label', 'Code commu': 'no label', 'Départeme': 'no label', 'Région': 'no label', 'Académie': 'no label', 'Secteur pr': 'no label', 'Secteur _1': 'no label', 'Code minis': 'no label', 'Ministère': 'no label', 'Date d\'ouv': 'no label', 'Geo Point': 'no label', 'Geo Shape': 'no label', 'EPSG': 'no label', 'classif': 'no label', 'CODE INS_1': 'no label', });
lyr_communesLIZEOA_12.set('fieldLabels', {'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', 'dep_': 'no label', 'nom commun': 'no label', 'pop.': 'no label', 'code insee': 'no label', 'code siren': 'no label', 'code posta': 'no label', 'nom comm_1': 'no label', 'Code étab': 'no label', 'Appellatio': 'no label', 'Dénominat': 'no label', 'Patronyme': 'no label', 'Secteur Pu': 'no label', 'Adresse': 'no label', 'Lieu_dit': 'no label', 'Boite post': 'no label', 'Code pos_1': 'no label', 'Localité': 'no label', 'Commune': 'no label', 'Coordonné': 'no label', 'Coordonn_1': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Qualité d': 'no label', 'Localisati': 'no label', 'Code natur': 'no label', 'Nature': 'no label', 'Sigle': 'no label', 'Code état': 'no label', 'Etat étab': 'no label', 'Code dépa': 'no label', 'Code régi': 'no label', 'Code acad�': 'no label', 'Code commu': 'no label', 'Départeme': 'no label', 'Région': 'no label', 'Académie': 'no label', 'Secteur pr': 'no label', 'Secteur _1': 'no label', 'Code minis': 'no label', 'Ministère': 'no label', 'Date d\'ouv': 'no label', 'Geo Point': 'no label', 'Geo Shape': 'no label', 'EPSG': 'no label', 'classif': 'no label', 'CODE INS_1': 'no label', });
lyr_Z_1327km_ikastola_pop_13.set('fieldLabels', {'Code étab': 'no label', 'Appellatio': 'no label', 'Dénominat': 'no label', 'Patronyme': 'no label', 'Secteur Pu': 'no label', 'Adresse': 'no label', 'Lieu_dit': 'no label', 'Boite post': 'no label', 'Code posta': 'no label', 'Localité': 'no label', 'Commune': 'no label', 'Coordonné': 'no label', 'Coordonn_1': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Qualité d': 'no label', 'Localisati': 'no label', 'Code natur': 'no label', 'Nature': 'no label', 'Sigle': 'no label', 'Code état': 'no label', 'Etat étab': 'no label', 'Code dépa': 'no label', 'Code régi': 'no label', 'Code acad�': 'no label', 'Code commu': 'no label', 'Départeme': 'no label', 'Région': 'no label', 'Académie': 'no label', 'Secteur pr': 'no label', 'Secteur _1': 'no label', 'Code minis': 'no label', 'Ministère': 'no label', 'Date d\'ouv': 'no label', 'Geo Point': 'no label', 'Geo Shape': 'no label', 'EPSG': 'no label', 'classif': 'no label', 'insee_coun': 'no label', 'insee_uniq': 'no label', 'insee_empt': 'no label', 'insee_fill': 'no label', 'insee_min': 'no label', 'insee_max': 'no label', 'insee_min_': 'no label', 'insee_max_': 'no label', 'insee_mean': 'no label', 'nom_count': 'no label', 'nom_unique': 'no label', 'nom_empty': 'no label', 'nom_filled': 'no label', 'nom_min': 'no label', 'nom_max': 'no label', 'nom_min_le': 'no label', 'nom_max_le': 'no label', 'nom_mean_l': 'no label', 'wikipedia_': 'no label', 'wikipedi_1': 'no label', 'wikipedi_2': 'no label', 'wikipedi_3': 'no label', 'wikipedi_4': 'no label', 'wikipedi_5': 'no label', 'wikipedi_6': 'no label', 'wikipedi_7': 'no label', 'wikipedi_8': 'no label', 'surf_ha_co': 'no label', 'surf_ha_un': 'no label', 'surf_ha_mi': 'no label', 'surf_ha_ma': 'no label', 'surf_ha_ra': 'no label', 'surf_ha_su': 'no label', 'surf_ha_me': 'no label', 'surf_ha__1': 'no label', 'surf_ha_st': 'no label', 'surf_ha__2': 'no label', 'surf_ha__3': 'no label', 'surf_ha_q1': 'no label', 'surf_ha_q3': 'no label', 'surf_ha_iq': 'no label', 'dep__count': 'no label', 'dep__uniqu': 'no label', 'dep__empty': 'no label', 'dep__fille': 'no label', 'dep__min': 'no label', 'dep__max': 'no label', 'dep__min_l': 'no label', 'dep__max_l': 'no label', 'dep__mean_': 'no label', 'nom commun': 'no label', 'nom comm_1': 'no label', 'nom comm_2': 'no label', 'nom comm_3': 'no label', 'nom comm_4': 'no label', 'nom comm_5': 'no label', 'nom comm_6': 'no label', 'nom comm_7': 'no label', 'nom comm_8': 'no label', 'pop._count': 'no label', 'pop._uniqu': 'no label', 'pop._min': 'no label', 'pop._max': 'no label', 'pop._range': 'no label', 'pop._sum': 'no label', 'pop._mean': 'no label', 'pop._media': 'no label', 'pop._stdde': 'no label', 'pop._minor': 'no label', 'pop._major': 'no label', 'pop._q1': 'no label', 'pop._q3': 'no label', 'pop._iqr': 'no label', 'code insee': 'no label', 'code ins_1': 'no label', 'code ins_2': 'no label', 'code ins_3': 'no label', 'code ins_4': 'no label', 'code ins_5': 'no label', 'code ins_6': 'no label', 'code ins_7': 'no label', 'code ins_8': 'no label', 'code siren': 'no label', 'code sir_1': 'no label', 'code sir_2': 'no label', 'code sir_3': 'no label', 'code sir_4': 'no label', 'code sir_5': 'no label', 'code sir_6': 'no label', 'code sir_7': 'no label', 'code sir_8': 'no label', 'code pos_1': 'no label', 'code pos_2': 'no label', 'code pos_3': 'no label', 'code pos_4': 'no label', 'code pos_5': 'no label', 'code pos_6': 'no label', 'code pos_7': 'no label', 'code pos_8': 'no label', 'code pos_9': 'no label', 'code pos10': 'no label', 'code pos11': 'no label', 'code pos12': 'no label', 'code pos13': 'no label', 'code pos14': 'no label', 'nom comm_9': 'no label', 'nom comm10': 'no label', 'nom comm11': 'no label', 'nom comm12': 'no label', 'nom comm13': 'no label', 'nom comm14': 'no label', 'nom comm15': 'no label', 'nom comm16': 'no label', 'nom comm17': 'no label', });
lyr_Z_136km_collegiak_pop_14.set('fieldLabels', {'Code étab': 'no label', 'Appellatio': 'no label', 'Dénominat': 'no label', 'Patronyme': 'no label', 'Secteur Pu': 'no label', 'Adresse': 'no label', 'Lieu_dit': 'no label', 'Boite post': 'no label', 'Code posta': 'no label', 'Localité': 'no label', 'Commune': 'no label', 'Coordonné': 'no label', 'Coordonn_1': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Qualité d': 'no label', 'Localisati': 'no label', 'Code natur': 'no label', 'Nature': 'no label', 'Sigle': 'no label', 'Code état': 'no label', 'Etat étab': 'no label', 'Code dépa': 'no label', 'Code régi': 'no label', 'Code acad�': 'no label', 'Code commu': 'no label', 'Départeme': 'no label', 'Région': 'no label', 'Académie': 'no label', 'Secteur pr': 'no label', 'Secteur _1': 'no label', 'Code minis': 'no label', 'Ministère': 'no label', 'Date d\'ouv': 'no label', 'Geo Point': 'no label', 'Geo Shape': 'no label', 'EPSG': 'no label', 'classif': 'no label', 'insee_coun': 'no label', 'insee_uniq': 'no label', 'insee_empt': 'no label', 'insee_fill': 'no label', 'insee_min': 'no label', 'insee_max': 'no label', 'insee_min_': 'no label', 'insee_max_': 'no label', 'insee_mean': 'no label', 'nom_count': 'no label', 'nom_unique': 'no label', 'nom_empty': 'no label', 'nom_filled': 'no label', 'nom_min': 'no label', 'nom_max': 'no label', 'nom_min_le': 'no label', 'nom_max_le': 'no label', 'nom_mean_l': 'no label', 'wikipedia_': 'no label', 'wikipedi_1': 'no label', 'wikipedi_2': 'no label', 'wikipedi_3': 'no label', 'wikipedi_4': 'no label', 'wikipedi_5': 'no label', 'wikipedi_6': 'no label', 'wikipedi_7': 'no label', 'wikipedi_8': 'no label', 'surf_ha_co': 'no label', 'surf_ha_un': 'no label', 'surf_ha_mi': 'no label', 'surf_ha_ma': 'no label', 'surf_ha_ra': 'no label', 'surf_ha_su': 'no label', 'surf_ha_me': 'no label', 'surf_ha__1': 'no label', 'surf_ha_st': 'no label', 'surf_ha__2': 'no label', 'surf_ha__3': 'no label', 'surf_ha_q1': 'no label', 'surf_ha_q3': 'no label', 'surf_ha_iq': 'no label', 'dep__count': 'no label', 'dep__uniqu': 'no label', 'dep__empty': 'no label', 'dep__fille': 'no label', 'dep__min': 'no label', 'dep__max': 'no label', 'dep__min_l': 'no label', 'dep__max_l': 'no label', 'dep__mean_': 'no label', 'nom commun': 'no label', 'nom comm_1': 'no label', 'nom comm_2': 'no label', 'nom comm_3': 'no label', 'nom comm_4': 'no label', 'nom comm_5': 'no label', 'nom comm_6': 'no label', 'nom comm_7': 'no label', 'nom comm_8': 'no label', 'pop._count': 'no label', 'pop._uniqu': 'no label', 'pop._min': 'no label', 'pop._max': 'no label', 'pop._range': 'no label', 'pop._sum': 'no label', 'pop._mean': 'no label', 'pop._media': 'no label', 'pop._stdde': 'no label', 'pop._minor': 'no label', 'pop._major': 'no label', 'pop._q1': 'no label', 'pop._q3': 'no label', 'pop._iqr': 'no label', 'code insee': 'no label', 'code ins_1': 'no label', 'code ins_2': 'no label', 'code ins_3': 'no label', 'code ins_4': 'no label', 'code ins_5': 'no label', 'code ins_6': 'no label', 'code ins_7': 'no label', 'code ins_8': 'no label', 'code siren': 'no label', 'code sir_1': 'no label', 'code sir_2': 'no label', 'code sir_3': 'no label', 'code sir_4': 'no label', 'code sir_5': 'no label', 'code sir_6': 'no label', 'code sir_7': 'no label', 'code sir_8': 'no label', 'code pos_1': 'no label', 'code pos_2': 'no label', 'code pos_3': 'no label', 'code pos_4': 'no label', 'code pos_5': 'no label', 'code pos_6': 'no label', 'code pos_7': 'no label', 'code pos_8': 'no label', 'code pos_9': 'no label', 'code pos10': 'no label', 'code pos11': 'no label', 'code pos12': 'no label', 'code pos13': 'no label', 'code pos14': 'no label', 'nom comm_9': 'no label', 'nom comm10': 'no label', 'nom comm11': 'no label', 'nom comm12': 'no label', 'nom comm13': 'no label', 'nom comm14': 'no label', 'nom comm15': 'no label', 'nom comm16': 'no label', 'nom comm17': 'no label', });
lyr_IKASTOLAKV2_15.set('fieldLabels', {'Code étab': 'inline label - always visible', 'Appellatio': 'inline label - always visible', 'Dénominat': 'inline label - always visible', 'Patronyme': 'inline label - always visible', 'Secteur Pu': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Lieu_dit': 'no label', 'Boite post': 'no label', 'Code posta': 'inline label - always visible', 'Localité': 'inline label - always visible', 'Commune': 'inline label - always visible', 'Coordonné': 'no label', 'Coordonn_1': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Qualité d': 'no label', 'Localisati': 'no label', 'Code natur': 'inline label - always visible', 'Nature': 'inline label - always visible', 'Sigle': 'inline label - always visible', 'Code état': 'inline label - always visible', 'Etat étab': 'inline label - always visible', 'Code dépa': 'inline label - always visible', 'Code régi': 'no label', 'Code acad�': 'no label', 'Code commu': 'no label', 'Départeme': 'no label', 'Région': 'no label', 'Académie': 'no label', 'Secteur pr': 'inline label - always visible', 'Secteur _1': 'inline label - always visible', 'Code minis': 'no label', 'Ministère': 'no label', 'Date d\'ouv': 'inline label - always visible', 'Geo Point': 'no label', 'Geo Shape': 'no label', 'EPSG': 'no label', 'classif': 'inline label - always visible', });
lyr_SOULE_16.set('fieldLabels', {'insee': 'inline label - always visible', 'nom': 'inline label - always visible', 'wikipedia': 'no label', 'surf_ha': 'inline label - always visible', 'dep_': 'inline label - always visible', 'nom commun': 'inline label - always visible', 'pop.': 'inline label - always visible', 'code insee': 'no label', 'code siren': 'no label', 'code posta': 'no label', 'nom comm_1': 'inline label - always visible', 'province': 'inline label - always visible', });
lyr_BASSENAVARRE_17.set('fieldLabels', {'insee': 'inline label - always visible', 'nom': 'inline label - always visible', 'wikipedia': 'no label', 'surf_ha': 'inline label - always visible', 'dep_': 'inline label - always visible', 'nom commun': 'inline label - always visible', 'pop.': 'inline label - always visible', 'code insee': 'inline label - always visible', 'code siren': 'no label', 'code posta': 'inline label - always visible', 'nom comm_1': 'inline label - always visible', 'province': 'inline label - always visible', });
lyr_LABOURD_18.set('fieldLabels', {'insee': 'inline label - always visible', 'nom': 'inline label - always visible', 'wikipedia': 'no label', 'surf_ha': 'inline label - always visible', 'dep_': 'inline label - always visible', 'nom commun': 'inline label - always visible', 'pop.': 'no label', 'code insee': 'inline label - always visible', 'code siren': 'no label', 'code posta': 'inline label - always visible', 'nom comm_1': 'inline label - always visible', 'province': 'inline label - always visible', });
lyr_LABOURD_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});