const maps = document.querySelectorAll('.main-map');

for (let i = 0; i < maps.length; i += 1) {
  ymaps.ready(() => {
    start = '55.751428,37.618876'; // start coordinates
    zoom = 10; // start zoom
    // id = 'map';
    start = start.split(',');
    lat = start[0];
    long = start[1];
    coords = [lat, long];
    const divmap = document.querySelector(`#map${i}`);
    const myMap = new ymaps.Map(`map${i}`, {
      center: coords,
      zoom,
      // Добавим панель маршрутизации.
      controls: ['routePanelControl'],
    });
    const begin = divmap.dataset.from;
    const end = divmap.dataset.to;
    const control = myMap.controls.get('routePanelControl');
    // Зададим состояние панели для построения машрутов.
    control.routePanel.state.set({
      // Тип маршрутизации.
      type: 'bicycle',
      // Выключим возможность задавать пункт отправления в поле ввода.
      fromEnabled: false,
      // Адрес или координаты пункта отправления.
      from: begin,
      // Включим возможность задавать пункт назначения в поле ввода.
      toEnabled: false,
      // Адрес или координаты пункта назначения.
      to: end
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

    // save();
  });
}
