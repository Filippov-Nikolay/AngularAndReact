import React from 'react';

const user = {
    name: 'Nikola',
    lastName: 'Tesla',
    dateBirth: '10.07.1856',
    portrait: 'https://visitkarlovac.hr/wp-content/uploads/2018/09/aktualnolight_elementi5642slika1.jpg',
    biography: 'Нико́ла Те́сла — американский инженер и физик-электроник, изобретатель в области электротехники и радиотехники, внёс существенный вклад в развитие электроинженерии. Наиболее известный разработкой современной системы электроснабжения переменного тока.'
  };

export class InfoMan extends React.Component {
    render() {
      return (
        <div className='user'>
          <div className='wrapper'>
            <div className='user__item'>{GetName()}</div>
            <div className='user__item'>{GetLastName()}</div>
          </div>
          <div className='user__item'>{GetDateBirth()}</div>
          <div className='user__item'>
            <img className='user__img' src={GetPortrait()} alt={GetName()}/>
          </div>
          <div className='user__item'>{GetBiography()}</div>
        </div>
      )
    }
}

function GetName() {
  return user.name;
}
function GetLastName() {
  return user.lastName;
}
function GetDateBirth() {
  return user.dateBirth;
}
function GetPortrait() {
  return user.portrait;
}
function GetBiography() {
  return user.biography;
}