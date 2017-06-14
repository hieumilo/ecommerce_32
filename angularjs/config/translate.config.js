var translationsEN = {
    AUTH: {
        // login
        BTN_LOGIN: 'Login',
        LOGIN_TITLE: 'Sign in with your account',
        BTN_LOGIN_FB: 'Sign in with Facebook',
        BTN_LOGIN_GG: 'Sign in with Google',
        BTN_LOGIN_TT: 'Sign in with Twitter',
        FORGOT_PASSWORD: 'Forgot password?',
        REMEMBER_ME: 'Remember me.',
        // logout
        BTN_LOGOUT: 'Logout',
        // signup
        SIGNUP_TITLE: 'Sign up new account',
        BTN_SIGNUP: 'Sign up',
        NAME: 'Name',
        EMAIL: 'Email',
        PASSWORD: 'Password',
        RE_PASSWORD: 'Re-Password',
        PHONE: 'Phone',
        ADDRESS: 'Address',
        GENDER: 'Gender',
        MALE: 'male',
        FEMALE: 'female',
        // profile
        PROFILE: 'Profile',
    }
};

function TranslateConfig($translateProvider) {
    $translateProvider.translations('en', translationsEN);
    $translateProvider.preferredLanguage('en');
    $translateProvider.fallbackLanguage('en');
}