export const isAuthenticaded = () => {
    // ir al localstorage y verificamos si esta la clave token
    return localStorage.getItem("token") ? true : false;
}
