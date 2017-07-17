<?php
session_start();
include_once 'header.php';
?>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=11,chrome=1">
    <!--Title-->
    <title>Datos de visualizacion</title>
    <!--Scripts-->
    <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-csv/0.71/jquery.csv-0.71.min.js"></script>
    <script src="./assets/js/canvasjs.min.js"></script>
    <script src="./assets/js/bootstrap.min.js"></script>
    <script src="./assets/js/ventas.js"></script>
    <script src="./assets/js/bootstrap-filestyle.min.js"> </script>

    <!--CSS-->
    <link rel="stylesheet" href="./assets/css/style.css">
    <link href="./assets/css/bootstrap.css" rel="stylesheet">
</head>
<body>

<body>
    <nav id="ribbon" class="navbar navbar-inverse navbar-fixed-top" >
        <div class="container-fluid">
            <div class="navbar-header">
                <img id="logo" src="assets/images/keyenceLogo.png" href="#" class=""></img>
            </div>
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Dashboard</a></li>
                <!--<li><a class="quote">Contacto</a></li>-->
            </ul>
            <button type="button" class="btn btn-default navbar-btn pull-right" disabled="disabled">Entrar</button>
        </div>
    </nav>

    <div id="container" class="content container-fluid">
        <div class="row">
            <div class="col-md-12" style="height: 45px;">
                <input id="txtFileUpload" type="file" name="File Upload" accept=".csv" class="filestyle"
                    data-classButton="btn btn-primary" data-input="false" data-classIcon="icon-plus" data-buttonText="Abrir CSV"/>
                <!--<button onclick="createChart();" class="btn">Crear Grafico</button> -->
                  <hr>
            </div>
            <div class="col-md-8">
                <div id="Ventas" style="height: 300px; width: 100;" /></div>
                    <hr>
                <label for="mesSel">Seleccionar Mes: </label>
                <input id="mesSel" type="month" name="mesSel" class="form-control input-sm"/>
                <div id="EquipoA" style="height: 300px; width: 100;"/></div>
                <!--
                <div id="EquipoB" style="height: 300px; width: 100;"/></div>
                <div id="EquipoC" style="height: 300px; width: 100;"/></div>
                <div id="EquipoD" style="height: 300px; width: 100;"/></div>
                <div id="EquipoE" style="height: 300px; width: 100;"/></div>
                -->
            </div>
            <div class="col-md-4 table-responsive">
                <p class="text-center" style="font-weight: bold;">Datos de visualización</p>
                <table id="table_1" class="table_1 table table-hover table-striped table-condensed">
                    <thead class="tableHeader">
                        <!--created dinamycally in ventasjs.js-->
                    </thead>
                    <tbody class="tableBody">
                        <!--created dinamycally in ventasjs.js-->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>
</html>
