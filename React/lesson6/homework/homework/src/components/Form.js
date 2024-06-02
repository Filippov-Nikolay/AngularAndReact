import React from 'react';

export class Form extends React.Component {
    render() {
        return (
            <form className='form' get='POST'>
                <div className='form__item'>
                    <label htmlFor='userId'>User id [5 to 7 characters] : </label>
                    <input name='userId' type='number'/>
                </div>
                <div className='form__item'>
                    <label htmlFor='userPassword'>Password [7 to 12 characters] : </label>
                    <input name='userPassword' type='password'/>
                </div>
                <div className='form__item'>
                    <label htmlFor='userName'>Name [Alphabets characters] : </label>
                    <input name='userName' type='text'/>
                </div>
                <div className='form__item'>
                    <label htmlFor='userAddress'> Address [Alphanumeric characters] : </label>
                    <input name='userAddress' type='text'/>
                </div>
                <div className='form__item'>
                    <label htmlFor='userCountry'> Country [Must select a country] : </label>
                    <select name="userCountry">
                        <option value="">--Please select a country--</option>
                        <option value="United States of America">United States of America</option>
                        <option value="China">China</option>
                        <option value="India">India</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Japan">Japan</option>
                        <option value="Germany">Germany</option>
                        <option value="Indonesia">Indonesia</option>
                    </select>
                </div>
                <div className='form__item'>
                    <label htmlFor='userZIPCode'> ZIP Code [Alphanumeric characters] : </label>
                    <input name='userZIPCode' type='text'/>
                </div>
                <div className='form__item'>
                    <label htmlFor='userEmail'> Email [valid email] : </label>
                    <input name='userEmail' type='email'/>
                </div>
                <div className='form__item'>
                    <label>Sex [Select Male or Female] : </label>
                    <div className='form-radio'>
                        <div className='form-radio__item'>
                            <input id='Male' name='sex' type='radio' checked value='Male' />
                            <label htmlFor='Male'>Male</label>
                        </div>
                        <div className='form-radio__item'>
                            <input id='Female' name='sex' type='radio' value='Female'/>
                            <label htmlFor='Female'>Female</label>
                        </div>
                    </div>
                </div>
                <div className='form__item'>
                    <label>Language [Optional] : </label>
                    <div className='form-checkbox'>
                        <div className='form-checkbox__item'>
                            <input id='Male' name='sex' type='checkbox' value='English' />
                            <label htmlFor='Male'>English</label>
                        </div>
                        <div className='form-checkbox__item'>
                            <input id='Female' name='sex' type='checkbox' value='NonEnglish'/>
                            <label htmlFor='Female'>Non English</label>
                        </div>
                    </div>
                </div>
                <div className='form__item'>
                    <label htmlFor='about'>About [Optional] : </label>
                    <textarea></textarea>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}