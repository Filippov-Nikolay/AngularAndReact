import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { ProductComponent } from '../product/product.component';

export class Product {
    private imgSrc: string = '';
    private imgAlt: string = 'office';
    private title: string = 'Оргтехника';
    private isCenter: boolean = false;
    private addInfo: string[] = [];
  
    constructor(imgSrc: string, imgAlt: string, title: string, isCenter: boolean, addInfo: string[]) {
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
        this.title = title;
        this.isCenter = isCenter;
        this.addInfo = addInfo;
    }
  
    GetImgSrc() { return this.imgSrc; }
    GetImgAlt() { return this.imgAlt; }
    GetTitle() { return this.title; }
    GetIsCenter() { return this.isCenter; }
    GetAddInfo() { return this.addInfo }
  
    SetImgSrc(imgSrc: string) { this.imgSrc = imgSrc; }
    SetImgAlt(imgAlt: string) { this.imgAlt = imgAlt; }
    SetTitle(title: string) { this.title = title; }
    SetIsCenter(isCenter: boolean) { this.isCenter = isCenter; }
    SetAddInfo(addInfo: string[]) { this.addInfo = addInfo; }
  }

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [NavigationComponent, ProductComponent, NgFor, NgIf],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent {
  products: Product[] = [
      new Product(
          'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/noutbuki.png',
          'laptops',
          'Ноутбуки',
          true,
          []
      ),
      new Product(
          'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/kompyutery.png',
          'computers',
          'Компьютеры',
          true,
          []
      ),
      new Product(
          'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/monitory.png',
          'screens',
          'Мониторы',
          true,
          []
      ),
      new Product(
          'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/tovary-dlya-gejmerov.png',
          'gaming',
          'Gaming',
          true,
          []
      ),
      new Product(
          'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/planshety.png',
          'tablets',
          'Планшеты',
          true,
          []
      ),
      new Product(
          'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/kabeli-i-perekhodniki.png',
          'CablesAndAdapters',
          'Кабели и переходники',
          true,
          []
      ),
      new Product(
          'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/kompyuternye-komplektuyushchie.png',
          'computerAccessories',
          'Компьютерные комплектующие',
          false,
          ['SSD', 'Системы охлаждения', 'Видеокарты', 'ОЗУ', 'Процессоры', 'Материнские платы', 'Жесткие диски и дисковые массивы', 'Блоки питания']
      ),
      new Product(
          'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/setevoe-oborudovanie.png',
          'networkEquipment',
          'Сетевое оборудование',
          false,
          ['Маршрутизаторы', 'Коммутаторы', 'Сетевые адаптеры', 'Пассивное сетевое оборудование', 'Беспроводные точки доступа', 'Ретранслятор WI-FI', 'Патч-корды']
      ),
      new Product(
          'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/naushniki-i-aksessuary.png',
          'headphonesAndAccessories',
          'Наушники и аксессуары',
          false,
          ['Наушники', 'TWS', 'Игровые гарнитуры', 'Вакуумные наушники', 'Наушники вкладыши', 'Накладные наушники', 'Полноразмерные наушники', 'Усилители для наушников', 'Аксессуары для наушников']
      ),
      new Product(
          'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/klaviatury-i-myshi.png',
          'keyboardAndMouse',
          'Клавиатуры и мыши',
          false,
          ['Компьютерные мыши', 'Игровые поверхности', 'Клавиатуры', 'Комплект: клавиатура и мышь', 'Аксессуары для клавиатур и мышек']
      ),
      new Product(
          'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/aksessuari-dlia-elektronyky.png',
          'accessoriesForElectronics',
          'Аксессуары для электроники',
          false,
          ['Флеш память USD', 'Хабы и кадридеры', 'Аксессуары для ПК и ноутбуков', 'Сетевые фильтры, адаптеры и удлинители', 'Чехлы для планшетов', 'Сумки, рюкзаки и чехлы для ноутбуков', 'Чистящие средства']
      ),
      new Product(
          'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/ofisnaya-tekhnika.png',
          'office',
          'Оргтехника',
          false,
          ['МФУ/Принтеры', 'Сканеры', 'Расходные материалы для принтеров', 'Доски, флипчарты']
      )
  ];
}
