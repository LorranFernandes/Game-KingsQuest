export function getWeaponType(weaponName) {
    if (/bow/i.test(weaponName)) {
        return 'bow';
    } else if (/sword/i.test(weaponName)) {
        return 'sword';
    } else if (/dagger/i.test(weaponName)) {
        return 'dagger';
    } else {
        return 'unknown';
    }
}