    var data = null;
    var vendedoresMonto = new Array();
    var dateSelected =  new Date();

window.onload = function () {

    var ventas = new CanvasJS.Chart("Ventas",{
    });
    var equipoA = new CanvasJS.Chart("EquipoA",{
    });
/*
        var equipoB = new CanvasJS.Chart("EquipoB",{
            });
        var equipoC = new CanvasJS.Chart("EquipoC",{
            });
        var equipoD = new CanvasJS.Chart("EquipoD",{
            });
        var equipoE = new CanvasJS.Chart("EquipoE",{
            });
*/
        var updateInterval = 1000;


        var updateChart = function () {
            console.log('Updating...');

            createChart();

            if(ventas !=  'undefined'){
                ventas.render();
                equipoA.render();
/*
                equipoB.render();
                equipoC.render();
                equipoD.render();
                equipoE.render();
*/
            }
        };

        updateChart();

        // update ventas after specified interval
        setInterval(function(){updateChart()}, updateInterval);


    }

    $(document).ready(function() {

    // The event listener for the file upload
    document.getElementById('txtFileUpload').addEventListener('change', upload, false);

    // Method that checks that the browser supports the HTML5 File API
    function browserSupportFileUpload() {
        var isCompatible = false;
        if (window.File && window.FileReader && window.FileList && window.Blob) {
        isCompatible = true;
        }
        return isCompatible;
    }

    // Method that reads and processes the selected file
    function upload(evt) {
        if (!browserSupportFileUpload()) {
            alert('The File APIs are not fully supported in this browser!');
            } else {
                data = null;
                var file = evt.target.files[0];
                var reader = new FileReader();
                reader.readAsText(file);
                reader.onload = function(event) {
                    var csvData = event.target.result;
                    data = $.csv.toArrays(csvData);
                    var tableBody = $(".tableBody");
                    var tableHeader = $(".tableHeader");
                    if (data && data.length > 0) {
                    //alert('Imported -' + data.length + '- rows successfully!');
                    for(var i = 0; i< data.length; i++){
                        if(i == 0){
                            $(tableHeader).append("<tr class='header' id='header_"+i+"'></tr>")
                            for(var j = 0; j < data[i].length; j++){
                                if(data[i][j] != ""){
                                    //console.log(data[i][j]);
                                    $("#header_"+i).append("<th class='text-center'>"+data[i][j]+"</th>")
                                }
                            }
                        }else{
                            $(tableBody).append("<tr class='columnTable' id='row_"+i+"'></tr>")
                            for(var j = 0; j < data[i].length; j++){
                                if(data[i][j] != ""){
                                    if(j == 1){

                                        if(vendedoresMonto[data[i][j]] == undefined){
                                            vendedoresMonto[data[i][j]] = parseInt(0);
                                        }
                                        vendedoresMonto[data[i][j]] =  parseInt(vendedoresMonto[data[i][j]]) + parseInt(data[i][2]);
                                        //console.log(vendedoresMonto);
                                    }
                                    var val = data[i][j];
                                    //console.log(val);
                                    if(j==0){
                                        $("#row_"+i).append("<td><input class='Mes' value="+val+"></td>")
                                    }else if(j==1){
                                        $("#row_"+i).append("<td><input class='Vendedor' value="+val+"></td>")
                                    }else if(j==2){
                                        $("#row_"+i).append("<td style='width:80px' class='pull-left'>$<input class='Monto pull-right' value="+val.split('$')[1]+"></td>")
                                    }else if(j==3){
                                        $("#row_"+i).append("<td><input class='Cantidad' value="+val+"></td>")
                                    }else if(j==4){
                                        $("#row_"+i).append("<td><input class='Equipo' value="+val+"></td>")
                                    }

                                }
                            }
                        }

                    }
                    } else {
                        alert('No data to import!');
                    }
                };
                reader.onerror = function() {
                    alert('Unable to read ' + file.fileName);

                };
            }
        }

    });
