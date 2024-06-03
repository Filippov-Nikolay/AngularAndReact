import React from 'react';

export class Form extends React.Component {
    constructor(props) {
        super(props);

        var userId = props.userIdInput || 0;
        var userPassword = props.userPasswordInput || '';
        var userName = props.userNameInput || '';
        var userAddress = props.userAddressInput || '';
        var userCountry = props.userCountryInput || '';
        var userZIPCode = props.userZIPCodeInput || '';
        var userEmail = props.userEmailInput || '';
        var userSex = props.userSexInput || '';
        var userLanguage = props.userLanguageInput || [];
        var userAbout = props.userAboutInput || '';

        var userIdIsValid = this.validateUserId(userId);
        var userPasswordIsValidate = this.validateUserPassword(userPassword);
        var userNameIsValidate = this.validateUserName(userName);
        var userAddressIsValidate = this.validateUserAddress(userAddress);
        var userCountryIsValidate = this.validateUserCountry(userCountry);
        var userZIPCodeIsValidate = this.validateUserZIPCode(userZIPCode);
        var userEmailIsValidate = this.validateUserEmail(userEmail);
        var userSexIsValidate = this.validateUserSex(userSex);

        this.state = {
            userId: userId,
            userPassword: userPassword,
            userName: userName,
            userAddress: userAddress,
            userCountry: userCountry,
            userZIPCode: userZIPCode,
            userEmail: userEmail,
            userSex: userSex,
            userLanguage: userLanguage,
            userAbout: userAbout,

            userIdIsValid: userIdIsValid,
            userPasswordIsValidate: userPasswordIsValidate,
            userNameIsValidate: userNameIsValidate, 
            userAddressIsValidate: userAddressIsValidate,
            userCountryIsValidate: userCountryIsValidate,
            userZIPCodeIsValidate: userZIPCodeIsValidate,
            userEmailIsValidate: userEmailIsValidate,
            userSexIsValidate: userSexIsValidate
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onUserIdChange = this.onUserIdChange.bind(this);
        this.onUserPasswordChange = this.onUserPasswordChange.bind(this);
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onUserAddressChange = this.onUserAddressChange.bind(this);
        this.onUserCountryChange = this.onUserCountryChange.bind(this);
        this.onUserZIPCodeChange = this.onUserZIPCodeChange.bind(this);
        this.onUserEmailChange = this.onUserEmailChange.bind(this);
        this.onUserSexChange = this.onUserSexChange.bind(this);
        this.onUserLanguageChange = this.onUserLanguageChange.bind(this);
        this.onUserAboutChange = this.onUserAboutChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.userIdIsValid && this.state.userPasswordIsValidate) {
            alert(this.state.userIdIsValid + ' ' + this.state.userId + '\n' +
            this.state.userPasswordIsValidate + ' ' + this.state.userPassword
            );
        }
    }

    validateUserId(userId) {
        return userId >= 5 && userId <= 7;
    }
    validateUserPassword(userPassword) {
        return userPassword.length >= 7 && userPassword.length <= 12;
    }
    validateUserName(userName) {

    }
    validateUserAddress(userAddress) {

    }
    validateUserCountry(userCountry) {

    }
    validateUserZIPCode(userZIPCode) {

    }
    validateUserEmail(userEmail) {

    }
    validateUserSex(userSex) {

    }

    onUserIdChange(e) {
        var val = e.target.value;
        console.log(val);
        var valid = this.validateUserId(val);
        this.setState({userId: val, userIdIsValid: valid});
    }
    onUserPasswordChange(e) {
        var val = e.target.value;
        console.log(val);
        var valid = this.validateUserPassword(val);
        this.setState({userPassword: val, userPasswordIsValidate: valid});
    }
    onUserNameChange(e) {
        var val = e.target.value;
        console.log(val);
        this.setState({userName: val});
    }
    onUserAddressChange(e) {
        var val = e.target.value;
        console.log(val);
        this.setState({userAddress: val});
    }
    onUserCountryChange(e) {
        var val = e.target.value;
        console.log(val);
        this.setState({userCountry: val});
    }
    onUserZIPCodeChange(e) {
        var val = e.target.value;
        console.log(val);
        this.setState({userZIPCode: val});
    }
    onUserEmailChange(e) {
        var val = e.target.value;
        console.log(val);
        this.setState({userEmail: val});
    }
    onUserSexChange(e) {
        var val = e.target.value;
        console.log(val);
        this.setState({userSex: val});
    }
    onUserLanguageChange(e) {
        var val = e.target.value;
        console.log(val);
        var updatedLanguages = [...this.state.userLanguage];
        if (updatedLanguages.includes(val)) {
            updatedLanguages = updatedLanguages.filter(language => language !== val);
        } else {
            updatedLanguages.push(val);
        }
        this.setState({userLanguage: updatedLanguages});
    }
    onUserAboutChange(e) {
        var val = e.target.value;
        console.log(val);
        this.setState({userAbout: val});
    }



    render() {
        return (
            <form className='form' get='POST' onSubmit={this.handleSubmit}>
                <div className='form__item'>
                    <label htmlFor='userId'>User id [5 to 7 characters] : </label>
                    <input name='userId' type='number' value={this.state.userId} onChange={this.onUserIdChange}/>
                </div>
                <div className='form__item'>
                    <label htmlFor='userPassword'>Password [7 to 12 characters] : </label>
                    <input name='userPassword' type='password' value={this.state.userPassword} onChange={this.onUserPasswordChange}/>
                </div>
                <div className='form__item'>
                    <label htmlFor='userName'>Name [Alphabets characters] : </label>
                    <input name='userName' type='text' value={this.state.UserName} onChange={this.onUserNameChange}/>
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