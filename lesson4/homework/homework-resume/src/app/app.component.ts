import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NgFor],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    // imgSrc: string = '../assets/Avatar.jpg';
    imgSrc: string = 'https://www.w3schools.com/howto/img_avatar.png';
    imgAlt: string = 'myPhoto';
    name: string = 'Николай';
    lastName: string = 'Филиппов';
    profession: string = 'IT Developer';
    homePhome: string = '+380 98 05 65 970';
    phone: string = '+380 98 05 65 970';
    website: string = 'https://filippov-nikolay.github.io/plusweb/';
    email: string = 'filippovnikolay195@gmail.com';
    github: string = 'https://github.com/Filippov-Nikolay';
    dateOfBirth: string = '27.10.04';
    city: string = 'Odessa';
    sectionContentAboutMe: string = 'Меня зовут Николай. Я начал заниматься программированием еще в 12 лет, и с тех пор эта область стала главной страстью в моей жизни. Мой путь начался с изучения языка программирования C++. После этого я поступил в Академию ШАГ с целью дальнейшего профессионального роста. Однако, из-за переезда, мне пришлось изменить свои планы и продолжить обучение в колледже по направлению информационных технологий. Там я успешно защитил дипломную работу на отлично. В настоящее время я активно развиваюсь, обучаясь в университете ITSTEP и стремясь к новым достижениям в мире IT.';
    skills: string[] = [
        'Верстка HTML5, CSS3 с использованием адаптивной верстки, кросс-браузерной верстки, семантической верстки, верстка сайта с использованием методологии БЭМ.', 
        'PHP, MySQL, phpMyAdmin.', 
        'Графический редактор: Figma.',
        'Инструменты: GitHub.',
        'Основы JavaScript и jQuery.',
        'ООП',
        'C++',
    ];
}
