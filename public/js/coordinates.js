// function init () {

// const { search } = require("../../src/routes/login");

//     start = '55.751428,37.618876'; // start coordinates
//     zoom = 10;                      // start zoom
//     id = 'map';

//     start = start.split(',');       // split coordinates to array

//     lat = start[0];
//     long = start[1];
//     coords = [lat, long];
//     Map = new ymaps.Map(id, {    // initialize map
//         center: coords,
//         zoom: zoom,
//         controls: ['zoomControl']
//     });

//     /* Adding search on map */
//     var search = new ymaps.control.SearchControl({
//         options: {
//             float: 'left',
//             floatIndex: 100,
//             noPlacemark: true
//         }
//     });
//     Map.controls.add(search);

//     /* Addung mark on map*/
//     mark = new ymaps.Placemark([lat, long],{}, {preset: "islands#redIcon", draggable: true});
//     Map.geoObjects.add(mark);

//     /* Event drag mark */
//     mark.events.add("dragend", function () {
//         coords = this.geometry.getCoordinates();
//         save();
//     }, mark);

//     /* Event click */
//     Map.events.add('click', function (e) {
//         coords = e.get('coords');
//         save();
//     });

//     /* Event search */
//     search.events.add("resultselect", function () {
//         coords = search.getResultsArray()[0].geometry.getCoordinates();
//         save();
//     });
// }
// /* Save value in form */
// function save (){
//     var new_coords = [coords[0].toFixed(6), coords[1].toFixed(6)];
//     mark.getOverlaySync().getData().geometry.setCoordinates(new_coords);
//     document.getElementById("coordinates").value = new_coords;
//     console.log(new_coords);
// }

// ymaps.ready(init);

// function save (){
//     var new_coords = [coords[0].toFixed(6), coords[1].toFixed(6)];
//     mark.getOverlaySync().getData().geometry.setCoordinates(new_coords);
//     document.getElementById("coordinates").value = new_coords;
//     console.log(new_coords);
// }

ymaps.ready(() => {
  start = '55.751428,37.618876'; // start coordinates
  zoom = 10; // start zoom
  id = 'map';
  start = start.split(',');
  lat = start[0];
  long = start[1];
  coords = [lat, long];
  const myMap = new ymaps.Map('map', {
    center: coords,
    zoom,
    // Добавим панель маршрутизации.
    controls: ['routePanelControl'],
  });
  const control = myMap.controls.get('routePanelControl');
  // Зададим состояние панели для построения машрутов.
  control.routePanel.state.set({
    // Тип маршрутизации.
    type: 'bicycle',
    // Выключим возможность задавать пункт отправления в поле ввода.
    // fromEnabled: false,
    // Адрес или координаты пункта отправления.
    // from: 'Москва, Льва Толстого 16',
    // Включим возможность задавать пункт назначения в поле ввода.
    toEnabled: true,
    // Адрес или координаты пункта назначения.
    // to: 'Петербург'
  });

  // myMap.events.add('click', function (e) {
  //     coords = e.get('coords');
  //     save();
  // });

  // Зададим опции панели для построения машрутов.
  control.routePanel.options.set({
    // Запрещаем показ кнопки, позволяющей менять местами начальную и конечную точки маршрута.
    allowSwitch: false,
    // Включим определение адреса по координатам клика.
    // Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
    reverseGeocoding: true,
    // Зададим виды маршрутизации, которые будут доступны пользователям для выбора.
    types: { bicycle: true },
  });

  // Создаем кнопку, с помощью которой пользователи смогут менять местами начальную и конечную точки маршрута.
  const switchPointsButton = new ymaps.control.Button({
    data: { content: 'Поменять местами', title: 'Поменять точки местами' },
    options: { selectOnClick: false, maxWidth: 160 },
  });
    // Объявляем обработчик для кнопки.
  switchPointsButton.events.add('click', () => {
    // Меняет местами начальную и конечную точки маршрута.
    control.routePanel.switchPoints();
  });
  const submitpath = new ymaps.control.Button({
    data: { content: 'Отправить', title: 'Отправить маршрут' },
  });

  submitpath.events.add('click', () => {
    const coordinates = document.getElementById('coordinates');
    console.log([control.routePanel.state._data.from, control.routePanel.state._data.to, coordinates.value]);
    control.routePanel.state.set({
      // Тип маршрутизации.
      type: 'bicycle',
      from: '',
      to: '',
      // Выключим возможность задавать пункт отправления в поле ввода.
      // fromEnabled: false,
      // Адрес или координаты пункта отправления.
      // from: 'Москва, Льва Толстого 16',
      // Включим возможность задавать пункт назначения в поле ввода.
      toEnabled: true,
      // Адрес или координаты пункта назначения.
      // to: 'Петербург'
    });
    coordinates.value = '';
  });

  myMap.controls.add(switchPointsButton);
  myMap.controls.add(submitpath);

  // save();
});