/*
function addRow(){

}
*/
function createChart(){

// Instantiate array
    var dps = [];
    var mes = [];
    var vendedor = [];

    var montoA = [];
    var montoB = [];
    var montoC = [];
    var montoD = [];
    var montoE = [];

    var cantidadA = [];
    var cantidadB = [];
    var cantidadC = [];
    var cantidadD = [];
    var cantidadE = [];

// dataPoints - extract from DOM/table

// Get the data straight from the HTML table generated
var mesVal = "";
var vendedorVal = "";
var montoVal = "";
var cantidadVal = "";
var equipoVal = "";

    //Mes
    //if(i==1){
        $('#table_1 tbody tr').each( function(){
            mesVal = $('td:nth-child(1) input', $(this)).val();
            vendedorVal = $('td:nth-child(2) input', $(this)).val();
            montoVal = $('td:nth-child(3) input', $(this)).val();
            cantidadVal = $('td:nth-child(4) input', $(this)).val();
            equipoVal = $('td:nth-child(5) input', $(this)).val();

    //Vendedor
    //if(i==2){
        //$('#table_1 tbody tr td:nth-child(2) input').each( function(){
            //vendedor.push( $(this).val());
        //});
    //}
    //Vendedor
    //if(i==3){
        //$('#table_1 tbody tr td:nth-child(3) input').each( function(){
            //console.log($(this).val());
           // monto.push({ y: Number($(this).val().split('$')[1].replace(',',''))});
            //dps = monto;
        //});
    //}
    //Vendedor
    //if(i==4){
        //$('#table_1 tbody tr td:nth-child(4) input').each( function(){
            //cantidad.push({ y: Number($(this).val())});

        //});
    //}
    //Vendedor
    //if(i==5){
        //$('#table_1 tbody tr td:nth-child(5) input').each( function(){
            //equipo.push( { x: Number($(this).val())});
        //});
    //}
//}

// Chart Ventas
if(vendedorVal == 'A'){
montoA.push( {x: new Date(mesVal), y:Number(montoVal.replace(',','')), indexLabel:'$'+montoVal});
//cantidadA.push( {x: Number(equipoVal), y:Number(cantidadVal), indexLabel: cantidadVal});
//cantidadA.push( {x: new Date(mesVal), y:Number(cantidadVal), indexLabel: cantidadVal});
}

if(vendedorVal == 'B'){
montoB.push( {x: new Date(mesVal), y:Number(montoVal.replace(',','')), indexLabel:'$'+montoVal});
//cantidadB.push( {x: Number(equipoVal), y:Number(cantidadVal), indexLabel: cantidadVal});
//cantidadB.push( {x: new Date(mesVal), y:Number(cantidadVal), indexLabel: cantidadVal});
}

if(vendedorVal == 'C'){
montoC.push( {x: new Date(mesVal), y:Number(montoVal.replace(',','')), indexLabel:'$'+montoVal});
//cantidadC.push( {x: Number(equipoVal), y:Number(cantidadVal), indexLabel: cantidadVal});
//cantidadC.push( {x: new Date(mesVal), y:Number(cantidadVal), indexLabel: cantidadVal});
}

if(vendedorVal == 'D'){
montoD.push( {x: new Date(mesVal), y:Number(montoVal.replace(',','')), indexLabel:'$'+montoVal});
//cantidadD.push( {x: Number(equipoVal), y:Number(cantidadVal), indexLabel: cantidadVal});
//cantidadD.push( {x: new Date(mesVal), y:Number(cantidadVal), indexLabel: cantidadVal});
}

if(vendedorVal == 'E'){
montoE.push( {x: new Date(mesVal), y:Number(montoVal.replace(',','')), indexLabel:'$'+montoVal});
//cantidadE.push( {x: Number(equipoVal), y:Number(cantidadVal), indexLabel: cantidadVal});
//cantidadE.push( {x: new Date(mesVal), y:Number(cantidadVal), indexLabel: cantidadVal});
}

if(document.getElementById("mesSel") != null){
    var mt = new Date(document.getElementById("mesSel").value).getMonth()+1;
    var yr = new Date(document.getElementById("mesSel").value).getFullYear();
    dateSelected = new Date(yr,mt);
    mesVal = new Date(mesVal);
    //console.log(mesVal);
    //console.log(dateSelected);
}

//Chart Cantidad por Equipo
    for(var i=1; i <= 10; i++){
        if(equipoVal == i){
            if(vendedorVal == 'A'){
                if(mesVal.getTime() === dateSelected.getTime()){
                    //console.log('IM IN -> A');
                    cantidadA.push( {x: Number(i), y:Number(cantidadVal), indexLabel: cantidadVal});
                }
            }else if(vendedorVal == 'B'){
                if(mesVal.getTime() === dateSelected.getTime()){
                    //console.log('IM IN -> B');
                    cantidadB.push( {x: Number(i), y:Number(cantidadVal), indexLabel: cantidadVal});
                }
            }else if(vendedorVal == 'C'){
                if(mesVal.getTime() === dateSelected.getTime()){
                    //console.log('IM IN -> C');
                    cantidadC.push( {x: Number(i), y:Number(cantidadVal), indexLabel: cantidadVal});
                }
            }else if(vendedorVal == 'D'){
                if(mesVal.getTime() === dateSelected.getTime()){
                    //console.log('IM IN -> D');
                    cantidadD.push( {x: Number(i), y:Number(cantidadVal), indexLabel: cantidadVal});
                }
            }else{
                if(mesVal.getTime() === dateSelected.getTime()){
                    //console.log('IM IN -> E');
                    cantidadE.push( {x: Number(i), y:Number(cantidadVal), indexLabel: cantidadVal});
                }
            }
        }
    }


});

//---------------------------------Ventas----------------------------
        var ventas = new CanvasJS.Chart("Ventas",{
            title: {
                text: "Monto por Vendedor",
                fontSize: 18
            },
            legend: {
                fontSize: 15,
                horizontalAlign: "right",
                verticalAlign: "top"
            },
            axisX: {
                title: "Mes",
                intervalType: "month",
                interval: 1,
                valueFormatString: "YYYY/MM"
            },
            axisY: {
                title: "Monto",
                prefix: "$"
            },
            animationEnabled: false,
            data: [{
                type: "column",
                dataPoints : montoA,
                indexLabelFontSize: 10,
                indexLabelFontWeight: "bold",
                fillOpacity: .7,
                showInLegend: true,
                legendText: 'Vendedor A'
            },
            {
                type: "column",
                dataPoints : montoB,
                indexLabelFontSize: 10,
                indexLabelFontWeight: "bold",
                fillOpacity: .7,
                showInLegend: true,
                legendText: 'Vendedor B'
            },
            {
                type: "column",
                dataPoints : montoC,
                indexLabelFontSize: 10,
                indexLabelFontWeight: "bold",
                fillOpacity: .7,
                showInLegend: true,
                legendText: 'Vendedor C'
            },
            {
                type: "column",
                dataPoints : montoD,
                indexLabelFontSize: 10,
                indexLabelFontWeight: "bold",
                fillOpacity: .7,
                showInLegend: true,
                legendText: 'Vendedor D'
            },
            {
                type: "column",
                dataPoints : montoE,
                indexLabelFontSize: 10,
                indexLabelFontWeight: "bold",
                fillOpacity: .7,
                showInLegend: true,
                legendText: 'Vendedor E'
            }]

        });
//----------------------------Equipo--------------------------------

        var equipoA = new CanvasJS.Chart("EquipoA",{
            title: {
                text: "Cantidad por Equipo",
                fontSize: 18
            },
            legend: {
                fontSize: 15,
                horizontalAlign: "right",
                verticalAlign: "top"
            },
            dataPointWidth: 8,
            axisX: {
                title: "Equipo",
                interval: 1
            },
            axisY: {
                title: "Cantidad"
            },
            animationEnabled: false,
            data: [{
                type: "bar",
                legendText: "Vendedor A",
                indexLabelFontSize: 13,
                indexLabelFontWeight: "bold",
                fillOpacity: .7,
                showInLegend: "true",
                dataPoints: cantidadA
            },{
                type: "bar",
                legendText: "Vendedor B",
                indexLabelFontSize: 13,
                indexLabelFontWeight: "bold",
                fillOpacity: .7,
                showInLegend: "true",
                dataPoints: cantidadB
            },{
                type: "bar",
                legendText: "Vendedor C",
                indexLabelFontSize: 13,
                indexLabelFontWeight: "bold",
                fillOpacity: .7,
                showInLegend: "true",
                dataPoints: cantidadC
            },{
                type: "bar",
                legendText: "Vendedor D",
                indexLabelFontSize: 13,
                indexLabelFontWeight: "bold",
                fillOpacity: .7,
                showInLegend: "true",
                dataPoints: cantidadD
            },{
                type: "bar",
                legendText: "Vendedor E",
                indexLabelFontSize: 13,
                indexLabelFontWeight: "bold",
                fillOpacity: .7,
                showInLegend: "true",
                dataPoints: cantidadE
            }]
        });
/*
        var equipoB = new CanvasJS.Chart("EquipoB",{
            title: {
                text: "Cantidad por Equipo"
            },
            axisX: {
                title: "Equipo",
                intervalType: "month",
                interval: 1,
                valueFormatString: "YYYY/MM"
            },
            axisY: {
                title: "Cantidad"
            },
            legend :{
                verticalAlign: 'bottom',
                horizontalAlign: "center"
            },
            data: [{
                type: "column",
                dataPoints : cantidadB
            }]

        });

        var equipoC = new CanvasJS.Chart("EquipoC",{
            title: {
                text: "Cantidad por Equipo"
            },
            axisX: {
                title: "Equipo",
                intervalType: "month",
                interval: 1,
                valueFormatString: "YYYY/MM"
            },
            axisY: {
                title: "Cantidad"
            },
            legend :{
                verticalAlign: 'bottom',
                horizontalAlign: "center"
            },
            data: [{
                type: "column",
                dataPoints : cantidadC
            }]

        });

        var equipoD = new CanvasJS.Chart("EquipoD",{
            title: {
                text: "Cantidad por Equipo"
            },
            axisX: {
                title: "Equipo",
                intervalType: "month",
                interval: 1,
                valueFormatString: "YYYY/MM"
            },
            axisY: {
                title: "Cantidad"
            },
            legend :{
                verticalAlign: 'bottom',
                horizontalAlign: "center"
            },
            data: [{
                type: "column",
                dataPoints : cantidadD
            }]

        });

        var equipoE = new CanvasJS.Chart("EquipoE",{
            title: {
                text: "Cantidad por Equipo"
            },
            axisX: {
                title: "Equipo",
                intervalType: "month",
                interval: 1,
                valueFormatString: "YYYY/MM"
            },
            axisY: {
                title: "Cantidad"
            },
            legend :{
                verticalAlign: 'bottom',
                horizontalAlign: "center"
            },
            data: [{
                type: "column",
                dataPoints : cantidadE
            }]

        });
*/
            ventas.render();
            equipoA.render();
/*
            equipoB.render();
            equipoC.render();
            equipoD.render();
            equipoE.render();
*/
}

/*
var vendedor = document.getElementById('vendedorSel').value;

    if(vendedor == 'Vendedor A'){
        $('#EquipoA').hide();
    }else if(vendedor == 'Vendedor B'){
        $('#EquipoB').hide();
    }else if(vendedor == 'Vendedor C'){
        $('#EquipoC').hide();
    }else if(vendedor == 'Vendedor D'){
        $('#EquipoD').hide();
    }else{
        $('#EquipoE').hide();
    }
*/
/*
function getValue(){
    button = document.getElementById('button')
    var row =  button.form.row.value;
    //console.log(row);
    var classCol =  button.form.col.value;
    //console.log(classCol);

    if(row != 'undefined' && classCol != 'undefined'){
        value = $("#row_"+row+" ."+classCol+"").val();
        //console.log(value);
    }else{

    }
    return value;
}
*/
