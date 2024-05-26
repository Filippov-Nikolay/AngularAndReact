import React from 'react';

export class Task2 extends React.Component {
    render() {
        return (
            <div className='club'>
                {GetAboutClub()}
                {GetAchievementsClub()}
                {GetCompositionTeam()}
            </div>
        )
    }
}

const aboutClub = {
    nameClub: 'ФК Динамо Киев',
    city: 'Киев',
    dateFoundationClub: '1927-05-13',
    clubCoatArms: 'https://flag.ua/tmp/images/9c/fed/prevju-fk-dinamo-kiev-10-kh-15-1000x1000-r.jpg'
}
const achievementsClub = {
    medals: ['золото УПЛ 2021', 'серебро УПЛ 2020', 'бронза УПЛ 2018'],
    cups: ['Кубок Украины 2021', 'Суперкубок Украины 2020'],
    goalsScored: 2450
}
const compositionTeam = {
    goalkeeper: ['Георгий Бущан', 'Денис Бойко'],
    defenders: ['Виталий Миколенко', 'Илья Забарный', 'Александр Караваев', 'Томаш Кендзёра'],
    midfielders: ['Сергей Сидорчук', 'Микола Шапаренко', 'Виктор Цыганков', 'Беньямин Вербич'],
    forwards: ['Артем Беседин', 'Владислав Супряга']
}

function GetAboutClub() {
    return (
        <div className='about-club'>
            <div className='about-club__tem'>{aboutClub.nameClub}</div>
            <div className='about-club__tem'>{aboutClub.city}</div>
            <div className='about-club__tem'>{aboutClub.dateFoundationClub}</div>
            <div className='about-club__tem'>
                <img src={aboutClub.clubCoatArms} alt={aboutClub.nameClub}/>
            </div>
        </div>
    )
}
function GetAchievementsClub() {
    return (
        <div className='about-club'>
            <div className='about-club__item'>
                <h2 className='about-club__title'>Медали: </h2>
                <ul className='club-menu'>
                    {achievementsClub.medals.map((medalsItem, index) => (
                        <li class="club-menu__item">
                            <p>{medalsItem}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='about-club__item'>
                <h2 className='about-club__title'>Кубки: </h2>
                <ul className='club-menu'>
                    {achievementsClub.cups.map((cupsItem, index) => (
                        <li class="club-menu__item">
                            <p>{cupsItem}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='about-club__item'>
                <h2 className='about-club__title'>Кол-во голов: </h2>
                <div className='about-club__text'>{achievementsClub.goalsScored}</div>
            </div>
        </div>
    )
}
function GetCompositionTeam() {
    return (
        <div className='about-club'>
            <div className='about-club__item'>
                <h2 className='about-club__title'>Goalkeeper: </h2>
                <ul className='club-menu'>
                    {compositionTeam.goalkeeper.map((goalkeeperItem, index) => (
                        <li class="club-menu__item">
                            <p>{goalkeeperItem}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='about-club__item'>
                <h2 className='about-club__title'>Defenders: </h2>
                <ul className='club-menu'>
                    {compositionTeam.defenders.map((defendersItem, index) => (
                        <li class="club-menu__item">
                            <p>{defendersItem}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='about-club__item'>
                <h2 className='about-club__title'>Midfielders: </h2>
                <ul className='club-menu'>
                    {compositionTeam.midfielders.map((midfieldersItem, index) => (
                        <li class="club-menu__item">
                            <p>{midfieldersItem}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='about-club__item'>
                <h2 className='about-club__title'>Forwards: </h2>
                <ul className='club-menu'>
                    {compositionTeam.forwards.map((forwardsItem, index) => (
                        <li class="club-menu__item">
                            <p>{forwardsItem}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
